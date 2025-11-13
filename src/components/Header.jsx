
export default function Header() {
  return (
    <header className="flex justify-between items-center py-5 px-10 bg-transparent">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white">S</div>
        <span className="font-semibold">Suno</span>
      </div>

      <div className="flex gap-4 items-center">
        <button
          className="px-4 py-2 rounded-full bg-transparent border border-white/10 text-slate-300 hover:text-white transform transition duration-200 hover:-translate-y-1 hover:scale-105"
        >
          Sign In
        </button>

        <button
          className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-white font-semibold transform transition duration-200 hover:-translate-y-1 hover:scale-105 shadow-sm"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}
