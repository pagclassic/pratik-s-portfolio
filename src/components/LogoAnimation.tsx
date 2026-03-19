
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMode } from '@/contexts/ModeContext';

const LogoAnimation: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { mode } = useMode();

  return (
    <div
      className="relative cursor-pointer flex items-baseline overflow-hidden"
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
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          {mode === 'vibecoder' && isHovered ? (
            <motion.span
              key="proud"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="block text-2xl font-bold text-foreground whitespace-nowrap"
            >
              roud Vibecoder
            </motion.span>
          ) : !isHovered || mode !== 'vibecoder' ? (
            <motion.span
              key="ratik"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="block text-2xl font-bold whitespace-nowrap"
            >
              {mode === 'vibecoder' ? 'ratik' : isHovered ? 'ortfolio' : 'ratik'}
            </motion.span>
          ) : (
            <motion.span
              key="portfolio"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="block text-2xl font-bold whitespace-nowrap"
            >
              ortfolio
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LogoAnimation;
