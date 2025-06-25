import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

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

  const filteredUsers = users.filter(user => {
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

  const toggleFilter = (filterState, setFilter, value) => {
    setFilter(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="p-6">
      {/* Filters */}
      <div className="mb-6 space-y-4 md:flex md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search by name, email or department..."
          className="border px-3 py-2 rounded w-full md:w-1/2"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => toggleFilter(selectedDepartments, setSelectedDepartments, dept)}
              className={`px-3 py-1 rounded-full text-sm border ${
                selectedDepartments.includes(dept)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {dept}
            </button>
          ))}
          {ratings.map(rating => (
            <button
              key={rating}
              onClick={() => toggleFilter(selectedRatings, setSelectedRatings, rating)}
              className={`px-3 py-1 rounded-full text-sm border ${
                selectedRatings.includes(rating)
                  ? "bg-yellow-500 text-white border-yellow-500"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {rating}★
            </button>
          ))}
        </div>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.map(user => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-lg mb-1">{user.firstName} {user.lastName}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">Age: {user.age}</p>
            <p className="text-sm text-gray-500 mb-2">Department: {user.department}</p>

            {/* Rating */}
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < user.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
            <Link to={`/employee/${user.id}`}>
                <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded">View</button>
            </Link>
              <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded">View</button>
              <button className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded">Bookmark</button>
              <button className="bg-green-500 text-white px-3 py-1 text-sm rounded">Promote</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
