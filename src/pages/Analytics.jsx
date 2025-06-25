import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const departments = ["Engineering", "Design", "HR", "Marketing", "Support"];

export default function Analytics() {
  const [avgRatings, setAvgRatings] = useState([4, 3.5, 4.2, 3.8, 4.1]); // Mocked
  const [bookmarkTrends, setBookmarkTrends] = useState([2, 4, 6, 8, 10, 12, 14]); // Mocked

  const barData = {
    labels: departments,
    datasets: [
      {
        label: "Avg Rating",
        data: avgRatings,
        backgroundColor: "#3b82f6",
        borderRadius: 8,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Bookmarks",
        data: bookmarkTrends,
        fill: false,
        borderColor: "#6366f1",
        backgroundColor: "#6366f1",
        tension: 0.3,
      },
    ],
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: '#2563eb' }}>Analytics</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 4px 24px 0 rgba(37,99,235,0.08)', padding: '2rem', minWidth: 320, maxWidth: 400 }}>
          <h2 style={{ color: '#2563eb', fontSize: '1.1rem', marginBottom: '1rem' }}>Department-wise Avg Ratings</h2>
          <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>
        <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 4px 24px 0 rgba(37,99,235,0.08)', padding: '2rem', minWidth: 320, maxWidth: 400 }}>
          <h2 style={{ color: '#2563eb', fontSize: '1.1rem', marginBottom: '1rem' }}>Bookmark Trends</h2>
          <Line data={lineData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>
      </div>
    </div>
  );
} 