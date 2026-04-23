import {useState} from "react";

function FAQ(){
    const [activeIndex,setActiveIndex] = useState(null);

    const faqs = [
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

        const toggleFAQ = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
        };

        return(
            <section className="bg-[#0d0d0d] py-20 px-6"> 
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    PREGUNTAS <span className="text-red-500">FRECUENTES</span>
                </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div className="border border-gray-700 rounded-lg overflow-hidden"
                    >

                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left px-5 py-4 flex justify-between items-center text-white hover:bg-gray-800 transition"
                        >
                            <span>{faq.question}</span>
                            <span className="text-red-500 text-xl">
                                {activeIndex === index ? "-" : "+"}
                                </span>
                            </button>

                            {activeIndex === index && (
                                <div className="px-5 pb-4 text-gray-400 text-sm">
                                    {faq.answer}
                                </div>
                            )}
                            </div>
                ))}
            </div>

            </section>
        );
    }

    export default FAQ;