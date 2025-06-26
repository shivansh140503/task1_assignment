import { Link } from "react-router-dom";
import useBookmarks from "../hooks/useBookmarks";

export default function Bookmarks() {
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#2563eb' }}>Bookmarked Employees</h1>
      {bookmarks.length === 0 ? (
        <p style={{ color: '#64748b' }}>No bookmarks yet.</p>
      ) : (
        <div className="dashboard-cards">
          {bookmarks.map(user => (
            <div key={user.id} className="dashboard-card">
              <h2 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.25rem' }}>{user.firstName} {user.lastName}</h2>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: 2 }}>{user.email}</p>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: 2 }}>Age: {user.age}</p>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: 8 }}>Department: {user.department}</p>
              <div style={{ marginBottom: 8 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: i < user.rating ? '#facc15' : '#d1d5db', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: 8, justifyContent: 'center' }}>
                <Link to={`/employee/${user.id}`} style={{ textDecoration: 'none' }}><button className="button-accent">View</button></Link>
                <button className="button-accent" onClick={() => removeBookmark(user.id)} title="Remove Bookmark">Bookmarked</button>
                <button className="button-accent" title="Promote">Promote</button>
                <button className="button-accent" title="Assign to Project">Assign to Project</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 