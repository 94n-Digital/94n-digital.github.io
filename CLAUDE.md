# 94n Digital site

Astro static site for 94n Digital (boutique ecommerce performance marketing agency), deployed to GitHub Pages via `.github/workflows/ci.yml`.

## Conventions

- **Base path:** `site`/`base` come from `SITE_URL`/`BASE_PATH` env vars set by `actions/configure-pages` in CI. Always build internal links and `public/` asset URLs with `import.meta.env.BASE_URL`; never hard-code `/...`.
- **Testing:** don't write tests for site content. CI gate is `npm run check`, `npm test` and `npm run build`. Only add tests for genuine logic (e.g. `src/lib/pricing.ts`), colocated as `*.test.ts`.
- **Brand:** design tokens and shared styles in `src/styles/global.css` (magenta only for large figures, the logo and the primary button; `--magenta-ink` for small text), logo in `src/assets/brand/`. Legacy-site findings in `docs/brand-research.md`; positioning brief in ~/Documents/94n. Copy and figures in `src/data/site.ts`; anything unconfirmed is tracked in `docs/launch-checklist.md`. Legacy assets in `src/assets/legacy/` are raw material: render via `astro:assets`, prune unused before launch. Content is new, not ported from the old site.
- **Locale:** British English (`lang="en-GB"`).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)
- [Images](https://docs.astro.build/en/guides/images/)
