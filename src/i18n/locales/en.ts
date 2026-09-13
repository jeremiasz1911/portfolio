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
    education: "BEng in Computer Science",
    educationDetail: "Engineering degree in Computer Science (Informatyka).",
    statements: [
      "I hold an engineering degree in Computer Science and combine academic foundations with product practice.",
      "Day to day I work with Git, Visual Studio / VS Code and Cursor AI.",
      "I usually start from a clear user flow, then choose the stack.",
      "I like systems where mobile, admin and API share one data model.",
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
    subtitle: "Concrete delivery areas — from product work to security and AI.",
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
      security: {
        title: "Cybersecurity",
        body: "Secure auth, API protection, server-side validation and solid deployment practices.",
      },
      python: {
        title: "Python",
        body: "Backend, scripts, automation, SQL, and work on databases and ERP systems.",
      },
      ai: {
        title: "Artificial intelligence",
        body: "Using AI (including Cursor) in the software delivery process and integrating AI features into products.",
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
    title: "Selected work.",
    subtitle:
      "Products I build for residents, businesses and teams — with a clear scope of what I owned.",
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
      need: "The need",
      solution: "The solution",
      contribution: "My contribution",
      technical: "Quality & technical decisions",
      platforms: "Platforms",
      publishedStores: "Published on the stores",
      visitProduct: "Product website",
      caseCtaTitle: "Need a similar app?",
      caseCtaBody: "Let's talk about your project.",
      adminPanel: "Admin panel",
      mobileApp: "Mobile app",
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
        type: "Mobile app (iOS + Android) + admin panel",
        short:
          "An app for residents of Mława County to browse local initiatives, submit projects and take part in voting.",
        need: "Residents needed one place for local initiatives, a map, voting and submitting ideas — in the context of the Youth County Council and Mława County.",
        solution: [
          {
            title: "Browse without an account",
            body: "Guests can explore projects and the map without registering.",
          },
          {
            title: "Submit initiatives",
            body: "Residents submit ideas with a location on the map.",
          },
          {
            title: "Vote with phone verification",
            body: "A verified phone number confirms access to voting — not full resident identity.",
          },
          {
            title: "Admin panel",
            body: "Moderation, project status and content oversight in a separate system.",
          },
        ],
        technical: [
          {
            problem: "Different capabilities for guests and logged-in users.",
            solution:
              "Browse-only guest mode, with submissions and voting unlocked after phone verification.",
            meaning: "Residents can discover initiatives immediately; active participation requires a verified number.",
          },
          {
            problem: "Submissions should not appear on the public list immediately.",
            solution: "Admin review and moderation before public visibility.",
            meaning: "Content quality is checked before residents see it.",
          },
          {
            problem: "Sensitive operations should not live only on the client.",
            solution:
              "Firebase Cloud Functions backend for trusted operations (including SMS verification and voting).",
            meaning: "Critical logic runs server-side on a shared data model with the app and admin panel.",
          },
        ],
        contributionNote:
          "I built the Android and iOS apps solo, published them to the App Store and Google Play, and delivered the admin panel with the backend layer (Firebase, Cloud Functions, maps, SMS).",
        caseCta: "Need a similar app for residents or a local institution?",
        about: [
          "A citizen participation app: project submissions, voting and an investment map from the phone.",
          "Phone verification confirms access to voting; browsing is also available in guest mode.",
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
          "Separating guest browsing from features that require phone verification.",
          "Keeping mobile and admin data consistent.",
        ],
        result:
          "Published on the App Store and Google Play — a working resident app and admin panel as one system.",
        flows: {
          registration: "Resident registration",
          voting: "Voting",
        },
      },
      perfectTune: {
        title: "PerfectTune",
        type: "Education platform — web and mobile",
        short:
          "An education platform for students and parents — shared materials, lessons and progress in the app and web panel.",
        need: "A music school needed one place where parents and students could access materials, lessons and progress — without splitting that across separate systems.",
        solution: [
          {
            title: "Two roles, one product",
            body: "Separate views and permissions for parents and students on a shared backend.",
          },
          {
            title: "Materials and lessons",
            body: "Lessons, groups and materials where users already are — in the app and the panel.",
          },
          {
            title: "Admin panel",
            body: "Manage students, groups, lessons, materials and payments from the web.",
          },
        ],
        technical: [
          {
            problem: "Two UX surfaces in one product without splitting the data model.",
            solution: "A shared Firebase backend with separate views and roles for mobile and web.",
            meaning: "One source of truth — different experiences by role.",
          },
          {
            problem: "Consistent auth across the app and the panel.",
            solution: "Firebase Authentication with parent, student and admin roles.",
            meaning: "The same accounts and permissions on both platforms.",
          },
        ],
        contributionNote:
          "Full-stack ownership: mobile app, web panel, Firebase backend and deployment — as my own product under active development.",
        caseCta: "Building an education platform for web and mobile?",
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
        short:
          "An automation dashboard for engineering teams — repository analysis, recommendations and scheduled actions via the GitHub API.",
        need: "The team was losing time on manual repository reviews and needed recurring analysis and actions in one place.",
        solution: [
          {
            title: "Scheduled analysis",
            body: "Jobs run on a schedule and collect repository state without manual intervention.",
          },
          {
            title: "One dashboard",
            body: "Results, recommendations and history land in clear views.",
          },
          {
            title: "Actions through GitHub",
            body: "GitHub API and Actions integration runs planned operations on repositories.",
          },
        ],
        technical: [
          {
            problem: "Reliable, repeatable jobs without manual work.",
            solution: "Scheduled triggers (cron / GitHub Actions) wired into app logic.",
            meaning: "Analysis runs on its own — results are ready on the dashboard.",
          },
          {
            problem: "Scattered analysis results are hard to track.",
            solution: "A central Next.js dashboard with history and reports in Firebase.",
            meaning: "Repository state in one place, ready for decisions.",
          },
        ],
        contributionNote:
          "I designed and built the dashboard, GitHub API/Actions integration and automation layer end-to-end.",
        caseCta: "Want to automate repository workflows?",
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
        short:
          "A CMS panel for a restaurant owner — menu, dishes and page sections without calling a developer.",
        need: "The restaurant needed a simple way to edit the menu and site content without waiting on a developer.",
        solution: [
          {
            title: "Menu management",
            body: "Dishes, categories and descriptions edited from one panel.",
          },
          {
            title: "Page sections",
            body: "The owner updates public content without touching code.",
          },
          {
            title: "Panel on the phone",
            body: "Comfortable on desktop and mobile — changes even away from the venue.",
          },
        ],
        technical: [
          {
            problem: "The panel had to stay simple for a non-technical owner.",
            solution: "A clear React UI focused on menu and sections, without unnecessary complexity.",
            meaning: "The owner updates the site independently.",
          },
          {
            problem: "Panel content and the public site must stay in sync.",
            solution: "A shared REST API powering both the panel and the public site.",
            meaning: "One edit — live on the guest-facing site.",
          },
        ],
        contributionNote:
          "I built the CMS panel (frontend and API layer) for day-to-day restaurant content management.",
        caseCta: "Need a simple CMS for a local business?",
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
        short:
          "A WordPress plugin for company sites — Facebook photo galleries that stay light and cached.",
        need: "WordPress sites needed Facebook galleries without slowing page load or copying photos by hand.",
        solution: [
          {
            title: "Facebook API integration",
            body: "Photos are pulled from a Facebook Page and rendered as a gallery.",
          },
          {
            title: "Async loading",
            body: "Images do not block the first paint of the page.",
          },
          {
            title: "Cache",
            body: "API results are cached to avoid unnecessary requests.",
          },
        ],
        technical: [
          {
            problem: "Large galleries were slowing the page down.",
            solution: "Asynchronous image loading with cached API results.",
            meaning: "The gallery does not block the rest of the site.",
          },
          {
            problem: "Sync with an external API can be fragile.",
            solution: "A PHP plugin layer with a settings panel and controlled fetching.",
            meaning: "Stable gallery refresh without manual work.",
          },
        ],
        contributionNote:
          "I wrote the WordPress plugin end-to-end: Facebook API integration, cache, gallery UI and settings panel.",
        caseCta: "Want a WordPress plugin for a social integration?",
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
        short:
          "A shower cabin configurator for the manufacturer's customers — step-by-step setup with preview and pricing.",
        need: "The cabin manufacturer needed a way for customers to choose a product variant themselves instead of relying only on a catalogue.",
        solution: [
          {
            title: "Multi-step configuration",
            body: "Customers walk through successive cabin parameter choices.",
          },
          {
            title: "Preview and pricing",
            body: "Choices update a live preview and indicative price.",
          },
          {
            title: "The same flow on mobile",
            body: "Configuration works on desktop and on a phone.",
          },
        ],
        technical: [
          {
            problem: "A complex flow had to stay readable on a small screen.",
            solution: "A responsive configurator UI embedded in the manufacturer's site.",
            meaning: "Customers can finish configuration from a phone as well.",
          },
          {
            problem: "The configurator must fit the site and purchase path.",
            solution: "Embedded in the WordPress site with REST / front-end integration.",
            meaning: "One path from product choice to the next step in the shop.",
          },
        ],
        contributionNote:
          "I owned the configurator frontend, UX flow and integration with the manufacturer's API / site layer.",
        caseCta: "Need a product configurator on a company site?",
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
        short:
          "A shower cabin manufacturer's site — catalogue, cooperation and online sales in one place.",
        need: "The manufacturer needed a public site linking the model catalogue to configuration and purchase.",
        solution: [
          {
            title: "Catalogue and company content",
            body: "Models, cooperation and guides in a clear site structure.",
          },
          {
            title: "Path to purchase",
            body: "From catalogue through configurator to cart — without losing context.",
          },
          {
            title: "Bilingual",
            body: "The site supports content in more than one language.",
          },
        ],
        technical: [
          {
            problem: "A coherent path from catalogue to configuration and purchase.",
            solution: "A WordPress site integrated with the configurator and e-commerce.",
            meaning: "Customers complete the full flow without jumping between disconnected tools.",
          },
          {
            problem: "Content and sales on one site.",
            solution: "WordPress as the base for the company site and shop.",
            meaning: "Marketing and sales on one platform.",
          },
        ],
        contributionNote:
          "I worked on the frontend, UX and CMS layer of the company site and shop.",
        caseCta: "Building a company site with a shop and configurator?",
        about: [
          "A company site with a model catalogue, cooperation section and guides.",
          "The site walks visitors from catalogue through configurator to cart.",
        ],
        features: ["Catalogue", "E-commerce", "Bilingual", "Configurator integration"],
        challenges: ["A coherent path from catalogue to configuration and purchase."],
        result: "The manufacturer's public WordPress site.",
      },
      ekspresja: {
        title: "Ekspresja.net",
        type: "Website & parent panel — arts studio",
        short:
          "Site and parent panel for an arts studio in Ciechanów — class offer, calendar, enrolments and payments.",
        need: "The studio needed a modern site for Gordon-method classes plus a place where parents manage children, enrolments and payments.",
        solution: [
          {
            title: "Public offer and calendar",
            body: "Guests browse classes, location and the weekly schedule without an account.",
          },
          {
            title: "Parent panel",
            body: "After sign-up: children, class enrolments, payments and calendar in one place.",
          },
          {
            title: "Parent-friendly login",
            body: "Access to the panel with email or Google.",
          },
          {
            title: "Responsive product",
            body: "The same experience stays readable on laptop and phone.",
          },
        ],
        technical: [
          {
            problem: "The public offer and the parent area must stay separated.",
            solution:
              "Public pages for the offer and calendar, plus a protected panel after login.",
            meaning: "Guests discover the offer immediately; family data stays behind authentication.",
          },
          {
            problem: "Parents expect a simple way into the panel.",
            solution: "Email/password login with optional Google sign-in.",
            meaning: "Lower friction without a heavy registration process for every person.",
          },
        ],
        contributionNote:
          "I designed and shipped ekspresja.net: the public site, class calendar and parent panel with enrolments and account handling.",
        caseCta: "Need a site with a class enrolment panel?",
        about: [
          "Arts studio site: Gordon early-childhood music, rhythmics, singing and instruments.",
          "Public class calendar and a parent panel after registration.",
        ],
        features: [
          "Class calendar",
          "Parent panel",
          "Enrolments and payments",
          "Google sign-in",
        ],
        challenges: [
          "A clear public calendar alongside a logged-in parent panel.",
          "Consistent layout on desktop and phone.",
        ],
        result:
          "ekspresja.net live — public offer and parent panel under one domain.",
      },
      fbFeed: {
        title: "FB Feed Post Page",
        type: "WordPress plugin",
        short:
          "A WordPress plugin for company sites — Facebook posts as native posts, without manual copying.",
        need: "The company wanted Facebook Page content on its WordPress site without rewriting posts by hand or embedding third-party widgets.",
        solution: [
          {
            title: "Import as native posts",
            body: "Facebook posts become regular WP posts — with images and categories.",
          },
          {
            title: "Schedule / cron",
            body: "Recurring fetch without manual runs.",
          },
          {
            title: "No external widgets",
            body: "Content lives in WordPress, not in a Facebook embed.",
          },
        ],
        technical: [
          {
            problem: "Reliable recurring import from the Facebook API.",
            solution: "A PHP plugin with cron / scheduling and mapping onto the WP model.",
            meaning: "Social content refreshes on the company site on its own.",
          },
          {
            problem: "Social content does not map 1:1 onto WordPress.",
            solution: "Mapping posts, images and metadata onto native posts and categories.",
            meaning: "Imports look and behave like regular WP content.",
          },
        ],
        contributionNote:
          "I built the plugin end-to-end: Facebook API integration, cron, content mapping and publishing as native posts.",
        caseCta: "Want to move Facebook content onto WordPress automatically?",
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
        summary:
          "Mobile apps, web applications and WordPress sites for commercial clients.",
        highlights: [
          "Mobile apps (React Native)",
          "Web applications",
          "WordPress sites",
          "Integrations and commercial projects",
        ],
      },
      softhard: {
        role: "Developer / systems support",
        org: "SoftHard S.A.",
        period: "1+ year",
        summary:
          "ERP systems work: Python, SQL, Firebird databases, security, plus database deployments and migrations.",
        highlights: [
          "Python and SQL (Firebird)",
          "Database deployments and migrations",
          "System security",
          "ERP environment maintenance / development",
        ],
      },
      blacrea: {
        role: "Web Master",
        org: "Blacrea",
        period: "Earlier",
        summary:
          "Websites and online stores: WordPress, PrestaShop, PHP, HTML, CSS, JavaScript and animations.",
        highlights: [
          "WordPress and PrestaShop",
          "PHP / HTML / CSS / JavaScript",
          "Front-end animations",
          "Company sites and shops",
        ],
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
