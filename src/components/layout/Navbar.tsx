import { motion } from 'motion/react';
import { Facebook, Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import logo from '../../logo.png';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Introduction', id: 'introduction' },
  { label: 'Methodology', id: 'methodology' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Trial Lesson', id: 'trial-lesson' },
] as const;

type NavItemId = (typeof NAV_ITEMS)[number]['id'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<NavItemId>('home');

  useEffect(() => {
    const getHeaderOffset = () => {
      const header = document.querySelector('header');
      const height = header instanceof HTMLElement ? header.offsetHeight : 96;
      return height + 24;
    };

    const resolveActiveSection = (): NavItemId => {
      const navOffset = getHeaderOffset();
      let currentSection: NavItemId = NAV_ITEMS[0].id;

      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (!section) {
          continue;
        }

        if (section.getBoundingClientRect().top - navOffset <= 0) {
          currentSection = item.id;
        } else {
          break;
        }
      }

      return currentSection;
    };

    const updateActiveSection = () => {
      const current = resolveActiveSection();
      setActiveTab((previous) => (previous === current ? previous : current));
    };

    let ticking = false;
    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="Teachers College Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            <span className="font-extrabold text-lg sm:text-xl lg:text-2xl tracking-tight text-navy">Teachers College</span>
          </div>

          <nav className="hidden xl:flex items-center bg-gray-100/80 p-1.5 rounded-full">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 2xl:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-150 ${
                  activeTab === item.id
                    ? 'bg-white text-navy shadow-sm'
                    : 'text-navy/60 hover:text-navy hover:bg-gray-200/50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden xl:flex items-center space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy font-semibold px-6 py-2.5 rounded-full border border-gray-200 hover:bg-gray-50 text-sm flex items-center gap-2"
            >
              <Facebook size={18} /> Facebook
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-green-600 text-sm flex items-center gap-2"
            >
              <MessageCircle size={18} /> Contact Us
            </a>
          </div>

          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy hover:text-red transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4"
        >
          <div className="bg-gray-100/80 p-1.5 rounded-2xl flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 ${
                  activeTab === item.id
                    ? 'bg-white text-navy shadow-sm'
                    : 'text-navy/60 hover:text-navy hover:bg-gray-200/50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-navy font-semibold hover:bg-gray-50 py-3 border border-gray-200 rounded-xl flex items-center justify-center gap-2"
            >
              <Facebook size={20} /> Facebook
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
