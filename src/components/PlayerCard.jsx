// src/components/PlayerCard.jsx
import React from "react";
import useAudio from "../lib/useAudio";

function formatTime(s = 0) {
  if (!s || isNaN(s)) return "00:00";
  const mm = Math.floor(s / 60).toString().padStart(2, "0");
  const ss = Math.floor(s % 60).toString().padStart(2, "0");
  return `${mm}:${ss}`;
}

export default function PlayerCard({ title, artist, src }) {
  const { playing, toggle, currentTime, duration } = useAudio(src);
  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`player-card bg-glass p-4 rounded-2xl w-full md:w-[420px] ${playing ? "playing" : ""}`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-white font-semibold text-lg">{title}</div>
          <div className="text-slate-400 text-sm mt-1">{artist} · {formatTime(duration)}</div>
        </div>

        {/* circular play button */}
        <button
          onClick={toggle}
          aria-pressed={playing}
          className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform transition duration-200 hover:scale-105"
          title={playing ? "Pause" : "Play"}
        >
          {playing ? "▌▌" : "▶"}
        </button>
      </div>

      {/* waveform area (visual only) */}
      <div className="mt-4 rounded-lg bg-wave p-3 relative overflow-hidden">
        <div className="wave-lines absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="flex justify-between text-xs text-slate-400 mt-3 px-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* thin progress bar */}
      <div className="mt-3 h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-orange-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
