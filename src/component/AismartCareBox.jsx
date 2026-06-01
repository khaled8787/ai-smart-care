import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, animate } from "framer-motion";

// ─── Floating Particle ───────────────────────────────────────────────────────
function Particle({ style }) {
  return (
    <motion.div
      className="absolute rounded-full bg-white/40 pointer-events-none"
      style={style}
      initial={{ y: "100%", opacity: 0, scale: 0 }}
      animate={{ y: "-40px", opacity: [0, 0.7, 0.4, 0], scale: 1 }}
      transition={{
        duration: style.duration,
        delay: style.delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

// ─── Count-up Hook ────────────────────────────────────────────────────────────
function useCountUp(target, duration = 1800, delay = 800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const controls = animate(0, target, {
        duration: duration / 1000,
        ease: "easeOut",
        onUpdate: (v) => setValue(Math.floor(v)),
      });
      return () => controls.stop();
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);
  return value;
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AISmartCareBox() {
  const patients = useCountUp(12400, 1800, 800);
  const accuracy = useCountUp(98, 1600, 800);

  // Generate particles once
  const particles = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      width: `${2 + Math.random() * 3}px`,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 6,
    }))
  ).current;

  const features = [
    { icon: "🧠", label: "Smart symptom analysis", bg: "bg-blue-500/20" },
    { icon: "❤️", label: "Real-time health monitoring", bg: "bg-pink-500/20" },
    { icon: "💬", label: "24/7 AI doctor chat", bg: "bg-cyan-500/20" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // Outer wrapper — remove this div if embedding inside your own section
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1e] p-8">

      {/* Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-[340px] rounded-3xl overflow-hidden"
        style={{ background: "#060b14" }}
      >
        {/* ── Animated conic-gradient border ── */}
        <motion.div
          className="absolute inset-[-2px] rounded-[26px] -z-10"
          style={{
            background:
              "conic-gradient(from 0deg, #00c6ff, #0072ff, #7b2ff7, #f72585, #00c6ff)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner dark fill — clips over the border */}
        <div
          className="absolute inset-[2px] rounded-[22px] z-0"
          style={{ background: "#060b14" }}
        />

        {/* ── Glow blobs ── */}
        <motion.div
          className="absolute w-48 h-48 rounded-full -top-14 -right-10 blur-[60px] z-0"
          style={{ background: "#0072ff" }}
          animate={{ opacity: [0.13, 0.25], scale: [1, 1.15] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full -bottom-14 -left-10 blur-[60px] z-0"
          style={{ background: "#f72585" }}
          animate={{ opacity: [0.13, 0.25], scale: [1, 1.15] }}
          transition={{ duration: 3, delay: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />

        {/* ── Floating particles ── */}
        <div className="absolute inset-0 overflow-hidden rounded-[22px] pointer-events-none z-0">
          {particles.map((p) => (
            <Particle
              key={p.id}
              style={{
                left: p.left,
                width: p.width,
                height: p.width,
                duration: p.duration,
                delay: p.delay,
                bottom: 0,
              }}
            />
          ))}
        </div>

        {/* ── Content ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 p-10 pb-8"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-5">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium tracking-widest uppercase"
              style={{
                background: "rgba(0,114,255,0.15)",
                border: "1px solid rgba(0,114,255,0.35)",
                color: "#60aaff",
              }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#00c6ff" }}
                animate={{ opacity: [1, 0.15, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
              AI-Powered
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="font-black text-white leading-tight mb-2"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px" }}
          >
            AI{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00c6ff, #7b2ff7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Smart
            </span>
            <br />
            Care
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-sm leading-relaxed mb-7"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Your intelligent health companion — always available, always accurate.
          </motion.p>

          {/* Stats */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-2.5 mb-7">
            {[
              { id: "patients", value: `${patients.toLocaleString()}+`, label: "Patients" },
              { id: "accuracy", value: `${accuracy}%`, label: "Accuracy" },
              { id: "support",  value: "24/7",          label: "Support" },
            ].map((s) => (
              <div
                key={s.id}
                className="rounded-2xl py-3 px-2 text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  className="block font-bold text-white text-xl"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-[10px] uppercase tracking-widest mt-0.5 block"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2.5 mb-7">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${f.bg}`}
                >
                  {f.icon}
                </div>
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {f.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeUp}>
            <motion.button
              whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(0,114,255,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-2xl text-white text-sm font-bold tracking-wide relative overflow-hidden"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg, #0072ff, #7b2ff7)",
                border: "none",
                cursor: "pointer",
              }}
            >
              {/* Hover overlay */}
              <motion.span
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #00c6ff, #f72585)",
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get Started Free →</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}