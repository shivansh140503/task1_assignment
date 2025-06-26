import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useBookmarks from "../hooks/useBookmarks";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [showBookmarked, setShowBookmarked] = useState(false);
  const { addBookmark, removeBookmark, isBookmarked, bookmarks } = useBookmarks();
  const navigate = useNavigate();

  const departments = ["Engineering", "Design", "HR", "Marketing", "Support"];
  const ratings = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=20")
      .then(res => res.json())
      .then(data => {
        const enriched = data.users.map(user => ({
          ...user,
          department: departments[Math.floor(Math.random() * departments.length)],
          rating: Math.floor(Math.random() * 5) + 1,
        }));
        setUsers(enriched);
      });
  }, []);

  let filteredUsers = users.filter(user => {
    const nameMatch =
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(search.toLowerCase());
    const emailMatch = user.email.toLowerCase().includes(search.toLowerCase());
    const deptMatch = user.department.toLowerCase().includes(search.toLowerCase());

    const departmentMatch =
      selectedDepartments.length === 0 || selectedDepartments.includes(user.department);
    const ratingMatch =
      selectedRatings.length === 0 || selectedRatings.includes(user.rating);

    return (nameMatch || emailMatch || deptMatch) && departmentMatch && ratingMatch;
  });

  if (showBookmarked) {
    filteredUsers = filteredUsers.filter(user => isBookmarked(user.id));
  }

  const toggleFilter = (filterState, setFilter, value) => {
    setFilter(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div style={{ padding: '2rem' }}>
      {/* Filters */}
      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Search by name, email or department..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <button
            className={showBookmarked ? "filter-pill filter-pill-active" : "filter-pill"}
            onClick={() => setShowBookmarked(b => !b)}
            style={{ minWidth: 120 }}
          >
            {showBookmarked ? "Showing Bookmarked" : "Show Bookmarked"}
          </button>
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => toggleFilter(selectedDepartments, setSelectedDepartments, dept)}
              className={
                selectedDepartments.includes(dept)
                  ? "filter-pill filter-pill-active"
                  : "filter-pill"
              }
            >
              {dept}
            </button>
          ))}
          {ratings.map(rating => (
            <button
              key={rating}
              onClick={() => toggleFilter(selectedRatings, setSelectedRatings, rating)}
              className={
                selectedRatings.includes(rating)
                  ? "filter-pill filter-pill-active"
                  : "filter-pill"
              }
            >
              {rating}★
            </button>
          ))}
        </div>
      </div>

      {/* User Cards */}
      <div className="dashboard-cards">
        {filteredUsers.map(user => (
          <div key={user.id} className="dashboard-card">
            <h2 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.25rem' }}>{user.firstName} {user.lastName}</h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: 2 }}>{user.email}</p>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: 2 }}>Age: {user.age}</p>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: 8 }}>Department: {user.department}</p>

            {/* Rating */}
            <div style={{ marginBottom: 8 }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: i < user.rating ? '#facc15' : '#d1d5db', fontSize: '1.1rem' }}>★</span>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: 8, justifyContent: 'center' }}>
              <Link to={`/employee/${user.id}`} style={{ textDecoration: 'none' }}><button className="button-accent">View</button></Link>
              {isBookmarked(user.id) ? (
                <button className="button-accent" onClick={() => removeBookmark(user.id)} title="Remove Bookmark">Bookmarked</button>
              ) : (
                <button className="button-accent" onClick={() => addBookmark(user)} title="Add Bookmark">Bookmark</button>
              )}
              <button className="button-accent">Promote</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
