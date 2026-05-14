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
    setMeta('meta[property="og:image:alt"]', t.imageAlt);
    setMeta('meta[name="twitter:image:alt"]', t.imageAlt);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://www.axiondev.dev/${language}`);

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: CONTENT[language].faq.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    };
    let faqScript = document.getElementById('faq-schema');
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.id = 'faq-schema';
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(faqSchema);
  }, [language]);

  // On direct URL load with hash (e.g. /en#services), lazy sections haven't mounted yet
  // when the browser's native scroll fires. We retry until the element appears.
  useEffect(() => {
    if (!location.hash) return;
    const targetId = decodeURIComponent(location.hash.slice(1));
    let timerId;

    const tryScroll = (attempt = 0) => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (attempt < 25) {
        timerId = setTimeout(() => tryScroll(attempt + 1), 200);
      }
    };

    // Initial delay lets lazy chunks and Framer Motion settle before first attempt
    timerId = setTimeout(() => tryScroll(), 500);
    return () => clearTimeout(timerId);
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
