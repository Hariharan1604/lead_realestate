import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import Technology from '@/components/sections/Technology';
import Testimonials from '@/components/sections/Testimonials';
import CtaBanner from '@/components/sections/CtaBanner';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <About />
      <Services />
      <HowItWorks />
      <Technology />
      <Testimonials />
      <CtaBanner />
      <Contact />
    </>
  );
}
