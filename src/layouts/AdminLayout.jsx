import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import AdminHeader from "../components/admin/AdminHeader";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-black text-white">
      <Sidebar />

      <main className="flex-1">
        <AdminHeader />

        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}