import { NavLink } from "react-router-dom";

const menu = [
  { label: "Dashboard", path: "/admin" },
  { label: "Usuarios", path: "/admin/usuarios" },
  { label: "Planes", path: "/admin/planes" },
  { label: "Inscripciones", path: "/admin/inscripciones" },
  { label: "Pagos", path: "/admin/pagos" },
  { label: "Comunicados", path: "/admin/comunicados" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800">
      <div className="p-6">
        <h2 className="font-bold text-xl">
          RedGym Admin
        </h2>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="p-3 rounded hover:bg-zinc-800"
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
