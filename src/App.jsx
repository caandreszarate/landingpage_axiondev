import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import Starfield from './components/Starfield';
import MouseTrail from './components/MouseTrail';

const SocialProof = lazy(() => import('./components/SocialProof'));
const Services = lazy(() => import('./components/Services'));
const MidCTA = lazy(() => import('./components/MidCTA'));
const ValueProposition = lazy(() => import('./components/ValueProposition'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Trust = lazy(() => import('./components/Trust'));
const Process = lazy(() => import('./components/Process'));
const Offers = lazy(() => import('./components/Offers'));
const FAQ = lazy(() => import('./components/FAQ'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="min-h-screen relative">
      <Starfield />
      <MouseTrail />
      <div className="relative z-10">
        <Navbar />
        <main>
        <Hero />
        <Suspense>
          <SocialProof />
          <Services />
          <MidCTA />
          <Portfolio />
          <ValueProposition />
          <Trust />
          <Process />
          <Offers />
          <FAQ />
          <CTA />
        </Suspense>
      </main>
        <Suspense>
          <Footer />
        </Suspense>
        <WhatsAppButton />
      </div>
    </div>
  );
}
