import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Doctors", path: "/doctors" },
  { name: "Caregivers", path: "/caregivers" },
  { name: "AI Assistant", path: "/ai" },
  { name: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // 🔥 Later replace with real auth context
  const user = null; // if logged in → user object

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            AI
          </div>
          <span className="text-xl font-bold text-white tracking-wide">
            SmartCare
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition ${
                  isActive
                    ? "text-cyan-400"
                    : "text-white/80 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* 🔥 Auth Links */}
          {!user ? (
            <>
              <NavLink
                to="/login"
                className="text-sm font-medium text-white/80 hover:text-white transition"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg"
              >
                Register
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/dashboard"
              className="text-sm font-medium text-white/80 hover:text-white transition"
            >
              Dashboard
            </NavLink>
          )}

          {/* CTA Button */}
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(true)} className="text-white text-3xl">
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <span className="text-xl font-bold text-white">SmartCare</span>
              <button onClick={() => setOpen(false)} className="text-white text-3xl">
                <HiX />
              </button>
            </div>

            <div className="flex flex-col gap-6 px-6 py-10">
              {navLinks.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="text-lg text-white/80 hover:text-white transition"
                >
                  {item.name}
                </NavLink>
              ))}

              {/* 🔥 Mobile Auth */}
              {!user && (
                <>
                  <NavLink
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="text-lg text-white/80 hover:text-white transition"
                  >
                    Login
                  </NavLink>

                  
                </>
              )}

              <Link to="/register" onClick={() => setOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
