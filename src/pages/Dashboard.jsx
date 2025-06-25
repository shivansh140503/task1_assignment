import employees from "/src/data/employees.js";
import DashboardCards from "../components/DashboardCards";
import DepartmentChart from "../components/DepartmentChart";
import EmployeeTable from "../components/EmployeeTable";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <DashboardCards employees={employees} />
      <DepartmentChart employees={employees} />
      <EmployeeTable employees={employees} />
    </div>
  );
}
