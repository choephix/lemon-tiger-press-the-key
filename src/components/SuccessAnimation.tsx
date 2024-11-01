import React from 'react';
import { motion } from 'framer-motion';

const animals = ["🦊", "🐸", "🦁", "🐯", "🐼", "🐨", "🐮", "🐷", "🐺", "🐵", "🐰", "🐙", "🐻", "🐶", "🐱", "🐭", "🐎", "🦎", "🐍", "🐋", "🐬", "🦈", "🐟", "🦀", "🦆", "🐥", "🕷️"];

export const SUCCESS_ANIMATION_DURATION = 2.700;

export function SuccessAnimation() {
  const animal = React.useMemo(() => 
    animals[Math.floor(Math.random() * animals.length)],
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Burst stars */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-5 h-5 bg-yellow-200 rounded-full"
            initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
            animate={{
              scale: [0, 1, 0],
              x: [0, Math.cos(i * Math.PI / 10) * 500],
              y: [0, Math.sin(i * Math.PI / 10) * 500],
              opacity: [1, 0]
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              times: [0, 0.7, 1],
              delay: .2
            }}
          />
        ))}
      </div>

      {/* Main emoji animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          scale: [0.5, 1.2, 1.2, 0.5],
          y: [0, -20, -20, 0]
        }}
        transition={{ 
          duration: SUCCESS_ANIMATION_DURATION + .2,
          times: [0, 0.2, 0.8, 1],
          ease: "easeInOut"
        }}
      >
        <div className="relative">
          <div className="text-[12rem] filter drop-shadow-[0_0_24px_rgba(0,0,0,0.4)]">
            {animal}
          </div>
          
          {/* Sparkle effects */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial="hidden"
            animate="visible"
          >
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                  x: [0, Math.cos((i + .25) * Math.PI / 5) * 300],
                  y: [0, Math.sin((i + .25) * Math.PI / 5) * 300],
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.1,
                }}
              >
                ✨
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}