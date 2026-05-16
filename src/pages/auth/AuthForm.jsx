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
}) {
  return (
    <>

      {/* Tabs */}

      <div className="flex justify-between mb-10">

        <Link
          to="/login"
          className={
            isLogin
              ? "text-red-500 text-lg font-semibold"
              : "text-white text-lg"
          }
        >
          Iniciar Sesión
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

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-white text-4xl font-light">
          {title}
        </h2>

        <p className="text-gray-400 mt-2">
          {subtitle}
        </p>

      </div>

      {/* Form */}

      <form className="space-y-5">

        {fields.map((field) => (

          <div key={field.name}>

            <label
              className="
                text-white
                block
                mb-2
              "
            >
              {field.label}
            </label>

            <Input
              type={field.type}
              placeholder={field.placeholder}
            />

          </div>

        ))}

        {/* Terms */}

        {!isLogin && (

          <div className="flex items-start gap-2">

            <input
              type="checkbox"
              className="mt-1"
            />

            <p className="text-gray-400 text-sm">

              Acepto los{" "}

              <span className="text-red-500">
                términos y condiciones
              </span>

            </p>

          </div>

        )}

        {/* Button */}

        <Button
          variant="primary"
          className="w-full"
        >
          {buttonText}
        </Button>

      </form>

      {/* Bottom */}

      <p
        className="
          text-gray-400
          text-center
          mt-8
        "
      >
        {bottomText}{" "}

        <Link
          to={bottomLinkTo}
          className="text-red-500"
        >
          {bottomLinkText}
        </Link>

      </p>

    </>
  );
}

export default AuthForm;