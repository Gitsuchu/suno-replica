import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = [
  { title: "Neon Drift", subtitle: "by Velvet Kite", gradient: "from-purple-500 to-pink-500" },
  { title: "Lo-fi Rain", subtitle: "by Neon Moth", gradient: "from-orange-400 to-rose-500" },
  { title: "Starfield", subtitle: "by Aural Botanist", gradient: "from-sky-400 to-indigo-500" },
  { title: "Crimson Tape", subtitle: "by Velvet Orion", gradient: "from-fuchsia-500 to-purple-500" },
  { title: "Glass Harbor", subtitle: "by Echo Shade", gradient: "from-amber-400 to-orange-500" },
];

export default function Carousel() {
  const scrollerRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  itemRefs.current = [];

  const registerRef = (el) => {
    if (el && !itemRefs.current.includes(el)) itemRefs.current.push(el);
  };

  // Detect active card
  useEffect(() => {
    const opts = {
      root: scrollerRef.current,
      threshold: [0.5, 0.6, 0.75],
    };
    const obs = new IntersectionObserver((entries) => {
      let best = { ratio: 0, idx: 0 };
      entries.forEach((en) => {
        const idx = Number(en.target.dataset.index);
        if (en.intersectionRatio > best.ratio) {
          best = { ratio: en.intersectionRatio, idx };
        }
      });
      setActiveIndex(best.idx);
    }, opts);

    itemRefs.current.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Auto-scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const id = setInterval(() => {
      const step = el.clientWidth * 0.6 || 300;
      const maxLeft = el.scrollWidth - el.clientWidth;
      const next = Math.min(el.scrollLeft + step, maxLeft);
      if (next <= el.scrollLeft + 1) el.scrollTo({ left: 0, behavior: "smooth" });
      else el.scrollTo({ left: next, behavior: "smooth" });
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (i) => {
    const el = itemRefs.current[i];
    if (!el || !scrollerRef.current) return;
    el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section className="container mt-16">
      <h2 className="text-2xl font-bold mb-6">Featured tracks</h2>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-2 py-2 no-scrollbar"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {items.map((it, i) => (
            <div
              key={i}
              data-index={i}
              ref={registerRef}
              className="snap-start flex-shrink-0 w-[85%] sm:w-72 md:w-80 lg:w-72 px-2"
              style={{ scrollSnapAlign: "center" }}
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="card p-4 flex flex-col items-start justify-between h-64 cursor-pointer"
              >
                <div
                  className={`w-full h-36 rounded-md bg-gradient-to-r ${it.gradient} flex items-end p-3 text-white font-semibold text-lg shadow`}
                >
                  {it.title}
                </div>
                <div className="mt-3 text-slate-300 text-sm">{it.subtitle}</div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* navigation arrows */}
        <div className="absolute right-3 top-2 hidden md:flex gap-2">
          <button
            aria-label="Scroll left"
            onClick={() =>
              scrollerRef.current?.scrollBy({
                left: -scrollerRef.current.clientWidth * 0.6,
                behavior: "smooth",
              })
            }
            className="bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full"
          >
            ‹
          </button>
          <button
            aria-label="Scroll right"
            onClick={() =>
              scrollerRef.current?.scrollBy({
                left: scrollerRef.current.clientWidth * 0.6,
                behavior: "smooth",
              })
            }
            className="bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full"
          >
            ›
          </button>
        </div>
      </div>

      {/* dot indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === activeIndex ? "bg-brand-500 scale-110" : "bg-white/10"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
