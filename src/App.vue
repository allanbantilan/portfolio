<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";

type StackItem = { name: string; icon: string };

type Project = {
  title: string;
  group: "Full-stack" | "WordPress" | "CLI";
  category: string;
  text: string;
  contribution: string;
  repo: string;
  live: string;
  credentials?: string;
  stack: string[];
  screenshots: { src: string; alt: string; label: string }[];
};

const resumeUrl = "/Allan-Bantilan-Resume.pdf";
const email = "allanbantilan11@gmail.com";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const capabilities = [
  {
    icon: "fa-solid fa-server",
    title: "Backend & APIs",
    text: "PHP/Laravel services, RESTful APIs, Sanctum auth, and payment-gateway integrations — plus the data models and validation behind them.",
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "Full-stack web apps",
    text: "End-to-end products with Vue 3, Inertia.js, TypeScript, and Tailwind, backed by Filament admin panels for the people who run them.",
  },
  {
    icon: "fa-solid fa-cloud-arrow-up",
    title: "Ship & self-host",
    text: "Dockerised deploys on my own VPS, with monitoring, root-cause fixes, and the production support that keeps them up.",
  },
];

const projectFilters = ["All", "Full-stack", "WordPress", "CLI"] as const;
const activeFilter = ref<(typeof projectFilters)[number]>("All");

