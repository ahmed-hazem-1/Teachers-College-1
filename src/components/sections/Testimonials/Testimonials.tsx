import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageSquareQuote, Star } from 'lucide-react';
import SectionBadge from '../../shared/SectionBadge';
import { testimonials } from './testimonials.data';
import { useTestimonialCarousel } from './useTestimonialCarousel';

export default function Testimonials() {
  const { currentIndex, next, prev } = useTestimonialCarousel(testimonials.length);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionBadge
              icon={
                <div className="w-6 h-6 bg-red rounded-full flex items-center justify-center">
                  <MessageSquareQuote size={12} className="text-navy" />
                </div>
              }
              label="Testimonials"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-navy mb-4"
          >
            Reviews from our users
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-xl text-base md:text-lg"
          >
            Join our community and get unlimited access to powerful study tools designed for faster, better English
            learning.
          </motion.p>
        </div>

        <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[480px] mt-12 w-full max-w-6xl mx-auto overflow-hidden sm:overflow-visible">
          <div className="relative w-full h-[450px] md:h-[400px] flex items-center justify-center">
            <AnimatePresence>
              {[-2, -1, 0, 1, 2].map((offset) => {
                const globalIndex = currentIndex + offset;
                const i = ((globalIndex % testimonials.length) + testimonials.length) % testimonials.length;
                const testimonial = testimonials[i];

                const isActive = offset === 0;
                const isVisible = Math.abs(offset) <= 1;
                
                return (
                  <motion.div
                    key={globalIndex}
                    initial={{ opacity: 0, x: offset * 400, scale: 0.8 }}
                    animate={{
                      opacity: isVisible ? (isActive ? 1 : 0.6) : 0,
                      x: offset * (isActive ? 0 : 350), 
                      scale: isActive ? 1 : 0.85,
                      zIndex: isActive ? 30 : 10 - Math.abs(offset),
                      filter: isActive ? 'blur(0px)' : 'blur(2px)',
                    }}
                    exit={{ opacity: 0, x: offset * 400, scale: 0.8 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                    className="absolute w-full max-w-[92%] sm:max-w-xl md:max-w-2xl px-2 sm:px-4 lg:px-0"
                  >
                    <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-2 md:p-3 flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
                      <div className="w-full md:w-[240px] lg:w-[280px] h-48 sm:h-56 md:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden flex-shrink-0 relative group">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center p-3 sm:p-4 md:py-6 md:pr-6 md:pl-0">
                        <p className="text-sm sm:text-base md:text-xl text-navy font-medium leading-relaxed mb-4 md:mb-8 line-clamp-3 sm:line-clamp-4">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex flex-row items-center justify-between gap-4 border-t border-gray-100 pt-4 md:pt-6 mt-auto">
                          <div>
                            <p className="font-bold text-navy text-base md:text-lg">{testimonial.name}</p>
                            <p className="text-gray-500 text-xs md:text-sm">{testimonial.role}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] md:text-sm text-gray-500 mb-0.5 md:mb-1">Grade</p>
                            <div className="flex items-center gap-1">
                              <span className="font-bold text-navy text-base md:text-lg mr-0.5 md:mr-1">
                                {testimonial.rating.toFixed(1)}
                              </span>
                              <div className="flex text-orange-400">
                                {[...Array(5)].map((_, idx) => (
                                  <Star key={idx} size={12} className="fill-current md:w-[14px] md:h-[14px]" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto mt-8 flex items-center justify-center lg:justify-end gap-4 px-2 sm:px-8 lg:px-0 relative z-40">
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
              aria-label="Show previous testimonial"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
              aria-label="Show next testimonial"
            >
              <ChevronRight size={22} />
            </button>
          </div>
          <button className="bg-red text-navy px-8 py-3 rounded-xl font-bold text-base hover:bg-red/90 transition-colors duration-300 shadow-sm">
            Start learning
          </button>
        </div>
      </div>
    </section>
  );
}
