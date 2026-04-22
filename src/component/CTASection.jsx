import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="relative py-24 bg-[#050B1A] overflow-hidden">
      {/* Glow Backgrounds */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl border border-white/10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
          >
            Ready to Experience <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Smart Healthcare?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 mt-6 text-lg max-w-2xl mx-auto"
          >
            Join thousands of users who trust our AI-powered platform for smarter,
            faster and more reliable healthcare solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <button className="group flex items-center gap-3 px-10 py-4 rounded-full text-lg font-semibold text-white 
              bg-gradient-to-r from-cyan-500 to-blue-600 
              hover:from-cyan-400 hover:to-blue-500 
              shadow-lg hover:shadow-cyan-500/30 
              transition-all duration-300">
              Get Started Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
