import { useParams, Link } from "react-router-dom";

import { plans } from "@/data/plans";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Background from "@/components/ui/Background";

function PlanDetail() {

  const { id } = useParams();

  const plan = plans.find(
    (p) => p.id === Number(id)
  );

  if (!plan) {
    return <h1>Plan no encontrado</h1>;
  }

  return (
    <Background>

      <Card className="max-w-2xl w-full">

        <h1 className="text-white text-4xl font-bold">
          {plan.name}
        </h1>

        <p className="text-red-500 text-3xl mt-4">
          {plan.price}
        </p>

        <p className="text-gray-300 mt-6">
          {plan.description}
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