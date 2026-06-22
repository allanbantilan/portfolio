<script setup lang="ts">
import { onMounted } from "vue";

type StackItem = {
  name: string;
  icon:
    | "html"
    | "css"
    | "js"
    | "ts"
    | "php"
    | "mysql"
    | "vue"
    | "react"
    | "reactnative"
    | "expo"
    | "node"
    | "laravel"
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
  repo: string;
  screenshot: string;
  live: string;
  stack: string[];
};

const links = [
  { label: "Home", href: "#hero" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
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
      { name: "MySQL", icon: "mysql" },
      { name: "Vue.js", icon: "vue" },
    ],
  },
  {
    title: "Frameworks / Libraries",
    items: [
      { name: "Laravel", icon: "laravel" },
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
  mysql: "devicon-mysql-plain colored",
  vue: "devicon-vuejs-plain colored",
  react: "devicon-react-original colored",
  reactnative: "devicon-react-original colored",
  expo: "devicon-expo-original colored",
  node: "devicon-nodejs-plain colored",
  laravel: "devicon-laravel-plain colored",
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
  "Vue 3": "devicon-vuejs-plain colored",
  Inertia: "devicon-inertiajs-plain colored",
  Tailwind: "devicon-tailwindcss-original colored",
  MySQL: "devicon-mysql-plain colored",
  "Node.js": "devicon-nodejs-plain colored",
  JavaScript: "devicon-javascript-plain colored",
};

const projects: Project[] = [
  {
    title: "POS Management System",
    text:
      "A cashier app for shops. Staff search products, ring up sales, take cash or online payments, and print receipts, while owners track stock and view sales reports.",
    repo: "https://github.com/allanbantilan/pos-management-system-web",
    screenshot: "/pos-management.png",
    live: "https://posmanagement.duckdns.org",
    stack: ["Laravel", "Vue 3", "Inertia", "MySQL"],
  },
  {
    title: "Bookbound - Online Booking System",
    text:
      "An online booking app. Customers find listings, reserve and pay online, and manage or cancel bookings, while owners handle reservations, refunds, and payments.",
    repo: "https://github.com/allanbantilan/booking-system-web",
    screenshot: "/booking-system.png",
    live: "https://bookbound.duckdns.org",
    stack: ["Laravel", "Vue 3", "Tailwind", "MySQL"],
  },
  {
    title: "Aurora AI CLI",
    text:
      "A CLI coding agent for developers, with PHP/Laravel-aware workflows. Supports interactive and one-shot modes, file and shell tools, multiple AI providers with fallback, and permission modes for safe edits.",
    repo: "https://github.com/allanbantilan/aurora-ai-cli",
    screenshot: "/aurora-cli.png",
    live: "",
    stack: ["Node.js", "JavaScript"],
  },
];

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
            href="https://drive.google.com/file/d/1vBtUSiFIrShB4aeOLxvgRiW-PtYWw7Xw/view?usp=sharing"
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

    <section id="projects" class="section projects-section">
      <div class="section-head reveal">
        <p class="section-kicker">
          <i class="fa-solid fa-folder-open" aria-hidden="true"></i>
          <span>projects</span>
        </p>
        <h2>Projects I've Built</h2>
      </div>

      <div class="project-grid">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card reveal"
          :style="{ '--reveal-delay': `${index * 110}ms` }"
        >
          <img
            v-if="project.screenshot"
            class="project-shot"
            :src="project.screenshot"
            :alt="`${project.title} screenshot`"
          />
          <div v-else class="screenshot-slot">
            <i class="fa-regular fa-image" aria-hidden="true"></i>
            <span>Screenshot pending</span>
          </div>
          <div class="project-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.text }}</p>
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
