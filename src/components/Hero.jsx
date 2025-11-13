// src/components/Hero.jsx
import React from "react";
import Typewriter from "./Typewriter";
import PlayerCard from "./PlayerCard";

export default function Hero() {
  return (
    <section className="container mt-10 overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT: headline + CTA */}
        <div className="overflow-visible">
          <h1
            className="text-[64px] sm:text-[72px] md:text-[88px] lg:text-[96px] font-extrabold leading-[0.98] md:leading-[0.98] -tracking-tight overflow-visible"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            Create audio with <br />
            Generative AI -{" "}<br />
            <span className="inline-flex items-center text-gradient">
              <Typewriter
                words={[" Music", " Beats", " Voices", " Sounds"]}
                speed={100}
                pause={1200}
                className="text-gradient"
              />
            </span>
          </h1>

          <p className="mt-6 text-slate-300 max-w-2xl">
            Generate music, voices, and soundscapes — quickly and intuitively. This demo captures the feel
            of Suno's landing page with subtle animations.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <input
              className="flex-1 min-w-[240px] px-4 py-3 rounded-l-full bg-slate-800 text-slate-200 placeholder:text-slate-400 focus:outline-none"
              placeholder="Try: mellow lo-fi guitar with rain"
            />
            <button className="px-6 py-3 rounded-r-full bg-gradient-to-r from-purple-500 to-orange-400 text-white font-semibold">
              Generate
            </button>
          </div>
        </div>

        {/* RIGHT: two player cards stacked */}
        <div className="flex flex-col gap-6">
          <PlayerCard title="Starling Echoes" artist="Velvet Orion" src="/sample1.mp3" />
          <PlayerCard title="Sunset Loops" artist="Neon Moth" src="/sample2.mp3" />
        </div>
      </div>
    </section>
  );
}
