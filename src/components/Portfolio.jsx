import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import Section, { SectionHeader } from './Section';
import { PROJECTS } from '../data/content';

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <FadeIn>
        <SectionHeader label="Portfolio" title="Selected Work" />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.name} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800/50 hover:border-accent/30 bg-neutral-900/30 p-8 md:p-10 transition-all duration-300 hover:shadow-[0_12px_48px_rgba(99,102,241,0.06)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-neutral-100 mb-3">
                  {project.name}
                </h3>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-neutral-400 bg-neutral-800/60 px-3 py-1 rounded-full transition-colors duration-300 group-hover:bg-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
