# Launch checklist

Everything on the site that 94n must confirm before it goes live. Copy and figures live in `src/data/site.ts`. Plan prices are in `src/lib/pricing.ts`.

## Prices (`src/lib/pricing.ts`, `pricingTerms` in `src/data/site.ts`)

These are converted from the EUR price list at about £0.87/€. Set round sterling prices before launch.

- [ ] Starter: from £1,740/month, ad spend up to £17,500/month
- [ ] Growth: from £2,610/month, ad spend up to £35,000/month
- [ ] Scale: from £3,480/month, ad spend up to £70,000/month
- [ ] Custom plans above £70,000/month
- [ ] One-off onboarding and tracking setup from £870 (was the €999–€1,499 "commitment fee")
- [ ] Minimum ad spend £4,500/month (from €5k). The fee calculator slider starts at £5,000.
- [ ] Commercial terms: a 3-month start, then rolling monthly; "profit gains in 90 days or we say so first"
- [ ] Scale plan contents match what is actually delivered: a specialist per channel, weekly calls, a quarterly exec review, custom reporting, multi-country campaigns
- [ ] Growth plan "multi-channel budget planning" is real
- [ ] Every plan includes a Slack line to the team and a tracking audit

## Claims

- [ ] Four senior people on every account, including Starter, each with 7+ years' experience. "No juniors."
- [ ] "You'll meet all four before you sign"
- [ ] Every account has a UK-based lead who works the client's hours (pricing FAQ)
- [ ] SKU profit audit: free, delivered within five working days, includes a 30-minute walkthrough
- [ ] "A senior specialist will reply within one working day" (audit page)
- [ ] Around 30 people across nine countries (GB, LV, IN, ES, PT, BG, BR, ZA, US). Founded 2022 in Riga.
- [ ] 120+ ecommerce brands
- [ ] 5.0 on Clutch from 34 reviews (keep it current)
- [ ] UK Search Awards 2025 winner, Best Use of Data in PPC
- [ ] AdPeak is co-owned by 94n ("the SKU-level ad platform we co-own")

## Case studies (`caseStudies` in `src/data/site.ts`)

The headline figures come from the positioning doc. The one-line narratives are drafts.

- [ ] London plumbing & heating retailer: −34% to +10% YoY while the sector fell ~30%. Confirm the narrative and whether the client can be named.
- [ ] Hiatt Hardware: +87% revenue over 18 months, 2,000-product catalogue. Confirm the narrative.
- [ ] Vertella: £0 to £1m+ online revenue in two years. Confirm it's a UK client.
- [ ] Volcora: +432% revenue. Need the period and whether it's a UK client.
- [ ] Results page "+44pts" is derived (−34% → +10%). Confirm 94n is happy with that framing.

## People and assets

- [ ] Leadership: Alex Tkacovs (Founder & CEO), Sam Johnson (Co-founder & CSO), Simone Pardini (Co-founder & COO)
- [ ] Named UK lead to show on the site
- [ ] Headshots for the four roles on a typical account (the brief wants real named people)
- [ ] The team photo (`hero-team-01.webp`): OK to use, and where it was taken
- [ ] Client logos (Results page): permission to show each, plus better-quality files for Swynford Manor and Fissman
- [ ] Clutch review quotes: OK to reproduce with role and company

## Contact and London presence

- [ ] `hello@94n.digital` is monitored. Audit requests go there as a pre-filled email (no form backend on GitHub Pages).
- [ ] UK phone `+44 7736 943465` is the right public number
- [ ] Real London address (the brief says a coworking desk, not Wenlock Road). The footer currently just says "London · Riga".
- [ ] LinkedIn URL is the UK/global company page, not `lv.linkedin.com`
- [ ] EU / LIAA co-funding logo: check whether it legally must appear (it's in `src/assets/legacy/compliance/` but not on the site)

## Technical

- [ ] Custom domain and DNS (see README)
- [ ] Redirects or decisions for old WordPress URLs (blog posts, `/paid-media/*`, `/our-team/`, `/case-studies/`, `/contact/`)
- [ ] Analytics and cookie consent
- [ ] Social share image (`og:image`)
- [ ] Privacy policy page
