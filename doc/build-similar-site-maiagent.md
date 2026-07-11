# Plan: Build a Site Similar to maiagent.ai (Deploy on GitHub Pages)

Reference: https://maiagent.ai/

Scope note: per request, this plan focuses on three areas only — (1) Agent
automation system + LLM AI Gateway as the core offering, (2) Professional
Services, (3) Resource Center. The generic multi-SKU "產品" (Product catalog)
section from the reference site is intentionally excluded — we present the
agent system + gateway directly instead of a broad product matrix.

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

## 4. Design & Branding
- Choose a consistent type scale, color palette, and spacing system
- Reuse one component library across pages (buttons, cards, nav, footer)
- Optimize for mobile first; sections should stack cleanly

## 5. Tech Stack Recommendation
- Static site generator: Astro or Eleventy (fast, simple, GitHub Pages
  friendly) — or Jekyll if staying inside GitHub Pages' native build
- Styling: Tailwind CSS
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
