import FadeIn from './FadeIn';
import { Icon } from './icons';
import { SOCIAL_LINKS } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <FadeIn>
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} AxionDev. All rights reserved.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-neutral-500 hover:text-neutral-200 transition-colors"
              >
                <Icon name={link.icon} />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
