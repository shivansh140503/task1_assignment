// import { BellIcon } from '@heroicons/react/24/outline';
export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur shadow p-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 sticky top-0 z-20">
      <div className="flex items-center gap-3 w-full md:w-auto">
        {/* <img src="/logo.svg" alt="Logo" className="w-8 h-8" /> */}
        <span className="text-xl font-bold tracking-tight text-blue-700">Flam HR</span>
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="border px-3 py-2 rounded-md w-full md:w-1/3 focus:ring-2 focus:ring-blue-200 transition"
      />
      <div className="flex items-center gap-4">
        {/* <button className="relative p-2 rounded-full hover:bg-blue-50 transition">
          <BellIcon className="w-6 h-6 text-blue-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button> */}
        <span className="font-medium text-gray-700">HR Manager</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="rounded-full w-10 h-10 border-2 border-blue-100 shadow-sm"
        />
      </div>
    </header>
  );
}
