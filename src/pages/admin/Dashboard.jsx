import { useEffect, useState } from "react";
import DashboardCard from "../../components/admin/DashboardCard";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/dashboard")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(console.error);
  }, []);

  if (!stats) {
    return <p>Cargando dashboard...</p>;
  }

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashboardCard
          title="Socios"
          value={stats.usuarios}
        />

        <DashboardCard
          title="Inscripciones"
          value={stats.inscripciones}
        />

        <DashboardCard
          title="Pagos"
          value={stats.pagos}
        />

        <DashboardCard
          title="Ingresos"
          value={`$${stats.ingresos}`}
        />
      </div>
    </section>
  );
}