import { useState, useCallback, useEffect } from 'react';

import { SUCCESS_ANIMATION_DURATION } from '../components/SuccessAnimation';

export function useNumberGame() {
  const [currentNumber, setCurrentNumber] = useState<string>('1');
  const [numbers, setNumbers] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const initNumbers = useCallback(() => {
    return Array.from({ length: 9 }, (_, i) => i + 1)
      .sort(() => Math.random() - 0.5)
      .map(String);
  }, []);

  const pickNextNumber = useCallback(() => {
    setNumbers(prev => {
      if (prev.length === 0) {
        const newNumbers = initNumbers();
        setCurrentNumber(newNumbers[newNumbers.length - 1]);
        return newNumbers.slice(0, -1);
      }
      setCurrentNumber(prev[prev.length - 1]);
      return prev.slice(0, -1);
    });
    setColorIndex(prev => (prev + 1) % 6);
  }, [initNumbers]);

  useEffect(() => {
    if (numbers.length === 0) {
      const initialNumbers = initNumbers();
      setNumbers(initialNumbers.slice(0, -1));
      setCurrentNumber(initialNumbers[initialNumbers.length - 1]);
    }
  }, [initNumbers]);

  const handleCorrectGuess = useCallback(() => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      pickNextNumber();
    }, SUCCESS_ANIMATION_DURATION * 1000); // Increased slightly to match new animation duration
  }, [pickNextNumber]);

  return {
    currentNumber,
    showSuccess,
    colorIndex,
    handleCorrectGuess
  };
}