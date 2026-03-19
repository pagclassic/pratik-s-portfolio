
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMode } from '@/contexts/ModeContext';

const LogoAnimation: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { mode } = useMode();

  // Determine which suffix to show
  const suffix = mode === 'vibecoder'
    ? isHovered ? 'roud Vibecoder' : 'ratik'
    : isHovered ? 'ortfolio' : 'ratik';

  return (
    <div
      className="relative cursor-pointer flex items-baseline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Always-visible "P" */}
      <span className={`text-2xl font-bold transition-colors duration-300 ${
        mode === 'vibecoder' ? 'text-purple-400' : 'text-accent'
      }`}>
        P
      </span>

      {/* Animated suffix */}
      <div className="relative overflow-hidden min-w-0">
        <AnimatePresence mode="wait">
          <motion.span
            key={suffix}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="block text-2xl font-bold whitespace-nowrap text-foreground"
          >
            {suffix}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LogoAnimation;
