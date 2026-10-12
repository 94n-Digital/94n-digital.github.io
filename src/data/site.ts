// Figures marked TBC in docs/launch-checklist.md must be confirmed with 94n before launch.

export const contact = {
  email: 'hello@94n.digital',
  phone: '+44 7736 943465',
  phoneHref: 'tel:+447736943465',
  linkedin: 'https://www.linkedin.com/company/94n',
  clutch: 'https://clutch.co/profile/94n-digital',
  adpeak: 'https://adpeak.ai',
} as const;

export const auditMailto = `mailto:${contact.email}?subject=${encodeURIComponent(
  'SKU profit audit',
)}&body=${encodeURIComponent(
  'Hi 94n,\n\nWe would like a free SKU profit audit.\n\nWebsite:\nApproximate monthly ad spend:\nChannels we run (Google, Meta, Amazon…):\nBest way to share our product feed:\n\nThanks,',
)}`;

export const nav = [
  { href: '/results', label: 'Results' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
] as const;

export const proof = {
  award: 'UK Search Awards winner',
  awardDetail: 'Best Use of Data in PPC, 2025',
  clutchRating: '5.0',
  clutchReviews: 34,
  brands: '120+',
} as const;

export type Element = {
  readonly number: string;
  readonly symbol: string;
  readonly name: string;
  readonly detail?: string;
};

export const method: readonly (Element & { readonly when: string; readonly body: string })[] = [
  {
    number: '01',
    symbol: 'Fl',
    name: 'Find the losers',
    when: 'Week one',
    body: 'We map ad spend, revenue and margin for every product in your feed, so you can see which ones cost more than they make.',
  },
  {
    number: '02',
    symbol: 'Cs',
    name: 'Cut and scale',
    when: 'Every day',
    body: 'Products that lose money lose their budget. Profitable ones get more, automatically and every day.',
  },
  {
    number: '03',
    symbol: 'Pr',
    name: 'Report profit',
    when: 'Every month',
    body: 'Monthly reporting in pounds of contribution margin, not vanity metrics. You own the account and the data.',
  },
];

export const roles: readonly (Element & { readonly body: string })[] = [
  {
    number: '01',
    symbol: 'Ch',
    name: 'Channel specialist',
    body: 'Runs your Google, Meta or Amazon account day to day.',
  },
  {
    number: '02',
    symbol: 'Ta',
    name: 'Tracking & analytics specialist',
    body: 'Makes sure the numbers we optimise to are true.',
  },
  {
    number: '03',
    symbol: 'Am',
    name: 'Account manager',
    body: 'Your single point of contact, weekly or fortnightly.',
  },
  {
    number: '04',
    symbol: 'Ex',
    name: 'Exec sponsor',
    body: 'A member of our leadership team, personally accountable for your results.',
  },
];

export type CaseStudy = {
  readonly symbol: string;
  readonly number: string;
  readonly client: string;
  readonly sector: string;
  readonly headline: string;
  readonly measure: string;
  readonly period?: string;
  readonly context: string;
  readonly uk: boolean;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    symbol: 'Pl',
    number: '01',
    client: 'London plumbing & heating retailer',
    sector: 'Home & trade',
    headline: '−34% → +10%',
    measure: 'Revenue, year on year',
    period: 'While the sector fell ~30%',
    context:
      'A London trade retailer in steep decline. We rebuilt the account product by product and took it back into growth while the market kept falling.',
    uk: true,
  },
  {
    symbol: 'Hi',
    number: '02',
    client: 'Hiatt Hardware',
    sector: 'Home & trade',
    headline: '+87%',
    measure: 'Revenue growth',
    period: 'Over 18 months',
    context:
      'A 2,000-product hardware catalogue. We put every product on its own budget so the profitable lines could carry the account.',
    uk: true,
  },
  {
    symbol: 'Ve',
    number: '03',
    client: 'Vertella',
    sector: 'Ecommerce',
    headline: '£0 → £1m+',
    measure: 'Online revenue',
    period: 'In two years',
    context: 'From launch to seven figures online, with paid media built around margin from day one.',
    uk: true,
  },
  {
    symbol: 'Vo',
    number: '04',
    client: 'Volcora',
    sector: 'Ecommerce',
    headline: '+432%',
    measure: 'Revenue growth',
    context: 'Revenue more than quintupled as we scaled the products that earned their spend.',
    uk: false,
  },
];

export const claims = [
  {
    title: 'No juniors',
    body: 'Everyone who touches your account has 7+ years’ experience.',
  },
  {
    title: 'A team, not an account manager',
    body: 'Four senior people on every account, from Starter up.',
  },
  {
    title: 'Profit, not ROAS',
    body: 'We report contribution margin per product, not blended ROAS.',
  },
  {
    title: 'Flat fee, published',
    body: 'Never a percentage of spend, so we never gain from you spending more.',
  },
] as const;

