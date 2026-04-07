import { AnimatePresence, motion } from 'motion/react';
import { BookOpen, Calendar, Globe, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { features } from './features.data';
import type { FeatureItem } from '../../../types/content';

const featureIcons = {
  conversation: MessageCircle,
  pronunciation: Globe,
  schedule: Calendar,
  materials: BookOpen,
} satisfies Record<FeatureItem['icon'], typeof MessageCircle>;

const AUTO_SCROLL_INTERVAL_MS = 3200;

export default function Features() {
  const [virtualIndex, setVirtualIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);

  useEffect(() => {
    if (features.length <= 1 || isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setVirtualIndex((current) => current + 1);
    }, AUTO_SCROLL_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, interactionCount]);

  const handleCardSelect = (slot: number) => {
    setVirtualIndex(slot);
    setInteractionCount((count) => count + 1);
  };

  const activeIndex = ((virtualIndex % features.length) + features.length) % features.length;
  const selectedFeature = features[activeIndex];

  const visibleSlots = [-2, -1, 0, 1, 2].map((offset) => virtualIndex + offset);

  return (
    <section id="methodology" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold mb-4"
          >
            Why Choose My Methodology?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg"
          >
            A proven approach that moves away from boring textbooks and focuses on practical, engaging, and effective
            language acquisition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div
              className="relative h-full min-h-[420px] lg:min-h-[500px] bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence>
                  {visibleSlots.map((slot) => {
                    const featureIndex = ((slot % features.length) + features.length) % features.length;
                    const feature = features[featureIndex];
                    const Icon = featureIcons[feature.icon];

                    const offset = slot - virtualIndex;
                    const isActive = offset === 0;
                    const isVisible = Math.abs(offset) <= 1;

                    return (
                      <motion.button
                        key={slot}
                        type="button"
                        onClick={() => handleCardSelect(slot)}
                        initial={{ opacity: 0, y: offset * 135, scale: 0.9 }}
                        animate={{
                          opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                          y: offset * 135,
                          scale: isActive ? 1 : 0.95,
                          rotate: isActive ? 0 : offset < 0 ? -2 : 2,
                          zIndex: isActive ? 10 : 5 - Math.abs(offset),
                        }}
                        exit={{ opacity: 0, y: offset * 135, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
                        className={`absolute w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] text-left p-4 rounded-2xl shadow-sm border transition-colors duration-300 transform-gpu ${
                          isActive
                            ? 'border-yellow-500 bg-yellow-100 shadow-md shadow-yellow-500/20'
                            : 'border-gray-100 bg-white hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-navy/5 text-navy rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon size={26} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-navy leading-tight">{feature.title}</h3>
                            <p className="text-sm text-navy/70 mt-1 [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="h-full bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFeature.id}
                  initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35 }}
                  className="h-full flex flex-col"
                >
                  <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                    <img src={selectedFeature.image} alt={selectedFeature.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 text-navy text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                      Teaching Method
                    </div>
                  </div>

                
                  <div className="p-5 sm:p-6 md:p-8 flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">{selectedFeature.title}</h3>
                    <p className="text-base md:text-lg text-navy/80 leading-relaxed mb-5">{selectedFeature.details}</p>

                    <div className="space-y-2">
                      {selectedFeature.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="mt-2 w-2 h-2 rounded-full bg-red flex-shrink-0"></span>
                          <p className="text-sm md:text-base text-navy/80">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
