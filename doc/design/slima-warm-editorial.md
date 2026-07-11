# Slima — Warm Editorial (Manuscript / Literary)

Reference DESIGN.md for a long-form AI writing workspace: serif-led headlines on warm paper backgrounds, restrained functional accents, and a manuscript-first calm. Built for writing books, screenplays, and research — so the page reads like the thing it makes. A literary, bookish variant of warm editorial. Reference: [slima.ai](https://slima.ai/zh-TW).

Source: https://github.com/yennanliu/awesome-claude-design/blob/main/design-md/warm/slima.md

## 1. Visual Theme & Atmosphere

Slima helps people write long-form creative work — novels, screenplays, research documents — with an all-in-one workspace for drafting, organizing, consistency-checking, and beta-reader feedback. The marketing site mirrors the product: warm off-white "paper" backgrounds, a serif headline face (IBM Plex Serif) that evokes a typeset manuscript, and generous whitespace so nothing competes with the writing. Interface screenshots do the persuading; decoration stays out of the way.

Mood: literary, calm, trustworthy, focused. Less SaaS-glossy, more "open manuscript on a clean desk." Light-themed throughout — there is no dark hero.

## 2. Color Palette & Roles

```
/* neutrals — warm paper stack */
--bg:      #ffffff   /* base page */
--soft:    #faf9f6   /* soft off-white — default section fill */
--warm:    #f3f1ec   /* warm paper — lifted sections, cards */
--sand:    #c5b6a0   /* muted taupe — decorative rules, quiet marks */
--line:    #ececea   /* hairline borders */
--ink:     #0a0a0a   /* headline + body ink (also --dark) */
--muted:   #5a5a60   /* secondary text */
--faint:   #8a8a8e   /* captions, meta, legal */

/* functional accents — used sparingly, semantically */
--amber:   #d97706   /* primary highlight / CTA emphasis */
--green:   #4ea87a   /* success / consistency-OK (deep: #2f7d57) */
--indigo:  #6366f1   /* links / notes / AI callouts (deep: #4b46b7) */
--red:     #d0463a   /* inconsistency / delete / alert */
```

Rule: the page is a warm neutral field. Accents are **functional, not decorative** — amber emphasizes an action, green/red signal consistency pass/fail (the product's headline feature), indigo marks AI notes and links. Never paint a section in an accent; let paper tones carry the layout and reserve color for meaning. The taupe `--sand` is the only "brand-warm" decorative note — thin rules, a dropped initial, a quiet flourish.

## 3. Typography Rules

- **Headlines / hero / section titles:** `IBM Plex Serif`, Georgia fallback. This is the signature — bookish, literary, set at generous size with tight-ish leading. The hero ("寫一本書" / "Write a Book") is a serif statement, not a slogan.
- **UI / body / labels:** `Inter`, system sans. Comfortable reading measure, relaxed line-height.
- **Secondary UI / chrome:** `IBM Plex Sans` where a touch more character is wanted than Inter.
- **Numerals:** tabular in any stat/pricing context.
- **Mono:** rare — only for IDs or code-like tokens; the aesthetic is prose, not terminal.

Scale: 13 / 14 / 16 / 18 / 22 / 28 / 40 / 56. Serif headlines live at 40–56; body sits at 16–18 for long-reading comfort. CJK: pair the serif with a Noto Serif CJK stack for the zh-TW build so headlines stay serif across scripts.

## 4. Component Stylings

**Hero**
- Serif headline (40–56), one calm sub-line in `--muted` sans, two CTAs (solid `--ink` pill + ghost), and a real product screenshot beneath. Background is a *very* soft, desaturated ambient wash (pale lavender → warm peach) over the paper — barely-there, never a bold saturated gradient or floating orbs.

**Buttons**
- Primary: solid `--ink` (or `--amber` for emphasis moments) fill, white text, fully-to-generously rounded, comfortable padding. "免費開始" / "Start Free".
- Secondary: `--warm` fill or ghost with 1px `--line` border, `--ink` text.
- No gradients or glow on buttons; flat and confident.

**Cards / feature blocks**
- `--warm` or `--soft` fill on `--bg`, 1px `--line` border, modest radius (8–12px), soft shadow only when lifted. Icon + serif-or-sans heading + sans description.

**Consistency / annotation chips** (the product's signature)
- Small pill tags using the functional accents: green = consistent, red = conflict, indigo = AI note. Quiet fill (accent at low opacity) + accent text. This is where color earns its place.

**Nav**
- Minimal, transparent-to-white top bar: wordmark left, a few links center/right, language switcher (zh-TW ↔ en), one CTA. Hairline `--line` divider on scroll.

**Inputs (the editor feel)**
- Paper-white or `--soft` fill, 1px `--line`, small radius. Focus: 2px `--ink` or `--indigo` ring. Text set in the reading sans/serif — the input should feel like a page.

## 5. Layout Principles

- Single-column scrolling narrative; feature sections alternate text/screenshot to avoid monotony without going asymmetric-for-its-own-sake.
- Generous whitespace between sections — the page breathes like margins on a book page.
- 4px base grid. Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96.
- Comfortable reading measure (~60–70ch) for prose blocks; never full-width running text.
- Content-max around 1100–1200px, centered.

## 6. Depth & Elevation

Paper-flat by default. Elevation is subtle and warm-toned, never glassy.

- Cards: `0 1px 2px rgba(10,10,10,0.04)` resting; `0 8px 24px rgba(10,10,10,0.08)` on hover/lift.
- Borders do most of the separation work (`--line`), not shadows.
- No neumorphism, no backdrop-blur glass, no neon glow, no chrome gradients.

## 7. Do's and Don'ts

**Do**
- Lead with a serif (IBM Plex Serif) headline on warm paper — the manuscript feel is the brand.
- Keep accents functional: amber = emphasis, green/red = consistency signal, indigo = AI note/link.
- Let real product screenshots carry the persuasion.
- Use warm neutral fills (`--soft`, `--warm`) to structure sections; separate with hairlines.
- Set body at a long-reading measure and line-height.

**Don't**
- Paint whole sections in an accent color, or add decorative gradients/orbs.
- Swap the serif headline for an all-sans SaaS look — you lose the literary identity.
- Go dark-themed; Slima is warm and light.
- Add glassmorphism, neon, or heavy shadows.
- Crowd the page — whitespace is part of the voice.

## 8. Responsive Behavior

- Single column already; sections stack naturally. Serif headline scales 56 → 30 on mobile.
- Alternating text/screenshot rows collapse to text-then-image.
- Nav collapses to a menu; language switcher stays reachable.
- Reading measure caps regardless of viewport; prose never runs edge-to-edge on wide screens.

## 9. Motion Notes

- Quiet fade/rise on section reveal (200–350ms, gentle easing); no parallax spectacle.
- Consistency chips can animate a soft state change (indigo → green/red) to demo the feature.
- Honor `prefers-reduced-motion`: static, no autoplay.
- Motion is editorial and unhurried — a page turning, not a product exploding.

## 10. Agent Prompt Guide

Bias: warm off-white "paper" backgrounds (`#faf9f6` / `#f3f1ec`) on white, serif headlines (IBM Plex Serif, Georgia/Noto Serif CJK fallback) at 40–56px as the signature, Inter for body/UI at a long-reading measure, functional-only accents (amber emphasis, green/red consistency signal, indigo AI-note/link), hairline `--line` separation, paper-flat elevation, single-column scrolling narrative with generous whitespace, real product screenshots, calm editorial motion. Literary and manuscript-first — the page should read like the book it helps write.

Reject: dark-themed heroes, all-sans SaaS headlines, decorative gradients/orbs/glow, glassmorphism, accent-flooded sections, cramped layouts, neon, terminal/mono aesthetics, spectacle motion.
