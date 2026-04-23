function Showcase() {
    return (
        <section className="bg-[#0d0d0d] py-20 px-6">

            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    COMPONENTES <span className="text-red-500">UI</span>
                </h2>
                <p className="text-gray-400 mt-4">
                    Catálogo de componentes reutilizables del sistema de diseño.
                </p>
            </div>

        <div className="max-w-6xl mx-auto space-y-16">
            
            
            <div>
                <h3 className="text-white text-xl font-semibold mb-4">Botones</h3>
                <div className="flex flex-wrap gap-4">
                    <button className="bg-red-500 text-white px-6 py-2 roundeed hover:bg-red-600 transition">
                    Primario
                    </button>
                    <button className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-500 hover:text-white transition">
                        Outline
                    </button>
                    <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
                        Secundario
                    </button>
                </div>
            </div>

            <div>
                <h3 className="text-white text-xl font-semibold mb-4">Inputs</h3>

                <div className="flex flex:col md:flex-row gap-4">
                    <input 
                    type="text"
                    placeholder="Nombre"
                    className="bg-black border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-red-500"
                    />


                    <input
                    type="email"
                    placeholder="Email"
                    className="bg-black border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-red-500"
                    />
                </div>
            </div>

            <div>
                <h3 className="text-white text-xl font-semibold mb-4">Cards</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-black border border-gray-800 p-6 rounded hover:border-red-500 transition">
                        <h4 className="text-white font-semibold mb-2">Plan Básico</h4>
                        <p className="text-gray-400 text-sm">
                            Acceso general al gimnasio.
                        </p>
                    </div>

                <div className="bg-black border border-gray-800 p-6 rounded hover:border-red-500 transition">
                    <h4 className="text-white font-semibold mb-2">Plan Pro</h4>
                    <p className="text-gray-400 text-sm">
                        Incluye clases y seguimiento.
                    </p>
                </div>

                <div className="bg-black border border-gray-800 p-6 rounded hover:border-red-500 transition">
                    <h4 className="text-white font-semibold mb-2">Plan Elite</h4>
                    <p className="text-gray-400 text-sm">
                        Entrenamiento personalizado.
                    </p>
                </div>
                </div>
            </div>

            <div>
                <h3 className="text-white text-xl font-semibold mb-4">Alertas</h3>

                <div className="space-y-4">
                    <div className="bg-green-600 text-white px-4 py-3 rounded">
                        Operación exitosa
                    </div>

                <div className="bg-yellow-500 text-black px-4 py-3 rounded">
                    Revise los datos ingresados
                </div>

                <div className="bg-red-600 text-white px-4 py-3 rounded">
                    Error al procesar solicitud
                </div>
                </div>
            </div>
        </div>
        </section>

    )
}
export default Showcase;