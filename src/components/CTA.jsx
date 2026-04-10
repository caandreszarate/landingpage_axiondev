import FadeIn from './FadeIn';

export default function CTA() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6">
            Ready to build your next project?
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            Let's talk about how I can help you launch faster with AI-powered development.
          </p>
          <a
            href="mailto:contact@axiondev.com"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white font-medium px-10 py-4 rounded-lg transition-colors text-lg"
          >
            Book a call
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
