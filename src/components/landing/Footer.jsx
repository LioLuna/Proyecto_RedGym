function Footer() {

  const footerSections = [
    {
      title: "Navegación",

      items: [
        "Inicio",
        "Servicios",
        "FAQ",
      ],
    },

    {
      title: "Contacto",

      items: [
        "Email: redgym@gmail.com",
        "Tel: +54 3516218917",
        "Córdoba, Argentina",
      ],
    },
  ];

  return (
    <footer className="bg-black text-gray-400 py-10 px-8" id="contacto">

      <div
        className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-3
          gap-8
        "
      >

        {/* Logo */}

        <div>

          <h3
            className="
              text-white
              text-xl
              font-bold
              mb-2
            "
          >
            Red
            <span className="text-red-500">
              Gym
            </span>
          </h3>

          <p className="text-sm">
            Transformá tu cuerpo y tu mente
            con el mejor entrenamiento.
          </p>

        </div>


        {footerSections.map((section) => (

          <div key={section.title}>

            <h4
              className="
                text-white
                font-semibold
                mb-2
              "
            >
              {section.title}
            </h4>

            <ul className="space-y-1 text-sm">

              {section.items.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}

            </ul>

          </div>

        ))}

      </div>


      <div
        className="
          border-t
          border-gray-800
          mt-8
          pt-6
          text-center
          text-sm
        "
      >
        © 2026 RedGym.
        Todos los derechos reservados.
      </div>

    </footer>
  );
}

export default Footer;