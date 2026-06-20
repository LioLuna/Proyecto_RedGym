import {Link} from "react-router-dom";

import ServiceItem from "@/components/ui/ServiceItem";
import { servicesData } from "@/data/services";
import SectionHeader  from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

function Services() {
  return (
    <>
      {/* Header */}
      <section id="servicios" className="bg-[#0d0d0d] py-16 text-center">
        <SectionHeader
        title="NUESTROS"
        highlight="SERVICIOS"
        subtitle="Todo lo que necesitas para alcanzar tus objetivos fitness en un solo lugar. Instalaciones para tu comodidad, equipamiento moderno y profesionales dedicados."
        />
        </section>

      <section className="bg-black py-16 px-8">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </section>

      
      <section className="bg-red-700 py-16 text-center">
        <SectionHeader
            title="¿LISTO/A PARA"
            highlight="EMPEZAR?"
            highlightClass="text-white"
            subtitle="Tu primer clase es gratis. Vení a conocer nuestras instalaciones y servicios."
        />

        <Link to="/inscripcion">

        <Button variant="primary" className="mt-6">
          Inscribite Ahora
        </Button>
        
        </Link>

      </section>
    </>
  );
}

export default Services;