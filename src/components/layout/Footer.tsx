import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '../../logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-10 pb-6 md:pt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-12 mb-8 md:mb-12">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <img src={logo} alt="Teachers College Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
              <span className="font-bold text-lg md:text-xl tracking-tight text-navy">Teachers College</span>
            </div>
            <p className="max-w-sm mb-4 md:mb-6 text-sm md:text-base text-navy/70">
              Empowering professionals and students worldwide to communicate confidently in English.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-navy/40 hover:text-red transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-navy/40 hover:text-red transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-navy/40 hover:text-red transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-navy/40 hover:text-red transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-navy text-sm md:text-base mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#home" className="text-sm md:text-base hover:text-red transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#introduction" className="text-sm md:text-base hover:text-red transition-colors">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#methodology" className="text-sm md:text-base hover:text-red transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm md:text-base hover:text-red transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#trial-lesson" className="text-sm md:text-base hover:text-red transition-colors">
                  Trial Lesson
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-navy text-sm md:text-base mb-3 md:mb-4">Legal</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#" className="text-sm md:text-base hover:text-red transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base hover:text-red transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base hover:text-red transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 text-center text-[12px] md:text-sm text-navy/50">
          <p>&copy; {new Date().getFullYear()} Teachers College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
