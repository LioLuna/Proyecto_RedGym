import {useState} from "react";
import SectionHeader from "@/components/ui/SectionHeader";


    const faqData = [
        {
        question: "¿Es necesario tener experiencia previa?",
        answer: "No, nuestros entrenadores se encargan de guiarte y resolver las dudas que tengas desde el primer momento",
        },
        {
        question: "¿Qué tipo de membresías/planes ofrecen?",
        answer: "Ofrecemos planes mensuales, trimestrales, semestrales y anuales"
        },
        {
        question:"¿Qué formas de pago aceptan?",
        answer:"Aceptamos todos los medios de pago."
        },
        {
        question:"¿La primera clase es gratuita?",
        answer: "Sí, tu primer clase es completamente gratuita para que puedas probar y conocer nuestras instalaciones sin compromiso. "
        },
        {
        question: "¿Ofrecen planes personalizados?",
        answer: "Si, contamos con planes que se adaptan a tus objetivos y nivel fisico."
        },
        {
        question : "¿Qué debería llevar para entrenar?",
        answer : "Ropa cómoda, toalla, botella de agua."
        },
        ];

       function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0d0d0d] py-16 px-8">
      <SectionHeader
        title="PREGUNTAS"
        highlight="FRECUENTES"
        subtitle="Respondemos las dudas más comunes para que empieces sin problemas."
      />

      <div className="max-w-3xl mx-auto mt-10 space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded p-4 cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <h3 className="text-white font-semibold">
              {item.question}
            </h3>

            {activeIndex === index && (
              <p className="text-gray-400 mt-2 text-sm">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


    export default FAQ;