import AuthBanner from "./AuthBanner";

function AuthLayout({
  children,
  title,
  subtitle,
}) {
  return (
    <section className="min-h-screen flex bg-black">

      <AuthBanner
        title={title}
        subtitle={subtitle}
      />

      <div
        className="
          w-full
          md:w-1/2
          flex
          items-center
          justify-center
          px-8
          py-12
        "
      >

        <div className="w-full max-w-md">
          {children}
        </div>

      </div>

    </section>
  );
}

export default AuthLayout;