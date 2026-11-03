# DESIGN.md — Allan Bantilan Portfolio

Visual world derived from the user's Figma reference (JCREA / Fawziuiux
community portfolio, file `41rAKmvbn5kdzge4GRqqKj`). Surface mode: **Experience**.
Warm, confident, playful-professional. Orange + near-black + white, big
geometric display type, pill shapes, soft depth, hand-drawn accent doodles.

## Color tokens (`:root`)
- `--accent: #FD853A` — primary orange (CTAs, active nav, name highlight)
- `--accent-strong: #F26E1D` — hover / pressed
- `--accent-soft: #FEC9A7` — soft fills, hero halo
- `--accent-tint: #FFF1E8` — icon chips, faint orange backgrounds
- `--ink: #1D2430` — headings
- `--ink-2: #344054` — strong body
- `--muted: #667085` — body / secondary
- `--line: #E4E7EC` — borders, hairlines
- `--panel: #F2F4F7` — light gray section panels
- `--surface: #FFFFFF`
- `--dark: #171717` — dark sections + nav
- `--dark-2: #1F1F1F` — dark card surface
- `--on-dark: #FFFFFF`, `--on-dark-muted: #B5B5B5`
Contrast: muted on white 4.6:1+, on-dark-muted on #171717 4.5:1+.

## Type
- Family: **Poppins** (Google Fonts) — free substitute for Figma's Lufga
  (geometric, rounded, warm). Weights 400/500/600/700/800. One family
  throughout (as the reference does).
- Display: clamp up to ~5.5rem, weight 700/800, tracking -0.02 to -0.04em,
  balanced. Name/keyword highlighted in `--accent`.
- Body measure 60–72ch, 1.6 line-height, `--muted`.

## Shape & depth
- Radii: pills 999px (nav, buttons, chips), cards 28–32px, media 24px.
- Shadows: soft, offset + blur (e.g. `0 24px 60px -24px rgba(16,24,40,.22)`).
  No zero-blur block shadows, no colored halos.
- Dark glass cards: `--dark-2` + 1px white/8% border + backdrop blur (specific
  effect for the "what I build" cards, matching the reference).

## Motion
- One authored entrance per section: fade + 16px rise, exponential ease-out,
  from an already-visible default; respect `prefers-reduced-motion`.
- Hover: accent fills, arrow nudges, card lift. 150–220ms.

## Signature elements (committed world — keep)
- Rounded **pill navbar**, dark, white hairline border, centered brand, orange
  active pill.
- Hero **"Hello!"** speech-bubble badge + authored squiggle/star doodles
  (inline SVG, one stroke — never emoji).
- Orange **marquee strip**, slightly skewed, stack keywords.
- Light **panel** block for "Why work with me".
- Dark **CTA**/footer with orange "Let's talk" pill.

## Craft-floor obligations
- Drop the old site's `01 / 02` section-number eyebrows and kicker labels
  (banned). Headings carry themselves.
- Icons from devicon + Font Awesome (already deps) or authored SVG. No emoji.
- Theme selection, caret, scrollbar, focus rings from the palette.

## Truth (no fabrication)
All copy from PRODUCT.md + résumé. Real experience (CoreProc, SPLACE,
education) fills the reference's timeline. **No** invented testimonials,
star ratings, "10 years", "450+", or blog posts — those reference blocks are
omitted, not faked.
