import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <ValueProposition />
        <Portfolio />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
