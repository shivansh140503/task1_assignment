import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import EmployeeDetails from "./pages/EmployeeDetails";
import Bookmarks from "./pages/Bookmarks";
import Analytics from "./pages/Analytics";
import { BookmarksProvider } from "./context/BookmarksContext";
import { useEffect, useState } from "react";

function ThemeToggle({ dark, setDark }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        right: 32,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'row',
        gap: '0.75rem',
        alignItems: 'center',
        background: dark ? '#181a20cc' : '#fff9',
        borderRadius: '2rem',
        padding: '0.5rem 1rem',
        boxShadow: '0 2px 8px 0 rgba(37,99,235,0.10)',
      }}
    >
      {isHome && (
        <button className="button-accent" style={{ height: 40 }} onClick={() => navigate('/analytics')}>
          Go to Analytics
        </button>
      )}
      <button
        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={() => setDark(d => !d)}
        style={{
          background: dark ? '#23262f' : '#fff',
          color: dark ? '#facc15' : '#6366f1',
          border: '1.5px solid #dbeafe',
          borderRadius: '50%',
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          fontSize: '1.3rem',
          boxShadow: '0 2px 8px 0 rgba(37,99,235,0.08)',
          cursor: 'pointer',
          transition: 'background 0.2s, color 0.2s',
          margin: 0
        }}
      >
        {dark ? '🌙' : '☀️'}
      </button>
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <BookmarksProvider>
      <Router>
        <ThemeToggle dark={dark} setDark={setDark} />
        <div className="flex h-screen bg-gray-100">
          {/* layout */}
          <div className="flex-1 flex flex-col">
            <main className="flex-1 overflow-y-auto" style={{ marginTop: 80 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/employee/:id" element={<EmployeeDetails />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/analytics" element={<Analytics />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </BookmarksProvider>
  );
}

export default App;
