import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useParams, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import Starfield from './components/Starfield';
import MouseTrail from './components/MouseTrail';
import ErrorBoundary from './components/ErrorBoundary';
import { CONTENT } from './data/content';
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

const HASH_SCROLL_RETRIES = 40;
const HASH_SCROLL_DELAY = 100;
const HASH_SCROLL_TOLERANCE = 4;

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

function RootRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    const saved = localStorage.getItem('axiondev-lang');
    const preferred = saved ?? (navigator.language?.startsWith('es') ? 'es' : 'en');
    const lang = preferred === 'es' ? 'es' : 'en';
    navigate(`/${lang}`, { replace: true });
  }, [navigate]);
  return null;
}

function LandingPage() {
  const { lang } = useParams();
  const language = lang === 'es' ? 'es' : 'en';
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('axiondev-lang', language);
    document.documentElement.lang = language;

    const t = CONTENT[language].meta;
    document.title = t.title;

    const setMeta = (sel, val) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute('content', val);
    };

    setMeta('meta[name="description"]', t.description);
    setMeta('meta[property="og:title"]', t.ogTitle);
    setMeta('meta[property="og:description"]', t.ogDescription);
    setMeta('meta[property="og:url"]', `https://www.axiondev.dev/${language}`);
    setMeta('meta[name="twitter:title"]', t.twitterTitle);
    setMeta('meta[name="twitter:description"]', t.twitterDescription);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://www.axiondev.dev/${language}`);
  }, [language]);

  // Lazy sections can shift layout after the browser's native hash scroll runs.
  useEffect(() => {
    if (!location.hash) return undefined;

    const targetId = decodeURIComponent(location.hash.slice(1));
    let attempts = 0;
    let animationFrameId;
    let stableHits = 0;
    let timeoutId;

    const scrollToHash = () => {
      const el = document.getElementById(targetId);
      attempts += 1;

      if (el) {
        const targetTop = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: targetTop, behavior: 'auto' });

        if (Math.abs(window.scrollY - targetTop) <= HASH_SCROLL_TOLERANCE) {
          stableHits += 1;
        } else {
          stableHits = 0;
        }
      }

      if (stableHits < 3 && attempts < HASH_SCROLL_RETRIES) {
        timeoutId = window.setTimeout(() => {
          animationFrameId = window.requestAnimationFrame(scrollToHash);
        }, HASH_SCROLL_DELAY);
      }
    };

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    timeoutId = window.setTimeout(() => {
      animationFrameId = window.requestAnimationFrame(scrollToHash);
    }, 0);

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      if (timeoutId) window.clearTimeout(timeoutId);
    }
  }, [location.hash, language]);

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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/:lang" element={<LandingPage />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}
