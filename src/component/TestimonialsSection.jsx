import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Arman Hossain",
    role: "Patient",
    feedback: "AI Smart Care helped me book appointments easily and track my health like never before.",
  },
  {
    name: "Dr. Sabrina Noor",
    role: "Doctor",
    feedback: "The platform’s AI system makes patient monitoring and diagnostics extremely efficient.",
  },
  {
    name: "Rashed Khan",
    role: "Caregiver",
    feedback: "Managing patient care has become seamless and highly organized with this tool.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 bg-[#0B0F1A] overflow-hidden">
      {/* Glow background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-white"
        >
          What Our Users Say
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
            >
              <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />
              <p className="text-white/80 text-sm mb-4">"{item.feedback}"</p>
              <h3 className="text-white font-semibold">{item.name}</h3>
              <span className="text-white/60 text-sm">{item.role}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
