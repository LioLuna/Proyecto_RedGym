import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useAuth from "@/auth/useAuth";
import AuthLayout from "@/pages/auth/AuthLayout";
import AuthForm from "@/pages/auth/AuthForm";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setError("");
    setLoading(true);

    try {
      const session = await login(values);
      const requestedPath = location.state?.from?.pathname;
      const redirectTo =
        session.user.role === "admin"
          ? requestedPath?.startsWith("/admin")
            ? requestedPath
            : "/admin"
          : requestedPath && !requestedPath.startsWith("/admin")
            ? requestedPath
            : "/mi-cuenta";

      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message ?? "No pudimos iniciar sesion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Bienvenido/a"
      subtitle="Ingresa a tu cuenta para ver tu estado de inscripcion y tus datos."
    >
      <Link
        to="/"
        className="text-gray-300 hover:text-white transition inline-flex items-center mb-12"
      >
        Volver al inicio
      </Link>

      <AuthForm
        title="INICIAR SESION"
        subtitle="Ingresa tus datos para acceder a la cuenta"
        fields={[
          {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Ingresa tu email",
            autoComplete: "email",
          },
          {
            name: "password",
            label: "Contraseña",
            type: "password",
            placeholder: "Ingresa tu contraseña",
            autoComplete: "current-password",
          },
        ]}
        buttonText="Ingresar"
        bottomText="No tenes cuenta?"
        bottomLinkText="Registrate ahora"
        bottomLinkTo="/register"
        error={error}
        loading={loading}
        onSubmit={handleSubmit}
        isLogin
      />
    </AuthLayout>
  );
}

export default Login;
