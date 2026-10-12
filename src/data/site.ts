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
