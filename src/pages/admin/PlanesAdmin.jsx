import { useEffect, useState } from "react";

export default function PlanesAdmin() {
  const [planes, setPlanes] = useState([]);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [duracionDias, setDuracionDias] = useState("");

  const [planEditando, setPlanEditando] = useState(null);

  const cargarPlanes = () => {
    fetch("http://localhost:3000/api/v1/planes")
      .then((res) => res.json())
      .then((data) => setPlanes(data))
      .catch(console.error);
  };

  useEffect(() => {
    cargarPlanes();
  }, []);

  const limpiarFormulario = () => {
    setNombre("");
    setDescripcion("");
    setPrecio("");
    setDuracionDias("");
    setPlanEditando(null);
  };

  const crearPlan = async () => {

  try {

    const token = JSON.parse(
      localStorage.getItem("redgym.session")
    )?.token;

    const response = await fetch(
      "http://localhost:3000/api/v1/planes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          nombre,
          descripcion,
          precio,
          duracion_dias: duracionDias
        })
      }
    );

    const data = await response.json();

    console.log("Respuesta:", data);

    cargarPlanes();

  } catch (error) {

    console.error(error);

  }

};

  const editarPlan = (plan) => {
    setPlanEditando(plan.id_plan);

    setNombre(plan.nombre);
    setDescripcion(plan.descripcion);
    setPrecio(plan.precio);
    setDuracionDias(plan.duracion_dias);
  };

  const guardarEdicion = async () => {
    try {

      const token = JSON.parse(
      localStorage.getItem("redgym.session")
    )?.token;

    console.log("TOKEN", token);
      const response = await fetch(
  `http://localhost:3000/api/v1/planes/${planEditando}`,
  {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      nombre,
      descripcion,
      precio,
      duracion_dias: duracionDias
    })
  }
);

     const data = await response.json();

    console.log("Respuesta:", data);

    cargarPlanes();

  } catch (error) {

    console.error(error);

  }

  };

  const desactivarPlan = async (id) => {
    try {

      const token = JSON.parse(
    localStorage.getItem("redgym.session")
    )?.token;

      await fetch(
        `http://localhost:3000/api/v1/planes/${id}/desactivar`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      cargarPlanes();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">
        Gestión de Planes
      </h1>

      <div className="bg-zinc-950 border border-zinc-800 rounded p-4 mb-6">
        <h2 className="text-xl font-bold mb-4">
          {planEditando ? "Editar Plan" : "Crear Plan"}
        </h2>

        <div className="grid gap-3">
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            className="p-3 rounded bg-zinc-900"
          />

          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción"
            className="p-3 rounded bg-zinc-900"
          />

          <input
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="Precio"
            className="p-3 rounded bg-zinc-900"
          />

          <input
            value={duracionDias}
            onChange={(e) => setDuracionDias(e.target.value)}
            placeholder="Duración en días"
            className="p-3 rounded bg-zinc-900"
          />

          <button
            onClick={
              planEditando
                ? guardarEdicion
                : crearPlan
            }
            className="bg-red-600 p-3 rounded"
          >
            {planEditando
              ? "Guardar Cambios"
              : "Crear Plan"}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {planes.map((plan) => (
          <div
            key={plan.id_plan}
            className="border border-zinc-800 rounded p-4 bg-zinc-950"
          >
            <h2 className="font-bold text-xl">
              {plan.nombre}
            </h2>

            <p>${plan.precio}</p>

            <p>{plan.descripcion}</p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => editarPlan(plan)}
                className="bg-blue-700 px-4 py-2 rounded"
              >
                Editar
              </button>

              <button
                onClick={() =>
                  desactivarPlan(plan.id_plan)
                }
                className="bg-red-700 px-4 py-2 rounded"
              >
                Desactivar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}