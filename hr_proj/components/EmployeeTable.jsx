import { useState } from "react";

export default function EmployeeTable({ employees }) {
  const [query, setQuery] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = employees
    .filter(e =>
      e.name.toLowerCase().includes(query.toLowerCase()) ||
      e.department.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      const diff = a[sortField].localeCompare(b[sortField]);
      return sortAsc ? diff : -diff;
    });

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search name or department..."
          className="border px-3 py-2 rounded-md w-1/2"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button
          onClick={() => {
            setSortField("joinDate");
            setSortAsc(prev => (sortField === "joinDate" ? !prev : true));
          }}
          className="text-blue-600 underline"
        >
          Sort by Join Date
        </button>
      </div>

      <table className="w-full table-auto">
        {/* Header remains similar */}
        <tbody>
          {filtered.map(e => (
            <tr key={e.id} className="border-b hover:bg-gray-50">
              {/* ... */}
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    e.status === "Present" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {e.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
