import { useEffect, useState } from "react";

export default function Inscripciones() {

  const [inscripciones, setInscripciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("http://localhost:3000/api/v1/inscripciones")
      .then((res) => res.json())
      .then((data) => {
        setInscripciones(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });

  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">
        Inscripciones
      </h1>

      <div className="rounded border border-zinc-800 bg-zinc-950 p-6">

        {loading ? (

          <p className="text-zinc-300">
            Cargando inscripciones...
          </p>

        ) : (

          <table className="w-full text-left text-white">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-3">Usuario</th>
                <th className="py-3">Email</th>
                <th className="py-3">Plan</th>
                <th className="py-3">Estado</th>
              </tr>
            </thead>

            <tbody>

              {inscripciones.map((inscripcion) => (

                <tr
                  key={inscripcion.id_inscripcion}
                  className="border-b border-zinc-900"
                >
                  <td className="py-3">
                    {inscripcion.usuario}
                  </td>

                  <td className="py-3">
                    {inscripcion.email}
                  </td>

                  <td className="py-3">
                    {inscripcion.plan}
                  </td>

                  <td className="py-3">
                    {inscripcion.estado}
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