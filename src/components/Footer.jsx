import React from 'react'


export default function Footer(){
return (
<footer className="mt-20 py-8 border-t border-white/6">
<div className="container flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<img src="/src/assets/logo.svg" alt="logo" className="w-8 h-8"/>
<div className="text-slate-400 text-sm">© {new Date().getFullYear()} Suno clone — layout demo</div>
</div>
<div className="text-slate-400 text-sm">Built with React + Tailwind</div>
</div>
</footer>
)
}