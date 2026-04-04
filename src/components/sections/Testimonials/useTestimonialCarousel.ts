import { useEffect, useState } from 'react';

export function useTestimonialCarousel(totalItems: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (totalItems <= 0) {
      setCurrentIndex(0);
      return;
    }

    setCurrentIndex((prev) => prev % totalItems);
  }, [totalItems]);

  const next = () => {
    if (totalItems <= 0) {
      return;
    }

    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prev = () => {
    if (totalItems <= 0) {
      return;
    }

    setCurrentIndex((current) => (current - 1 + totalItems) % totalItems);
  };

  return {
    currentIndex,
    next,
    prev,
  };
}
