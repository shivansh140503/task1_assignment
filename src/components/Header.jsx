export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <input
        type="text"
        placeholder="Search..."
        className="border px-3 py-1 rounded-md w-1/3"
      />
      <div className="flex items-center gap-4">
        <span className="font-medium">HR Manager</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="rounded-full w-10 h-10"
        />
      </div>
    </header>
  );
}
