import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiHome } from "react-icons/fi";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050B1A] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      
      {/* Dynamic Background Simulation (Same as Register for Visual Sync) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] opacity-[0.02] bg-[radial-gradient(#00f0ff_1px,transparent_1px)] bg-[size:20px_20px] animate-[spin_300s_linear_infinite]" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite_1s]" />
      </div>

      {/* Floating Home Controller */}
      <motion.button
        onClick={() => navigate("/")}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(6,182,212,0.4)" }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-8 left-8 z-50 p-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl text-cyan-400 hover:text-white transition-colors duration-300"
      >
        <FiHome size={20} />
      </motion.button>

      {/* 3D Cinematic Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: 15, perspective: 1000 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md bg-white/5 backdrop-blur-xl rounded-3xl p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group"
      >
        {/* Glow Line Effect */}
        <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center tracking-tight">
          Welcome Back
        </h2>

        <p className="text-white/60 text-center mt-2 text-sm">
          Login to your SmartCare account
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* Animated Input: Email */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="relative group/field"
          >
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within/field:text-cyan-400 group-focus-within/field:scale-110 transition-all duration-300">
              <FiMail size={18} />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400 focus:bg-white/10 shadow-inner transition-all duration-300"
            />
          </motion.div>

          {/* Animated Input: Password */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group/field"
          >
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within/field:text-cyan-400 group-focus-within/field:scale-110 transition-all duration-300">
              <FiLock size={18} />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400 focus:bg-white/10 shadow-inner transition-all duration-300"
            />
          </motion.div>

          {/* Forgot Password Link with Micro-Interaction */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-cyan-400 hover:text-cyan-300 transition duration-300 relative group/link"
            >
              Forgot Password?
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-300 group-hover/link:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* Button with Cinematic Particle Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-2 relative group/btn"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-md opacity-40 group-hover/btn:opacity-80 transition-opacity duration-300" />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg tracking-wide overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 transform skew-x-12" />
              Login Now
            </motion.button>
          </motion.div>
        </form>

        {/* Register Link */}
        <p className="text-white/60 text-center mt-8 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-cyan-400 hover:text-cyan-300 font-medium transition duration-300 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-400 ml-1"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;