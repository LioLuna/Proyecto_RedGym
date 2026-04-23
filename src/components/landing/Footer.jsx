function Footer () {
    return (
        <footer className="bg-black text-gray-400 py-12 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
                <h2 className="text-white text-xl font-bold mb-2">
                    Red<span className="text-red-500">Gym</span>
                </h2>
                <p className="text-sm">
                    Transformá tu cuerpo y tu mente con el mejor entrenamiento.
                </p>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-3">Navegación</h3>
                <ul className="space-y-2 text-sm">
                    <li className="hover:text-red-500 transition cursor-pointer">Inicio</li>
                    <li className="hover:text-red-500 transition cursor-pointer">Servicios</li>
                    <li className="hover:text-red-500 transition cursor-pointer">FAQ</li>
                </ul>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-3">Contacto</h3>
                <ul className="space-y-2 text-sm">
                    <li>Email: redgym@gmail.com</li>
                    <li>Tel: +54 3516218917</li>
                    <li>Córdoba, Argentina</li>
                </ul>
            </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
                © 2026 RedGym. Todos los derechos reservados.
            </div>


        </footer>
    )
}
export default Footer;