import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Award, CheckCircle2, Star, Users } from 'lucide-react';
import { heroImages, heroWords } from './hero.data';
import { useRotatingWords } from './useRotatingWords';

export default function Hero() {
  const currentWordIndex = useRotatingWords(heroWords.length, 3000);

  return (
    <section id="home" className="pt-28 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red/30 text-navy font-medium text-xs md:text-sm mb-6 md:mb-8">
              <Star size={16} className="fill-navy" />
              <span>Top Rated English Tutor</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 md:mb-8 flex flex-col items-center lg:items-start">
              <span className="block opacity-95 mb-1 lg:mb-2 text-navy/80">Master English</span>
              <span className="block text-navy">with</span>
              <span className="block h-[1.3em] relative w-full flex justify-center lg:justify-start mt-2 md:mt-4 whitespace-nowrap">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -30, scale: 1.1, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="bg-red text-navy px-3 py-1 md:px-5 md:py-1.5 rounded-xl md:rounded-2xl inline-block absolute shadow-lg"
                  >
                    {heroWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Professional, personalized English lessons designed to help you achieve fluency, perfect your pronunciation,
              and unlock global opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
              <button className="w-full sm:w-auto bg-red text-navy px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-red/90 transition-colors duration-300 flex items-center justify-center gap-2">
                Start Your Journey <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto bg-white text-navy border-2 border-gray-200 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:border-navy hover:bg-gray-50 transition-colors duration-300">
                View Methodology
              </button>
            </div>

            <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 text-xs md:text-sm font-medium text-navy/60">
              <div className="flex items-center gap-1.5 md:gap-2">
                <CheckCircle2 size={16} className="text-yellow-500 md:w-[18px] md:h-[18px]" /> Native Speaker
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <CheckCircle2 size={16} className="text-yellow-500 md:w-[18px] md:h-[18px]" /> Certified TEFL
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <CheckCircle2 size={16} className="text-yellow-500 md:w-[18px] md:h-[18px]" /> 5+ Years Exp.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none mt-10 lg:mt-0"
          >
            <div className="absolute -inset-4 md:-inset-12 z-0 pointer-events-none">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 -left-4 w-64 h-64 md:w-80 md:h-80 bg-red/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -90, 0],
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-8 right-0 w-64 h-64 md:w-80 md:h-80 bg-navy/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
              />
            </div>

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] lg:aspect-square max-w-sm md:max-w-2xl mx-auto lg:max-w-none bg-navy/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentWordIndex}
                  src={heroImages[currentWordIndex]}
                  alt="Nature landscape background representing calm and confidence in learning"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-navy/10 pointer-events-none"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
              transition={{
                opacity: { delay: 0.8 },
                scale: { delay: 0.8 },
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 },
              }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:-bottom-4 sm:left-2 sm:translate-x-0 md:-bottom-6 md:-left-6 bg-white p-3 md:p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 md:gap-4 z-20 max-w-[calc(100%-1rem)] sm:max-w-none"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-red/10 rounded-full flex items-center justify-center text-red">
                <Users size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-navy">500+</p>
                <p className="text-xs md:text-sm font-medium text-navy/60">Happy Students</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, 15, 0] }}
              transition={{
                opacity: { delay: 1 },
                scale: { delay: 1 },
                y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
              }}
              className="absolute top-10 -right-8 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-20 hidden md:flex"
            >
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                <Star size={20} className="fill-yellow-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-navy">4.9/5</p>
                <p className="text-xs font-medium text-navy/60">Average Rating</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { delay: 1.2 },
                scale: { delay: 1.2 },
                y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
              }}
              className="absolute bottom-1/3 -right-6 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-20 hidden sm:flex"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Award size={20} />
              </div>
              <div>
                <p className="text-lg font-bold text-navy">Certified</p>
                <p className="text-xs font-medium text-navy/60">TEFL Expert</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
