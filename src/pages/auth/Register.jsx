import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "@/auth/useAuth";
import AuthLayout from "@/pages/auth/AuthLayout";
import AuthForm from "@/pages/auth/AuthForm";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setError("");

    if (values.password !== values.confirmPassword) {
      setError("Las contrasenas no coinciden");
      return;
    }

    setLoading(true);

    try {
      await register(values);
      navigate("/login");
    } catch (err) {
      setError(err.message ?? "No pudimos crear la cuenta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Bienvenido/a"
      subtitle="Crea tu cuenta y empeza a transformar tu cuerpo junto a RedGym."
    >
      <Link
        to="/"
        className="text-gray-300 hover:text-white transition inline-flex items-center mb-12"
      >
        Volver al inicio
      </Link>

      <AuthForm
        title="CREAR CUENTA"
        subtitle="Completa tus datos para unirte a RedGym"
        fields={[
          {
            name: "nombre",
            label: "Nombre",
            type: "text",
            placeholder: "Ingrese su nombre",
          },
          {
            name: "apellido",
            label: "Apellido",
            type: "text",
            placeholder: "Ingrese su apellido",
          },
          {
            name: "telefono",
            label: "Teléfono",
            type: "tel",
            placeholder: "Ingrese su numero de teléfono",
          },
          {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Ingrese su Email",
          },
          {
            name: "password",
            label: "Contraseña",
            type: "password",
            placeholder: "Ingrese su contraseña",
          },
          {
            name: "confirmPassword",
            label: "Confirmar contraseña",
            type: "password",
            placeholder: "Confirme su contraseña",
          },
        ]}
        buttonText="Crear cuenta"
        bottomText="Ya tenes cuenta?"
        bottomLinkText="Inicia sesion"
        bottomLinkTo="/login"
        error={error}
        loading={loading}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
}

export default Register;
