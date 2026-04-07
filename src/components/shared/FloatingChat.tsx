import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, Mail, Facebook, Github, X } from 'lucide-react';
import { useState } from 'react';

const contactButtons = [
  { id: 'whatsapp', icon: MessageCircle, color: 'bg-[#25D366]', label: 'WhatsApp', href: 'https://wa.me/#' },
  { id: 'phone', icon: Phone, color: 'bg-blue-500', label: 'Call Us', href: 'tel:#' },
  { id: 'email', icon: Mail, color: 'bg-red-500', label: 'Email', href: 'mailto:#' },
  { id: 'facebook', icon: Facebook, color: 'bg-[#1877F2]', label: 'Facebook', href: 'https://facebook.com/#' },
];

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, pointerEvents: 'none' }}
            animate={{ opacity: 1, pointerEvents: 'auto' }}
            exit={{ opacity: 0, pointerEvents: 'none' }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full pb-4 px-4 flex flex-col items-center gap-3 origin-bottom"
          >
            {contactButtons.map((btn, index) => (
              <motion.a
                key={btn.id}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: { 
                    delay: (contactButtons.length - 1 - index) * 0.05, 
                    type: 'spring',
                    stiffness: 400,
                    damping: 25
                  } 
                }}
                exit={{ 
                  opacity: 0, 
                  y: 10,
                  scale: 0.8,
                  transition: { duration: 0.15 } 
                }}
                whileHover={{ scale: 1.1 }}
                className={`${btn.color} text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg group relative`}
                aria-label={btn.label}
              >
                <btn.icon size={22} />
                <span className="absolute right-full mr-3 px-2 py-1 bg-navy text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
                  {btn.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 ${
          isOpen ? 'bg-navy text-white' : 'bg-red text-navy'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
