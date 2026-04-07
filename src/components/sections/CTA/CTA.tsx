import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="trial-lesson" className="relative py-16 md:py-24 bg-navy text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-red/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>
      <div className="cta-starfield" aria-hidden="true">
        <div className="cta-stars-layer cta-stars-far"></div>
        <div className="cta-stars-layer cta-stars-mid"></div>
        <div className="cta-stars-layer cta-stars-near"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 !text-red"
        >
          Ready to Elevate Your English?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-xl !text-white mb-8 md:mb-10 max-w-2xl mx-auto"
        >
          Book a trial lesson today to discuss your goals and create a customized learning plan.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button className="w-full sm:w-auto bg-red text-navy px-8 py-4 md:px-12 md:py-5 rounded-2xl font-bold text-lg md:text-xl hover:bg-red/90 transition-colors duration-300 flex items-center justify-center gap-3 mx-auto shadow-lg shadow-red/20">
            Book Your Trial Lesson <ArrowRight size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
