// ─── Non-translatable constants ────────────────────────────────────────────

export const CONTACT_EMAIL = 'mailto:carlos@axiondev.dev';

export const CAL_LINK =
  import.meta.env.VITE_CAL_LINK ?? 'https://app.cal.com/carlos-martinez-kv7rn4';

export const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER ?? '573105550703';

export const FORMSPREE_ID =
  import.meta.env.VITE_FORMSPREE_ID ?? 'xqegvoyk';

export const TECH_STACK = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'Tailwind CSS', color: '#38BDF8' },
  { name: 'OpenAI', color: '#74AA9C' },
  { name: 'Vercel', color: '#ffffff' },
  { name: 'MongoDB', color: '#47A248' },
];

export const SOCIAL_LINKS = [
  { label: 'Email', href: 'mailto:carlos@axiondev.dev', icon: 'mail' },
  { label: 'GitHub', href: 'https://github.com/caandreszarate', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/carlos-axiondev', icon: 'linkedin' },
];

export const ABOUT_BASE = {
  name: 'Carlos',
  photo: '/testimonials/fotoCarlos.jpg',
  available: true,
};

const WA_ES = `👋 Hola, gracias por escribir a *AxionDev*.

Soy especialista en desarrollo web con IA y ayudo a negocios a crear páginas que realmente generan clientes, no solo se ven bien.

Para poder ayudarte mejor, cuéntame:

1️⃣ ¿Qué tipo de proyecto necesitas? (landing, web completa, automatización, etc.)
2️⃣ ¿Ya tienes algo creado o empiezas desde cero?
3️⃣ ¿Cuál es tu objetivo principal? (ventas, leads, visibilidad)

Con eso te doy una propuesta clara y rápida 🚀

Si prefieres, también puedes agendar una llamada directa y lo vemos contigo paso a paso. 📅`;

const WA_EN = `👋 Hi! Thanks for reaching out to *AxionDev*.

I specialize in AI-powered web development and help businesses build websites that actually generate clients — not just look good.

To give you a clear proposal quickly, tell me:

1️⃣ What type of project do you need? (landing page, full website, automation, etc.)
2️⃣ Do you already have something built, or are you starting from scratch?
3️⃣ What's your main goal? (sales, leads, visibility)

With that I'll send you a fast, clear proposal 🚀

You can also book a direct call and we'll walk through it together step by step. 📅`;

export function getWhatsAppMessage(lang = 'en') {
  return lang === 'es' ? WA_ES : WA_EN;
}

// ─── Bilingual content ──────────────────────────────────────────────────────

export const CONTENT = {
  en: {
    meta: {
      title: 'AxionDev — Websites That Bring You Clients in Days, Not Months',
      description: 'Get a high-converting website live in under 14 days. AI-powered development that turns visitors into paying clients. Fixed pricing from $497. Money-back guarantee.',
      ogTitle: 'AxionDev — Websites That Bring You Clients in Days',
      ogDescription: 'Stop losing clients to a bad website. Get a conversion-optimized site live in under 14 days. 90% cheaper than agencies. Money-back guarantee.',
      twitterTitle: 'AxionDev — Websites That Bring You Clients in Days',
      twitterDescription: 'AI-powered websites live in under 14 days. Fixed pricing. Money-back guarantee.',
    },
    nav: {
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Work', href: '#portfolio' },
        { label: 'Process', href: '#process' },
        { label: 'Pricing', href: '#offers' },
        { label: 'Reviews', href: '#trust', lgOnly: true },
        { label: 'FAQ', href: '#faq', lgOnly: true },
      ],
      cta: 'Get started →',
    },
    hero: {
      urgencyLabel: 'Only 2 spots left this month',
      line1: 'I build websites that',
      line2: 'bring you clients.',
      line3: 'Not in months — in days.',
      subheadline: 'Agencies charge $10K+ and take months. I use AI to ship',
      subheadlineHighlight: ' conversion-optimized websites',
      subheadlineSuffix: ' that actually generate leads — for a fraction of the cost. Fixed price. Money-back guarantee.',
      checks: [
        '4.2% avg. conversion rate',
        'Live in under 14 days',
        '90% cheaper than agencies',
      ],
      primaryCta: 'Book a free strategy call →',
      primaryMicro: 'Get your website live in days — not months',
      secondaryCta: 'See pricing',
    },
    socialProof: {
      tagline: 'Results across 4 countries · Colombia, USA, Chile & Equatorial Guinea',
      techLabel: 'Built with',
      stats: [
        { value: '10+', label: 'Projects shipped on time' },
        { value: '< 14 days', label: 'Average delivery time' },
        { value: '4.2%', label: 'Avg. conversion rate' },
      ],
    },
    services: {
      label: 'What I deliver',
      title1: 'Three ways I put',
      title2: 'money back in your pocket.',
      description: 'Every service is built around one question:',
      descriptionHighlight: ' will this make or save you money?',
      descriptionSuffix: ' If the answer isn\'t yes, I don\'t build it.',
      cta: 'Get started — it\'s free →',
      ctaMicro: '30-min strategy call. No commitment.',
      items: [
        {
          title: 'AI-Built Websites',
          outcome: 'Go from zero to live in under 14 days',
          description: 'Full websites built with AI-accelerated workflows. While agencies are still drafting proposals, your site is already indexed and bringing in traffic.',
          proof: '3x faster than traditional development',
          icon: 'layers',
        },
        {
          title: 'Revenue Landing Pages',
          outcome: 'Turn ad spend into actual paying clients',
          description: 'Every element — headline, layout, CTA — is engineered to convert. Not just pretty pages, but sales machines that pay for themselves in the first month.',
          proof: '4.2% average conversion rate',
          icon: 'layout',
        },
        {
          title: 'Business Automation',
          outcome: 'Reclaim 10+ hours every week',
          description: 'Automated lead capture, follow-ups, reporting, and client onboarding. Stop doing manually what AI and smart integrations can handle while you sleep.',
          proof: 'Used by teams processing 500+ leads/month',
          icon: 'cog',
        },
      ],
    },
    midCta: {
      line1: 'Every week without a converting website is',
      highlight: ' money left on the table',
      suffix: '.',
      line2: 'Your competitors already have one. How much longer will you wait?',
      primaryCta: 'Book a free strategy call →',
      primaryMicro: '30 min — no commitment, no sales pitch',
      urgencyLabel: 'Only 2 spots left this month',
      whatsappLabel: 'Chat on WhatsApp',
    },
    portfolio: {
      label: 'Portfolio',
      title: 'Selected Work',
      tagline: 'Real projects. Real problems. Real results.',
      viewLive: 'View live',
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
      resultsLabel: 'Results',
      bottomLine: 'Want results like these?',
      bottomHighlight: ' Your project could be next.',
      cta: 'Start my project →',
      ctaMicro: 'Same quality. Same speed. Your business.',
      urgencyLabel: 'Only 2 spots left this month',
      projects: [
        {
          name: 'Airport Management MVP',
          problem: 'A government agency needed a migration control system but had no digital infrastructure — just paper logs and manual tracking causing delays and data loss.',
          solution: 'Built a full-stack prototype with real-time passenger tracking, role-based access, and automated reporting — delivered in 10 days using AI-assisted development.',
          metrics: [
            { value: '10 days', label: 'From zero to MVP' },
            { value: '85%', label: 'Faster processing' },
            { value: '3x', label: 'Data accuracy' },
          ],
          tags: ['React', 'Node.js', 'MongoDB', 'Express'],
          link: 'https://mvp-airport-management.vercel.app',
        },
        {
          name: 'AI Landing Generator',
          problem: 'Small businesses were paying $3K–$10K for landing pages that took weeks to deliver, with no guarantee of conversion performance.',
          solution: 'Created an AI-powered tool that generates conversion-optimized landing pages in minutes — with built-in copywriting, responsive design, and one-click deploy.',
          metrics: [
            { value: '< 5 min', label: 'Page generation' },
            { value: '4.2%', label: 'Avg. conversion rate' },
            { value: '90%', label: 'Cost reduction' },
          ],
          tags: ['AI', 'React', 'Vite', 'TailwindCSS'],
          link: 'https://taskmind-landing.vercel.app',
        },
        {
          name: 'AgroControl Platform',
          problem: 'A farming operation in Colombia managed 50+ hectares with spreadsheets — losing track of harvest cycles, costs, and worker assignments.',
          solution: 'Delivered a full management system with real-time dashboards, cost tracking per lot, and harvest cycle analytics — replacing 6 disconnected spreadsheets.',
          metrics: [
            { value: '2 weeks', label: 'Full delivery' },
            { value: '100%', label: 'Digital adoption' },
            { value: '40%', label: 'Cost visibility gain' },
          ],
          tags: ['JavaScript', 'Express', 'MongoDB', 'Chart.js'],
          link: 'https://agrocontrol-nu.vercel.app/#/login',
        },
      ],
    },
    valueProposition: {
      label: 'The difference',
      title1: 'Faster than agencies.',
      title2: 'Smarter than freelancers.',
      description: 'Traditional agencies take months and charge a fortune. Most freelancers can\'t deliver strategy. I use',
      descriptionHighlight: ' AI-powered development',
      descriptionMiddle: ' to give you both — premium quality at startup speed, with every decision focused on one thing:',
      descriptionHighlight2: ' growing your business',
      descriptionSuffix: '.',
      cta: 'Let\'s build yours →',
      ctaMicro: 'Free strategy call — live in days, not months',
      highlights: [
        {
          title: 'Ship in days, not months',
          description: 'AI-powered workflows compress weeks of agency timelines into days. Your project goes live while competitors are still scheduling kickoff calls.',
          icon: 'speed',
        },
        {
          title: 'Agency quality, freelancer speed',
          description: 'You get the strategic thinking and polish of a top agency — without the bloated team, endless meetings, or six-figure invoices.',
          icon: 'quality',
        },
        {
          title: 'AI baked into every pixel',
          description: 'From code generation to performance optimization, AI isn\'t an afterthought — it\'s the engine. Every decision is data-informed and every build is automated.',
          icon: 'ai',
        },
        {
          title: 'Built to convert, not just to exist',
          description: 'Every page is engineered for one goal: turning visitors into clients. No vanity design, no wasted sections — just results.',
          icon: 'convert',
        },
      ],
    },
    trust: {
      about: {
        label: 'About me',
        role: 'AI-Powered Web Developer',
        bio: "I've helped startups, agencies, and growing businesses across Colombia, the US, Chile, and Equatorial Guinea launch digital products that actually drive revenue. I combine full-stack development with AI workflows to ship faster, cheaper, and with better results than traditional agencies.",
        location: 'Colombia · Remote',
        availableLabel: 'Available for work',
      },
      stats: [
        { value: '10+', label: 'Projects shipped' },
        { value: '100%', label: 'On-time delivery' },
        { value: '4', label: 'Countries served' },
        { value: '< 14 days', label: 'Avg. turnaround' },
      ],
      testimonialLabel: 'Testimonials',
      testimonialTitle: "Don't take my word for it.",
      testimonialTagline: 'Worked with startups, agencies, and growing businesses across LATAM and the US.',
      testimonials: [
        {
          quote: 'We needed a platform fast and Carlos delivered in under two weeks. The AI-driven approach meant we skipped months of back-and-forth. Our team was genuinely impressed.',
          name: 'Daniel Rojas',
          role: 'CTO',
          company: 'AgriTech Startup',
          initials: 'DR',
          photo: '/testimonials/fotoDaniel.jpeg',
          avatarColor: 'from-blue-500 to-indigo-600',
          result: 'Launched MVP in 10 days',
        },
        {
          quote: "I've worked with agencies that charged 10x more and delivered less. AxionDev gave us a landing page that actually converts — our lead gen doubled in the first month.",
          name: 'Sarah Mitchell',
          role: 'Founder',
          company: 'GrowthLab',
          initials: 'SM',
          photo: '/testimonials/fotoSara.jpeg',
          avatarColor: 'from-emerald-500 to-teal-600',
          result: '2x lead generation in 30 days',
        },
        {
          quote: 'The speed is unreal. What I expected to take a month was live in 5 days. Clean code, great communication, and the final product exceeded expectations.',
          name: 'Andrés Velásquez',
          role: 'Operations Director',
          company: 'LogiCargo',
          initials: 'AV',
          photo: '/testimonials/fotoAndres.jpeg',
          avatarColor: 'from-amber-500 to-orange-600',
          result: 'Delivered 5x ahead of schedule',
        },
        {
          quote: 'Carlos automated our entire client onboarding — what used to take 3 hours now takes 10 minutes. We freed up our team to focus on closing deals instead of chasing paperwork.',
          name: 'María Fernanda López',
          role: 'CEO',
          company: 'Impulsa Digital',
          initials: 'ML',
          photo: '/testimonials/fotomaria.jpeg',
          avatarColor: 'from-pink-500 to-rose-600',
          result: '18x faster onboarding',
        },
      ],
      guaranteesLabel: 'Zero risk',
      guaranteesTitle: 'Your investment is protected.',
      guarantees: [
        {
          title: 'Money-back guarantee',
          description: "If you're not satisfied with the final delivery, you get a full refund. No questions asked.",
          icon: 'shield',
        },
        {
          title: 'Fixed price, no surprises',
          description: 'The price we agree on is the price you pay. No hidden fees, no scope creep charges.',
          icon: 'lock',
        },
        {
          title: 'Post-launch support',
          description: 'Every project includes free support after launch. You are never left alone with a broken site.',
          icon: 'support',
        },
      ],
    },
    process: {
      label: 'How it works',
      title: 'Simple process. Fast results.',
      cta: 'Start your project →',
      ctaMicro: 'Discovery call is free — no strings attached',
      steps: [
        {
          number: '01',
          title: 'Discovery',
          description: 'We discuss your goals, audience, and requirements to define the perfect scope.',
        },
        {
          number: '02',
          title: 'Design & Build',
          description: 'I design and develop your project using AI-enhanced workflows for speed and quality.',
        },
        {
          number: '03',
          title: 'Launch',
          description: 'Your project goes live with optimized performance, SEO, and ongoing support.',
        },
      ],
    },
    comparison: {
      label: 'Why AxionDev',
      title: 'Stop overpaying for less.',
      tagline: 'See how we compare to the alternatives — on every metric that matters.',
      headers: { feature: 'Feature', agency: 'Agency', freelancer: 'Freelancer' },
      maybe: 'Sometimes',
      paidExtra: 'Paid extra',
      cta: 'Get started — it\'s free →',
      ctaMicro: 'No commitment. 30-min strategy call.',
      rows: [
        { feature: 'Delivery time', axion: '< 14 days', agency: '2–6 months', freelancer: '4–8 weeks' },
        { feature: 'Starting price', axion: 'From $497', agency: '$5K–$50K', freelancer: '$1K–$5K' },
        { feature: 'AI-powered build', axion: 'check', agency: 'cross', freelancer: 'cross' },
        { feature: 'Fixed price', axion: 'check', agency: 'cross', freelancer: 'maybe' },
        { feature: 'Money-back guarantee', axion: 'check', agency: 'cross', freelancer: 'cross' },
        { feature: 'Conversion-focused', axion: 'check', agency: 'maybe', freelancer: 'cross' },
        { feature: 'Direct communication', axion: 'check', agency: 'cross', freelancer: 'check' },
        { feature: 'Post-launch support', axion: 'check', agency: 'paid_extra', freelancer: 'cross' },
      ],
    },
    offers: {
      label: 'Packages',
      title1: 'Pick your speed.',
      title2: 'Every plan prints money.',
      description: 'No hourly billing. No scope creep. You get a',
      descriptionHighlight: ' fixed price, a hard deadline, and deliverables that pay for themselves',
      descriptionSuffix: '.',
      oneTime: 'One-time investment. No recurring fees.',
      bottomText: "Not sure which package fits?",
      bottomLink: "Let's talk",
      bottomSuffix: " — I'll recommend the right one in under 5 minutes.",
      packages: [
        {
          name: 'Landing Page',
          timeline: '5 days',
          price: 'From $497',
          tagline: 'Designed to convert and ready to launch',
          description: 'A single high-converting page engineered to turn visitors into paying clients — live and indexed before your competitors finish their first draft.',
          deliverables: [
            'Custom responsive design (mobile-first)',
            'Conversion-optimized copy & layout',
            'Contact form + WhatsApp integration',
            'SEO meta tags & Open Graph setup',
            'Analytics & speed optimization',
            'Free hosting setup on Vercel',
          ],
          highlighted: false,
          cta: 'Get my landing page →',
          ctaMicro: 'Live and converting in 5 business days',
        },
        {
          name: 'Full Website',
          timeline: '10–14 days',
          price: 'From $997',
          tagline: 'Your entire digital presence, built to sell',
          description: 'A complete multi-page website that positions your brand, captures leads 24/7, and pays for itself within the first month of going live.',
          deliverables: [
            'Up to 5 custom pages',
            'Blog or portfolio section',
            'Lead capture system (forms + CRM)',
            'WhatsApp + email automation',
            'SEO & performance optimization',
            'Admin panel or CMS integration',
            '30 days post-launch support',
          ],
          highlighted: true,
          badge: 'Most Popular',
          cta: 'Build my website →',
          ctaMicro: 'Your full digital presence — ready in 2 weeks',
        },
        {
          name: 'Automation Suite',
          timeline: '7–10 days',
          price: 'From $797',
          tagline: 'Stop working harder. Start working smarter.',
          description: 'Custom AI-powered automations that eliminate repetitive tasks, capture leads while you sleep, and give you back 10+ hours every single week.',
          deliverables: [
            'Workflow audit & automation roadmap',
            'Up to 3 custom automations',
            'Lead capture & auto-follow-up',
            'CRM or spreadsheet integration',
            'AI-powered email/chat responses',
            'Dashboard with real-time metrics',
            'Training session + documentation',
          ],
          highlighted: false,
          cta: 'Automate my business →',
          ctaMicro: 'Reclaim 10+ hours/week starting in 7 days',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title1: "Questions you're probably",
      title2: 'already thinking.',
      description: "If your question isn't here,",
      descriptionLink: 'just ask',
      descriptionSuffix: '. I reply within 24 hours.',
      bottomText: 'Still have doubts? Let\'s clear them in a 5-minute call.',
      cta: 'Book a free call →',
      ctaMicro: 'No commitment. No pitch. Just answers.',
      items: [
        {
          question: 'How can you deliver a full website in under 14 days?',
          answer: 'AI-powered workflows. I use AI for code generation, design iteration, and testing — cutting out the manual bottlenecks that make agencies take months. The result is the same quality in a fraction of the time.',
        },
        {
          question: "What if I'm not happy with the final result?",
          answer: "You get a full money-back guarantee. If the final delivery doesn't meet what we agreed on, you pay nothing. I also include revision rounds during the build so you're never surprised.",
        },
        {
          question: 'Do you only work with startups?',
          answer: "No. I work with startups, small businesses, agencies, and even government projects. If you need a website or automation that drives revenue, I can help — regardless of your industry or size.",
        },
        {
          question: "What's included in the fixed price?",
          answer: 'Everything: design, development, copywriting assistance, SEO setup, hosting configuration, and post-launch support. No hidden fees, no hourly surprises. The price we agree on is the price you pay.',
        },
        {
          question: 'Can you work with my existing website or brand?',
          answer: "Absolutely. I can redesign, optimize, or build on top of what you already have. During the discovery call, we'll figure out the fastest path to results — whether that's a fresh start or an upgrade.",
        },
        {
          question: 'What happens after my site goes live?',
          answer: 'Every package includes post-launch support (7–30 days depending on the plan). I monitor for bugs, help with content updates, and make sure everything runs smoothly. After that, I\'m always a message away.',
        },
      ],
    },
    cta: {
      urgencyLabel: 'Only 2 spots left this month',
      title1: 'Stop losing clients to a',
      title2: "website that doesn't convert.",
      description: 'Every day without a high-converting website is',
      descriptionHighlight: ' revenue walking out the door',
      descriptionSuffix: ". Let's fix that this week.",
      checks: ['Free strategy call', '24h response guaranteed', 'Money-back guarantee'],
      preferText: 'prefer to chat directly?',
      whatsappLabel: 'Chat on WhatsApp — reply in 5 min',
    },
    contactForm: {
      projectTypeLabel: 'What do you need?',
      projectTypes: [
        { value: 'landing-page', label: 'Landing Page' },
        { value: 'full-website', label: 'Full Website' },
        { value: 'automation', label: 'Automation' },
        { value: 'not-sure', label: 'Not sure yet' },
      ],
      budgetLabel: 'Estimated budget',
      budgetOptional: '(optional)',
      budgets: [
        { value: 'under-500', label: 'Under $500' },
        { value: '500-1000', label: '$500–$1,000' },
        { value: '1000-3000', label: '$1,000–$3,000' },
        { value: '3000+', label: '$3,000+' },
      ],
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Tell me about your project...',
      submitIdle: 'Send my request →',
      submitSending: 'Sending...',
      successTitle: 'Message sent!',
      successMessage: "I'll get back to you within 24 hours.",
      successCallLink: 'Want a faster reply? Book a direct call →',
      errorMessage: 'Something went wrong. Try emailing me directly.',
      emailLabel: 'Or reach out directly via',
      emailLinkLabel: 'email',
    },
    footer: {
      readyTitle: 'Ready to get started?',
      readySubtitle: 'Book a free 30-min strategy call — no commitment.',
      bookCta: 'Book a free call →',
    },
    whatsapp: {
      ariaLabel: 'Chat on WhatsApp',
      tooltipTitle: 'Reply in under 5 min',
      tooltipDescription: "Tell me about your project — I'll send you a free quote.",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  es: {
    meta: {
      title: 'AxionDev — Sitios Web Que Te Traen Clientes en Días, No Meses',
      description: 'Obtén un sitio web de alta conversión en menos de 14 días. Desarrollo con IA que convierte visitantes en clientes. Precio fijo desde $497. Garantía de devolución.',
      ogTitle: 'AxionDev — Sitios Web Que Te Traen Clientes en Días',
      ogDescription: 'Deja de perder clientes por un sitio malo. Obtén un sitio optimizado para conversión en menos de 14 días. 90% más económico que las agencias. Garantía de devolución.',
      twitterTitle: 'AxionDev — Sitios Web Que Te Traen Clientes en Días',
      twitterDescription: 'Sitios web con IA en menos de 14 días. Precio fijo. Garantía de devolución.',
    },
    nav: {
      links: [
        { label: 'Servicios', href: '#services' },
        { label: 'Trabajo', href: '#portfolio' },
        { label: 'Proceso', href: '#process' },
        { label: 'Precios', href: '#offers' },
        { label: 'Reseñas', href: '#trust', lgOnly: true },
        { label: 'FAQ', href: '#faq', lgOnly: true },
      ],
      cta: 'Comenzar →',
    },
    hero: {
      urgencyLabel: 'Solo 2 cupos disponibles este mes',
      line1: 'Creo sitios web que',
      line2: 'te traen clientes.',
      line3: 'No en meses — en días.',
      subheadline: 'Las agencias cobran $10K+ y tardan meses. Uso IA para crear',
      subheadlineHighlight: ' sitios web optimizados para conversión',
      subheadlineSuffix: ' que generan leads reales — a una fracción del costo. Precio fijo. Garantía de devolución.',
      checks: [
        '4.2% de tasa de conversión promedio',
        'En vivo en menos de 14 días',
        '90% más económico que las agencias',
      ],
      primaryCta: 'Agenda una llamada estratégica gratis →',
      primaryMicro: 'Tu sitio en línea en días, no en meses',
      secondaryCta: 'Ver precios',
    },
    socialProof: {
      tagline: 'Resultados en 4 países · Colombia, EE.UU., Chile y Guinea Ecuatorial',
      techLabel: 'Construido con',
      stats: [
        { value: '10+', label: 'Proyectos entregados a tiempo' },
        { value: '< 14 días', label: 'Tiempo promedio de entrega' },
        { value: '4.2%', label: 'Tasa de conversión promedio' },
      ],
    },
    services: {
      label: 'Qué ofrezco',
      title1: 'Tres formas en que pongo',
      title2: 'dinero de vuelta en tu bolsillo.',
      description: 'Cada servicio se construye en torno a una pregunta:',
      descriptionHighlight: ' ¿esto te generará o ahorrará dinero?',
      descriptionSuffix: ' Si la respuesta no es sí, no lo construyo.',
      cta: 'Comenzar — es gratis →',
      ctaMicro: 'Llamada estratégica de 30 min. Sin compromiso.',
      items: [
        {
          title: 'Sitios Web con IA',
          outcome: 'De cero a publicado en menos de 14 días',
          description: 'Sitios web completos construidos con flujos de trabajo acelerados por IA. Mientras las agencias todavía redactan propuestas, tu sitio ya está indexado y atrayendo tráfico.',
          proof: '3x más rápido que el desarrollo tradicional',
          icon: 'layers',
        },
        {
          title: 'Landing Pages de Conversión',
          outcome: 'Convierte tu inversión en publicidad en clientes reales',
          description: 'Cada elemento — titular, diseño, CTA — está diseñado para convertir. No solo páginas bonitas, sino máquinas de ventas que se pagan solas en el primer mes.',
          proof: '4.2% de tasa de conversión promedio',
          icon: 'layout',
        },
        {
          title: 'Automatización de Negocios',
          outcome: 'Recupera 10+ horas cada semana',
          description: 'Captura de leads, seguimientos, reportes y onboarding de clientes automatizados. Deja de hacer manualmente lo que la IA y las integraciones inteligentes pueden manejar mientras duermes.',
          proof: 'Usado por equipos que procesan 500+ leads/mes',
          icon: 'cog',
        },
      ],
    },
    midCta: {
      line1: 'Cada semana sin un sitio web que convierta es',
      highlight: ' dinero perdido',
      suffix: '.',
      line2: 'Tus competidores ya lo tienen. ¿Cuánto más vas a esperar?',
      primaryCta: 'Agenda una llamada estratégica gratis →',
      primaryMicro: '30 min — sin compromiso, sin ventas',
      urgencyLabel: 'Solo 2 cupos disponibles este mes',
      whatsappLabel: 'Escríbeme por WhatsApp',
    },
    portfolio: {
      label: 'Portafolio',
      title: 'Trabajos Destacados',
      tagline: 'Proyectos reales. Problemas reales. Resultados reales.',
      viewLive: 'Ver en vivo',
      problemLabel: 'Problema',
      solutionLabel: 'Solución',
      resultsLabel: 'Resultados',
      bottomLine: '¿Quieres resultados como estos?',
      bottomHighlight: ' Tu proyecto podría ser el próximo.',
      cta: 'Comenzar mi proyecto →',
      ctaMicro: 'Misma calidad. Misma velocidad. Tu negocio.',
      urgencyLabel: 'Solo 2 cupos disponibles este mes',
      projects: [
        {
          name: 'Airport Management MVP',
          problem: 'Una agencia gubernamental necesitaba un sistema de control migratorio pero no tenía infraestructura digital — solo registros en papel y seguimiento manual que causaban retrasos y pérdida de datos.',
          solution: 'Construí un prototipo full-stack con seguimiento de pasajeros en tiempo real, acceso por roles y reportes automatizados — entregado en 10 días con desarrollo asistido por IA.',
          metrics: [
            { value: '10 días', label: 'De cero al MVP' },
            { value: '85%', label: 'Procesamiento más rápido' },
            { value: '3x', label: 'Precisión de datos' },
          ],
          tags: ['React', 'Node.js', 'MongoDB', 'Express'],
          link: 'https://mvp-airport-management.vercel.app',
        },
        {
          name: 'AI Landing Generator',
          problem: 'Las pequeñas empresas pagaban $3K–$10K por landing pages que tardaban semanas en entregarse, sin garantía de rendimiento de conversión.',
          solution: 'Creé una herramienta con IA que genera landing pages optimizadas para conversión en minutos — con copywriting incluido, diseño responsivo y deploy con un clic.',
          metrics: [
            { value: '< 5 min', label: 'Generación de página' },
            { value: '4.2%', label: 'Tasa de conversión promedio' },
            { value: '90%', label: 'Reducción de costos' },
          ],
          tags: ['AI', 'React', 'Vite', 'TailwindCSS'],
          link: 'https://taskmind-landing.vercel.app',
        },
        {
          name: 'AgroControl Platform',
          problem: 'Una operación agrícola en Colombia gestionaba 50+ hectáreas con hojas de cálculo — perdiendo el seguimiento de ciclos de cosecha, costos y asignación de trabajadores.',
          solution: 'Entregué un sistema de gestión completo con dashboards en tiempo real, seguimiento de costos por lote y análisis de ciclos de cosecha — reemplazando 6 hojas de cálculo desconectadas.',
          metrics: [
            { value: '2 semanas', label: 'Entrega completa' },
            { value: '100%', label: 'Adopción digital' },
            { value: '40%', label: 'Mejora en visibilidad de costos' },
          ],
          tags: ['JavaScript', 'Express', 'MongoDB', 'Chart.js'],
          link: 'https://agrocontrol-nu.vercel.app/#/login',
        },
      ],
    },
    valueProposition: {
      label: 'La diferencia',
      title1: 'Más rápido que las agencias.',
      title2: 'Más inteligente que los freelancers.',
      description: 'Las agencias tradicionales tardan meses y cobran una fortuna. La mayoría de los freelancers no ofrecen estrategia. Uso',
      descriptionHighlight: ' desarrollo con IA',
      descriptionMiddle: ' para darte ambas cosas — calidad premium a velocidad de startup, con cada decisión enfocada en una cosa:',
      descriptionHighlight2: ' hacer crecer tu negocio',
      descriptionSuffix: '.',
      cta: 'Construyamos el tuyo →',
      ctaMicro: 'Llamada estratégica gratis — en vivo en días, no meses',
      highlights: [
        {
          title: 'Entrega en días, no en meses',
          description: 'Los flujos de trabajo con IA comprimen semanas de timelines de agencias en días. Tu proyecto se publica mientras los competidores siguen agendando llamadas de inicio.',
          icon: 'speed',
        },
        {
          title: 'Calidad de agencia, velocidad de freelancer',
          description: 'Obtienes el pensamiento estratégico y la calidad de una agencia premium — sin el equipo inflado, las reuniones interminables ni las facturas de seis cifras.',
          icon: 'quality',
        },
        {
          title: 'IA integrada en cada píxel',
          description: 'Desde la generación de código hasta la optimización de rendimiento, la IA no es un añadido — es el motor. Cada decisión está basada en datos y cada build está automatizado.',
          icon: 'ai',
        },
        {
          title: 'Construido para convertir, no solo para existir',
          description: 'Cada página está diseñada para un único objetivo: convertir visitantes en clientes. Sin diseño vanidoso, sin secciones desperdiciadas — solo resultados.',
          icon: 'convert',
        },
      ],
    },
    trust: {
      about: {
        label: 'Sobre mí',
        role: 'Desarrollador Web con IA',
        bio: 'He ayudado a startups, agencias y negocios en crecimiento en Colombia, EE.UU., Chile y Guinea Ecuatorial a lanzar productos digitales que realmente generan ingresos. Combino desarrollo full-stack con flujos de trabajo de IA para entregar más rápido, más económico y con mejores resultados que las agencias tradicionales.',
        location: 'Colombia · Remoto',
        availableLabel: 'Disponible para trabajar',
      },
      stats: [
        { value: '10+', label: 'Proyectos entregados' },
        { value: '100%', label: 'Entrega a tiempo' },
        { value: '4', label: 'Países atendidos' },
        { value: '< 14 días', label: 'Tiempo promedio' },
      ],
      testimonialLabel: 'Testimonios',
      testimonialTitle: 'No lo creas solo porque lo digo.',
      testimonialTagline: 'He trabajado con startups, agencias y negocios en crecimiento en LATAM y EE.UU.',
      testimonials: [
        {
          quote: 'Necesitábamos una plataforma rápido y Carlos la entregó en menos de dos semanas. El enfoque con IA nos ahorró meses de idas y vueltas. Nuestro equipo quedó genuinamente impresionado.',
          name: 'Daniel Rojas',
          role: 'CTO',
          company: 'AgriTech Startup',
          initials: 'DR',
          photo: '/testimonials/fotoDaniel.jpeg',
          avatarColor: 'from-blue-500 to-indigo-600',
          result: 'MVP lanzado en 10 días',
        },
        {
          quote: 'He trabajado con agencias que cobraron 10 veces más y entregaron menos. AxionDev nos dio una landing page que realmente convierte — nuestra generación de leads se duplicó en el primer mes.',
          name: 'Sarah Mitchell',
          role: 'Fundadora',
          company: 'GrowthLab',
          initials: 'SM',
          photo: '/testimonials/fotoSara.jpeg',
          avatarColor: 'from-emerald-500 to-teal-600',
          result: '2x generación de leads en 30 días',
        },
        {
          quote: 'La velocidad es increíble. Lo que esperaba que tomara un mes, estaba en vivo en 5 días. Código limpio, comunicación excelente y el resultado final superó las expectativas.',
          name: 'Andrés Velásquez',
          role: 'Director de Operaciones',
          company: 'LogiCargo',
          initials: 'AV',
          photo: '/testimonials/fotoAndres.jpeg',
          avatarColor: 'from-amber-500 to-orange-600',
          result: 'Entregado 5x antes del plazo',
        },
        {
          quote: 'Carlos automatizó todo nuestro proceso de onboarding de clientes — lo que antes tomaba 3 horas ahora toma 10 minutos. Liberamos a nuestro equipo para enfocarse en cerrar negocios en lugar de perseguir papeleo.',
          name: 'María Fernanda López',
          role: 'CEO',
          company: 'Impulsa Digital',
          initials: 'ML',
          photo: '/testimonials/fotomaria.jpeg',
          avatarColor: 'from-pink-500 to-rose-600',
          result: 'Onboarding 18x más rápido',
        },
      ],
      guaranteesLabel: 'Cero riesgo',
      guaranteesTitle: 'Tu inversión está protegida.',
      guarantees: [
        {
          title: 'Garantía de devolución',
          description: 'Si no estás satisfecho con la entrega final, recibes un reembolso completo. Sin preguntas.',
          icon: 'shield',
        },
        {
          title: 'Precio fijo, sin sorpresas',
          description: 'El precio que acordamos es el precio que pagas. Sin cargos ocultos, sin cobros por cambios de alcance.',
          icon: 'lock',
        },
        {
          title: 'Soporte post-lanzamiento',
          description: 'Cada proyecto incluye soporte gratuito después del lanzamiento. Nunca te quedas solo con un sitio roto.',
          icon: 'support',
        },
      ],
    },
    process: {
      label: 'Cómo funciona',
      title: 'Proceso simple. Resultados rápidos.',
      cta: 'Comenzar mi proyecto →',
      ctaMicro: 'La llamada de descubrimiento es gratis — sin compromiso',
      steps: [
        {
          number: '01',
          title: 'Descubrimiento',
          description: 'Hablamos sobre tus objetivos, audiencia y requisitos para definir el alcance perfecto.',
        },
        {
          number: '02',
          title: 'Diseño y Desarrollo',
          description: 'Diseño y desarrollo tu proyecto usando flujos de trabajo mejorados con IA para velocidad y calidad.',
        },
        {
          number: '03',
          title: 'Lanzamiento',
          description: 'Tu proyecto se publica con rendimiento optimizado, SEO y soporte continuo.',
        },
      ],
    },
    comparison: {
      label: 'Por qué AxionDev',
      title: 'Deja de pagar de más por menos.',
      tagline: 'Mira cómo nos comparamos con las alternativas — en cada métrica que importa.',
      headers: { feature: 'Característica', agency: 'Agencia', freelancer: 'Freelancer' },
      maybe: 'A veces',
      paidExtra: 'Costo adicional',
      cta: 'Comenzar — es gratis →',
      ctaMicro: 'Sin compromiso. Llamada de 30 min.',
      rows: [
        { feature: 'Tiempo de entrega', axion: '< 14 días', agency: '2–6 meses', freelancer: '4–8 semanas' },
        { feature: 'Precio inicial', axion: 'Desde $497', agency: '$5K–$50K', freelancer: '$1K–$5K' },
        { feature: 'Desarrollo con IA', axion: 'check', agency: 'cross', freelancer: 'cross' },
        { feature: 'Precio fijo', axion: 'check', agency: 'cross', freelancer: 'maybe' },
        { feature: 'Garantía de devolución', axion: 'check', agency: 'cross', freelancer: 'cross' },
        { feature: 'Enfocado en conversión', axion: 'check', agency: 'maybe', freelancer: 'cross' },
        { feature: 'Comunicación directa', axion: 'check', agency: 'cross', freelancer: 'check' },
        { feature: 'Soporte post-lanzamiento', axion: 'check', agency: 'paid_extra', freelancer: 'cross' },
      ],
    },
    offers: {
      label: 'Paquetes',
      title1: 'Elige tu velocidad.',
      title2: 'Cada plan genera retorno.',
      description: 'Sin cobro por hora. Sin cambios de alcance. Obtienes',
      descriptionHighlight: ' precio fijo, fecha límite real y entregables que se pagan solos',
      descriptionSuffix: '.',
      oneTime: 'Inversión única. Sin pagos recurrentes.',
      bottomText: '¿No sabes qué paquete elegir?',
      bottomLink: 'Hablemos',
      bottomSuffix: ' — te recomendaré el adecuado en menos de 5 minutos.',
      packages: [
        {
          name: 'Landing Page',
          timeline: '5 días',
          price: 'Desde $497',
          tagline: 'Diseñada para convertir y lista para lanzar',
          description: 'Una sola página de alta conversión para convertir visitantes en clientes — publicada e indexada antes de que tus competidores terminen su primer borrador.',
          deliverables: [
            'Diseño responsivo personalizado (mobile-first)',
            'Copy y diseño optimizados para conversión',
            'Formulario de contacto + integración WhatsApp',
            'Meta tags SEO y configuración Open Graph',
            'Analytics y optimización de velocidad',
            'Hosting gratuito en Vercel',
          ],
          highlighted: false,
          cta: 'Obtener mi landing page →',
          ctaMicro: 'En vivo y convirtiendo en 5 días hábiles',
        },
        {
          name: 'Sitio Web Completo',
          timeline: '10–14 días',
          price: 'Desde $997',
          tagline: 'Tu presencia digital completa, construida para vender',
          description: 'Un sitio web multi-página completo que posiciona tu marca, captura leads 24/7 y se paga solo en el primer mes de publicación.',
          deliverables: [
            'Hasta 5 páginas personalizadas',
            'Sección de blog o portafolio',
            'Sistema de captura de leads (formularios + CRM)',
            'Automatización WhatsApp + email',
            'SEO y optimización de rendimiento',
            'Panel de administración o integración CMS',
            '30 días de soporte post-lanzamiento',
          ],
          highlighted: true,
          badge: 'El Más Popular',
          cta: 'Construir mi sitio →',
          ctaMicro: 'Tu presencia digital completa — lista en 2 semanas',
        },
        {
          name: 'Suite de Automatización',
          timeline: '7–10 días',
          price: 'Desde $797',
          tagline: 'Deja de trabajar más duro. Empieza a trabajar con inteligencia.',
          description: 'Automatizaciones personalizadas con IA que eliminan tareas repetitivas, capturan leads mientras duermes y te devuelven 10+ horas cada semana.',
          deliverables: [
            'Auditoría de flujos y hoja de ruta de automatización',
            'Hasta 3 automatizaciones personalizadas',
            'Captura de leads y seguimiento automático',
            'Integración con CRM u hojas de cálculo',
            'Respuestas automáticas por email/chat con IA',
            'Dashboard con métricas en tiempo real',
            'Sesión de capacitación + documentación',
          ],
          highlighted: false,
          cta: 'Automatizar mi negocio →',
          ctaMicro: 'Recupera 10+ horas/semana en 7 días',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title1: 'Preguntas que probablemente',
      title2: 'ya te estás haciendo.',
      description: 'Si tu pregunta no está aquí,',
      descriptionLink: 'solo pregunta',
      descriptionSuffix: '. Respondo en menos de 24 horas.',
      bottomText: '¿Aún tienes dudas? Aclarémonoslas en una llamada de 5 minutos.',
      cta: 'Agendar una llamada gratis →',
      ctaMicro: 'Sin compromiso. Sin ventas. Solo respuestas.',
      items: [
        {
          question: '¿Cómo puedes entregar un sitio web completo en menos de 14 días?',
          answer: 'Flujos de trabajo con IA. Uso IA para generación de código, iteración de diseño y pruebas — eliminando los cuellos de botella manuales que hacen que las agencias tarden meses. El resultado es la misma calidad en una fracción del tiempo.',
        },
        {
          question: '¿Qué pasa si no estoy satisfecho con el resultado final?',
          answer: 'Tienes garantía total de devolución. Si la entrega final no cumple lo que acordamos, no pagas nada. También incluyo rondas de revisión durante el desarrollo para que nunca te lleves sorpresas.',
        },
        {
          question: '¿Solo trabajas con startups?',
          answer: 'No. Trabajo con startups, pequeñas empresas, agencias e incluso proyectos gubernamentales. Si necesitas un sitio web o automatización que genere ingresos, puedo ayudarte — sin importar tu industria o tamaño.',
        },
        {
          question: '¿Qué incluye el precio fijo?',
          answer: 'Todo: diseño, desarrollo, asistencia con copywriting, configuración SEO, configuración de hosting y soporte post-lanzamiento. Sin cargos ocultos, sin sorpresas por hora. El precio que acordamos es el precio que pagas.',
        },
        {
          question: '¿Puedes trabajar con mi sitio web o marca existente?',
          answer: 'Por supuesto. Puedo rediseñar, optimizar o construir sobre lo que ya tienes. Durante la llamada de descubrimiento, encontraremos el camino más rápido a los resultados — ya sea empezar desde cero o mejorar lo existente.',
        },
        {
          question: '¿Qué pasa después de que mi sitio se publica?',
          answer: 'Cada paquete incluye soporte post-lanzamiento (7–30 días según el plan). Monitoreo errores, ayudo con actualizaciones de contenido y me aseguro de que todo funcione correctamente. Después de eso, siempre estoy a un mensaje de distancia.',
        },
      ],
    },
    cta: {
      urgencyLabel: 'Solo 2 cupos disponibles este mes',
      title1: 'Deja de perder clientes por un',
      title2: 'sitio web que no convierte.',
      description: 'Cada día sin un sitio web que convierta es',
      descriptionHighlight: ' dinero que se va',
      descriptionSuffix: '. Solucionémoslo esta semana.',
      checks: ['Llamada estratégica gratis', 'Respuesta garantizada en 24h', 'Garantía de devolución'],
      preferText: '¿prefieres chatear directamente?',
      whatsappLabel: 'Escríbeme por WhatsApp — respondo en 5 min',
    },
    contactForm: {
      projectTypeLabel: '¿Qué necesitas?',
      projectTypes: [
        { value: 'landing-page', label: 'Landing Page' },
        { value: 'full-website', label: 'Sitio Web Completo' },
        { value: 'automation', label: 'Automatización' },
        { value: 'not-sure', label: 'Todavía no sé' },
      ],
      budgetLabel: 'Presupuesto estimado',
      budgetOptional: '(opcional)',
      budgets: [
        { value: 'under-500', label: 'Menos de $500' },
        { value: '500-1000', label: '$500–$1,000' },
        { value: '1000-3000', label: '$1,000–$3,000' },
        { value: '3000+', label: '$3,000+' },
      ],
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      submitIdle: 'Enviar mi solicitud →',
      submitSending: 'Enviando...',
      successTitle: '¡Mensaje enviado!',
      successMessage: 'Te responderé en menos de 24 horas.',
      successCallLink: '¿Quieres una respuesta más rápida? Agenda una llamada directa →',
      errorMessage: 'Algo salió mal. Intenta escribirme directamente por correo.',
      emailLabel: 'O contáctame directamente por',
      emailLinkLabel: 'correo',
    },
    footer: {
      readyTitle: '¿Listo para comenzar?',
      readySubtitle: 'Agenda una llamada estratégica de 30 min — sin compromiso.',
      bookCta: 'Agendar llamada gratis →',
    },
    whatsapp: {
      ariaLabel: 'Escríbeme por WhatsApp',
      tooltipTitle: 'Respondo en menos de 5 min',
      tooltipDescription: 'Cuéntame sobre tu proyecto — te envío una propuesta gratis.',
    },
  },
};
