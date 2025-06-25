import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-6">Flam HR</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-black">Dashboard</Link>
      </nav>
    </div>
  );
}
