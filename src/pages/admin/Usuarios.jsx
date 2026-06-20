import { useEffect, useState } from "react";

export default function Usuarios() {

  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("http://localhost:3000/api/v1/usuarios")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
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
        Usuarios
      </h1>

      <div className="rounded border border-zinc-800 bg-zinc-950 p-6">

        {loading ? (

          <p className="text-zinc-300">
            Cargando usuarios...
          </p>

        ) : (

          <table className="w-full text-left text-white">

            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-3">Nombre</th>
                <th className="py-3">Email</th>
                <th className="py-3">Rol</th>
              </tr>
            </thead>

            <tbody>

              {usuarios.map((usuario) => (

                <tr
                  key={usuario.id_usuario}
                  className="border-b border-zinc-900"
                >
                  <td className="py-3">
                    {usuario.nombre} {usuario.apellido}
                  </td>

                  <td className="py-3">
                    {usuario.email}
                  </td>

                  <td className="py-3">
                    {usuario.rol}
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