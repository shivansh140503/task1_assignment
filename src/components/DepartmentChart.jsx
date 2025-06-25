export default function DepartmentChart({ employees }) {
  // Count employees per department
  const departmentCounts = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {});

  // Get max count for bar scaling
  const maxCount = Math.max(...Object.values(departmentCounts));

  return (
    <div className="department-chart">
      <h2>Department Distribution</h2>
      <div>
        {Object.entries(departmentCounts).map(([dept, count]) => (
          <div key={dept} className="department-bar">
            <span className="label">{dept}</span>
            <div className="bar-bg">
              <div
                className="bar"
                style={{ width: `${(count / maxCount) * 100}%` }}
              ></div>
            </div>
            <span className="count">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
