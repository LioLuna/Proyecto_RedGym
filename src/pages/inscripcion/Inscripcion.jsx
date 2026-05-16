import Background from "@/components/ui/Background";

import FormContainer from "@/components/ui/FormContainer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import SectionHeader from "@/components/ui/SectionHeader";

function Inscripcion() {
  return (
    <Background>
      <Card className="w-full max-w-3xl">

        <SectionHeader
          title="Inscribite Ahora"
          subtitle="Completá el formulario para comenzar tu transformación."
          align="center"
          light
        />

        <FormContainer>

          <Input
            type="text"
            placeholder="Nombre"
          />

          <Input
            type="text"
            placeholder="Apellido"
          />

          <Input
            type="email"
            placeholder="Correo electrónico"
          />

          <Input
            type="password"
            placeholder="Contraseña"
          />

          <div className="md:col-span-2">
            <Button variant="primary">
              Completar inscripción
            </Button>
          </div>

        </FormContainer>
      </Card>
    </Background>
  );
}

export default Inscripcion;