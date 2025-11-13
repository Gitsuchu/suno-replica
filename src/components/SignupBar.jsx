// src/components/SignupBar.jsx
import React from "react";
import { motion } from "framer-motion";

const promos = [
  { title: "Sign up for free", subtitle: "Generate your first track" },
  { title: "Explore presets", subtitle: "Templates for any mood" },
  { title: "Join the community", subtitle: "Share & remix" },
];

export default function SignupBar() {
  return (
    <section className="container my-16">
      <div className="p-6 rounded-xl bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent)] border border-white/6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold">Sign up for free</h3>
          <p className="text-slate-300 text-sm mt-1">Start making music with AI — no credit card required.</p>
        </div>

        <div className="flex items-center gap-3 flex-1 md:flex-none md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="signup-input"
            aria-label="Email address"
          />

          <button className="px-4 py-2 rounded-md bg-gradient-to-r from-brand-500 to-warm-500 text-white font-medium shadow">
            Sign Up
          </button>
        </div>

        <div className="hidden md:flex gap-3">
          {promos.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.06, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="p-4 rounded-lg border border-white/10 min-w-[160px] bg-transparent"
            >
              <div className="font-semibold text-white">{p.title}</div>
              <div className="text-xs text-slate-300 mt-1">{p.subtitle}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
