import { useNavigate } from "react-router-dom";

import useAuth from "@/auth/useAuth";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const publicNavItems = [
  {
    label: "inicio",
    to: "/",
    scrollTop: true,
  },
  {
    label: "Servicios",
    to: "/#servicios",
  },
  {
    label: "Contacto",
    to: "/#contacto",
  },
  {
    label: "Planes",
    to: "/planes",
  },
];

function NavbarInicio() {
  const { isAdmin, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const authItems = isAuthenticated
    ? [
        ...(isAdmin ? [{ label: "Admin", to: "/admin" }] : []),
        { label: "Mi cuenta", to: "/mi-cuenta" },
      ]
    : [{ label: "Login", to: "/login" }];
  const navItems = [...publicNavItems, ...authItems];

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 text-white z-50 bg-black/40 backdrop-blur-md">
      <Logo />

      <div className="flex items-center gap-6">
        <NavMenu items={navItems} />

        {isAuthenticated && (
          <button
            type="button"
            onClick={handleLogout}
            className="font-semibold text-white transition hover:text-red-400"
          >
            Salir
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavbarInicio;
