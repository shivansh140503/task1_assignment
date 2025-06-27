import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useBookmarks from "../hooks/useBookmarks";
import '../custom.css';

const TABS = ["Overview", "Projects", "Feedback"];

export default function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
      })
      .then(data => {
        const enriched = {
          ...data,
          department: ["Engineering", "Design", "HR", "Marketing", "Support"][Math.floor(Math.random() * 5)],
          rating: Math.floor(Math.random() * 5) + 1,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          history: Array.from({ length: 5 }, (_, i) => ({
            year: 2019 + i,
            score: Math.floor(Math.random() * 5) + 1,
          })),
        };
        setEmployee(enriched);
      })
      .catch(err => {
        console.error("Error loading employee:", err);
      });
  }, [id]);

  if (!employee) return <p style={{ padding: '2rem' }}>Loading...</p>;

  return (
    <div className="employee-detail-card">
      <button onClick={() => navigate(-1)} className="button-accent" style={{ marginBottom: 24 }}>&larr; Back</button>
      {/* Profile Photo */}
      <img
        className="profile-photo"
        src={employee.image || `https://i.pravatar.cc/150?img=${id}`}
        alt={employee.firstName + ' ' + employee.lastName}
      />
      {/* Bookmark Button */}
      <button
        className="button-accent"
        style={{ alignSelf: 'flex-end', marginBottom: '-2.5rem', marginRight: '0.5rem', zIndex: 2 }}
        onClick={() => isBookmarked(employee.id) ? removeBookmark(employee.id) : addBookmark(employee)}
        title={isBookmarked(employee.id) ? 'Remove Bookmark' : 'Add Bookmark'}
      >
        {isBookmarked(employee.id) ? 'Bookmarked' : 'Bookmark'}
      </button>
      <h2 className="employee-detail-header">
        {employee.firstName ?? "Unknown"} {employee.lastName ?? ""}
      </h2>
      <p className="employee-detail-email">{employee.email ?? "N/A"}</p>

      {/* Rating + Department */}
      <div className="employee-detail-info">
        <div>
          <p>Department:</p>
          <span style={{ fontWeight: 600 }}>{employee.department}</span>
        </div>
        <div>
          <p>Rating:</p>
          <div className="employee-detail-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: i < employee.rating ? '#facc15' : '#d1d5db' }}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Address, Phone, Bio */}
      <div className="employee-detail-section">
        <p><strong>Phone:</strong> {employee.phone ?? "N/A"}</p>
        <p>
          <strong>Address:</strong>{" "}
          {employee.address?.address ?? "N/A"}, {employee.address?.city ?? ""}
        </p>
        <p><strong>Bio:</strong> {employee.bio}</p>
      </div>

      {/* Tabs */}
      <div className="tab-bar">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-btn${activeTab === tab ? ' active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="employee-detail-tab-content" style={{ width: '100%' }}>
        {activeTab === "Overview" && (
          <div className="employee-detail-history">
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Performance History</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {employee.history.map((item, i) => (
                <li key={i}>
                  <span>{item.year}</span>
                  <span className="stars">{'★'.repeat(item.score)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "Projects" && (
          <div style={{ color: '#64748b', fontSize: '0.98rem' }}>
            <p>Project 1: HR Automation</p>
            <p>Project 2: Design Revamp</p>
            <p>Project 3: Attendance Tracker</p>
          </div>
        )}

        {activeTab === "Feedback" && (
          <div style={{ color: '#64748b', fontSize: '0.98rem' }}>
            <p>"Great team player and proactive communicator."</p>
            <p>"Exceeded performance goals in Q2."</p>
            <p>"Consistently meets deadlines."</p>
          </div>
        )}
      </div>
    </div>
  );
}
