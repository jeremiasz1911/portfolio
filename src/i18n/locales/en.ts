import type { Dictionary } from "@/i18n/locales/pl";

export const en: Dictionary = {
  meta: {
    title: "Jeremiasz — Full-Stack & Mobile Developer",
    description:
      "I build web apps, mobile apps and product systems — from interface through API to cloud and production.",
  },

  nav: {
    items: {
      work: "Work",
      expertise: "Scope",
      experience: "Experience",
      about: "About",
      contact: "Contact",
    },
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
    progressLabel: "Scroll progress",
    availability: "Available for new projects",
  },

  hero: {
    badge: "Jeremiasz · Full-Stack & Mobile Developer",
    intro: "Got an idea for a project? Let's talk about working together.",
    title: "I build web and mobile apps.",
    subtitle:
      "I help turn an idea into a finished product — from a polished interface through the backend to launch.",
    primaryCta: "View projects",
    secondaryCta: "Let's talk",
    cvLabel: "Download CV",
    photoAlt: "Jeremiasz — Full-Stack & Mobile Developer",
  },

  about: {
    badge: "About",
    title: "I build products end-to-end — and I like closing the loop to production.",
    lead: "I work solo or in a small team: from the first screen, through the backend, to release.",
    statements: [
      "I usually start from a clear user flow, then choose the stack.",
      "I like systems where mobile, admin and API share one data model.",
      "Beyond code, I help shape scope, priorities and the path to launch.",
    ],
    photoAlt: "Jeremiasz — portrait photo",
    photoCaption: "",
  },

  engineering: {
    badge: "Engineering",
    title: "Stack and system architecture.",
    subtitle: "The tools I use day to day — and how they become a system.",
    panels: {
      stack: "Tech stack",
      architecture: "Architecture",
    },
  },

  capabilities: {
    badge: "How we can work",
    title: "Where I can help on a project.",
    subtitle: "Concrete delivery areas — without repeating the tech list.",
    items: {
      web: {
        title: "Web applications",
        body: "Dashboards, platforms and business systems.",
      },
      mobile: {
        title: "Mobile applications",
        body: "iOS and Android apps published to the stores.",
      },
      backend: {
        title: "Backend & APIs",
        body: "Auth, data, business logic and integrations.",
      },
      automation: {
        title: "Cloud & automation",
        body: "Functions, cron, deployments and hands-off processes.",
      },
      wordpress: {
        title: "WordPress",
        body: "Custom plugins, integrations and business features.",
      },
    },
  },

  stack: {
    badge: "Technologies",
    title: "A stack organised by responsibility.",
    subtitle: "Primary tools carry more weight — the rest support them.",
    usedIn: "Used in",
    groups: {
      frontend: "Frontend",
      mobile: "Mobile",
      backend: "Backend",
      data: "Data & auth",
      cloud: "Cloud",
      cms: "CMS",
      tools: "DevOps / Tools",
    },
  },

  architecture: {
    badge: "Architecture",
    title: "From interface to infrastructure.",
    subtitle: "How I assemble a product from the interface to the cloud.",
    externals: "External services",
    patterns: {
      mobile: "Mobile app",
      web: "Web app",
      wordpress: "WordPress",
      automation: "Automation",
    },
    layers: {
      client: "Client",
      auth: "Authentication",
      api: "API layer",
      logic: "Business logic",
      data: "Data",
      plugin: "Plugin",
      process: "Processing",
      engine: "Automation engine",
      service: "External service",
      result: "Result",
    },
  },

  projects: {
    badge: "Selected work",
    title: "Products running in production.",
    subtitle:
      "Key case studies first — a shorter list below, full catalogue on a separate page.",
    viewAll: "All projects",
    moreLabel: "More featured work",
    catalog: {
      badge: "Portfolio",
      title: "All projects.",
      subtitle:
        "Own products and client work — from mobile apps to WordPress plugins.",
      count: "projects",
      empty: "No projects in this category yet.",
    },
    filters: {
      all: "All",
      web: "Web",
      mobile: "Mobile",
      wordpress: "WordPress",
      systems: "Systems",
      plugins: "Plugins",
      other: "Other",
    },
    roles: {
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      api: "API & integrations",
      uiux: "UI/UX",
      deployment: "Deployment",
      automation: "Automation",
      cms: "CMS",
      architecture: "Product architecture",
    },
    labels: {
      viewProject: "View project",
      year: "Year",
      type: "Project type",
      stack: "Tech stack",
      about: "What it is",
      whatIDid: "My responsibility",
      screenshots: "Screenshots",
      related: "Related projects",
      visit: "Visit site",
      code: "Source code",
      back: "All projects",
      needsInfo: "Needs details",
      system: "System overview",
      architecture: "Architecture",
      features: "Key features",
      challenges: "Technical challenges",
      result: "Result",
      flows: "Flows",
    },
    systemFields: {
      client: "Client",
      platforms: "Platforms",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      auth: "Auth",
      storage: "Storage",
      integrations: "Integrations",
      deployment: "Deployment",
    },
    cta: {
      title: "Got a project in mind?",
      body: "Send me a few sentences — I reply within one business day.",
      action: "Let's talk",
    },
    items: {
      powiat: {
        title: "Powiat Decyduje",
        type: "Mobile app + admin panel",
        short:
          "Residents submit and vote on local projects from their phone, with SMS verification and a map.",
        about: [
          "A citizen participation app: project submissions, voting and an investment map from the phone.",
          "One vote per resident without full personal accounts — phone verification and anonymous access via Cloud Functions.",
          "An admin panel collects project status, map coverage, SMS activity and logs.",
        ],
        features: [
          "SMS verification",
          "Project map",
          "Voting system",
          "Admin panel",
          "Store publishing",
        ],
        challenges: [
          "One vote per resident without collecting full personal data.",
          "Keeping mobile and admin data consistent in near real time.",
        ],
        result: "A mobile app and admin panel operating as one system.",
        flows: {
          registration: "Resident registration",
          voting: "Voting",
        },
      },
      perfectTune: {
        title: "PerfectTune",
        type: "Education platform — web and mobile",
        short: "Students and parents on shared materials, lessons and progress.",
        about: [
          "An education platform pairing a mobile app with a web panel.",
          "Two user groups, one Firebase backend, separate views and permissions.",
          "The panel covers students, groups, lessons, materials and payments.",
        ],
        features: [
          "Parent and student roles",
          "Materials and lessons",
          "Admin panel",
          "Progress and reports",
        ],
        challenges: [
          "Two UX surfaces in one product without splitting the data model.",
          "Consistent auth and roles across mobile and web.",
        ],
        result: "An actively developed web + mobile product on Firebase.",
      },
      gitMachine: {
        title: "Git Machine",
        type: "Repository workflow automation",
        short: "Repository analysis, recommendations and scheduled actions on a dashboard.",
        about: [
          "A tool that takes manual repository reviews off the team.",
          "Analysis and actions run on a schedule; results land on one dashboard.",
        ],
        features: [
          "Repository analysis",
          "Scheduled actions",
          "Dashboard",
          "History and reports",
        ],
        challenges: [
          "Reliable, repeatable jobs without manual intervention.",
          "Readable analysis results in one place.",
        ],
        result: "An automation dashboard integrated with the GitHub API and Actions.",
        flows: {
          analysis: "Analysis cycle",
        },
      },
      ilPrimo: {
        title: "Il Primo",
        type: "Restaurant CMS panel",
        short: "Menu, dishes, sections and styling managed from one panel.",
        about: [
          "A CMS for a restaurant — the owner edits the menu, categories and page sections without a developer.",
          "The panel stays comfortable on desktop and on a phone.",
        ],
        features: [
          "Dish management",
          "Menu categories",
          "Page sections",
          "Mobile admin view",
        ],
        challenges: [
          "A simple panel for a non-technical owner.",
          "Keeping panel content in sync with the public site.",
        ],
        result: "A working CMS powering the restaurant's public site.",
      },
      asyncGallery: {
        title: "Async Gallery",
        type: "WordPress plugin",
        short: "Facebook galleries inside WordPress — fast, responsive and cached.",
        about: [
          "The plugin pulls photos from Facebook and renders a light, responsive gallery.",
          "Images load asynchronously and are cached so they never block the page.",
        ],
        features: [
          "Facebook API integration",
          "Async loading",
          "Cache",
          "Settings panel",
        ],
        challenges: [
          "Large galleries without slowing the page down.",
          "Stable sync with an external API.",
        ],
        result: "A reusable WordPress plugin.",
      },
      aqualityConfigurator: {
        title: "Aquality — shower cabin configurator",
        type: "Product configurator / e-commerce",
        short: "Step-by-step cabin configuration with live preview and pricing.",
        about: [
          "A product configurator for a shower cabin manufacturer.",
          "The same flow works on desktop and on a phone.",
        ],
        features: [
          "Multi-step configuration",
          "Live preview",
          "Pricing",
          "Responsive UI",
        ],
        challenges: ["A complex configuration flow that stays readable on small screens."],
        result: "A configurator embedded in the manufacturer's site.",
      },
      aquality: {
        title: "Aquality",
        type: "Business website and shop",
        short: "A shower cabin manufacturer's site with a catalogue and online sales.",
        about: [
          "A company site with a model catalogue, cooperation section and guides.",
          "The site walks visitors from catalogue through configurator to cart.",
        ],
        features: ["Catalogue", "E-commerce", "Bilingual", "Configurator integration"],
        challenges: ["A coherent path from catalogue to configuration and purchase."],
        result: "The manufacturer's public WordPress site.",
      },
      fbFeed: {
        title: "FB Feed Post Page",
        type: "WordPress plugin",
        short: "Facebook posts imported into WordPress as native posts.",
        about: [
          "Imports posts from a Facebook Page as native WP posts — including images, scheduling and categories.",
          "No manual copying and no third-party embeds.",
        ],
        features: [
          "Post import",
          "Schedule / cron",
          "Images and categories",
          "Native WP posts",
        ],
        challenges: [
          "Reliable recurring import from the Facebook API.",
          "Mapping social content onto the WordPress post model.",
        ],
        result: "A plugin that keeps social content on the company site.",
        flows: {
          import: "Post import",
        },
      },
    },
  },

  experience: {
    badge: "Experience",
    title: "Current work and previous experience.",
    subtitle: "Professional roles. Own products live in the projects section.",
    currentLabel: "Current",
    items: {
      freelance: {
        role: "Freelancer",
        org: "Independent practice",
        period: "Present",
        summary: "Web apps, mobile apps and automation systems for clients.",
        highlights: [
          "Web and mobile apps",
          "React / React Native / Firebase",
          "WordPress plugins",
          "API integrations",
        ],
      },
      candyweb: {
        role: "Mobile Application Developer",
        org: "Candyweb",
        period: "1+ year",
        summary: "Mobile apps and digital product development.",
        highlights: [
          "Mobile applications",
          "React ecosystem",
          "Commercial projects",
          "Integrations",
        ],
      },
      earlier: {
        role: "Frontend Developer",
        org: "PwC · EventMaker · Szopex",
        period: "Earlier",
        summary: "Microfrontends and web interfaces in product teams.",
        highlights: ["Microfrontends", "React", "TypeScript", "JavaScript"],
      },
    },
  },

  contact: {
    badge: "Contact",
    title: "Let's talk about working together.",
    subtitle: "Share a few details about your project — I usually reply within one business day.",
    emailAction: "Send a message",
    links: {
      github: "Code and projects",
      linkedin: "Professional profile",
      email: "Direct contact",
      cv: "CV as PDF",
    },
    cvLabel: "Download CV",
  },

  footer: {
    tagline: "Full-Stack & Mobile Developer",
    rights: "All rights reserved.",
    navLabel: "Navigate",
    connectLabel: "Connect",
  },
};
