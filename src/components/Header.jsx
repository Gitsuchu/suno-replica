import React from "react";

export default function Header() {
  return (
    <header className="py-6">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-indigo-500 flex items-center justify-center text-white font-semibold">S</div>
          <span className="font-semibold text-white">Suno</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-full border border-white/10 text-slate-100">Sign In</button>
          <button className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-500 to-warm-500 text-white font-medium shadow">Sign Up</button>
        </div>
      </div>
    </header>
  );
}
