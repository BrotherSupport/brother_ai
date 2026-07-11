# Plan: Build a Site Similar to maiagent.ai (Deploy on GitHub Pages)

Reference: https://maiagent.ai/

Scope note: per request, this plan focuses on three areas only — (1) Agent
automation system + LLM AI Gateway as the core offering, (2) Professional
Services, (3) Resource Center. The generic multi-SKU "產品" (Product catalog)
section from the reference site is intentionally excluded — we present the
agent system + gateway directly instead of a broad product matrix.

Visual design direction: **Slima Warm Editorial** (manuscript / literary
style), reference site https://slima.ai/zh-TW, full spec saved at
[`doc/design/slima-warm-editorial.md`](design/slima-warm-editorial.md).
This replaces the glossy/SaaS visual tone often used on platforms like
maiagent.ai with a warm-paper, serif-headline, editorial aesthetic — content
structure below stays the same, only the visual system changes.

## 1. Site Structure

```
/
├── index.html                 # Landing page (hero, positioning, CTA)
├── platform/
│   └── index.html             # Agent Builder + AI Gateway overview
├── services/
│   └── index.html             # Professional Services (consulting, training)
├── resources/
│   ├── index.html             # Resource Center hub (blog, case studies)
│   └── posts/...               # Individual articles / case studies
├── assets/
│   ├── css/
│   ├── js/
│   └── img/
└── CNAME (optional, custom domain)
```

Static site — no backend required for v1. Use plain HTML/CSS/JS, or a static
site generator (Astro, Eleventy, Hugo, or Jekyll since GitHub Pages supports
Jekyll natively).

## 2. Navigation (top nav)

- Home
- Platform (Agent Builder / AI Gateway)
- Professional Services
- Resource Center
- Contact / Book a Demo (CTA button, top-right)

## 3. Page-by-Page Content Plan

