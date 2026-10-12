# Brand research: legacy 94n.digital

Notes from reviewing the WordPress site at https://94n.digital (October 2026). The new site is a fresh build with new content. Use this file for visual identity and background context only.

## Visual identity

**Logo.** A periodic-table "element" tile: "94" over a lowercase "n" inside a square frame. It is single-colour, saved as `src/assets/brand/logo.svg` with `fill="currentColor"`. `public/favicon.svg` is the same logo in brand pink.

**Palette.** Taken from the Automatic.css tokens. The live tokens are in `src/styles/tokens.css`.

| Role             | Hex       | Notes                                       |
| :--------------- | :-------- | :------------------------------------------ |
| Primary          | `#FF1BBF` | Hot pink: CTAs, highlights, logo            |
| Primary hover    | `#FF42CA` |                                             |
| Primary light    | `#FFB3E9` |                                             |
| Primary dark     | `#80005B` |                                             |
| Ink              | `#050505` | Near-black, Automatic.css "secondary"       |
| Ink muted        | `#4D4D4D` | Body text, Automatic.css "base"             |
| Line             | `#D9D9D9` |                                             |
| Surface          | `#FAFAFA` | Off-white section backgrounds               |

The legacy palette has no other brand colours.

**Typography.** Outfit (variable, geometric sans) for both headings and body, self-hosted via `@fontsource-variable/outfit`.

**Legacy look and feel.** A light grey hero with a muted background video, a typewriter headline and pink solid buttons. Team photos are cropped into hexagons. Sections animate in on scroll. Built with Bricks and Automatic.css.

## Assets (`src/assets/legacy/`)

| Folder                  | Contents                                                                  |
| :---------------------- | :------------------------------------------------------------------------ |
| `awards/`               | 2025 award badges (UK and Global Search Awards, GDEA, European Paid Media finalist, Netty, Clutch 1000) and Clutch "Top company" badges |
| `clients/`              | ~38 client logos, mixed quality and format; many are greyscale "DONE" versions |
| `case-studies/`         | Case-study hero images (Hiatt, APS, Natran, Nexpay, Patchi, Picburg, Vertella, APC) |
| `team/`                 | Individual headshots (mostly pre-cropped hexagons, filenames don't identify people) and `hero-team-01.webp` group photo |
| `partners/media/`       | Google Partner, Meta, Microsoft, Amazon Ads                               |
| `partners/tech/`        | CallRail, CallTrackingMetrics, HubSpot, Magento, Optmyzr, Semrush, Shopify, WhatConverts, WordPress |
| `legacy-illustrations/` | Hexagon/"sputnik" composite illustrations; likely not reused              |
| `compliance/`           | EU / Latvian Investment and Development Agency (LIAA) co-funding logo strip from the footer; check whether it must stay |
| `media/`                | `hero-bg-video.mp4`, the homepage background video                        |

Several originals are 1–2.5 MB PNGs. Render them through `astro:assets` (`<Image>`) so they are optimised at build time, and prune anything unused before launch.

## Business context (inspiration, not copy)

- **Positioning:** "media scientists", a scientific, data-led approach to paid media. Legacy headline: "Engineering award-winning [growth] through data science".
- **Services:** paid search (Google, Microsoft), Google Shopping, paid social (Meta, LinkedIn), conversion tracking (incl. server-side), audits and consultations. The team also includes Amazon Ads and SEO/content roles.
- **Proof points:** "120+ brands"; annualised 1bn users reached, 5.84 avg. ROAS; first Baltic agency shortlisted for 5 paid media awards; Clutch top 0.1% / top 1%.
- **Team:** about 25 people. Founder and CEO Alex Tkacovs, CSO and co-founder Sam Johnson, COO and co-founder Simone Pardini. Heads of Digital in Latvia and India.
- **Values in legacy copy:** client longevity, transparency ("your account, your data"), no vanity metrics, collaboration.
- **Legacy IA:** Home, Paid Media (and service subpages), Our Team, Case Studies, Blog (~37 posts, SEO-led), Contact.

## Open questions

- Is the EU/LIAA funding acknowledgement a legal requirement that must stay on the new site?
- Which client logos are current and approved for use?
- Up-to-date team photos and names. The legacy files are anonymous hexagon crops.
- Primary market and spelling (UK or international English). The site is currently set to `en-GB`.
- Will existing blog URLs need redirects? GitHub Pages can't do server redirects, so this would need meta-refresh pages or similar.
