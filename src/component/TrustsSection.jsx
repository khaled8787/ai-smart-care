import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  { label: "Patients Served", value: 1200 },
  { label: "Doctors Onboard", value: 85 },
  { label: "Caregivers", value: 200 },
  { label: "AI Checkups Done", value: 5000 },
];

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 20);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 20);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
      {count}
    </span>
  );
};

const TrustSection = () => {
  return (
    <section className="relative py-20 bg-[#0B0F1A] overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-white"
        >
          Trusted by Thousands Around the World
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 max-w-2xl mx-auto text-lg"
        >
          AI Smart Care Platform is empowering patients, doctors, and caregivers with seamless healthcare solutions powered by artificial intelligence.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-xl py-8 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform"
            >
              <Counter value={item.value} />
              <p className="mt-2 text-white/70 text-sm md:text-base">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
