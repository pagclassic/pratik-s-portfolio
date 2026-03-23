
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMode } from '@/contexts/ModeContext';

const LogoAnimation: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { mode } = useMode();

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

      {/* Wavy animated suffix */}
      <div className="relative overflow-hidden min-w-0">
        <AnimatePresence mode="wait">
          <motion.span
            key={suffix}
            className="flex text-2xl font-bold whitespace-nowrap"
          >
            {suffix.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.25,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block text-foreground"
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LogoAnimation;
