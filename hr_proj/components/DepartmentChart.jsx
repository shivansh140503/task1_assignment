import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DepartmentChart() {
  const data = {
    labels: ["Engineering", "Design", "Marketing", "HR", "Support"],
    datasets: [
      {
        label: "# of Employees",
        data: [40, 15, 25, 20, 20],
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#8b5cf6",
          "#ef4444",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow w-full max-w-xs mx-auto h-[300px]">
      <h2 className="text-lg font-semibold mb-4">Department Distribution</h2>
      <div className="h-full">
        <Pie data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
}
