import { Link, useNavigate } from "react-router-dom";

import useAuth from "@/auth/useAuth";

export default function AdminHeader() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-6 py-4">
      <div>
        <p className="text-sm text-zinc-400">Panel administrativo</p>
        <h1 className="text-xl font-semibold text-white">{user?.name}</h1>
      </div>

      <div className="flex items-center gap-4">
        <Link className="text-sm font-semibold text-red-400 hover:text-red-300" to="/">
          Ver sitio
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          className="rounded bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          Salir
        </button>
      </div>
    </header>
  );
}
