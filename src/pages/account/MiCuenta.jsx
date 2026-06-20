import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import useAuth from "@/auth/useAuth";
import Background from "@/components/ui/Background";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

function InfoRow({ label, value }) {
  return (
    <div className="border-b border-white/10 py-3 last:border-b-0">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="mt-1 font-medium text-white">{value || "Sin cargar"}</p>
    </div>
  );
}

function MiCuenta() {
  const { isAdmin, user } = useAuth();
  const [cuenta, setCuenta] = useState(null);

useEffect(() => {

  const token = JSON.parse(
    localStorage.getItem("redgym.session")
  )?.token;

  fetch(
    "http://localhost:3000/api/v1/usuarios/mi-cuenta",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
    .then((res) => res.json())
    .then((data) => setCuenta(data))
    .catch(console.error);

}, []);

const inscription = cuenta ?? {};

  return (
    <Background>
      <div className="w-full max-w-5xl px-6 pb-12 pt-28">
        <Card className="w-full">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-start md:justify-between">
            <div>
              <span className="inline-flex rounded bg-red-500/15 px-3 py-1 text-sm font-semibold text-red-300">
                {inscription.status ?? "Pendiente"}
              </span>

              <h1 className="mt-4 text-4xl font-bold text-white">Mi cuenta</h1>

              <p className="mt-3 max-w-2xl text-gray-300">
                Consulta tus datos personales y el estado actual de tu inscripcion.
              </p>
            </div>

            {isAdmin && (
              <Link to="/admin">
                <Button variant="primary">Abrir panel admin</Button>
              </Link>
            )}
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <section>
              <h2 className="text-2xl font-semibold text-white">Datos personales</h2>

              <div className="mt-4">
                <InfoRow label="Nombre" value={`${inscription.nombre || ""} ${inscription.apellido || ""}`} />
                <InfoRow label="Email" value={inscription.email} />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">Inscripcion</h2>

              <div className="mt-4">
                <InfoRow
                  label="Estado"
                  value={inscription.estado_inscripcion}
                />

                <InfoRow
                  label="Plan"
                  value={inscription.plan}
                />

                <InfoRow
                  label="Estado de pago"
                  value={inscription.estado_pago}
                />

                <InfoRow
                  label="Método de pago"
                  value={inscription.metodo_pago}
                />

                <InfoRow
                  label="Fecha de vencimiento"
                  value={
                    inscription.fecha_vencimiento
                      ? new Date(
                          inscription.fecha_vencimiento
                        ).toLocaleDateString()
                      : "-"
                  }
                />
              </div>
            </section>
          </div>
        </Card>
      </div>
    </Background>
  );
}

export default MiCuenta;
