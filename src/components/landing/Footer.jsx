function Footer () {
    return (
        <footer className="bg-black text-gray-400 py-10 px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
                <h3 className="text-white text-xl font-bold mb-2">
                    Red<span className="text-red-500">Gym</span>
                </h3>
                <p className="text-sm">
                    Transformá tu cuerpo y tu mente con el mejor entrenamiento.
                </p>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-2">Navegación</h4>
                <ul className="space-y-1 text-sm">
                    <li>Inicio</li>
                    <li>Servicios</li>
                    <li>FAQ</li>
                    <li>Contacto</li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-2">Contacto</h4>
                <ul className="space-y-1 text-sm">
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