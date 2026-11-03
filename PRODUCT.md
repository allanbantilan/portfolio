# PRODUCT.md — Allan Bantilan Portfolio

## What this is
Personal portfolio site for **Allan Bantilan**, a backend-focused full-stack
developer. Single-page site. Surface mode: **Experience** — the shipped work
leads; the interface recedes.

## Who it's for
Recruiters, hiring managers, and prospective clients evaluating Allan for
backend / full-stack / Laravel roles and freelance builds. They skim fast and
want proof: real, running software with live links and source.

## The job it does
1. Prove competence through shipped projects (screenshots, live links, source).
2. Make contact effortless (email, LinkedIn, GitHub, résumé).
3. Read as senior and intentional — not a template.

## Content truth (do not invent; this is factual)

### Identity
- Name: Allan Bantilan
- Role: Backend-focused full-stack developer
- Email: allanbantilan11@gmail.com
- LinkedIn: https://www.linkedin.com/in/allan-bantilan-3765993b1/
- GitHub: https://github.com/allanbantilan
- Résumé: https://drive.google.com/file/d/1lnUFRhRWl7P6RTTUiBGXavNLHbvxWsAl/view

### Projects (8 total — 4 app-stack + 4 WordPress, merged)
App projects:
1. **Pulse Webhook Monitoring** — self-hosted uptime monitoring (incidents,
   alerts, reports). Vue 3, Python, FastAPI, PostgreSQL, Redis, Docker. Live.
2. **POS Management System** — cashier + shop management (sales, stock,
   receipts, reporting). Laravel, Vue 3, Inertia, Filament, MySQL, Docker. Live + demo login.
3. **Bookbound — Online Booking System** — listings, reservations, online pay.
   Laravel, Vue 3, Tailwind, Filament, MySQL, Docker. Live + demo login.
4. **Aurora AI CLI** — coding assistant with PHP/Laravel-aware workflows.
   Node.js, JavaScript. Open source.

WordPress projects (merged from wp-portfolio):
5. **Health Checkup Clinic** — Healthcare. Checkup packages, price builder, HMO
   list, request form. WordPress, Elementor, PHP, JavaScript. Live.
6. **Hydration Product Launch** — Product launch. Editorial page, waitlist,
   referral links. WordPress, Elementor, PHP, JavaScript, MariaDB. Live.
7. **Home Search** — Real estate. Filters, map, saved homes, viewing workflow.
   WordPress, PHP, ACF, REST API, Leaflet, JavaScript. Live.
8. **Restaurant Reservations** — Hospitality. Menu, table reservation workflow,
   admin management. WordPress, PHP, MariaDB, JavaScript, Docker. Live.

Full project copy (challenge/solution/stack/links/images) lives in
`src/App.vue` project data; WP copy sourced from
`C:/projects/wp-web/wp-portfolio/theme/functions.php`.

### Stack shown
Languages: HTML, CSS, JS, TS, PHP, Python, MySQL, Vue.
Frameworks: Laravel, FastAPI, Inertia, Vue 3, React, React Native, Expo,
Node.js, Tailwind, Filament, Laravel Nova.
Tools: Git, Docker, REST, Swagger, Postman, Playwright, Jira, ServiceNow.

## Technical constraints
- Vue 3 + Vite + TypeScript. Build: `vue-tsc --noEmit && vite build`.
- Node 24.x. Auto-deploys to production (Vercel) on push to `main`.
- Icons: devicon + Font Awesome (already dependencies).

## Visual direction
Redesign based on a Figma file the user supplies (read via Figma MCP). The
current `src/App.vue` look is **anti-reference** — evidence of content and
structure, not the target aesthetic. DESIGN.md is derived from the Figma.
