import { Link } from "react-router-dom";

import AuthLayout from "@/pages/auth/AuthLayout";
import AuthForm from "@/pages/auth/AuthForm";

function Login() {
  return (
    <AuthLayout
      title="¡BIENVENIDO/A!"
      subtitle="
        Ingresá a tu cuenta para ver tus rutinas,
        seguimiento de progreso y mucho más.
      "
    >

      <Link
        to="/"
        className="
          text-gray-300
          hover:text-white
          transition
          inline-flex
          items-center
          mb-12
        "
      >
        ← Volver al inicio
      </Link>

      <AuthForm
        title="INICIAR SESIÓN"

        subtitle="
          Ingresá tus datos para acceder
          a la cuenta
        "

        fields={[
          {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Ingresá tu email",
          },

          {
            name: "password",
            label: "Contraseña",
            type: "password",
            placeholder: "Ingresá tu contraseña",
          },
        ]}

        buttonText="Ingresar"

        bottomText="No tenés cuenta?"

        bottomLinkText="Registrate ahora"

        bottomLinkTo="/register"

        isLogin
      />

    </AuthLayout>
  );
}

export default Login;