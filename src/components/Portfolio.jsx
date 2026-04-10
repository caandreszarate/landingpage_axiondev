import FadeIn from './FadeIn';

const projects = [
  {
    name: 'Airport Management MVP',
    description: 'Built a migration control prototype with rapid deployment strategy.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    name: 'AI Landing Generator',
    description: 'Tool for generating high-converting landing pages using AI.',
    tags: ['AI', 'React', 'Vite'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm text-accent uppercase tracking-widest mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-16">
            Selected Work
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.15}>
              <div className="group relative overflow-hidden rounded-2xl border border-neutral-800/50 hover:border-accent/30 bg-neutral-900/30 p-8 md:p-10 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                        className="text-xs font-medium text-neutral-400 bg-neutral-800/60 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
