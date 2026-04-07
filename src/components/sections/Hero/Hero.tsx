import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Award, CheckCircle2, Star, Users } from 'lucide-react';
import { heroImages, heroWords } from './hero.data';
import { useRotatingWords } from './useRotatingWords';
import SectionBadge from '../../shared/SectionBadge';

export default function Hero() {
  const currentWordIndex = useRotatingWords(heroWords.length, 3000);

  return (
    <section
      id="home"
      className="h-[100svh] max-h-[100svh] box-border pt-[calc(var(--navbar-height)+1rem)] pb-7 md:pb-10 overflow-hidden flex items-center"
    >
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left w-full"
          >
            <SectionBadge icon={<Star size={14} />} label="Top Rated English Tutor" />

            <h1 className="text-[1.95rem] sm:text-[2.35rem] md:text-[2.9rem] lg:text-[3.6rem] font-extrabold leading-tight mb-4 md:mb-6 flex flex-col items-center lg:items-start">
              <span className="block opacity-95 mb-1 lg:mb-2 text-navy/80">Master English</span>
              <span className="block text-navy">with</span>
              <span className="block h-[1.2em] relative w-full flex justify-center lg:justify-start mt-2 md:mt-3 whitespace-nowrap">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -30, scale: 1.1, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="bg-red text-navy px-2.5 py-1 md:px-4 md:py-1.5 rounded-xl md:rounded-2xl inline-block absolute shadow-lg"
                  >
                    {heroWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-sm sm:text-[0.95rem] md:text-base lg:text-lg mb-5 md:mb-7 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Professional, personalized English lessons designed to help you achieve fluency, perfect your pronunciation,
              and unlock global opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
              <button className="w-full sm:w-auto bg-red text-navy px-5 py-2.5 md:px-7 md:py-3 rounded-xl font-bold text-sm md:text-base hover:bg-red/90 transition-colors duration-300 flex items-center justify-center gap-2">
                Start Your Journey <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto bg-white text-navy border-2 border-gray-200 px-5 py-2.5 md:px-7 md:py-3 rounded-xl font-bold text-sm md:text-base hover:border-navy hover:bg-gray-50 transition-colors duration-300">
                View Methodology
              </button>
            </div>

            <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-5 text-xs md:text-sm font-medium text-navy/60">
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
            className="flex-1 relative w-full max-w-[18rem] sm:max-w-xs md:max-w-sm lg:max-w-[31rem] mt-5 lg:mt-0 lg:ml-auto"
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

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] lg:aspect-square max-w-full mx-auto bg-navy/5">
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
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:-bottom-4 sm:left-2 sm:translate-x-0 md:-bottom-6 md:-left-6 bg-white p-2 md:p-3 rounded-[1.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-3 md:gap-4 z-20 max-w-[calc(100%-1rem)] sm:max-w-none"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-red/10 rounded-2xl flex items-center justify-center text-red">
                <Users size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold text-navy">500+</p>
                <p className="text-[10px] md:text-xs font-medium text-navy/60">Happy Students</p>
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
              className="absolute top-10 -right-8 bg-white p-2 rounded-[1.2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-3 z-20 hidden md:flex"
            >
              <div className="w-9 h-9 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600">
                <Star size={18} className="fill-yellow-600" />
              </div>
              <div>
                <p className="text-base font-bold text-navy">4.9/5</p>
                <p className="text-[10px] font-medium text-navy/60">Average Rating</p>
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
              className="absolute bottom-1/3 -right-6 bg-white p-2 rounded-[1.2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-3 z-20 hidden sm:flex"
            >
              <div className="w-9 h-9 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <Award size={18} />
              </div>
              <div>
                <p className="text-base font-bold text-navy">Certified</p>
                <p className="text-[10px] font-medium text-navy/60">TEFL Expert</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
