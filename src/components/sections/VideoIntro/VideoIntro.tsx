import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import SectionBadge from '../../shared/SectionBadge';

export default function VideoIntro() {
  return (
    <section id="introduction" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionBadge
              icon={
                <div className="w-6 h-6 bg-red rounded-full flex items-center justify-center">
                  <Play size={12} className="text-navy ml-0.5" />
                </div>
              }
              label="Introduction"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-navy mb-4"
          >
            See How We Learn
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-xl mx-auto text-base md:text-lg"
          >
            Watch this short introduction to discover our unique teaching methodology and how we can help you achieve your
            English goals.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 aspect-video group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-red/20 to-blue-500/20 blur-2xl opacity-50 -z-10"></div>

          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/LXb3EKWsInQ?si=placeholder"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
