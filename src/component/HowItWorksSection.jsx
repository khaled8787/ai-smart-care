import { motion } from "framer-motion";
import { FaUserPlus, FaClipboardCheck, FaCalendarCheck, FaHome, FaSmile } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Sign Up",
    description: "Create your account quickly and securely.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Choose Service",
    description: "Select the healthcare service you need.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Schedule Appointment",
    description: "Book appointments with doctors or caregivers.",
  },
  {
    icon: <FaHome />,
    title: "Get Home Care",
    description: "Receive professional care at your doorstep.",
  },
  {
    icon: <FaSmile />,
    title: "Stay Healthy",
    description: "Track and maintain your health effortlessly.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-20 bg-[#0A0E1A] overflow-hidden">
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
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 max-w-2xl mx-auto text-lg"
        >
          Follow these simple steps to get the best AI-powered healthcare experience.
        </motion.p>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-4 text-cyan-400 text-3xl">
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

export default HowItWorksSection;
