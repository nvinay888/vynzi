# Vynzi website

Static site built with [Astro](https://astro.build). Deployed on Vercel from `main`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/, fails if any NEEDS-INPUT placeholder reaches the HTML
```

- Copy lives in `src/content/*.ts`; every block carries a source tag. `node scripts/ledger.mjs` regenerates `CONTENT-LEDGER.md`.
- Outstanding content from the founder: `CONTENT-REQUESTS.md`.
- Design tokens: `src/styles/tokens.css` (calibrated to the Panxo reference, see `reference/panxo-design-system.md`).
- Contact form: set `PUBLIC_WEB3FORMS_KEY` in Vercel environment variables to send enquiries by email; without it the form opens the visitor's mail client.
