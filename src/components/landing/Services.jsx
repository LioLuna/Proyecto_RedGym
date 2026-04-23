import Musculacion from "@/assets/Musculacion.png";
import Cardio from "@/assets/IconCardio.png";
import Trainer from "@/assets/Trainer.png";
import ServiceItem from "@/components/ui/ServiceItem";

function Services() {
    return (
        <>
        <section className="bg-[#0d0d0d] py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
            NUESTROS <span className="text-red-500">SERVICIOS</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Todo lo que necesitas para alcanzar tus objetivos fitness en un solo lugar. Instalaciones para tu comodidad, equipamiento moderno y profesionales dedicados.
        </p>
         </section>
        <section className="bg-black py-16 px-8">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

            <ServiceItem
            icon={Musculacion}
            title="Musculación"
            description="Contamos con el equipamiento necesario para entrenamiento de fuerza y resistencia"
            items={[
                "Pesas libres completas",
                "Zona de peso muerto",
                "Racks de sentadilla",
                "Máquinas de pull y push",
            ]}
            />


            <ServiceItem
                icon={Cardio}
                title="Cardio Zone"
                description="Cintas, elípticas, bicicletas y más para mejorar tu resistencia cardiovascular."
                items={[
                    "Cintas de correr",
                    "Bicicletas fijas",
                    "Elípticas",
                ]}
            />

            <ServiceItem
                icon={Trainer}
                title= "Personal trainer"
                description= "Entrenadores certificados para guiarte y ayudarte a alcanzar tus objetivos."
                items={[
                    "Planes personalizados",
                    "Seguimiento continuo",
                    "Nutrición deportiva",
                    "Evaluación física",
                ]}
                />
                </div>
        </section>

        <section className="bg-red-700 py-16 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
            ¿LISTO/A PARA EMPEZAR?
            </h2>

            <p className="text-white mt-4 text-sm md:text-base">
                Tu primer clase es gratis. Vení a conocer nuestras instalaciones y servicios.
            </p>
        </section>
        
        </>
    )
}

export default Services;