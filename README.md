# Tesseracton website

Next.js 16 App Router, React, TypeScript, and Tailwind CSS 4. Requires Node.js 20.9 or newer.

## Development

```sh
npm ci
npm run dev
```

Open http://localhost:3003. Routes: `/`, `/tag`, `/aegis-os`, `/services`, `/company`, and `/contact`. Legacy links such as `/#tag` are upgraded to their corresponding routes in the browser.

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
- `src/index.css`: original styles, processed by the Tailwind PostCSS plugin.
- `src/lib/seo.ts`: metadata descriptions and the public site origin.

Existing illustrations are interactive inline SVG and CSS, with no raster assets or `<img>` elements to migrate. They remain intact. Next.js image optimization is enabled with AVIF/WebP output and no remote image hosts permitted by default. For future raster assets, use `Image` from `next/image` with an imported local image, or a `/public` path and explicit dimensions; provide `sizes` for responsive images. Configure explicit `images.remotePatterns` before using remote images. SVG illustrations should remain vector graphics.

The contact and pilot forms retain their original local demonstration behavior. They do not send email or persist submissions; connecting a delivery backend is a separate task.

## Verification

```sh
npx playwright install chromium
npm run build
npm test
```

Tests cover server-rendered content and metadata, desktop/mobile hydration, navigation and legacy links, interactive controls, sitemap, robots, social-image optimization, and 404 responses. Tests start the production server if port 3003 is free, or reuse the existing server.

`node scripts/capture-design.mjs after` captures all six routes at desktop and mobile widths to ignored `.design-checks/` files. The migration was compared against the original Vite site's `before` captures. With both sets of captures present, `node scripts/compare-design.mjs` checks page text, content heights, heading positions, and typography.
