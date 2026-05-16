
import BackgroundSection from "@/components/ui/Background";
import Button from "@/components/ui/Button";
import {Link} from "react-router-dom";
import Background from "../ui/BackGround";
function Hero() {
  return (
    <Background>
    
      <div className="max-w-4xl px-16 md:px-24">
        
        <h1 className="text-white text-5xl md:text-6xl lg:text-6xl font-bold leading-none">
          TU PROGRESO ES <br/>
          <span className="text-red-500">NUESTRO COMPROMISO</span>
        </h1>

        <p className="text-gray-300 mt-6 text-lg max-w-wl">
          Unite a RedGym y transformá tu vida. Equipamiento de primera, 
          entrenadores certificados y el mejor ambiente para alcanzar tus metas.
        </p>

        <Link to="/inscripcion">
        <Button variant="outline"> 
            Inscribite ahora
        </Button>
        </Link>
        </div>
    </Background>
  );
}

export default Hero;