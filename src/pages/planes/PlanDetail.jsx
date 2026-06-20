import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Background from "@/components/ui/Background";

function PlanDetail() {

  const { id } = useParams();

  const [plan, setPlan] = useState(null);

  useEffect(() => {

    fetch(
      `http://localhost:3000/api/v1/planes/${id}`
    )
      .then((res) => res.json())
      .then((data) => setPlan(data))
      .catch((error) => console.error(error));

  }, [id]);

  if (!plan) {
    return (
      <Background>
        <h1 className="text-white">
          Cargando...
        </h1>
      </Background>
    );
  }

  return (
    <Background>

      <Card className="max-w-2xl w-full">

        <h1 className="text-white text-4xl font-bold">
          {plan.nombre}
        </h1>

        <p className="text-red-500 text-3xl mt-4">
          ${plan.precio}
        </p>

        <p className="text-gray-300 mt-6">
          {plan.descripcion}
        </p>

        <Link to="/inscripcion">

          <Button variant="primary">
            Inscribirme
          </Button>

        </Link>

      </Card>

    </Background>
  );
}

export default PlanDetail;