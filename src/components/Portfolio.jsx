import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import Section, { SectionHeader } from './Section';
import CTAButton from './CTAButton';
import { PROJECTS } from '../data/content';

const cardHover = {
  y: -4,
  transition: { type: 'spring', stiffness: 300, damping: 20 },
};

const metricVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <FadeIn>
        <SectionHeader label="Portfolio" title="Selected Work" />
        <p className="text-neutral-400 text-lg -mt-10 mb-16 max-w-2xl">
          Real projects. Real problems. Real results.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-8">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.name} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
            <motion.div
              whileHover={cardHover}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800/50 hover:border-accent/30 bg-neutral-900/20 transition-all duration-300 hover:shadow-[0_16px_56px_rgba(99,102,241,0.07)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-100">
                    {project.name}
                  </h3>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-light transition-colors"
                    >
                      View live
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div>
                    <p className="text-xs font-semibold text-red-400/80 uppercase tracking-widest mb-2">Problem</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">Solution</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-400/80 uppercase tracking-widest mb-2">Results</p>
                    <div className="space-y-3">
                      {project.metrics.map((metric, j) => (
                        <motion.div
                          key={metric.label}
                          variants={metricVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3 + j * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="flex items-baseline gap-2"
                        >
                          <span className="text-xl font-bold text-neutral-100">{metric.value}</span>
                          <span className="text-neutral-500 text-sm">{metric.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="origin-left border-t border-neutral-800/50"
                />
                <div className="flex flex-wrap items-center gap-2 pt-6">
                  {project.tags.map((tag, j) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + j * 0.05 }}
                      className="text-xs font-medium text-neutral-500 bg-neutral-800/40 px-3 py-1 rounded-full transition-colors duration-300 group-hover:text-neutral-400 group-hover:bg-neutral-800/70"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-16 text-center">
          <p className="text-neutral-400 text-lg mb-6">
            Want results like these?{' '}
            <span className="text-neutral-200 font-medium">Your project could be next.</span>
          </p>
          <CTAButton
            label="Start my project &rarr;"
            microcopy="Same quality. Same speed. Your business."
            urgency="Taking on 2 new clients this month"
          />
        </div>
      </FadeIn>
    </Section>
  );
}
