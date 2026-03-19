
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMode } from '@/contexts/ModeContext';

const LogoAnimation: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { mode } = useMode();

  // Dev mode: "Pratik" → "Portfolio"
  const pratikLetters = 'ratik'.split('');
  const portfolioLetters = 'ortfolio'.split('');

  // Vibe mode: "Pratik" → "Proud Vibecoder"
  const proudVibecoderLetters = 'roud Vibecoder'.split('');

  return (
    <div
      className="relative cursor-pointer flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Always-visible "P" */}
      <span className={`text-2xl font-bold ${mode === 'vibecoder' ? 'text-purple-400' : 'text-accent'}`}>
        P
      </span>

      <div className="relative overflow-hidden">
        {/* "ratik" — fades out on hover */}
        <motion.div
          className="flex"
          animate={{ opacity: isHovered ? 0 : 1, x: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {pratikLetters.map((letter, i) => (
            <span key={`pratik-${i}`} className="text-2xl font-bold">
              {letter}
            </span>
          ))}
        </motion.div>

        {/* Hover reveal — mode dependent */}
        <motion.div
          className="flex absolute top-0 left-0 whitespace-nowrap"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {mode === 'vibecoder'
            ? proudVibecoderLetters.map((letter, i) => (
                <motion.span
                  key={`vibe-${i}`}
                  initial={{ y: 10, opacity: 0 }}
                  animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.02, ease: 'easeOut' }}
                  className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))
            : portfolioLetters.map((letter, i) => (
                <motion.span
                  key={`portfolio-${i}`}
                  initial={{ y: 10, opacity: 0 }}
                  animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.03, ease: 'easeOut' }}
                  className="text-2xl font-bold"
                >
                  {letter}
                </motion.span>
              ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoAnimation;
