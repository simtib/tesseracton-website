# Tesseracton website

Next.js 16 App Router, React, TypeScript, and Tailwind CSS 4. Requires Node.js 20.9 or newer.

## Development

```sh
npm ci
npm run dev
```

Open http://localhost:3003. Routes: `/`, `/tag`, `/aegis-os`, `/services`, `/company`, `/contact`, `/infrastructure-intelligence`, and `/ai-trust-fabric`. Legacy links such as `/#tag` are upgraded to their corresponding routes in the browser.

## Production

Copy `.env.example` to `.env.local` and set `SITE_URL` to the deployed HTTPS origin **before building**. This controls canonical URLs, Open Graph URLs, the sitemap, and robots.txt. Local development defaults to `http://localhost:3003`.

```sh
npm run typecheck
npm run build
npm run start
```

Deploy to a Next.js-compatible Node.js host. The Next.js server provides image optimization; this project does not use static export. Use `npm run start -- --port 8080` to override the default port.

## Structure and images

- `src/app`: static route pages, per-route metadata, shared layout, sitemap, robots, and generated social image.
- `src/views` and `src/components`: existing design and interactions, with route-specific client entry points and shared modal state.
- `src/index.css`: shared graphite/amber tokens and responsive component styles, processed by the Tailwind PostCSS plugin.
- `src/lib/seo.ts`: metadata descriptions and the public site origin.

The homepage uses a locally generated illustrative compute-rack image at `public/images/compute-rack.webp`, served through Next.js Image with responsive sizes and priority loading. Product architecture illustrations use accessible HTML and SVG; the TAG hardware-layer selector remains interactive. No new runtime dependencies were added.

## Design system

The visual direction is an engineering ledger: graphite surfaces, warm white text, an amber signal accent, IBM Plex Sans and IBM Plex Mono. Shared roles live in `src/index.css`; use `control`, `control-primary`, `field`, `type-display`, `type-section`, and the responsive page/section classes rather than introducing local palette values. Buttons have a 44px minimum height, keyboard focus is visible, and reduced-motion preferences disable transitions. Product status labels distinguish specifications, illustrative demos, and concepts.

The homepage combines an editorial product index with a four-layer architecture rail. `ProductMasthead`, `ProductDiagram`, and `BrandMark` provide shared product framing. Keep the demo boundaries and the existing APIs and state transitions intact when extending these components.

Hero image prompt: an unbranded enterprise GPU rack on the right of a wide dark graphite composition, brushed-metal vent fins, warm white architectural lighting and restrained amber indicators; empty space on the left for live HTML text; no text, logos, holograms or neon. The asset is illustrative, not a photograph of a deployed Tesseracton installation.

Design workflow: [Unslop by Damir Sokolovsky](https://heydamir.design/unslop), CC BY 4.0.

The contact and pilot forms retain their original local demonstration behavior. They do not send email or persist submissions; connecting a delivery backend is a separate task.

## Verification

```sh
npx playwright install chromium
npm run build
npm test
```

Tests cover server-rendered content and metadata, desktop/mobile hydration, navigation and legacy links, interactive controls, sitemap, robots, social-image optimization, and 404 responses. Tests start the production server if port 3003 is free, or reuse the existing server.

`node scripts/capture-design.mjs after` captures all eight routes at desktop and mobile widths to ignored `.design-checks/` files. The migration was compared against the original Vite site's `before` captures. With both sets of captures present, `node scripts/compare-design.mjs` checks page text, content heights, heading positions, and typography.
