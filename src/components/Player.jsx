import React from "react";
import useAudio from "../lib/useAudio";

export default function Player({ track }) {
  // default fictional track if not provided
  const defaultTrack = { title: "Ambient Sketch", artist: "Aural Botanist", duration: 140 };
  const t = track || defaultTrack;
  const { playing, toggle, time, duration } = useAudio("/sample.mp3"); // sample file

  const pct = duration ? Math.min(100, Math.round((time / duration) * 100)) : 0;
  const format = (s) => new Date((s || 0) * 1000).toISOString().substr(14, 5);

  return (
    <div className="card p-6 max-w-xl mx-auto shadow-deep relative">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-lg text-white">{t.title}</div>
          <div className="text-slate-400 text-sm">{t.artist} · {t.duration ? `${Math.floor(t.duration/60)}:${String(t.duration%60).padStart(2,'0')}` : '2:22'}</div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={toggle} aria-label="Play/Pause" className="px-4 py-2 rounded-full bg-white text-page font-medium">{playing ? 'Pause' : 'Play'}</button>
          <button className="px-3 py-2 rounded-full bg-white/6 text-slate-200">Save</button>
        </div>
      </div>

      <div className="mt-6">
        <div className="wave" aria-hidden="true"></div>

        <div className="mt-4 flex items-center gap-3">
          <div className="text-xs text-slate-400">{format(time)}</div>
          <div className="flex-1 bg-white/6 h-2 rounded overflow-hidden">
            <div style={{ width: `${pct}%` }} className="h-full bg-gradient-to-r from-brand-500 to-indigo-500"></div>
          </div>
          <div className="text-xs text-slate-400">{format(duration || t.duration)}</div>
        </div>
      </div>
    </div>
  );
}
