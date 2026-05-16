import { Link } from "react-router-dom";

import AuthLayout from "@/pages/auth/AuthLayout";
import AuthForm from "@/pages/auth/AuthForm";

function Register() {
  return (
    <AuthLayout
      title="¡BIENVENIDO/A!"
      subtitle="
        Creá tu cuenta y empezá a transformar
        tu cuerpo junto a RedGym.
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
        title="CREAR CUENTA"

        subtitle="
          Completá tus datos para unirte
          a RedGym
        "

        fields={[
          {
            name: "name",
            label: "Nombre completo",
            type: "text",
            placeholder: "Ingresá tu nombre",
          },

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

          {
            name: "confirmPassword",
            label: "Confirmar contraseña",
            type: "password",
            placeholder: "Confirmá tu contraseña",
          },
        ]}

        buttonText="Crear cuenta"

        bottomText="Ya tenés cuenta?"

        bottomLinkText="Inicia sesión"

        bottomLinkTo="/login"
      />

    </AuthLayout>
  );
}

export default Register;