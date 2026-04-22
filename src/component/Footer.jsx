import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#050B1A] text-white overflow-hidden">

      {/* Glow Background Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              AI
            </div>
            <h2 className="text-2xl font-bold">SmartCare</h2>
          </div>
          <p className="text-white/70 leading-relaxed">
            AI-powered smart healthcare & care service platform.  
            Building the future of digital care with intelligence, trust, and innovation.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-white/70">
            {["Home", "Services", "Doctors", "Caregivers", "AI Assistant", "Dashboard"].map(
              (item, i) => (
                <li key={i}>
                  <Link to="/" className="hover:text-cyan-400 transition">
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-5">Services</h3>
          <ul className="space-y-3 text-white/70">
            {[
              "AI Health Assistant",
              "Doctor Appointment",
              "Home Care Service",
              "Emergency Support",
              "Medicine Reminder",
              "Health Analytics",
            ].map((item, i) => (
              <li key={i} className="hover:text-cyan-400 transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social + Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-5">Connect With Us</h3>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaYoutube].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:text-cyan-400 transition cursor-pointer"
                >
                  <Icon />
                </motion.a>
              )
            )}
          </div>

          {/* Newsletter */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <p className="text-sm text-white/70 mb-3">
              Subscribe for updates & AI health insights
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l-lg bg-black/40 border border-white/10 text-white outline-none"
              />
              <button className="px-4 py-2 rounded-r-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold">
                Join
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} SmartCare AI. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <FaHeart className="text-red-500" /> by SmartCare Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
