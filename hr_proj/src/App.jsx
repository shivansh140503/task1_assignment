import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "../pages/Dashboard";
import EmployeeDetails from "./pages/EmployeeDetails";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* layout */}
        <div className="flex-1 flex flex-col">
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employee/:id" element={<EmployeeDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
