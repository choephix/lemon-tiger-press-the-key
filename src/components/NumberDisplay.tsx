import React from 'react';
import { motion } from 'framer-motion';

interface NumberDisplayProps {
  number: string;
  textColor: string;
}

export function NumberDisplay({ number, textColor }: NumberDisplayProps) {
  return (
    <motion.div
      key="number"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`text-[35vmin] font-bold ${textColor} drop-shadow-[0_0_12px_rgba(0,0,0,0.2)] select-none`}
    >
      {number}
    </motion.div>
  );
}