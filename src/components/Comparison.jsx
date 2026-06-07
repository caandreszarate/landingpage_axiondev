import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import Section from './Section';
import CTAButton from './CTAButton';
import { CONTENT } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';
import { trackCalClick } from '../utils/analytics';

function renderCell(val, t, isAxion = false) {
  if (val === 'check') return (
    <>
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400 mx-auto">
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span className="sr-only">{t.yesLabel}</span>
    </>
  );
  if (val === 'cross') return (
    <>
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-700 mx-auto">
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
      <span className="sr-only">{t.noLabel}</span>
    </>
  );
  if (val === 'maybe') return <span className="text-neutral-600 text-sm mx-auto block text-center">{t.maybe}</span>;
  if (val === 'paid_extra') return <span className="text-neutral-500">{t.paidExtra}</span>;
  return <span className={isAxion ? 'text-emerald-400 font-semibold' : 'text-neutral-500'}>{val}</span>;
}

export default function Comparison() {
  const lang = useLanguage();
  const t = CONTENT[lang].comparison;

  return (
    <Section id="comparison" border>
      <FadeIn>
        <p className="text-sm text-accent uppercase tracking-widest mb-4">{t.label}</p>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-4 leading-tight">{t.title}</h2>
        <p className="text-neutral-400 text-lg mb-14 max-w-xl">{t.tagline}</p>
      </FadeIn>

      <FadeIn>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-neutral-950 to-transparent z-10 md:hidden rounded-r-2xl" />
          <div className="overflow-x-auto rounded-2xl border border-neutral-800/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-800/50">
                  <th className="text-left px-6 py-4 text-neutral-500 font-medium w-[40%]">{t.headers.feature}</th>
                  <th className="px-6 py-4 text-center w-[30%]">
                    <span className="text-accent font-bold text-base">AxionDev</span>
                  </th>
                  <th className="px-6 py-4 text-center text-neutral-500 font-medium w-[30%]">{t.headers.traditional}</th>
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className={`border-b border-neutral-800/30 transition-colors hover:bg-neutral-900/30 ${i % 2 === 0 ? 'bg-neutral-900/10' : ''}`}
                  >
                    <td className="px-6 py-4 text-neutral-300 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-accent/[0.03] border-x border-accent/10">
                      {renderCell(row.axion, t, true)}
                    </td>
                    <td className="px-6 py-4 text-center">{renderCell(row.traditional, t)}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-12 text-center">
          <CTAButton label={t.cta} microcopy={t.ctaMicro} onClick={() => trackCalClick('comparison', lang)} />
        </div>
      </FadeIn>
    </Section>
  );
}
