import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '../../logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 md:pt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Teachers College Logo" className="w-10 h-10 object-contain" />
              <span className="font-bold text-xl tracking-tight text-navy">Teachers College</span>
            </div>
            <p className="max-w-sm mb-6">
              Empowering professionals and students worldwide to communicate confidently in English.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-navy/60 hover:text-red transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-navy/60 hover:text-red transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-navy/60 hover:text-red transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-navy/60 hover:text-red transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-red transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#introduction" className="hover:text-red transition-colors">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-red transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-red transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#trial-lesson" className="hover:text-red transition-colors">
                  Trial Lesson
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-red transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Teachers College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
