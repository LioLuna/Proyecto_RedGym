import { plans } from "@/data/plans";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Background from "@/components/ui/Background";

import { Link } from "react-router-dom";

function Planes() {
  return (
    <Background>

      <div
        className="
          grid
          md:grid-cols-3
          gap-8
          max-w-6xl
          mx-auto
          px-6
        "
      >

        {plans.map((plan) => (

          <Card key={plan.id}>

            <h2 className="text-white text-2xl font-bold">
              {plan.name}
            </h2>

            <p className="text-red-500 text-3xl mt-4">
              {plan.price}
            </p>

            <p className="text-gray-300 mt-4">
              {plan.description}
            </p>

            <Link to={`/plan/${plan.id}`}>

              <Button variant="primary">
                Ver plan
              </Button>

            </Link>

          </Card>

        ))}

      </div>

    </Background>
  );
}

export default Planes;