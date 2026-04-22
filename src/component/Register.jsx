import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-[#050B1A] flex items-center justify-center px-6 py-20 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md bg-white/5 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/10"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center">
          Create Account
        </h2>

        <p className="text-white/60 text-center mt-2">
          Join AI SmartCare today
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5">

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400"
          />

          {/* Role Select */}
          <select
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
          >
            <option className="bg-[#050B1A]">Select Role</option>
            <option className="bg-[#050B1A]">User</option>
            <option className="bg-[#050B1A]">Doctor</option>
            <option className="bg-[#050B1A]">Caregiver</option>
          </select>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg"
          >
            Register Now
          </motion.button>
        </form>

        {/* Login Link */}
        <p className="text-white/60 text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