export const leadership: readonly (Element & { readonly role: string })[] = [
  { number: '01', symbol: 'At', name: 'Alex Tkacovs', role: 'Founder & CEO' },
  { number: '02', symbol: 'Sj', name: 'Sam Johnson', role: 'Co-founder & CSO' },
  { number: '03', symbol: 'Sp', name: 'Simone Pardini', role: 'Co-founder & COO' },
];

export const countries: readonly Element[] = [
  { number: '01', symbol: 'GB', name: 'United Kingdom', detail: 'Client lead, strategy, SEO & web' },
  { number: '02', symbol: 'LV', name: 'Latvia', detail: 'Founded here. Leadership & design' },
  { number: '03', symbol: 'IN', name: 'India', detail: 'Google, Amazon, B2B & tracking' },
  { number: '04', symbol: 'ES', name: 'Spain' },
  { number: '05', symbol: 'PT', name: 'Portugal' },
  { number: '06', symbol: 'BG', name: 'Bulgaria' },
  { number: '07', symbol: 'BR', name: 'Brazil' },
  { number: '08', symbol: 'ZA', name: 'South Africa' },
  { number: '09', symbol: 'US', name: 'United States' },
];

export const planDetails = {
  starter: {
    symbol: 'St',
    summary: 'For brands getting serious about paid media.',
    features: ['Four senior people on your account', 'Monthly strategy meeting', 'SKU-level profit reporting'],
  },
  growth: {
    symbol: 'Gr',
    summary: 'For brands scaling across more than one channel.',
    features: [
      'Four senior people on your account',
      'Fortnightly strategy meeting',
      'SKU-level profit reporting',
      'Multi-channel budget planning',
    ],
  },
  scale: {
    symbol: 'Sc',
    summary: 'For established brands that want depth on every channel.',
    features: [
      'A specialist for each channel you run',
      'Weekly strategy meeting',
      'Quarterly review led by your exec sponsor',
      'Custom reporting',
      'Multi-country campaigns',
    ],
  },
} as const;

export const pricingTerms = {
  customAbove: 70_000,
  onboardingFrom: 870,
  minimumSpend: 4_500,
  startMonths: 3,
  reviewDays: 90,
} as const;

export const includedInEveryPlan = [
  'Strategy and account management',
  'A Slack line to your whole team',
  'A full tracking and analytics audit',
  'Profit reporting per product, on AdPeak',
  'You own every ad account and all the data',
  'No lock-in after your first three months',
] as const;

export const pricingFaqs = [
  {
    q: 'Why don’t you charge a percentage of ad spend?',
    a: 'Because it rewards an agency for spending more of your money, whether or not that spend is profitable. A flat fee means our only incentive is your margin, and our fee falls as a share of your budget as you grow.',
  },
  {
    q: 'Who actually works on my account?',
    a: 'Four senior people, each with seven or more years’ experience: a channel specialist, a tracking and analytics specialist, an account manager and an exec sponsor from our leadership team. You meet all four before you sign. No juniors.',
  },
  {
    q: 'Do I own my ad accounts and data?',
    a: 'Yes, always. Every account sits in your name and you have access to everything at all times. If you leave, you leave with all of it.',
  },
  {
    q: 'What happens in the first 90 days?',
    a: 'Week one, we map spend, revenue and margin for every product in your feed and fix any tracking gaps. Then we start cutting what loses money and scaling what makes it. If we can’t show profit gains in 90 days, we’ll tell you before you have to ask.',
  },
  {
    q: 'Where is your team based?',
    a: 'Accounts are led from the UK and run on UK hours. The specialists behind them work across nine countries. We hire for one job each, wherever the best people are, which is how a mid-market fee buys a senior team.',
  },
] as const;

export const reviews = [
  {
    quote: 'They take the time to listen, and we pivot when needed and take meetings outside of scope when it’s required.',
    who: 'CEO & Owner',
    org: 'Swynford Manor',
  },
  {
    quote: 'They’re responsive, insightful, and dedicated to providing excellent customer service.',
    who: 'Department Head',
    org: 'Envisage Dental',
  },
  {
    quote: '94n Digital has been able to drive through the problems accurately and successfully.',
    who: 'Founder',
    org: 'Advantage Pro Services',
  },
  {
    quote: 'Work is always delivered on time and sometimes ahead of time.',
    who: 'Director',
    org: 'Webny Digital',
  },
] as const;
