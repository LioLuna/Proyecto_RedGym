import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Background from "@/components/ui/Background";

function Planes() {

  const [planes, setPlanes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("http://localhost:3000/api/v1/planes")
      .then((res) => res.json())
      .then((data) => {
        setPlanes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return (
      <Background>
        <h1 className="text-white text-center">
          Cargando planes...
        </h1>
      </Background>
    );
  }

  return (
    <Background>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

        {planes.map((plan) => (

          <Card key={plan.id_plan}>

            <h2 className="text-white text-2xl font-bold">
              {plan.nombre}
            </h2>

            <p className="text-red-500 text-3xl mt-4">
              ${plan.precio}
            </p>

            <p className="text-gray-300 mt-4">
              {plan.descripcion}
            </p>

            <Link to={`/plan/${plan.id_plan}`}>

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