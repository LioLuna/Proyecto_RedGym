import LogoRedGym from "@/assets/LogoRedGym.jpg";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-4 text-white z-10">

      <div className="flex items-center gap-2">
        <img src={LogoRedGym} alt="Logo" className="w-10 h-10 object-contain" />
        <span className="font-bold">RedGym</span>
      </div>

      <div className="space-x-6">
        <a href="#">Inicio</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
        <a href="#">Novedades</a>
        <a href="#" className="text-red-500">Login</a>
      </div>

    </nav>
  );
}

export default Navbar;