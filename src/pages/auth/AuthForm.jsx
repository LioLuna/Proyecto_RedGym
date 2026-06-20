import { Link } from "react-router-dom";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

function AuthForm({
  title,
  subtitle,
  fields,
  buttonText,
  bottomText,
  bottomLinkText,
  bottomLinkTo,
  isLogin,
  onSubmit,
  error,
  loading = false,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!onSubmit) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    values.termsAccepted = formData.get("termsAccepted") === "on";
    onSubmit(values);
  };

  return (
    <>
      <div className="flex justify-between mb-10">
        <Link
          to="/login"
          className={
            isLogin
              ? "text-red-500 text-lg font-semibold"
              : "text-white text-lg"
          }
        >
          Iniciar Sesion
        </Link>

        <Link
          to="/register"
          className={
            !isLogin
              ? "text-red-500 text-lg font-semibold"
              : "text-white text-lg"
          }
        >
          Registrarse
        </Link>
      </div>

      <div className="mb-8">
        <h2 className="text-white text-4xl font-light">{title}</h2>

        <p className="text-gray-400 mt-2">{subtitle}</p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            <label className="text-white block mb-2">{field.label}</label>

            <Input
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              required={field.required ?? true}
            />
          </div>
        ))}

        {!isLogin && (
          <div className="flex items-start gap-2">
            <input
              name="termsAccepted"
              type="checkbox"
              className="mt-1"
              required
            />

            <p className="text-gray-400 text-sm">
              Acepto los <span className="text-red-500">terminos y condiciones</span>
            </p>
          </div>
        )}

        {error && (
          <p className="rounded border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </p>
        )}

        <Button type="submit" variant="primary" className="w-full" disabled={loading}>
          {loading ? "Procesando..." : buttonText}
        </Button>
      </form>

      <p className="text-gray-400 text-center mt-8">
        {bottomText}{" "}
        <Link to={bottomLinkTo} className="text-red-500">
          {bottomLinkText}
        </Link>
      </p>
    </>
  );
}

export default AuthForm;
