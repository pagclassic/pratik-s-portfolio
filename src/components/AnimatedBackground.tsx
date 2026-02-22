
import { useState, useEffect } from "react";
import { useMode } from "@/contexts/ModeContext";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const { mode } = useMode();
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const baseCount = Math.floor((windowWidth * windowHeight) / 25000);
      const particleCount = mode === "vibecoder" ? Math.floor(baseCount * 1.5) : baseCount;
      
      const devColors = ["#1a1a2e", "#16213e", "#1b2430", "#0f172a", "#312e81", "#1e1b4b"];
      const vibeColors = ["#7c3aed", "#06b6d4", "#a855f7", "#22d3ee", "#c084fc", "#67e8f9", "#e879f9"];
      const colors = mode === "vibecoder" ? vibeColors : devColors;
      
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * windowWidth,
        y: Math.random() * windowHeight,
        size: mode === "vibecoder" ? Math.random() * 4 + 1.5 : Math.random() * 3 + 1,
        speed: mode === "vibecoder" ? Math.random() * 0.8 + 0.2 : Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    const handleResize = () => generateParticles();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mode]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 transition-colors duration-700 ${
        mode === "vibecoder" 
          ? "bg-gradient-to-b from-purple-950/90 to-gray-950" 
          : "bg-gradient-to-b from-gray-900 to-gray-950"
      }`} />
      
      {/* Glow orbs */}
      <motion.div
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-700 ${
          mode === "vibecoder" ? "bg-purple-500/10" : "bg-primary/5"
        }`}
        animate={mode === "vibecoder" ? { scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl transition-colors duration-700 ${
          mode === "vibecoder" ? "bg-cyan-400/10" : "bg-accent/5"
        }`}
        animate={mode === "vibecoder" ? { scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] } : {}}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {mode === "vibecoder" && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-3xl"
          animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      )}
      
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            backgroundColor: particle.color,
            opacity: mode === "vibecoder" ? 0.6 : 0.4,
            transform: `translateY(${Math.sin(Date.now() * particle.speed * 0.001) * 10}px)`,
            transition: "transform 1s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