### 3.1 Landing Page (`/`)
- Hero: one-line value prop (e.g. "An agent automation system with a
  unified LLM gateway") + primary CTA ("Book a demo" / "View docs")
- Problem → Solution framing (why agent adoption fails today, how the
  platform fixes it)
- Key differentiators (3–5 bullets): multi-model gateway, RAG accuracy,
  private/on-prem deployment, security certifications
- Social proof: logos or short case-study teasers (link to Resource Center)
- Deployment options: SaaS / Private Cloud / On-Premise
- FAQ (5–8 questions)
- Footer with links to Platform, Services, Resources, legal, socials

### 3.2 Platform — Agent Automation System + LLM Gateway (`/platform`)
- **Agent Builder / Automation System**
  - No-code / low-code agent creation
  - Workflow / trigger-action automation
  - Integrations list (Slack, email, CRM, etc.)
- **LLM AI Gateway**
  - Multi-model routing (OpenAI, Anthropic, open-source models)
  - Centralized API key management, usage metering, cost control
  - Guardrails / logging / observability for LLM calls
- Architecture diagram (agent system → gateway → model providers)
- "Try it" / API docs link

### 3.3 Professional Services (`/services`)
- AI consulting package (scope, typical timeline e.g. 4–6 weeks)
- Training / enablement programs for internal teams
- Implementation framework (e.g. a 5-step / N-day onboarding process:
  discovery → design → build → deploy → monitor/optimize)
- CTA: "Book a free consultation" (form or mailto/Calendly link)

### 3.4 Resource Center (`/resources`)
- Blog / articles (markdown posts rendered to static pages)
- Case studies (metrics-driven: usage volume, time saved, ROI)
- Media coverage / press mentions
- Newsletter signup (can use a third-party form service like Formspree/
  Mailchimp embed since GitHub Pages has no backend)

## 4. Design & Branding — Slima Warm Editorial

Full spec: [`doc/design/slima-warm-editorial.md`](design/slima-warm-editorial.md)
(source: [awesome-claude-design/slima.md](https://github.com/yennanliu/awesome-claude-design/blob/main/design-md/warm/slima.md)).
Key rules to apply across all four pages:

- **Palette:** warm paper neutrals as the base —
  `--bg #ffffff`, `--soft #faf9f6`, `--warm #f3f1ec`, `--line #ececea`,
  `--ink #0a0a0a`, `--muted #5a5a60`, `--sand #c5b6a0` for quiet decorative
  rules. Accents are functional only: `--amber #d97706` (CTA emphasis),
  `--green #4ea87a` (success/consistency), `--red #d0463a` (alert/conflict),
  `--indigo #6366f1` (links / AI notes). Never fill a whole section with an
  accent color.
- **Typography:** `IBM Plex Serif` (Georgia fallback) for all headlines/hero
  copy at 40–56px — this is the signature look, so the hero and section
  titles across Landing, Platform, Services, and Resources must stay serif.
  `Inter` for body/UI copy at 16–18px with a relaxed 60–70ch reading measure.
  For zh-TW copy, pair the serif with a Noto Serif CJK stack. Type scale:
  13/14/16/18/22/28/40/56.
- **Layout:** single-column scrolling, content max-width ~1100–1200px
  centered, generous whitespace (4px grid, spacing scale
  4/8/12/16/24/32/48/64/96). Feature sections alternate text/screenshot.
- **Components:** solid `--ink` (or `--amber` for emphasis) pill buttons, no
  gradients/glow; cards use `--warm`/`--soft` fill with 1px `--line` border
  and modest radius (8–12px); paper-flat elevation only
  (`0 1px 2px rgba(10,10,10,.04)` resting, `0 8px 24px rgba(10,10,10,.08)`
  on hover) — no glassmorphism, neon, or heavy shadows.
- **Motion:** quiet fade/rise on scroll reveal (200–350ms), no parallax or
  spectacle animation; respect `prefers-reduced-motion`.
- **Explicitly avoid:** dark-themed hero, all-sans SaaS headline treatment,
  decorative gradients/orbs, glassmorphism, accent-flooded sections, cramped
  layouts.
- Real product screenshots (of the Agent Builder UI, Gateway dashboard, etc.)
  should carry the persuasion in the Platform section, per the reference
  site's approach — not stock imagery or illustration.

## 5. Tech Stack Recommendation
- Static site generator: Astro or Eleventy (fast, simple, GitHub Pages
  friendly) — or Jekyll if staying inside GitHub Pages' native build
- Styling: Tailwind CSS, configured with the Slima palette/type tokens above
  as custom theme values (colors, font families, spacing scale)
- Fonts: self-host or load IBM Plex Serif + Inter (+ Noto Serif CJK for
  zh-TW) via `@font-face` / Google Fonts
- Forms: Formspree / Google Forms embed (no backend on GitHub Pages)
- Analytics: Plausible or GA4 snippet

## 6. GitHub Pages Deployment Steps
1. Create/confirm repo (this repo, or a new one) with the static site source.
2. If using a generator, set the build output directory (e.g. `dist/`,
   `_site/`) and add a GitHub Actions workflow:
   - `actions/checkout`
   - `actions/setup-node` (if using Astro/Eleventy)
   - Build step (`npm run build`)
   - `actions/upload-pages-artifact` + `actions/deploy-pages`
3. In repo Settings → Pages, set source to "GitHub Actions" (or "Deploy from
   branch" if using plain Jekyll/HTML with no build step).
4. Add a `CNAME` file if using a custom domain; configure DNS (A/ALIAS or
   CNAME record) at the domain registrar.
5. Push to `main` — verify the Actions run succeeds and the Pages URL
   (`https://<user>.github.io/<repo>/`) or custom domain resolves.
6. Add a smoke-test checklist: nav links work, forms submit, mobile layout
   renders, 404 page exists.

## 7. Suggested Build Order
1. Scaffold repo + static site generator + Tailwind + GitHub Actions deploy
   pipeline (get "hello world" live on GitHub Pages first).
2. Build landing page (hero, positioning, FAQ, footer).
3. Build Platform page (Agent Builder + LLM Gateway sections + architecture
   diagram).
4. Build Professional Services page (offerings + CTA form).
5. Build Resource Center (hub page + 2–3 seed blog posts / case studies).
6. Polish: responsive QA, analytics, custom domain, SEO meta tags/OG images.
