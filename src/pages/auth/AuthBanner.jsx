import gymImg from "@/assets/FondoGym.png";

function AuthBanner({ title, subtitle }) {
  return (
    <div
      className="
        hidden
        md:flex
        w-1/2
        bg-cover
        bg-center
        relative
        items-center
        justify-center
        px-16
      "
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.65),
            rgba(0,0,0,0.65)
          ),
          url(${gymImg})
        `,
      }}
    >

      <div className="absolute inset-0 bg-red-900/20" />

      <div className="relative z-10 text-white max-w-md">

        <h1 className="text-5xl font-light mb-8">
          {title}
        </h1>

        <p
          className="
            text-2xl
            text-gray-300
            leading-relaxed
          "
        >
          {subtitle}
        </p>

      </div>

    </div>
  );
}

export default AuthBanner;