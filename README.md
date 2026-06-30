# White Rabbit Productions

A production-ready, cinematic luxury website for White Rabbit Productions — a private creative and consulting house. Built with the App Router, fully responsive, accessible, SEO-ready, and deployable to Vercel.

## Stack

- **Next.js 15** (App Router) + **TypeScript** (strict)
- **Tailwind CSS** for styling with brand design tokens
- **Framer Motion** for tasteful, reduced-motion-aware transitions
- **Lenis** for smooth scrolling (disabled under `prefers-reduced-motion`)
- **React Hook Form** + **Zod** for validated forms
- **Resend** for inquiry/booking email delivery (optional, graceful fallback)
- **next/font** (Cinzel + Inter) — no paid font files

## Pages

`/` Home · `/about` · `/services` · `/portfolio` (+ `/portfolio/[slug]` case studies) · `/experiences` · `/book` · `/contact` · `/shop` · `/return-policy` · `/terms-of-service` · `/privacy-policy` · `/accessibility` · custom `404`, `loading`, and `error` states.

API routes: `POST /api/booking`, `POST /api/inquiry`.
SEO: per-page metadata, Open Graph, Twitter cards, JSON-LD Organization schema, `sitemap.xml`, `robots.txt`.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional — site runs without any keys
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Environment variables

All variables are **optional** — the site builds and runs without them, using
graceful fallbacks. See `.env.example` for the full list.

| Variable | Purpose | If unset |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap, robots | Defaults to the production domain placeholder |
| `RESEND_API_KEY` | Resend API key for sending form emails | Submissions logged to server console; forms still work |
| `INQUIRY_TO_EMAIL` | Inbox that receives inquiries/bookings | Email delivery skipped |
| `INQUIRY_FROM_EMAIL` | Verified Resend "from" address | Email delivery skipped |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public email shown on the site | Placeholder address shown |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram profile link | Instagram link hidden/disabled |
| `NEXT_PUBLIC_CAL_LINK` | Cal.com handle or URL for scheduling | Book page shows fallback scheduling copy |
| `NEXT_PUBLIC_SHOPIFY_*` | Future Shopify storefront | Shop stays "Coming Soon" |
| `NEXT_PUBLIC_SANITY_*` | Future CMS content | Uses built-in content |
| `NEXT_PUBLIC_SUPABASE_*` | Optional lead storage | Not used |

> Email sends only when `RESEND_API_KEY`, `INQUIRY_TO_EMAIL`, and `INQUIRY_FROM_EMAIL` are **all** set.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project** and import the repo (framework auto-detects Next.js).
3. Add the environment variables above under **Settings → Environment Variables** (at minimum, set `NEXT_PUBLIC_SITE_URL` and the three Resend vars to enable email).
4. Deploy. No extra build configuration is required.

## Content & assets

- The rabbit mark (`/public/assets/rabbit-mark.png`) is the fixed brand logo and the home button — do not redesign it.
- Scene images in `/public/assets` are generated placeholders. Replace them with licensed stock later; `SceneHero` accepts any image.
- Editorial copy lives in `lib/content.ts`; legal copy in `lib/policies.ts`.

## Before launch

- Policy pages (`lib/policies.ts`) are **starter templates** — have a qualified attorney review them and replace `[DATE]` with a real "Last updated" date.
- Provide the real domain, public email, Instagram, Cal.com link, and any merchandise/return terms (see `docs/questions-before-launch.md` in the build pack).
