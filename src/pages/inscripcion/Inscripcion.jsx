import Background from "@/components/ui/Background";

import { useState, useEffect } from "react";

import FormContainer from "@/components/ui/FormContainer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import SectionHeader from "@/components/ui/SectionHeader";
import useAuth from "@/auth/useAuth";

function Inscripcion() {

  const {user} = useAuth();
  
  const [planes, setPlanes] = useState([]);
  const [idPlan, setIdPlan] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/planes")
      .then((res) => res.json())
      .then((data) => setPlanes(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = async () => {

  try {

    const response = await fetch(
      "http://localhost:3000/api/v1/inscripciones",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: user.email,
          id_plan: Number(idPlan),
          metodo_pago: metodoPago,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    alert("Inscripción realizada correctamente");

  } catch (error) {

    alert(error.message);

  }
};

  return (
    <Background>
      <Card className="w-full max-w-3xl">

        <SectionHeader
          title="Inscribite Ahora"
          subtitle="Completá el formulario para comenzar tu transformación."
          align="center"
          light
        />

        <FormContainer>

          <select
            value={idPlan}
            onChange={(e) => setIdPlan(e.target.value)}
            className="w-full p-3 rounded bg-zinc-800 text-white"
          >
            <option value="">
              Seleccione un plan
            </option>

            {planes.map((plan) => (
              <option
                key={plan.id_plan}
                value={plan.id_plan}
              >
                {plan.nombre} - ${plan.precio}
              </option>
            ))}
          </select>

          <select
          value={metodoPago}
          onChange={(e) => setMetodoPago(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white"
        >
          <option value="">
            Seleccione un método de pago
          </option>

          <option value="efectivo">
            Efectivo
          </option>

          <option value="debito">
            Débito
          </option>

          <option value="credito">
            Crédito
          </option>

          <option value="transferencia">
            Transferencia
          </option>
        </select>

          <div className="md:col-span-2">
            <Button
              variant="primary"
              onClick={handleSubmit}
            >
              Completar inscripción
            </Button>
          </div>

        </FormContainer>
      </Card>
    </Background>
  );
}

export default Inscripcion;