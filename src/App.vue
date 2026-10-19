<script setup lang="ts">
import { onMounted, reactive } from "vue";

type StackItem = {
  name: string;
  icon:
    | "html"
    | "css"
    | "js"
    | "ts"
    | "php"
    | "python"
    | "mysql"
    | "vue"
    | "react"
    | "reactnative"
    | "expo"
    | "node"
    | "laravel"
    | "fastapi"
    | "inertia"
    | "tailwind"
    | "filament"
    | "nova"
    | "git"
    | "docker"
    | "rest"
    | "swagger"
    | "postman"
    | "playwright"
    | "jira"
    | "servicenow";
};

type Project = {
  title: string;
  text: string;
  contribution: string;
  repo: string;
  screenshots: { src: string; alt: string; label: string }[];
  live: string;
  credentials?: string;
  stack: string[];
};

const links = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const stackGroups: { title: string; items: StackItem[] }[] = [
  {
    title: "Languages / Technologies",
    items: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "PHP", icon: "php" },
      { name: "Python", icon: "python" },
      { name: "MySQL", icon: "mysql" },
      { name: "Vue.js", icon: "vue" },
    ],
  },
  {
    title: "Frameworks / Libraries",
    items: [
      { name: "Laravel", icon: "laravel" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Inertia.js", icon: "inertia" },
      { name: "Vue 3", icon: "vue" },
      { name: "React", icon: "react" },
      { name: "React Native", icon: "reactnative" },
      { name: "Expo", icon: "expo" },
      { name: "Node.js", icon: "node" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Filament", icon: "filament" },
      { name: "Laravel Nova", icon: "nova" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "REST APIs", icon: "rest" },
      { name: "Swagger/OpenAPI", icon: "swagger" },
      { name: "Postman", icon: "postman" },
      { name: "Playwright", icon: "playwright" },
      { name: "Jira", icon: "jira" },
      { name: "ServiceNow", icon: "servicenow" },
    ],
  },
];

const stackIconClasses: Record<StackItem["icon"], string> = {
  html: "devicon-html5-plain colored",
  css: "devicon-css3-plain colored",
  js: "devicon-javascript-plain colored",
  ts: "devicon-typescript-plain colored",
  php: "devicon-php-plain colored",
  python: "devicon-python-plain colored",
  mysql: "devicon-mysql-plain colored",
  vue: "devicon-vuejs-plain colored",
  react: "devicon-react-original colored",
  reactnative: "devicon-react-original colored",
  expo: "devicon-expo-original colored",
  node: "devicon-nodejs-plain colored",
  laravel: "devicon-laravel-plain colored",
  fastapi: "devicon-fastapi-plain colored",
  inertia: "devicon-inertiajs-plain colored",
  tailwind: "devicon-tailwindcss-original colored",
  filament: "devicon-filamentphp-plain colored",
  nova: "fa-solid fa-star-of-life",
  git: "devicon-git-plain colored",
  docker: "devicon-docker-plain colored",
  rest: "fa-solid fa-code-branch",
  swagger: "devicon-swagger-plain colored",
  postman: "devicon-postman-plain colored",
  playwright: "devicon-playwright-plain colored",
  jira: "devicon-jira-plain colored",
  servicenow: "fa-solid fa-circle-nodes",
};

const stackIconColors: Partial<Record<StackItem["icon"], string>> = {
  nova: "#a8b1bd",
  rest: "#00bcd4",
  servicenow: "#86ed78",
};

const projectStackIconClasses: Record<string, string> = {
  Laravel: "devicon-laravel-plain colored",
  Filament: "devicon-filamentphp-plain colored",
  Python: "devicon-python-plain",
  "Vue 3": "devicon-vuejs-plain colored",
  Inertia: "devicon-inertiajs-plain colored",
  Tailwind: "devicon-tailwindcss-original colored",
  MySQL: "devicon-mysql-plain colored",
  FastAPI: "devicon-fastapi-plain colored",
  PostgreSQL: "devicon-postgresql-plain colored",
  Redis: "devicon-redis-plain colored",
  Docker: "devicon-docker-plain colored",
  "Node.js": "devicon-nodejs-plain colored",
  JavaScript: "devicon-javascript-plain colored",
};

const projects: Project[] = [
  {
    title: "Pulse Webhook Monitoring",
    text:
      "Self-hosted uptime monitoring for HTTP endpoints, with incidents, alerts, and reliability reports.",
    contribution:
      "Built scheduled checks, incident handling, alert delivery, and a dashboard backed by FastAPI, PostgreSQL, and Redis.",
    repo: "https://github.com/allanbantilan/webhook-monitoring-web",
    screenshots: [
      {
        src: "/pulse-webhook.png",
        alt: "Pulse dashboard showing monitor totals and an open incident",
        label: "Dashboard",
      },
      {
        src: "/pulse-webhook-monitors.png",
        alt: "Pulse monitors page showing one healthy and one failing endpoint",
        label: "Monitors",
      },
      {
        src: "/pulse-webhook-incidents.png",
        alt: "Pulse incidents page showing an open and a resolved outage",
        label: "Incidents",
      },
      {
        src: "/pulse-webhook-alerts.png",
        alt: "Pulse alerts page for configuring notification channels",
        label: "Alerts",
      },
      {
        src: "/pulse-webhook-login.png",
        alt: "Pulse sign-in page",
        label: "Sign in",
      },
    ],
    live: "https://pulse-webhook.duckdns.org",
    stack: ["Vue 3", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "POS Management System",
    text:
      "A cashier and shop management app for sales, stock, receipts, and reporting.",
    contribution:
      "Built product search, cart and checkout flows for cash and Maya payments, plus a Filament admin panel for catalog and transactions.",
    repo: "https://github.com/allanbantilan/pos-management-system-web",
    screenshots: [
      { src: "/pos-management.png", alt: "POS product catalog and current sale", label: "Product catalog" },
      { src: "/pos-checkout.png", alt: "POS checkout payment method selection", label: "Checkout" },
      { src: "/pos-cash-payment.png", alt: "POS cash payment keypad", label: "Cash payment" },
      { src: "/pos-admin-dashboard.png", alt: "Filament POS admin dashboard", label: "Admin dashboard" },
      { src: "/pos-admin-statistics.png", alt: "Filament POS statistics overview", label: "Admin statistics" },
      { src: "/pos-admin-sales.png", alt: "Filament POS sales and transactions list", label: "Admin sales" },
      { src: "/pos-admin-users.png", alt: "Filament POS client users list", label: "Admin users" },
    ],
    live: "https://posmanagement.duckdns.org",
    credentials:
      "https://github.com/allanbantilan/pos-management-system-web#demo-login-credentials",
    stack: ["Laravel", "Vue 3", "Inertia", "Filament", "MySQL", "Docker"],
  },
  {
    title: "Bookbound - Online Booking System",
    text:
      "An online booking app for finding listings, making reservations, and paying online.",
    contribution:
      "Built customer booking and payment flows, merchant onboarding, and a Filament admin panel for reservations.",
    repo: "https://github.com/allanbantilan/booking-system-web",
    screenshots: [
      { src: "/booking-system.png", alt: "Bookbound customer dashboard", label: "Customer dashboard" },
      { src: "/bookbound-bookings.png", alt: "Bookbound available bookings catalog", label: "Available bookings" },
      { src: "/bookbound-listing.png", alt: "Bookbound listing and reservation form", label: "Listing details" },
      { src: "/bookbound-payment.png", alt: "Bookbound confirmed payment and receipt", label: "Payment receipt" },
      { src: "/bookbound-admin-overview.png", alt: "Filament Bookbound statistics overview", label: "Admin overview" },
      { src: "/bookbound-admin-listings.png", alt: "Filament Bookbound booking listings", label: "Admin listings" },
      { src: "/bookbound-admin-reservations.png", alt: "Filament Bookbound reservations list", label: "Admin reservations" },
    ],
    live: "https://bookbound.duckdns.org",
    credentials:
      "https://github.com/allanbantilan/booking-system-web#demo-login-credentials",
    stack: ["Laravel", "Vue 3", "Tailwind", "Filament", "MySQL", "Docker"],
  },
  {
    title: "Aurora AI CLI",
    text:
      "A coding assistant for developers with PHP and Laravel aware workflows.",
    contribution:
      "Built interactive and one-shot modes, file and shell tools, provider fallback, and permissions for edits.",
    repo: "https://github.com/allanbantilan/aurora-ai-cli",
    screenshots: [
      { src: "/aurora-cli.png", alt: "Aurora AI CLI running in a terminal", label: "CLI preview" },
    ],
    live: "",
    stack: ["Node.js", "JavaScript"],
  },
];

const activeScreenshot = reactive<Record<string, number>>({});

function currentScreenshot(project: Project) {
  return project.screenshots[activeScreenshot[project.title] ?? 0] ?? project.screenshots[0]!;
}

function showScreenshot(project: Project, direction: number) {
  const count = project.screenshots.length;
  if (count < 2) return;

  activeScreenshot[project.title] =
    ((activeScreenshot[project.title] ?? 0) + direction + count) % count;
}

const contacts = [
  {
    label: "Email",
    href: "mailto:allanbantilan11@gmail.com",
    icon: "fa-solid fa-envelope",
    color: "#00bcd4",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/allan-bantilan-3765993b1/",
    icon: "fa-brands fa-linkedin-in",
    color: "#0a66c2",
  },
  {
    label: "GitHub",
    href: "https://github.com/allanbantilan",
    icon: "fa-brands fa-github",
    color: "#ffffff",
  },
];

onMounted(() => {
  const targets = document.querySelectorAll<HTMLElement>(".reveal");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        const delay =
          Number.parseFloat(
            getComputedStyle(target).getPropertyValue("--reveal-delay")
          ) || 0;

        window.setTimeout(() => target.classList.add("is-visible"), delay);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  targets.forEach((target) => observer.observe(target));
});
</script>

<template>
  <header class="site-nav" aria-label="Main navigation">
    <a class="brand" href="#hero" aria-label="Allan Bantilan home">
      <span>AB</span>
    </a>
    <nav>
      <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
    </nav>
  </header>

  <main class="shell">
    <section id="hero" class="hero">
      <div class="hero-copy">
        <p class="signal">Backend-Focused Full-Stack Developer</p>
        <h1>Allan Bantilan</h1>
        <p>
          Laravel developer focused on building scalable web applications, developing APIs
          for mobile and web platforms, and ensuring system reliability through production
          support, troubleshooting, and ongoing enhancements.
        </p>
        <div class="hero-actions">
          <a
            class="button primary"
            href="https://drive.google.com/file/d/1lnUFRhRWl7P6RTTUiBGXavNLHbvxWsAl/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
          <a class="button ghost" href="#projects">View Projects</a>
        </div>
      </div>

      <aside class="terminal-card" aria-label="Developer profile summary">
        <div class="terminal-top">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <pre
          aria-label="Developer profile API response"
        ><code><span class="json-keyword">GET</span> <span class="json-key">/api/developer</span>  <span class="json-string">200 OK</span>

<span class="json-brace">{</span>
  <span class="json-key">"name"</span><span class="json-punc">:</span> <span class="json-string">"Allan Bantilan"</span><span class="json-punc">,</span>
  <span class="json-key">"focus"</span><span class="json-punc">:</span> <span class="json-bracket">[</span><span class="json-string">"Vue.js"</span><span class="json-punc">,</span> <span class="json-string">"Laravel"</span><span class="json-punc">,</span> <span class="json-string">"APIs"</span><span class="json-bracket">]</span><span class="json-punc">,</span>
  <span class="json-key">"database"</span><span class="json-punc">:</span> <span class="json-string">"MySQL"</span><span class="json-punc">,</span>
  <span class="json-key">"support"</span><span class="json-punc">:</span> <span class="json-string">"production-ready"</span>
<span class="json-brace">}</span></code></pre>
      </aside>
    </section>

    <section id="projects" class="section projects-section">
      <div class="section-head reveal">
        <p class="section-kicker">
          <i class="fa-solid fa-folder-open" aria-hidden="true"></i>
          <span>projects</span>
        </p>
        <h2>Projects I've Built</h2>
        <p class="section-intro">Every live web app here is self-hosted on my VPS.</p>
      </div>

      <div class="project-grid">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card reveal"
          :style="{ '--reveal-delay': `${index * 110}ms` }"
        >
          <div
            v-if="project.screenshots.length"
            class="project-gallery"
            role="group"
            :aria-label="`${project.title} screenshots`"
            @keydown.left.prevent="showScreenshot(project, -1)"
            @keydown.right.prevent="showScreenshot(project, 1)"
          >
            <a
              class="project-shot-link"
              :href="currentScreenshot(project).src"
              :aria-label="`View full screenshot: ${currentScreenshot(project).alt}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="project-shot"
                :src="currentScreenshot(project).src"
                :alt="currentScreenshot(project).alt"
                loading="lazy"
                decoding="async"
              />
              <span class="shot-action">
                <i class="fa-solid fa-expand" aria-hidden="true"></i>
                View full screenshot
              </span>
            </a>
            <span class="gallery-label">{{ currentScreenshot(project).label }}</span>
            <template v-if="project.screenshots.length > 1">
              <button
                class="gallery-nav gallery-previous"
                type="button"
                :aria-label="`Previous ${project.title} screenshot`"
                @click="showScreenshot(project, -1)"
              >
                <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
              </button>
              <button
                class="gallery-nav gallery-next"
                type="button"
                :aria-label="`Next ${project.title} screenshot`"
                @click="showScreenshot(project, 1)"
              >
                <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </button>
              <span class="gallery-count" aria-live="polite">
                {{ (activeScreenshot[project.title] ?? 0) + 1 }} / {{ project.screenshots.length }}
              </span>
            </template>
          </div>
          <div v-else class="screenshot-slot">
            <i class="fa-regular fa-image" aria-hidden="true"></i>
            <span>Screenshot pending</span>
          </div>
          <div class="project-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.text }}</p>
            <p class="project-contribution">
              <strong>My work:</strong> {{ project.contribution }}
            </p>
            <div class="badges">
              <span v-for="badge in project.stack" :key="`${project.title}-${badge}`">
                <i :class="projectStackIconClasses[badge]" aria-hidden="true"></i>
                {{ badge }}
              </span>
            </div>
            <div class="project-actions">
              <a :href="project.repo" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-github" aria-hidden="true"></i>
                GitHub
              </a>
              <a
                v-if="project.live"
                :href="project.live"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                Live Site
              </a>
              <a
                v-if="project.credentials"
                :href="project.credentials"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-key" aria-hidden="true"></i>
                Login Credentials
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="stack" class="section stack-section">
      <div class="section-head reveal">
        <p class="section-kicker">
          <i class="fa-solid fa-layer-group" aria-hidden="true"></i>
          <span>stack</span>
        </p>
        <h2>Technologies I work with.</h2>
      </div>

      <div class="stack-groups">
        <article
          v-for="(group, groupIndex) in stackGroups"
          :key="group.title"
          class="stack-group reveal"
          :style="{ '--reveal-delay': `${groupIndex * 90}ms` }"
        >
          <h3>{{ group.title }}</h3>
          <div class="stack-list">
            <div
              v-for="(item, index) in group.items"
              :key="`${group.title}-${item.name}`"
              class="stack-item reveal"
              :style="{ '--i': index, '--reveal-delay': `${index * 45 + 120}ms` }"
            >
              <i
                class="stack-icon"
                :class="stackIconClasses[item.icon]"
                :style="{ color: stackIconColors[item.icon] }"
                aria-hidden="true"
              ></i>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="section contact-section">
      <div class="contact-copy reveal">
        <p class="section-kicker contact-kicker">
          <i class="fa-regular fa-paper-plane" aria-hidden="true"></i>
          <span>contact</span>
        </p>
        <h2>Let's connect.</h2>
        <p>Open to Laravel, backend, and full-stack development opportunities.</p>
      </div>
      <div class="contact-links reveal" style="--reveal-delay: 120ms">
        <a
          v-for="contact in contacts"
          :key="contact.href"
          :href="contact.href"
          target="_blank"
          rel="noreferrer"
        >
          <i
            :class="contact.icon"
            :style="{ color: contact.color }"
            aria-hidden="true"
          ></i>
          {{ contact.label }}
        </a>
      </div>
    </section>
  </main>

  <footer>© Allan Bantilan, 2026</footer>
</template>
