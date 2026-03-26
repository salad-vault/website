# SaladVault — Website

Marketing website for [SaladVault](https://saladvault.app), the Zero-Knowledge password manager with Dual-Lock protocol.

Built with **Nuxt 4** as a fully static site (SSG), optimized for SEO and performance.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Nuxt 4.4 (SSG) |
| Styling | Tailwind CSS + Fira Code (Google Fonts) |
| Animations | AOS (Animate On Scroll) |
| i18n | @nuxtjs/i18n — English + French |
| SEO | @nuxtjs/seo — sitemap, meta, OG tags |
| Icons | @nuxt/icon |
| Images | @nuxt/image |
| Deployment | Static files via `nuxt generate` |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, how it works, comparison table, trust badges, CTA |
| `/about` | About — why SaladVault exists, pain points, philosophy |
| `/features` | Features — Dual-Lock protocol, Saladiers, full feature grid |
| `/pricing` | Pricing — 4 plans (Jardinier / Maraicher Pro / Familial / Exploitation), FAQ |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

---

## Project Structure

```
nuxt-app/
├── app/
│   ├── app.vue                  # Root — AOS init, page transitions
│   ├── layouts/
│   │   └── default.vue          # Navbar + Footer wrapper
│   ├── components/
│   │   ├── Navbar.vue           # Sticky navbar with mobile burger menu
│   │   ├── Footer.vue           # Multi-column footer
│   │   └── ui/
│   │       ├── BlockCard.vue    # Reusable card with hover border
│   │       ├── FeatureRow.vue   # Icon + title + description row
│   │       ├── PricingCard.vue  # Pricing plan card with CTA
│   │       └── TypewriterText.vue # Typewriter animation component
│   ├── composables/
│   │   └── useTypewriter.ts     # Typewriter logic (IntersectionObserver)
│   └── pages/
│       ├── index.vue
│       ├── about.vue
│       ├── features.vue
│       ├── pricing.vue
│       ├── privacy.vue
│       └── terms.vue
├── i18n/
│   ├── en.json                  # English translations
│   └── fr.json                  # French translations
├── public/
│   ├── logo.png
│   ├── favicon.ico
│   ├── _robots.txt              # Renamed to robots.txt at deploy
│   └── llms.txt                 # AI crawler description (like robots.txt for LLMs)
├── nuxt.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Design System

- **Background:** `#0d1117` (primary) / `#1c2128` (secondary)
- **Accent:** `#238636` (green)
- **Text:** white / `#8b949e` (muted)
- **Font:** Fira Code (monospace, all weights)
- **Cards:** rectangular, `border-white/10`, hover → `border-[#238636]` (300ms transition)
- **Animations:** AOS `fade-up` on all blocks, `data-aos-delay` staggered

---

## Getting Started

**Prerequisites:** Node.js 20+, pnpm

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:3000)
pnpm dev
```

---

## Build

```bash
# Generate static files → .output/public/
pnpm generate

# Preview the static build locally
pnpm preview
```

The `nuxt generate` command outputs fully static HTML/CSS/JS files to `.output/public/`, ready to be deployed on any static hosting (Nginx, Vercel, Cloudflare Pages, etc.).

---

## Internationalization

The site supports **English** (default) and **French**, toggled via the navbar flag button. Translation files are in `i18n/en.json` and `i18n/fr.json`, organized by page:

```
nav.*        Navigation links
home.*       Home page content
about.*      About page content
features.*   Features page content
pricing.*    Pricing page content
footer.*     Footer content
```

To add a new language:
1. Add a new file in `i18n/<code>.json`
2. Register the locale in `nuxt.config.ts` under `i18n.locales`

---

## SEO

- Automatic sitemap via `@nuxtjs/seo` → `https://saladvault.app/sitemap.xml`
- Per-page meta tags via `useSeoMeta()` in each page
- Open Graph tags (title, description)
- `public/_robots.txt` → renamed to `robots.txt` at deploy (Nginx `try_files` or hosting config)
- `public/llms.txt` → product description for AI crawlers

---

## Related Repositories

| Repo | Description |
|------|-------------|
| [salad-vault/tauri-app](https://github.com/salad-vault/tauri-app) | Desktop app (Tauri 2 + Leptos + Rust) |
| [salad-vault/api](https://github.com/salad-vault/api) | Backend API (Actix Web + SQLite) |
| [salad-vault/extension](https://github.com/salad-vault/extension) | Browser extension (Chrome / Firefox / Edge) |

---

## License

See [LICENSE](LICENSE) in the root repository.
