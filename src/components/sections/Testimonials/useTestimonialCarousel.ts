import { useEffect, useState } from 'react';

export function useTestimonialCarousel(totalItems: number, autoScrollMs = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [interactionCount, setInteractionCount] = useState(0);

  useEffect(() => {
    if (totalItems <= 0) {
      setCurrentIndex(0);
      return;
    }

    setCurrentIndex((prev) => prev % totalItems);
  }, [totalItems]);

  useEffect(() => {
    if (totalItems <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, autoScrollMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [autoScrollMs, interactionCount, totalItems]);

  const next = () => {
    if (totalItems <= 0) {
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setInteractionCount((count) => count + 1);
  };

  const prev = () => {
    if (totalItems <= 0) {
      return;
    }

    setCurrentIndex((current) => current - 1);
    setInteractionCount((count) => count + 1);
  };

  return {
    currentIndex,
    next,
    prev,
  };
}
