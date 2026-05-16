import { Link } from "react-router-dom";

import Background from "@/components/ui/Background";
import Button from "@/components/ui/Button";

function Error() {
  return (
    <Background>

      <div
        className="
          text-center
          text-white
          px-6
        "
      >

        {/* Code */}

        <h1
          className="
            text-8xl
            md:text-9xl
            font-bold
            text-red-500
          "
        >
          404
        </h1>

        {/* Title */}

        <h2
          className="
            text-3xl
            md:text-5xl
            font-semibold
            mt-6
          "
        >
          Página no encontrada
        </h2>

        {/* Description */}

        <p
          className="
            text-gray-300
            mt-6
            max-w-2xl
            mx-auto
            text-lg
          "
        >
          La página que intentás visitar no existe
          o fue movida dentro de RedGym.
        </p>

        {/* Buttons */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-center
            gap-4
            mt-10
          "
        >

          <Link to="/">

            <Button variant="primary">
              Volver al inicio
            </Button>

          </Link>

          <Link to="/planes">

            <Button variant="outline">
              Ver planes
            </Button>

          </Link>

        </div>

      </div>

    </Background>
  );
}

export default Error;