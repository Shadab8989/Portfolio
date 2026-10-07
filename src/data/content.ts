import type { Service, CaseStudy, ProcessStep, CapabilityTab } from "./types";

export const siteConfig = {
  name: "Shadab Ahmed Khan",
  title: "Full Stack Developer — Custom Software & Automation",
  email: "shadabkhan2020.sk@gmail.com",
  hero: {
    eyebrow: "Full Stack Developer — Custom Software & Automation",
    h1: "Custom software.<br />Less repetitive work.<br />Better business.",
    subtext: "I build custom software and automate repetitive business work, using AI where it genuinely helps. Websites, web apps and tools that connect what you already use, so your team spends less time on manual tasks.",
    proof: "Real systems: 150+ users · 20,000+ emails/day · 4M+ listings",
    logTitle: "Customer request, handled",
    logBadge: "Example — fictional"
  },
  demoIntro: {
    title: "What can I build for your business?",
    description: "Four concept examples using fictional data. Pick one to see how it works."
  },
  crmDemo: {
    draftLabel: "Draft reply: AI-assisted, ready to review"
  }
} as const;

export const heroLogSteps = [
  { label: "New request", detail: "Customer asks about a wrong item in their order" },
  { label: "Organized", detail: "Sorted as an order issue, high priority" },
  { label: "Assigned", detail: "Sent to the support team" },
  { label: "Reply prepared", detail: "An AI-assisted draft is ready for review" },
  { label: "Completed", detail: "Customer helped, follow-up scheduled" },
];

export const capabilityTabs: CapabilityTab[] = [
  {
    id: "crm",
    label: "CRM",
    caption: "Customer Relationship Management (CRM) collects every customer request in one place, sorts it, sends it to the right person and prepares a reply for them to review. AI helps draft the reply; your team stays in control.",
    proof: "Real system: 150+ users · 20,000+ emails/day · ~40% faster replies",
    steps: [
      { label: "Request arrives", duration: 2500 },
      { label: "Categorized", duration: 1500 },
      { label: "Request created", duration: 2000 },
      { label: "Assigned", duration: 2000 },
      { label: "Reply & resolution", duration: 4000 }
    ]
  },
  {
    id: "automation",
    label: "Automation",
    caption: "Repetitive work such as sorting requests, filing documents and sending updates happens automatically, following rules you set.",
    proof: "Invoice processing, document reading & accounting connections",
    steps: [
      { label: "Request arrives", duration: 2000 },
      { label: "Rules applied", duration: 2500 },
      { label: "Processed", duration: 2500 },
      { label: "Saved", duration: 2000 },
      { label: "Team notified", duration: 2500 }
    ]
  },
  {
    id: "web-mobile",
    label: "Web & Mobile",
    caption: "Start from your idea, end with a website, web app or mobile app your team or customers can actually use.",
    proof: "Built for speed, clarity and real daily use",
    steps: [
      { label: "Your idea", duration: 2000 },
      { label: "Layout planned", duration: 3000 },
      { label: "Interface built", duration: 3000 },
      { label: "App ready", duration: 3000 }
    ]
  },
  {
    id: "integrations",
    label: "Integrations",
    caption: "Connect the tools you already use, including WhatsApp, so information stays up to date everywhere without retyping.",
    proof: "Real system: 4M+ listings · 500K+ records/day synced",
    steps: [
      { label: "Event triggered", duration: 2000 },
      { label: "Data sent", duration: 2000 },
      { label: "Connected", duration: 2000 },
      { label: "Synced", duration: 2000 },
      { label: "Confirmed", duration: 3000 }
    ]
  }
];

export const services: Service[] = [
  {
    icon: "Database",
    title: "CRM & Internal Tools",
    description: "Keep every customer request in one place and make sure the right person handles it, with AI-assisted replies where useful.",
  },
  {
    icon: "Zap",
    title: "Automation",
    description: "Let software handle repetitive work, from sorting requests to reading documents and sending updates, using AI where it genuinely helps.",
  },
  {
    icon: "Layout",
    title: "Web Applications",
    description: "Online tools and dashboards your team or customers can use every day.",
  },
  {
    icon: "Globe",
    title: "Websites",
    description: "Fast, clear websites designed to win trust and bring in enquiries.",
  },
  {
    icon: "Plug",
    title: "Integrations & Connections",
    description: "Connect the tools your business already uses, including WhatsApp, and make them work together.",
  },
  {
    icon: "Smartphone",
    title: "Mobile Apps",
    description: "Phone apps for your team or your customers, built around the way you work.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "High-volume customer communication",
    description: "Organized and routed customer emails for a large support team, with AI-assisted replies that made responses about 40% faster.",
    metrics: ["150+ users", "20,000+ emails/day"],
    tags: ["CRM", "Email Routing", "Dashboards"],
  },
  {
    title: "Workforce Management Platform",
    badge: "Freelance Client Project",
    client: "Confidential client",
    description: "A workforce platform for distributed field teams, with a management dashboard, employee mobile app, location-based attendance, offline support, and digital onboarding.",
    longDescription: "Worked on a workforce platform that helps managers oversee distributed field teams through a web dashboard. Employees use the mobile app to record attendance and complete onboarding. Attendance records can be saved without a connection and synced when the network returns. My work included location and camera features for attendance checks, access controls that limit what each person can see, and third-party identity-verification (KYC) integrations for onboarding. The React dashboard and React Native app connect to the same Node.js/Express REST API backed by PostgreSQL, with shared JWT authentication and automatic session renewal.",
    highlights: [
      "Worked across the management web app, employee mobile app, and shared backend services.",
      "Worked on saving attendance records offline and syncing them when connectivity returns.",
      "Worked on secure access controls so managers only see data for their assigned teams and locations.",
      "Worked with location and camera features for attendance checks, and external identity-verification services for employee onboarding."
    ],
    metrics: [],
    tags: ["React/React Native", "Node.js", "PostgreSQL"],
    techStack: ["React", "React Native", "TypeScript", "JavaScript", "Node.js", "Express", "PostgreSQL", "Expo", "React Query", "REST APIs", "JWT"],
  },
  {
    title: "Finance & document automation",
    description: "Software read invoices and PDFs, organized the details and connected them to accounting, cutting manual data entry.",
    metrics: [],
    tags: ["Documents", "Accounting", "Automation"],
  },
  {
    title: "Large-scale integrations",
    description: "Kept products, orders and shipping in sync across marketplaces for very large catalogs.",
    metrics: ["4M+ listings", "500K+ records/day", "25K+ SKUs"],
    tags: ["Marketplace", "Sync", "Connections"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discuss",
    description: "Tell me what you want to build, fix or automate. No technical knowledge needed.",
  },
  {
    number: "02",
    title: "Prototype",
    description: "I show you a practical prototype of the idea, so you can see it working before committing to the full build.",
  },
  {
    number: "03",
    title: "Agree",
    description: "We finalize scope, timeline and price together, so there are no surprises.",
  },
  {
    number: "04",
    title: "Build",
    description: "I build, test and launch it, and keep you updated along the way.",
  },
];
