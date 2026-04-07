import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero/Hero';
import VideoIntro from '../components/sections/VideoIntro/VideoIntro';
import Features from '../components/sections/Features/Features';
import Testimonials from '../components/sections/Testimonials/Testimonials';
import CTA from '../components/sections/CTA/CTA';
import FloatingChat from '../components/shared/FloatingChat';

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans selection:bg-red/20 selection:text-navy">
      <Navbar />
      <main>
        <Hero />
        <VideoIntro />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