const projects: Project[] = [
  {
    title: "Pulse Webhook Monitoring",
    group: "Full-stack",
    category: "Infrastructure",
    text: "Self-hosted uptime monitoring for HTTP endpoints, with incidents, alerts, and reliability reports.",
    contribution:
      "Built scheduled checks, incident handling, alert delivery, and a dashboard backed by FastAPI, PostgreSQL, and Redis.",
    repo: "https://github.com/allanbantilan/webhook-monitoring-web",
    live: "https://pulse-webhook.duckdns.org",
    stack: ["Vue 3", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    screenshots: [
      { src: "/pulse-webhook.png", alt: "Pulse dashboard showing monitor totals and an open incident", label: "Dashboard" },
      { src: "/pulse-webhook-monitors.png", alt: "Pulse monitors page showing one healthy and one failing endpoint", label: "Monitors" },
      { src: "/pulse-webhook-incidents.png", alt: "Pulse incidents page showing an open and a resolved outage", label: "Incidents" },
      { src: "/pulse-webhook-alerts.png", alt: "Pulse alerts page for configuring notification channels", label: "Alerts" },
      { src: "/pulse-webhook-login.png", alt: "Pulse sign-in page", label: "Sign in" },
    ],
  },
  {
    title: "POS Management System",
    group: "Full-stack",
    category: "Commerce",
    text: "A cashier and shop-management app for sales, stock, receipts, and reporting.",
    contribution:
      "Built product search, cart and checkout for cash and Maya payments, inventory validation and receipts, plus a Filament admin for catalog, transactions, users, and branding.",
    repo: "https://github.com/allanbantilan/pos-management-system-web",
    live: "https://posmanagement.duckdns.org",
    credentials: "https://github.com/allanbantilan/pos-management-system-web#demo-login-credentials",
    stack: ["Laravel", "Vue 3", "Inertia", "Filament", "MySQL", "Docker"],
    screenshots: [
      { src: "/pos-management.png", alt: "POS product catalog and current sale", label: "Product catalog" },
      { src: "/pos-checkout.png", alt: "POS checkout payment method selection", label: "Checkout" },
      { src: "/pos-cash-payment.png", alt: "POS cash payment keypad", label: "Cash payment" },
      { src: "/pos-admin-dashboard.png", alt: "Filament POS admin dashboard", label: "Admin dashboard" },
      { src: "/pos-admin-statistics.png", alt: "Filament POS statistics overview", label: "Statistics" },
      { src: "/pos-admin-sales.png", alt: "Filament POS sales and transactions list", label: "Sales" },
      { src: "/pos-admin-users.png", alt: "Filament POS client users list", label: "Users" },
    ],
  },
  {
    title: "Bookbound — Online Booking",
    group: "Full-stack",
    category: "Reservations",
    text: "An online booking app for finding listings, reserving time slots, and paying online.",
    contribution:
      "Built customer booking and PayMaya payment flows with double-booking safeguards, merchant onboarding, and a Filament admin for reservations, cancellations, and refunds.",
    repo: "https://github.com/allanbantilan/booking-system-web",
    live: "https://bookbound.duckdns.org",
    credentials: "https://github.com/allanbantilan/booking-system-web#demo-login-credentials",
    stack: ["Laravel", "Vue 3", "Tailwind", "Filament", "MySQL", "Docker"],
    screenshots: [
      { src: "/booking-system.png", alt: "Bookbound customer dashboard", label: "Dashboard" },
      { src: "/bookbound-bookings.png", alt: "Bookbound available bookings catalog", label: "Available bookings" },
      { src: "/bookbound-listing.png", alt: "Bookbound listing and reservation form", label: "Listing details" },
      { src: "/bookbound-payment.png", alt: "Bookbound confirmed payment and receipt", label: "Payment receipt" },
      { src: "/bookbound-admin-overview.png", alt: "Filament Bookbound statistics overview", label: "Admin overview" },
      { src: "/bookbound-admin-listings.png", alt: "Filament Bookbound booking listings", label: "Admin listings" },
      { src: "/bookbound-admin-reservations.png", alt: "Filament Bookbound reservations list", label: "Reservations" },
    ],
  },
  {
    title: "Health Checkup Clinic",
    group: "WordPress",
    category: "Healthcare",
    text: "A clinic website that makes checkup options easier to compare and request.",
    contribution:
      "Built an Elementor landing page with a package suggestion tool, an instant price builder, an HMO reference list, and a request form that carries the selected package.",
    repo: "https://github.com/allanbantilan/clinic-wp",
    live: "https://clinic-wp.duckdns.org/",
    stack: ["WordPress", "Elementor", "PHP", "JavaScript", "MySQL"],
    screenshots: [
      { src: "/clinic.png", alt: "Health Checkup Clinic homepage with checkup introduction and consultation image", label: "Homepage" },
    ],
  },
  {
    title: "Hydration Product Launch",
    group: "WordPress",
    category: "Product launch",
    text: "An editorial launch page with a working early-access and referral flow.",
    contribution:
      "Built an Elementor page and custom theme with product storytelling, a companion-plan toggle, a WordPress waitlist, and unique referral links with an optional retryable Mailchimp sync.",
    repo: "https://github.com/allanbantilan/product-hydration-wp",
    live: "https://product-hydration.duckdns.org/",
    stack: ["WordPress", "Elementor", "PHP", "JavaScript", "MariaDB", "Mailchimp"],
    screenshots: [
      { src: "/hydration.png", alt: "Hydration product launch homepage showing the smart bottle and product message", label: "Homepage" },
    ],
  },
  {
    title: "Home Search",
    group: "WordPress",
    category: "Real estate",
    text: "Property search with filters, a map, saved homes, and a viewing workflow.",
    contribution:
      "Built a custom WordPress search with property post types and ACF, live filters, Leaflet map browsing, saved homes, comparison, payment estimates, and agent-routed inquiries over a REST route.",
    repo: "https://github.com/allanbantilan/home-search-web",
    live: "https://home-search-wp.duckdns.org/",
    stack: ["WordPress", "PHP", "ACF", "REST API", "Leaflet", "MariaDB"],
    screenshots: [
      { src: "/homes.jpg", alt: "Home Search homepage with property search form over a house photograph", label: "Homepage" },
    ],
  },
  {
    title: "Restaurant Reservations",
    group: "WordPress",
    category: "Hospitality",
    text: "An editable restaurant site with a complete table-reservation workflow.",
    contribution:
      "Built a custom theme with menu content types, date and party validation, booking references, admin management, guest notifications, and a database lock that guards against overbooking a slot.",
    repo: "https://github.com/allanbantilan/resto-reserve-web",
    live: "https://resto-reserve.duckdns.org/",
    stack: ["WordPress", "PHP", "MariaDB", "Docker"],
    screenshots: [
      { src: "/restaurant.webp", alt: "Restaurant Reservations homepage with a food photograph and reservation link", label: "Homepage" },
    ],
  },
  {
    title: "Aurora AI CLI",
    group: "CLI",
    category: "Developer tool",
    text: "An AI coding assistant for developers, with PHP and Laravel-aware workflows.",
    contribution:
      "Built interactive and one-shot modes, file and shell tools, AI provider fallback, and edit permissions tuned for Laravel and Vue projects.",
    repo: "https://github.com/allanbantilan/aurora-ai-cli",
    live: "",
    stack: ["Node.js", "JavaScript"],
    screenshots: [
      { src: "/aurora-cli.png", alt: "Aurora AI CLI running in a terminal", label: "CLI preview" },
    ],
  },
];

const filteredProjects = computed(() =>
  activeFilter.value === "All"
    ? projects
    : projects.filter((p) => p.group === activeFilter.value),
);

const activeScreenshot = reactive<Record<string, number>>({});

function currentScreenshot(project: Project) {
  return project.screenshots[activeScreenshot[project.title] ?? 0] ?? project.screenshots[0]!;
}
function showScreenshot(project: Project, direction: number) {
  const count = project.screenshots.length;
  if (count < 2) return;
  activeScreenshot[project.title] = ((activeScreenshot[project.title] ?? 0) + direction + count) % count;
}

const experience = [
  {
    role: "Backend Developer",
    org: "CoreProc, Inc.",
    place: "Taguig City, Philippines · Remote",
    period: "Dec 2024 — Present",
    text: "Maintain PHP/Laravel backends across projects, currently a multi-tenant platform whose REST APIs serve Android and iOS apps. First-level client support via Jira and ServiceNow, plus root-cause analysis and production deployments.",
    current: true,
  },
  {
    role: "Full-Stack Developer Intern",
    org: "SPLACE",
    place: "Davao City, Philippines",
    period: "Feb 2024 — May 2024",
    text: "Independently designed and built an inventory-management system with PHP, jQuery, and JavaScript, improving tracking efficiency.",
    current: false,
  },
  {
    role: "B.S. Information Technology",
    org: "Legacy College of Compostela",
    place: "Davao de Oro, Philippines",
    period: "2020 — 2024",
    text: "Bachelor's degree in Information Technology.",
    current: false,
  },
];

const stats = [
  { value: "2+ yrs", label: "Professional experience" },
  { value: "8", label: "Projects shipped" },
  { value: "Self-hosted", label: "Live on my own VPS" },
];

const stackGroups: { title: string; items: StackItem[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
    ],
  },
  {
    title: "Frameworks & libraries",
    items: [
      { name: "Laravel", icon: "devicon-laravel-plain colored" },
      { name: "Vue 3", icon: "devicon-vuejs-plain colored" },
      { name: "Inertia.js", icon: "devicon-inertiajs-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "Filament", icon: "devicon-filamentphp-plain colored" },
      { name: "Laravel Nova", icon: "fa-solid fa-star-of-life" },
      { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    ],
  },
  {
    title: "CMS & WordPress",
    items: [
      { name: "WordPress", icon: "devicon-wordpress-plain" },
      { name: "Elementor", icon: "fa-solid fa-pen-ruler" },
      { name: "ACF", icon: "fa-solid fa-sliders" },
      { name: "Custom themes & plugins", icon: "fa-solid fa-puzzle-piece" },
      { name: "Leaflet", icon: "fa-solid fa-map-location-dot" },
      { name: "Mailchimp", icon: "fa-brands fa-mailchimp" },
    ],
  },
  {
    title: "APIs & tools",
    items: [
      { name: "REST APIs", icon: "fa-solid fa-code-branch" },
      { name: "Swagger / OpenAPI", icon: "devicon-swagger-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Playwright", icon: "devicon-playwright-plain colored" },
      { name: "Jira", icon: "devicon-jira-plain colored" },
      { name: "ServiceNow", icon: "fa-solid fa-circle-nodes" },
    ],
  },
];

const projectStackIconClasses: Record<string, string> = {
  Laravel: "devicon-laravel-plain colored",
  "Vue 3": "devicon-vuejs-plain colored",
  Inertia: "devicon-inertiajs-plain colored",
  Filament: "devicon-filamentphp-plain colored",
  Tailwind: "devicon-tailwindcss-original colored",
  Python: "devicon-python-plain colored",
  FastAPI: "devicon-fastapi-plain colored",
  PostgreSQL: "devicon-postgresql-plain colored",
  Redis: "devicon-redis-plain colored",
  Docker: "devicon-docker-plain colored",
  MySQL: "devicon-mysql-plain colored",
  MariaDB: "devicon-mysql-plain colored",
  "Node.js": "devicon-nodejs-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  PHP: "devicon-php-plain colored",
  WordPress: "devicon-wordpress-plain",
  Leaflet: "fa-solid fa-map-location-dot",
  "REST API": "fa-solid fa-code-branch",
  Mailchimp: "fa-brands fa-mailchimp",
  Elementor: "fa-solid fa-pen-ruler",
  ACF: "fa-solid fa-sliders",
};

const contacts = [
  { label: "Email", href: `mailto:${email}`, icon: "fa-solid fa-envelope" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/allan-bantilan-3765993b1/", icon: "fa-brands fa-linkedin-in" },
  { label: "GitHub", href: "https://github.com/allanbantilan", icon: "fa-brands fa-github" },
];

const menuOpen = ref(false);
function closeMenu() {
  menuOpen.value = false;
}

// One authored entrance per section: reveal on scroll.
onMounted(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );
  targets.forEach((el) => io.observe(el));
});
</script>

<template>
  <a class="skip-link" href="#projects">Skip to work</a>

  <header class="nav-wrap">
    <div class="nav shell" :class="{ open: menuOpen }">
      <a class="brand" href="#hero" @click="closeMenu">
        <span class="brand-mark">AB</span>
        <span class="brand-name">Allan Bantilan</span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a
          v-for="(link, i) in links"
          :key="link.href"
          :href="link.href"
          :class="{ active: i === 0 }"
          @click="closeMenu"
          >{{ link.label }}</a
        >
      </nav>
      <a class="btn btn-accent nav-cta" :href="`mailto:${email}`">
        Let's talk <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
      </a>
      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" aria-hidden="true"></i>
      </button>
    </div>
  </header>

  <main>
    <!-- HERO -->
    <section id="hero" class="hero shell">
      <div class="hero-copy" data-reveal>
        <span class="hello">
          Hello!
          <svg class="doodle doodle-hello" viewBox="0 0 48 40" aria-hidden="true" fill="none">
            <path d="M6 30C10 22 16 18 24 18" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            <path d="M34 6l3 9M42 10l-7 6M40 22l-9 1" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
          </svg>
        </span>
        <h1>
          I'm <span class="hl">Allan</span>,<br />
          a <span class="hl">Backend Developer</span>
        </h1>
        <p class="hero-intro">
          I build and maintain PHP/Laravel backends and full-stack apps with
          Vue&nbsp;3 — APIs, payments, and admin tools that keep real products
          running. Based in the Philippines, available remote.
        </p>
        <div class="hero-actions">
          <a class="btn btn-accent" href="#projects">
            View my work <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
          </a>
          <a class="btn btn-ghost" :href="`mailto:${email}`">Hire me</a>
          <a class="text-link" :href="resumeUrl" target="_blank" rel="noopener noreferrer">
            Résumé <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div class="hero-visual" data-reveal>
        <span class="halo" aria-hidden="true"></span>
        <svg class="doodle doodle-arc" viewBox="0 0 90 70" aria-hidden="true" fill="none">
          <path d="M6 58C18 30 44 14 84 16" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 10" />
        </svg>
        <figure class="hero-frame">
          <div class="frame-top"><span></span><span></span><span></span></div>
          <img
            src="/pulse-webhook.png"
            alt="Pulse monitoring dashboard with endpoint status and incidents"
            fetchpriority="high"
          />
          <figcaption>
            <span class="dot-live" aria-hidden="true"></span>
            Pulse — designed, built &amp; self-hosted
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- WHAT I BUILD -->
    <section id="services" class="services">
      <div class="shell">
        <div class="section-head" data-reveal>
          <h2>What I <span class="hl">build</span></h2>
          <p>Three things I do end to end — from the data model to the deploy.</p>
        </div>
        <div class="cap-grid">
          <article
            v-for="(cap, i) in capabilities"
            :key="cap.title"
            class="cap-card"
            data-reveal
            :style="{ transitionDelay: i * 80 + 'ms' }"
          >
            <span class="cap-icon"><i :class="cap.icon" aria-hidden="true"></i></span>
            <h3>{{ cap.title }}</h3>
            <p>{{ cap.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- WORK -->
    <section id="projects" class="projects shell">
      <div class="section-head light" data-reveal>
        <h2>Let's have a look at<br />my <span class="hl">work</span></h2>
        <p>
          Eight products I've designed, built, and shipped — the full-stack web
          apps run live on my own VPS.
        </p>
      </div>

      <div class="filter-row" data-reveal>
        <button
          v-for="f in projectFilters"
          :key="f"
          type="button"
          class="filter-pill"
          :class="{ active: activeFilter === f }"
          @click="activeFilter = f"
        >
          {{ f }}
        </button>
      </div>

      <div class="project-list">
        <article
          v-for="project in filteredProjects"
          :key="project.title"
          class="project-card"
          data-reveal
        >
          <div
            class="project-gallery"
            role="group"
            :aria-label="`${project.title} screenshots`"
            @keydown.left.prevent="showScreenshot(project, -1)"
            @keydown.right.prevent="showScreenshot(project, 1)"
          >
            <a
              class="shot-link"
              :href="currentScreenshot(project).src"
              :aria-label="`View full screenshot: ${currentScreenshot(project).alt}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="shot"
                :src="currentScreenshot(project).src"
                :alt="currentScreenshot(project).alt"
                loading="lazy"
                decoding="async"
              />
            </a>
            <span class="gallery-cat">{{ project.category }}</span>
            <template v-if="project.screenshots.length > 1">
              <button class="gallery-nav prev" type="button" :aria-label="`Previous ${project.title} screenshot`" @click="showScreenshot(project, -1)">
                <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
              </button>
              <button class="gallery-nav next" type="button" :aria-label="`Next ${project.title} screenshot`" @click="showScreenshot(project, 1)">
                <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </button>
              <span class="gallery-meta" aria-live="polite">
                {{ currentScreenshot(project).label }} ·
                {{ (activeScreenshot[project.title] ?? 0) + 1 }}/{{ project.screenshots.length }}
              </span>
            </template>
            <span v-else class="gallery-meta">{{ currentScreenshot(project).label }}</span>
          </div>

          <div class="project-body">
            <h3>{{ project.title }}</h3>
            <p class="project-summary">{{ project.text }}</p>
            <p class="project-build"><strong>The build.</strong> {{ project.contribution }}</p>
            <div class="badges">
              <span v-for="badge in project.stack" :key="`${project.title}-${badge}`">
                <i v-if="projectStackIconClasses[badge]" :class="projectStackIconClasses[badge]" aria-hidden="true"></i>
                {{ badge }}
              </span>
            </div>
            <div class="project-actions">
              <a :href="project.repo" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github" aria-hidden="true"></i> Source
              </a>
              <a v-if="project.live" class="accent" :href="project.live" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Live site
              </a>
              <a v-if="project.credentials" :href="project.credentials" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-key" aria-hidden="true"></i> Demo login
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="experience shell">
      <div class="section-head light" data-reveal>
        <h2>My <span class="hl">experience</span></h2>
        <p>Where I've worked and studied.</p>
      </div>
      <ol class="timeline">
        <li v-for="item in experience" :key="item.org" class="tl-item" data-reveal>
          <span class="tl-dot" :class="{ now: item.current }" aria-hidden="true"></span>
          <div class="tl-head">
            <h3>{{ item.org }}</h3>
            <span class="tl-period">{{ item.period }}</span>
          </div>
          <p class="tl-role">{{ item.role }} <span>· {{ item.place }}</span></p>
          <p class="tl-text">{{ item.text }}</p>
        </li>
      </ol>
    </section>

    <!-- STACK -->
    <section id="stack" class="stack">
      <div class="shell">
        <div class="section-head" data-reveal>
          <h2>Built with the<br />right <span class="hl">tools</span></h2>
          <p>A practical mix of backend depth, frontend fluency, and the tooling to take software into production.</p>
        </div>
        <div class="stack-groups">
          <article v-for="group in stackGroups" :key="group.title" class="stack-group" data-reveal>
            <h3>{{ group.title }}</h3>
            <div class="chip-row">
              <span v-for="item in group.items" :key="item.name" class="chip">
                <i :class="item.icon" aria-hidden="true"></i> {{ item.name }}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- WHY -->
    <section id="why" class="why shell">
      <div class="why-panel" data-reveal>
        <div class="why-copy">
          <h2>Why work <span class="hl">with me?</span></h2>
          <p>
            I ship end-to-end and own what I build — from the API and the
            payment flow to the Docker deploy and the production bug at 11pm.
            You get a developer who finishes the job and keeps it running.
          </p>
          <div class="why-stats">
            <div v-for="s in stats" :key="s.label" class="why-stat">
              <strong>{{ s.value }}</strong>
              <span>{{ s.label }}</span>
            </div>
          </div>
          <a class="btn btn-dark" :href="`mailto:${email}`">
            Hire me <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="cta">
      <div class="shell cta-inner" data-reveal>
        <h2>Have a project idea?<br /><span class="hl">Let's talk.</span></h2>
        <div class="cta-actions">
          <a class="btn btn-accent lg" :href="`mailto:${email}`">
            <i class="fa-solid fa-envelope" aria-hidden="true"></i> {{ email }}
          </a>
          <a class="btn btn-outline lg" :href="resumeUrl" target="_blank" rel="noopener noreferrer">
            Download résumé <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
          </a>
        </div>
        <ul class="trust-row">
          <li><i class="fa-solid fa-circle-check" aria-hidden="true"></i> 8 live projects</li>
          <li><i class="fa-solid fa-server" aria-hidden="true"></i> Self-hosted on my own VPS</li>
          <li><i class="fa-brands fa-github" aria-hidden="true"></i> Open source on GitHub</li>
        </ul>
      </div>
    </section>

    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        <span v-for="n in 2" :key="n">
          Laravel <b>✦</b> FastAPI <b>✦</b> Vue&nbsp;3 <b>✦</b> Inertia <b>✦</b>
          WordPress <b>✦</b> Docker <b>✦</b> REST APIs <b>✦</b> Filament <b>✦</b>
        </span>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="shell">
      <div class="footer-top">
        <h2>Let's connect<br />there</h2>
        <a class="btn btn-accent" :href="`mailto:${email}`">
          Hire me <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
        </a>
      </div>
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand" href="#hero">
            <span class="brand-mark">AB</span>
            <span class="brand-name">Allan Bantilan</span>
          </a>
          <p>
            Backend-focused full-stack developer. I build the APIs,
            applications, and workflows that keep real businesses moving.
          </p>
          <div class="socials">
            <a v-for="c in contacts" :key="c.href" :href="c.href" :aria-label="c.label" target="_blank" rel="noopener noreferrer">
              <i :class="c.icon" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <nav class="footer-col" aria-label="Footer">
          <h4>Navigation</h4>
          <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
        </nav>
        <div class="footer-col">
          <h4>Contact</h4>
          <a :href="`mailto:${email}`">{{ email }}</a>
          <a href="https://github.com/allanbantilan" target="_blank" rel="noopener noreferrer">github.com/allanbantilan</a>
          <a :href="resumeUrl" target="_blank" rel="noopener noreferrer">Download résumé</a>
        </div>
      </div>
      <div class="footer-base">
        <span>© Allan Bantilan, 2026. Built with care, hosted with purpose.</span>
        <a href="#hero">Back to top <i class="fa-solid fa-arrow-up" aria-hidden="true"></i></a>
      </div>
    </div>
  </footer>
</template>
