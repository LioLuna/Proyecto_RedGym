import gymImg from "@/assets/FondoGym.png";

function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${gymImg})`
      }}
    >
      <div className="max-w-4xl px-16 md:px-24">
        
        <h1 className="text-white text-5xl md:text-6xl lg:text-6xl font-bold leading-none">
          TU PROGRESO ES <br/>
          <span className="text-red-500">NUESTRO COMPROMISO</span>
        </h1>

        <p className="text-gray-300 mt-6 text-lg max-w-wl">
          Unite a RedGym y transformá tu vida. Equipamiento de primera, 
          entrenadores certificados y el mejor ambiente para alcanzar tus metas.
        </p>

        <button className="mt-6 text-red-500 border border-red-500 px-6 py-2 rounded hover:bg-red-500 hover:text-white transition"> 
            Inscribite ahora
        </button>

        </div>
    </section>
  );
}

export default Hero;