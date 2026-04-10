import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { StaggerContainer, StaggerItem } from './FadeIn';
import Section from './Section';
import CTAButton from './CTAButton';
import { PACKAGES } from '../data/content';

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
  return (
    <Section id="offers" border>
      <div className="mb-16 max-w-3xl">
        <FadeIn>
          <p className="text-sm text-accent uppercase tracking-widest mb-4">Packages</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6 leading-tight">
            Pick your speed.
            <br />
            <span className="text-accent">Every plan prints money.</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            No hourly billing. No scope creep. You get a{' '}
            <span className="text-neutral-200 font-medium">fixed price, a hard deadline, and deliverables that pay for themselves</span>.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {PACKAGES.map((pkg) => (
          <StaggerItem key={pkg.name}>
            <motion.div
              whileHover={cardHover}
              className={`group relative h-full flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
                pkg.highlighted
                  ? 'border-accent/50 bg-accent/[0.04] shadow-[0_0_60px_rgba(99,102,241,0.1)]'
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

                <h3 className="text-2xl font-bold text-neutral-100 mb-1">
                  {pkg.name}
                </h3>

                <p className="text-accent font-semibold text-sm mb-4">
                  {pkg.tagline}
                </p>

                <p className="text-neutral-400 text-[0.938rem] leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="space-y-3 mb-6">
                  {pkg.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-neutral-300">
                      {CHECK}
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-neutral-800/40">
                  <p className="text-2xl font-bold text-neutral-100">
                    {pkg.price}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    One-time investment. No recurring fees.
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8">
                <CTAButton
                  label={pkg.cta}
                  microcopy={pkg.ctaMicro}
                  className="w-full"
                />
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.3}>
        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm">
            Not sure which package fits?{' '}
            <a href="mailto:carlos@axiondev.dev" className="text-accent hover:text-accent-light transition-colors underline underline-offset-2">
              Let's talk
            </a>
            {' '}— I'll recommend the right one in under 5 minutes.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
