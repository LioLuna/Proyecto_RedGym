import { useEffect, useState } from "react";

export default function Pagos() {

  const [pagos, setPagos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("http://localhost:3000/api/v1/pagos")
      .then((res) => res.json())
      .then((data) => {
        setPagos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });

  }, []);


  const actualizarEstado = async (
  id,
  estado
) => {

  try {

    const token = JSON.parse(
      localStorage.getItem("redgym.session")
    )?.token;

    await fetch(
      `http://localhost:3000/api/v1/pagos/${id}/estado`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          estado
        })
      }
    );

    setPagos((prev) =>
      prev.map((pago) =>
        pago.id_pago === id
          ? { ...pago, estado }
          : pago
      )
    );

  } catch (error) {

    console.error(error);

  }

};


  return (
    <section>

      <h1 className="text-3xl font-bold mb-6">
        Pagos
      </h1>

      <div className="rounded border border-zinc-800 bg-zinc-950 p-6">

        {loading ? (

          <p className="text-zinc-300">
            Cargando pagos...
          </p>

        ) : (

          <table className="w-full text-left text-white">

            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-3">Usuario</th>
                <th className="py-3">Plan</th>
                <th className="py-3">Monto</th>
                <th className="py-3">Método</th>
                <th className="py-3">Estado</th>
                <th className="py-3">Acciones</th>
              </tr>
            </thead>

            <tbody>

              {pagos.map((pago) => (

                <tr
                  key={pago.id_pago}
                  className="border-b border-zinc-900"
                >
                  <td className="py-3">{pago.usuario}</td>
                  <td className="py-3">{pago.plan}</td>
                  <td className="py-3">${pago.monto}</td>
                  <td className="py-3">{pago.metodo_pago}</td>
                  <td className="py-3">{pago.estado}</td>
                  <td className="py-3">
                    {pago.estado === "pendiente" && (

                      <button
                        onClick={() =>
                          actualizarEstado(
                            pago.id_pago,
                            "aprobado"
                          )
                        }
                        className="bg-green-600 px-3 py-1 rounded"
                      >
                        Marcar como pagado
                      </button>

                    )}

                  </td>
                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </section>
  );
}