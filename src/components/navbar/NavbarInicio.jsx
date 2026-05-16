import Logo from "./Logo";
import NavMenu from "./NavMenu";

const navItems = [
  {
    label:"inicio",
    to:"/",
    scrollTop: true,
  },

  {
    label:"Servicios",
    to : "/#servicios",
  },

  {
    label:"Contacto",
    to:"/#contacto",
  },

  {
    label:"Planes",
    to:"/planes",

  },
  {
    label:"Login",
    to:"/login",
  },
];

function NavbarInicio(){
  return (
    <nav
    className="
    fixed
    top-0
    left-0
    w-full
    flex
    justify-between
    items-center
    px-10
    py-4
    text-white
    z-50
    bg-black/40
    backdrop-blur-md
    "
    >
      <Logo />

      <NavMenu items={navItems} />

    </nav>
  );
}

export default NavbarInicio;