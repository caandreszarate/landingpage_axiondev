import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import Starfield from './components/Starfield';
import MouseTrail from './components/MouseTrail';
import ErrorBoundary from './components/ErrorBoundary';
import SectionSkeleton, {
  SocialProofSkeleton,
  ServicesSkeleton,
  PortfolioSkeleton,
  OffersSkeleton,
  FAQSkeleton,
  FooterSkeleton,
  ComparisonSkeleton,
  ValuePropositionSkeleton,
} from './components/SectionSkeleton';

const SocialProof = lazy(() => import('./components/SocialProof'));
const Services = lazy(() => import('./components/Services'));
const MidCTA = lazy(() => import('./components/MidCTA'));
const ValueProposition = lazy(() => import('./components/ValueProposition'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Trust = lazy(() => import('./components/Trust'));
const Process = lazy(() => import('./components/Process'));
const Offers = lazy(() => import('./components/Offers'));
const Comparison = lazy(() => import('./components/Comparison'));
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
          <ErrorBoundary>
            <Suspense fallback={<SocialProofSkeleton />}>
              <SocialProof />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<ServicesSkeleton />}>
              <Services />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton lines={2} />}>
              <MidCTA />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<PortfolioSkeleton />}>
              <Portfolio />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<ValuePropositionSkeleton />}>
              <ValueProposition />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton lines={4} />}>
              <Trust />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton variant="list" />}>
              <Process />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<ComparisonSkeleton />}>
              <Comparison />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<OffersSkeleton />}>
              <Offers />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<FAQSkeleton />}>
              <FAQ />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton lines={2} />}>
              <CTA />
            </Suspense>
          </ErrorBoundary>
        </main>
        <ErrorBoundary>
          <Suspense fallback={<FooterSkeleton />}>
            <Footer />
          </Suspense>
        </ErrorBoundary>
        <WhatsAppButton />
      </div>
    </div>
  );
}
