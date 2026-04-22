import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaChartLine } from "react-icons/fa";

const aiFeatures = [
  {
    icon: <FaRobot />,
    title: "AI Diagnosis",
    description: "Smart AI checks your symptoms and suggests possible conditions instantly.",
  },
  {
    icon: <FaBrain />,
    title: "Predictive Health",
    description: "AI predicts your health trends and suggests preventive measures.",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics & Insights",
    description: "Track your health metrics and get AI-driven insights in real-time.",
  },
];

const AIHighlightSection = () => {
  return (
    <section className="relative py-20 bg-[#050A1A] overflow-hidden">
      {/* Glow backgrounds */}
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
          Powered by Advanced AI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 max-w-2xl mx-auto text-lg"
        >
          Our platform leverages cutting-edge artificial intelligence to deliver smarter, faster, and more reliable healthcare solutions.
        </motion.p>

        {/* AI Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {aiFeatures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 text-cyan-400 text-4xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIHighlightSection;
