export default function AdminTable({
  columns,
  data,
}) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column}
              className="text-left p-3"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map(
              (value, i) => (
                <td
                  key={i}
                  className="p-3"
                >
                  {value}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}