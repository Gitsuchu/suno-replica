import React from "react";
import Player from "./Player";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section className="container mt-10 flex flex-col lg:flex-row items-start gap-12">
      <div className="flex-1 space-y-6 max-w-2xl">
        {/* headline + typewriter as previous */}
        <motion.h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight" initial={{y:15,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}}>
          Create audio with{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-warm-500">generative AI</span>
          <br />
          <span className="text-slate-300 text-3xl md:text-4xl font-semibold mt-3 block">
            <Typewriter words={["ambient textures","lo-fi beats","cinematic voices","AI soundscapes"]} speed={110} pause={1500} />
          </span>
        </motion.h1>

        <p className="text-slate-300 text-lg">
          Generate music, voices, and soundscapes — quickly and intuitively.
          This demo captures the feel of Suno’s landing page with subtle animations.
        </p>

        <form onSubmit={(e)=>e.preventDefault()} className="flex w-full max-w-lg">
          <input placeholder="Try: mellow lo-fi guitar with rain" className="flex-1 bg-white/5 backdrop-blur-md placeholder:text-slate-400 rounded-l-full py-3 px-5 border border-white/10 focus:outline-none"/>
          <button className="rounded-r-full px-6 py-3 bg-gradient-to-r from-brand-500 to-warm-500 text-white font-semibold">Generate</button>
        </form>
      </div>

      {/* right column: two players stacked */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <motion.div initial={{y:6,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.08}} className="self-end w-full">
          <Player track={{title:"Starling Echoes", artist:"Velvet Orion", duration: 142}} />
        </motion.div>

        <motion.div initial={{y:6,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.18}} className="self-end w-full">
          <Player track={{title:"Sunset Loops", artist:"Neon Moth", duration: 160}} />
        </motion.div>
      </div>
    </section>
  );
}
