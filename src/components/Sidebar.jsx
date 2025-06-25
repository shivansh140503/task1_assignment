import { Link, useLocation } from "react-router-dom";
// If you have Heroicons installed, you can import icons like this:
// import { HomeIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const location = useLocation();
  const links = [
    { to: "/", label: "Home", /* icon: <HomeIcon className="w-5 h-5" /> */ },
    { to: "/dashboard", label: "Dashboard", /* icon: <ChartBarIcon className="w-5 h-5" /> */ },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-50 to-white shadow-lg p-6 border-r border-gray-200 hidden md:flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold mb-10 tracking-tight flex items-center gap-2">
        {/* <img src="/logo.svg" alt="Logo" className="w-8 h-8" /> */}
        Flam HR
      </h2>
      <nav className="flex flex-col gap-3">
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors duration-200
              ${location.pathname === link.to ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}
            `}
          >
            {/* {link.icon} */}
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-10 text-xs text-gray-400">© 2024 Flam HR</div>
    </aside>
  );
}
