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

        <div className="relative flex items-center justify-center min-h-[320px] md:min-h-[400px] mt-12 w-full max-w-6xl mx-auto">
          <motion.div
            key={`prev-img-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="hidden lg:block absolute left-0 w-56 h-48 rounded-3xl overflow-hidden"
          >
            <img
              src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
              className="w-full h-full object-cover"
              alt=""
            />
          </motion.div>

          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 lg:left-[18%] z-20 w-12 h-12 bg-black text-white rounded-full items-center justify-center hover:scale-105 transition-transform shadow-xl"
            aria-label="Show previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="relative z-10 w-full max-w-3xl px-2 sm:px-8 lg:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-3 flex flex-col md:flex-row gap-6 items-stretch"
              >
                <div className="w-full md:w-[280px] h-64 md:h-[320px] rounded-3xl overflow-hidden flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center p-4 sm:py-6 sm:pr-6 sm:pl-2 md:pl-0">
                  <p className="text-base sm:text-lg md:text-xl text-navy font-medium leading-relaxed mb-6 sm:mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-100 pt-6 mt-auto">
                    <div>
                      <p className="font-bold text-navy text-lg">{testimonials[currentIndex].name}</p>
                      <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-sm text-gray-500 mb-1">Grade</p>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-navy text-lg mr-1">
                          {testimonials[currentIndex].rating.toFixed(1)}
                        </span>
                        <div className="flex text-orange-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="hidden md:flex absolute right-0 lg:right-[18%] z-20 w-12 h-12 bg-black text-white rounded-full items-center justify-center hover:scale-105 transition-transform shadow-xl"
            aria-label="Show next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <motion.div
            key={`next-img-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="hidden lg:block absolute right-0 w-56 h-48 rounded-3xl overflow-hidden"
          >
            <img
              src={testimonials[(currentIndex + 1) % testimonials.length].image}
              className="w-full h-full object-cover"
              alt=""
            />
          </motion.div>
        </div>

        <div className="mt-5 flex md:hidden items-center justify-center gap-3">
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

        <div className="w-full max-w-3xl mx-auto mt-8 flex justify-center lg:justify-end px-2 sm:px-8 lg:px-0">
          <button className="bg-red text-navy px-8 py-3 rounded-xl font-bold text-base hover:bg-red/90 transition-colors duration-300 shadow-sm">
            Start learning
          </button>
        </div>
      </div>
    </section>
  );
}
