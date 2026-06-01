import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, Text } from "@react-three/drei";
import { Suspense } from "react";
import Particles from "react-tsparticles";
import AISmartCareBox from "./Aismartcarebox";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050B1A] text-white">
      
      {/* Animated Particles Background */}
      <Particles
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: ["#00FFFF", "#0F52BA", "#0ff"] },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1.5, outModes: "out" },
            links: { enable: true, distance: 120, color: "#0ff", opacity: 0.2, width: 1 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Left Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        
        <div className="flex-1 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
          >
            AI Smart Care Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-lg"
          >
            Experience next-generation healthcare with AI-powered diagnosis, smart care, and seamless appointments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a
              href="#get-started"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white shadow-lg hover:scale-105 transition-transform"
            >
              Get Started
            </a>
          </motion.div>
        </div>

        {/* Right 3D Canvas */}
        <AISmartCareBox></AISmartCareBox>
      </div>
    </section>
  );
};

export default HeroSection;
