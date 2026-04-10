import FadeIn from './FadeIn';
import CTAButton from './CTAButton';

export default function MidCTA() {
  return (
    <section className="py-20 px-6 border-t border-b border-neutral-800/50 bg-gradient-to-b from-neutral-900/40 to-transparent">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-neutral-400 text-lg md:text-xl mb-8 leading-relaxed">
            Stop waiting months for a website that doesn't convert.{' '}
            <span className="text-neutral-200 font-medium">Get yours in days.</span>
          </p>
          <CTAButton
            label="Let's talk about your project &rarr;"
            microcopy="Get your website in days, not weeks"
          />
        </FadeIn>
      </div>
    </section>
  );
}
