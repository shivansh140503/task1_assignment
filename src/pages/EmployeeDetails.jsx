import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TABS = ["Overview", "Projects", "Feedback"];

export default function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");

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

  if (!employee) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">
        {employee.firstName ?? "Unknown"} {employee.lastName ?? ""}
      </h2>
      <p className="text-gray-600 mb-4">{employee.email ?? "N/A"}</p>

      {/* Rating + Department */}
      <div className="flex gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Department:</p>
          <span className="text-md font-semibold">{employee.department}</span>
        </div>
        <div>
          <p className="text-sm text-gray-500">Rating:</p>
          <div>
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < employee.rating ? "text-yellow-400" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Address, Phone, Bio */}
      <div className="mb-4 space-y-1">
        <p><strong>Phone:</strong> {employee.phone ?? "N/A"}</p>
        <p>
          <strong>Address:</strong>{" "}
          {employee.address?.address ?? "N/A"}, {employee.address?.city ?? ""}
        </p>
        <p><strong>Bio:</strong> {employee.bio}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-4">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`pb-2 ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Overview" && (
          <div>
            <h3 className="font-semibold mb-2">Performance History</h3>
            <ul className="space-y-2">
              {employee.history.map((item, i) => (
                <li key={i} className="flex justify-between text-sm">
                  <span>{item.year}</span>
                  <span className="text-yellow-500">{'★'.repeat(item.score)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "Projects" && (
          <div className="text-sm text-gray-600">
            <p>Project 1: HR Automation</p>
            <p>Project 2: Design Revamp</p>
            <p>Project 3: Attendance Tracker</p>
          </div>
        )}

        {activeTab === "Feedback" && (
          <div className="text-sm text-gray-600">
            <p>"Great team player and proactive communicator."</p>
            <p>"Exceeded performance goals in Q2."</p>
            <p>"Consistently meets deadlines."</p>
          </div>
        )}
      </div>
    </div>
  );
}
