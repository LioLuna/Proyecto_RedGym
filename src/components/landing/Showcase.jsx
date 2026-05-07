import SectionHeader from "@/components/ui/SectionHeader";
import ServiceItem from "@/components/ui/ServiceItem";
import Musculacion from "@/assets/Musculacion.png";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

function Showcase() {
    return (
        <section className="bg-[#0d0d0d] py-16 px-8">
            <SectionHeader
            title= "COMPONENTES"
            highlight = "UI"
            subtitle = "Sección de prueba para ver los componentes reutilizables del sistema"
            />

        <div className="max-w-6xl mx-auto mt-12 space-y-12">
            
            
            <div>
                <h3 className="text-white text-xl font-semibold mb-4">Botones</h3>
                
                <div className="flex gap-4 flex-wrap">
                    <Button variant="primary">Primario</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secundario</Button>
                    <Button size="lg">Grande</Button>
                </div>
            </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
            Input
            </h3>

            <Input placeholder="Ejemplo de input" />
          </div>

            <div>
          <h3 className="text-white text-xl font-semibold mb-4">Card</h3>

          <div className="max-w-sm">
            <ServiceItem
              icon={Musculacion}
              title="Ejemplo Card"
              description="Este es un ejemplo de componente reutilizable tipo card."
              items={["Item 1", "Item 2", "Item 3"]}
            />
          </div>
        </div>

      </div>
    </section>

    );
}
export default Showcase;