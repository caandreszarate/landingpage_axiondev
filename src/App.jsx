import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';

const SocialProof = lazy(() => import('./components/SocialProof'));
const Services = lazy(() => import('./components/Services'));
const MidCTA = lazy(() => import('./components/MidCTA'));
const ValueProposition = lazy(() => import('./components/ValueProposition'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Trust = lazy(() => import('./components/Trust'));
const Process = lazy(() => import('./components/Process'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Suspense>
          <SocialProof />
          <Services />
          <MidCTA />
          <ValueProposition />
          <Portfolio />
          <Trust />
          <Process />
          <CTA />
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  );
}
