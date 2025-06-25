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
    { title: "Total Employees", value: total, icon: "👥" },
    { title: "Present Today", value: present, icon: "✅" },
    { title: "On Leave", value: leave, icon: "🌴" },
    { title: "New This Month", value: newThisMonth, icon: "✨" },
  ];

  return (
    <div className="dashboard-cards">
      {data.map((c, i) => (
        <div key={i} className="dashboard-card">
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{c.icon}</div>
          <h3>{c.title}</h3>
          <p>{c.value}</p>
        </div>
      ))}
    </div>
  );
}
