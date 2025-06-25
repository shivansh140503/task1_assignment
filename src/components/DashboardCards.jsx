export default function DashboardCards({ employees }) {
  const total = employees.length;
  const present = employees.filter(e => e.status === "Present").length;
  const leave = employees.filter(e => e.status === "Leave").length;
  const newThisMonth = employees.filter(e => {
    const join = new Date(e.joinDate);
    const now = new Date();
    return join.getMonth() === now.getMonth() && join.getFullYear() === now.getFullYear();
  }).length;

  const data = [
    { title: "Total Employees", value: total, color: "bg-blue-500" },
    { title: "Present Today", value: present, color: "bg-green-500" },
    { title: "On Leave", value: leave, color: "bg-yellow-500" },
    { title: "New This Month", value: newThisMonth, color: "bg-purple-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((c, i) => (
        <div key={i} className={`${c.color} text-white p-6 rounded-lg shadow`}>
          <h3 className="text-sm">{c.title}</h3>
          <p className="text-2xl font-bold">{c.value}</p>
        </div>
      ))}
    </div>
  );
}
