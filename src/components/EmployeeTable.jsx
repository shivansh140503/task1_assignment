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
    <div className="table-container">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Search name or department..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button
          onClick={() => {
            setSortField("joinDate");
            setSortAsc(prev => (sortField === "joinDate" ? !prev : true));
          }}
          className="button-accent"
        >
          Sort by Join Date
        </button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Role</th>
              <th>Join Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(e => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.department}</td>
                <td>{e.role}</td>
                <td>{e.joinDate}</td>
                <td>
                  <span className={e.status === "Present" ? "status-present" : "status-leave"}>
                    {e.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
