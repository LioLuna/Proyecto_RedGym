export default function DashboardCard({
  title,
  value,
}) {
  return (
    <div className="bg-zinc-900 p-5 rounded-lg">
      <p className="text-gray-400">
        {title}
      </p>

      <h3 className="text-3xl font-bold">
        {value}
      </h3>
    </div>
  );
}