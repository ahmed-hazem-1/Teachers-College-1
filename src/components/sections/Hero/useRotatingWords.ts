import { useEffect, useState } from 'react';

export function useRotatingWords(totalItems: number, intervalMs = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (totalItems <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs, totalItems]);

  return currentIndex;
}
