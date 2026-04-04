import { motion } from 'motion/react';
import { BookOpen, Calendar, Globe, MessageCircle } from 'lucide-react';
import { features } from './features.data';
import type { FeatureItem } from '../../../types/content';

const featureIcons = {
  conversation: MessageCircle,
  pronunciation: Globe,
  schedule: Calendar,
  materials: BookOpen,
} satisfies Record<FeatureItem['icon'], typeof MessageCircle>;

export default function Features() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = featureIcons[feature.icon];

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:bg-red transition-colors duration-300 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-white/50 group-hover:!text-navy transition-colors duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-navy transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy/70 group-hover:text-navy/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
