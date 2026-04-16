import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import Section from './Section';
import CTAButton from './CTAButton';

const CHECK = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400 mx-auto">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const CROSS = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-700 mx-auto">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const MAYBE = <span className="text-neutral-600 text-sm mx-auto block text-center">Sometimes</span>;

const rows = [
  { feature: 'Delivery time',      axion: '< 14 days',  agency: '2–6 months', freelancer: '4–8 weeks' },
  { feature: 'Starting price',     axion: 'From $497',  agency: '$5K–$50K',   freelancer: '$1K–$5K'   },
  { feature: 'AI-powered build',   axion: CHECK,        agency: CROSS,        freelancer: CROSS        },
  { feature: 'Fixed price',        axion: CHECK,        agency: CROSS,        freelancer: MAYBE        },
  { feature: 'Money-back guarantee', axion: CHECK,      agency: CROSS,        freelancer: CROSS        },
  { feature: 'Conversion-focused', axion: CHECK,        agency: MAYBE,        freelancer: CROSS        },
  { feature: 'Direct communication', axion: CHECK,      agency: CROSS,        freelancer: CHECK        },
  { feature: 'Post-launch support', axion: CHECK,       agency: 'Paid extra', freelancer: CROSS        },
];

export default function Comparison() {
  return (
    <Section id="comparison" border>
      <FadeIn>
        <p className="text-sm text-accent uppercase tracking-widest mb-4">Why AxionDev</p>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-4 leading-tight">
          Stop overpaying for less.
        </h2>
        <p className="text-neutral-400 text-lg mb-14 max-w-xl">
          See how we compare to the alternatives — on every metric that matters.
        </p>
      </FadeIn>

      <FadeIn>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-neutral-950 to-transparent z-10 md:hidden rounded-r-2xl" />
        <div className="overflow-x-auto rounded-2xl border border-neutral-800/50">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-800/50">
                <th className="text-left px-6 py-4 text-neutral-500 font-medium w-[35%]">Feature</th>
                <th className="px-6 py-4 text-center w-[21%]">
                  <span className="text-accent font-bold text-base">AxionDev</span>
                </th>
                <th className="px-6 py-4 text-center text-neutral-500 font-medium w-[22%]">Agency</th>
                <th className="px-6 py-4 text-center text-neutral-500 font-medium w-[22%]">Freelancer</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`border-b border-neutral-800/30 transition-colors hover:bg-neutral-900/30 ${
                    i % 2 === 0 ? 'bg-neutral-900/10' : ''
                  }`}
                >
                  <td className="px-6 py-4 text-neutral-300 font-medium">{row.feature}</td>
                  <td className="px-6 py-4 text-center bg-accent/[0.03] border-x border-accent/10">
                    {typeof row.axion === 'string'
                      ? <span className="text-emerald-400 font-semibold">{row.axion}</span>
                      : row.axion}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {typeof row.agency === 'string'
                      ? <span className="text-neutral-500">{row.agency}</span>
                      : row.agency}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {typeof row.freelancer === 'string'
                      ? <span className="text-neutral-500">{row.freelancer}</span>
                      : row.freelancer}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-12 text-center">
          <CTAButton
            label="Get started — it's free →"
            microcopy="No commitment. 30-min strategy call."
          />
        </div>
      </FadeIn>
    </Section>
  );
}
