import { useRef } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { StaggerContainer, StaggerItem } from './FadeIn';
import Section from './Section';
import CTAButton from './CTAButton';
import { CONTENT } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';
import { trackPricingCTAClick, trackSectionView } from '../utils/analytics';
import { useOnceInView } from '../hooks/useOnceInView';

const PKG_SLUGS = ['landing-page', 'full-website', 'automation'];

const cardHover = {
  y: -8,
  transition: { type: 'spring', stiffness: 300, damping: 20 },
};

const CHECK = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400 shrink-0 mt-0.5">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const CLOCK = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export default function Offers() {
  const lang = useLanguage();
  const t = CONTENT[lang].offers;

  const sentinelRef = useRef(null);
  useOnceInView(sentinelRef, () => trackSectionView('pricing_section_view', lang));

  return (
    <Section id="offers" border>
      <div ref={sentinelRef} />
      <div className="mb-16 max-w-3xl">
        <FadeIn>
          <p className="text-sm text-accent uppercase tracking-widest mb-4">{t.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6 leading-tight">
            {t.title1}
            <br />
            <span className="text-accent">{t.title2}</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            {t.description}
            <span className="text-neutral-200 font-medium">{t.descriptionHighlight}</span>
            {t.descriptionSuffix}
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-center">
        {t.packages.map((pkg, i) => (
          <StaggerItem key={pkg.name}>
            <motion.div
              whileHover={cardHover}
              className={`group relative h-full flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
                pkg.highlighted
                  ? 'border-accent/60 bg-gradient-to-b from-accent/[0.08] to-accent/[0.02] shadow-[0_0_80px_rgba(99,102,241,0.15)] md:scale-[1.04] z-10'
                  : 'border-neutral-800/50 hover:border-accent/30 bg-neutral-900/20 hover:bg-neutral-900/50'
              } hover:shadow-[0_10px_50px_rgba(99,102,241,0.08)]`}
            >
              {pkg.badge && (
                <div className="absolute top-0 right-6">
                  <span className="inline-block bg-accent text-white text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1 rounded-b-lg">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="p-8 flex-1">
                <div className="flex items-center gap-2 text-accent text-sm font-medium mb-1">
                  {CLOCK}
                  <span>{pkg.timeline}</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-100 mb-1">{pkg.name}</h3>
                <p className="text-accent font-semibold text-sm mb-4">{pkg.tagline}</p>
                <p className="text-neutral-400 text-[0.938rem] leading-relaxed mb-6">{pkg.description}</p>
                <div className="space-y-3 mb-6">
                  {pkg.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-neutral-300">
                      {CHECK}
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-neutral-800/40">
                  <p className="text-2xl font-bold text-neutral-100">{pkg.price}</p>
                  <p className="text-xs text-neutral-500 mt-1">{t.oneTime}</p>
                </div>
              </div>

              <div className="px-8 pb-8">
                <CTAButton
                  label={pkg.cta}
                  microcopy={pkg.ctaMicro}
                  className="w-full"
                  onClick={() => trackPricingCTAClick(PKG_SLUGS[i], lang)}
                />
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.3}>
        <div className="mt-12 text-center">
          <p className="text-emerald-400/80 text-sm mb-3">{t.guaranteeLine}</p>
          <p className="text-neutral-500 text-sm">
            {t.bottomText}{' '}
            <a href="#contact" className="text-accent hover:text-accent-light transition-colors underline underline-offset-2">
              {t.bottomLink}
            </a>
            {t.bottomSuffix}
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
