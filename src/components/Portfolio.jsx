import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';
import Section, { SectionHeader } from './Section';
import CTAButton from './CTAButton';
import { CONTENT } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';
import { trackCalClick } from '../utils/analytics';

const metricVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function DetailBlock({ label, color, children }) {
  return (
    <div>
      <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${color}`}>{label}</p>
      <p className="text-neutral-400 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function CaseStudyCard({ project, t, index }) {
  const [open, setOpen] = useState(false);
  const regionId = `case-study-${index}`;

  return (
    <motion.div
      whileHover={{ y: -4, borderColor: 'rgba(99,102,241,0.3)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-900/20 transition-all duration-300 hover:shadow-[0_16px_56px_rgba(99,102,241,0.07)]"
    >
      {project.image && (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-neutral-800/50">
          <img
            src={project.image}
            alt={`${project.name} — ${project.sector}`}
            loading="lazy"
            width="1200"
            height="750"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
          {project.sector && (
            <span className="absolute left-4 top-4 rounded-full border border-accent/30 bg-neutral-950/70 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm">
              {project.sector}
            </span>
          )}
        </div>
      )}

      <div className="relative p-8 md:p-10">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-bold text-neutral-100 md:text-3xl">{project.name}</h3>
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 3, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-light"
            >
              {t.viewLive}
              <motion.svg
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </motion.svg>
            </motion.a>
          )}
        </div>

        {project.role && (
          <p className="mb-4 text-xs uppercase tracking-widest text-neutral-500">
            {t.roleLabel} · <span className="text-neutral-400 normal-case tracking-normal">{project.role}</span>
          </p>
        )}

        {project.summary && (
          <p className="mb-6 text-[0.938rem] leading-relaxed text-neutral-300">{project.summary}</p>
        )}

        <div className="mb-6 flex flex-wrap gap-x-8 gap-y-3 rounded-xl border border-neutral-800/40 bg-neutral-900/30 px-5 py-4">
          {project.metrics.map((metric, j) => (
            <motion.div
              key={metric.label}
              variants={metricVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + j * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-baseline gap-2"
            >
              <span className="text-xl font-bold text-neutral-100">{metric.value}</span>
              <span className="text-sm text-neutral-500">{metric.label}</span>
            </motion.div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={regionId}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-light"
        >
          {open ? t.collapseLabel : t.expandLabel}
          <motion.svg
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={regionId}
              role="region"
              aria-label={project.name}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 gap-8 pt-8 lg:grid-cols-3">
                <DetailBlock label={t.problemLabel} color="text-red-400/80">{project.problem}</DetailBlock>
                <DetailBlock label={t.solutionLabel} color="text-accent">{project.solution}</DetailBlock>
                <DetailBlock label={t.resultsLabel} color="text-emerald-400/80">{project.impact}</DetailBlock>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-neutral-800/50 pt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="cursor-default rounded-full bg-neutral-800/40 px-3 py-1 text-xs font-medium text-neutral-500 transition-colors duration-300 hover:bg-accent/15 hover:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const lang = useLanguage();
  const t = CONTENT[lang].portfolio;

  return (
    <Section id="portfolio">
      <FadeIn>
        <SectionHeader label={t.label} title={t.title} />
        <p className="text-neutral-400 text-lg -mt-10 mb-16 max-w-2xl">{t.tagline}</p>
      </FadeIn>

      <div className="flex flex-col gap-8">
        {t.projects.map((project, i) => (
          <FadeIn key={project.name} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
            <CaseStudyCard project={project} t={t} index={i} />
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-16 text-center">
          <p className="text-neutral-400 text-lg mb-6">
            {t.bottomLine}
            <span className="text-neutral-200 font-medium">{t.bottomHighlight}</span>
          </p>
          <CTAButton label={t.cta} microcopy={t.ctaMicro} urgency={t.urgencyLabel} onClick={() => trackCalClick('portfolio', lang)} />
        </div>
      </FadeIn>
    </Section>
  );
}
