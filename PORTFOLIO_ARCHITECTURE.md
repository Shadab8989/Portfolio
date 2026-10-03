# Freelance Portfolio — Technical & Design Architecture Document

**Owner:** Shadab Ahmed Khan  
**Role:** Full Stack Developer — CRM, Automation & Integrations  
**Design Paradigm:** Minimal Editorial Design + Subtle Premium Glassmorphism  
**Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons  

---

## 1. Directory & File Structure

```
d:/portfolio 2026 oct 2nd/
├── index.html                # HTML entry point, meta tags, font links
├── package.json              # Project metadata and dependencies
├── vite.config.ts            # Vite build configuration & Tailwind integration
├── src/
│   ├── main.tsx              # React DOM root entry point
│   ├── App.tsx               # Main page layout container with ThemeProvider
│   ├── index.css             # Design tokens, typography, colors & CSS utilities
│   ├── data/
│   │   ├── types.ts          # TypeScript interfaces (Email, Service, Work, Process)
│   │   └── content.ts        # Production copy, emails, 6 services, 3 work items
│   ├── lib/
│   │   ├── ThemeProvider.tsx # Dark/Light mode context provider & persistence
│   │   └── useReveal.ts      # IntersectionObserver scroll animation hook
│   ├── components/
│   │   └── HeroWorkflow.tsx  # Compact UI pipeline illustration component
│   └── sections/
│       ├── Navbar.tsx        # Glass sticky header with ScrollSpy navigation
│       ├── Hero.tsx          # Editorial hero with headline & primary CTAs
│       ├── Prototype.tsx     # Interactive email automation demo (Glass panel)
│       ├── Capabilities.tsx # Services section (6 concise cards)
│       ├── Experience.tsx   # Work section (3 editorial case studies)
│       ├── Process.tsx      # 4-step horizontal timeline
│       ├── Contact.tsx      # Minimal call-to-action closing section
│       └── Footer.tsx       # Visually quiet footer
```

---

## 2. Design System & Styling Architecture (`src/index.css`)

The design system replaces AI-generated SaaS aesthetics (neon glows, purple gradients, giant cards) with a **minimal editorial design**.

### Color Tokens & Variables
```css
:root {
  /* Editorial Light Mode (Warm White / Pure Neutral) */
  --bg-primary: #fafafa;
  --bg-secondary: #f4f4f5;
  --bg-tertiary: #e4e4e7;
  --bg-card: #ffffff;
  --bg-inverted: #09090b;

  --border-subtle: #f4f4f5;
  --border-default: #e4e4e7;
  --border-strong: #d4d4d8;

  --text-primary: #09090b;
  --text-secondary: #52525b;
  --text-tertiary: #71717a;
  --text-muted: #a1a1aa;
  --text-inverted: #fafafa;

  /* Sophisticated restrained cool blue accent */
  --accent-primary: #2563eb;
  --accent-hover: #1d4ed8;
  --accent-muted: rgba(37, 99, 235, 0.06);

  --glass-bg: rgba(255, 255, 255, 0.75);
  --glass-border: rgba(228, 228, 231, 0.8);
}

.dark {
  /* Editorial Dark Mode (Deep Neutral Charcoal, No Neon) */
  --bg-primary: #09090b;
  --bg-secondary: #121215;
  --bg-tertiary: #18181b;
  --bg-card: #121215;
  --bg-inverted: #fafafa;

  --border-subtle: #18181b;
  --border-default: #27272a;
  --border-strong: #3f3f46;

  --text-primary: #f4f4f5;
  --text-secondary: #a1a1aa;
  --text-tertiary: #71717a;
  --text-muted: #52525b;
  --text-inverted: #09090b;

  --accent-primary: #3b82f6;

  --glass-bg: rgba(18, 18, 21, 0.75);
  --glass-border: rgba(39, 39, 42, 0.8);
}
```

### Key Utility Classes
- `.section-container`: Max-width `1140px` with responsive horizontal padding (`px-5 sm:px-8 lg:px-12`).
- `.glass-panel`: Translucent background blur applied to Navbar and Prototype container (`backdrop-filter: blur(12px)`).
- `.btn-primary`: High-contrast, sleek button (`bg-inverted`, `text-inverted`, rounded-lg).
- `.btn-secondary`: Outlined button with subtle hover state.

---

## 3. Data Schemas (`src/data/types.ts`)

```typescript
export interface Email {
  id: string;
  from: string;
  email: string;
  company: string;
  subject: string;
  preview: string;
  body: string;
  time: string;
  priority: "high" | "medium" | "low";
  category: string;
  assignee: string;
  status: "open" | "resolved" | "follow-up";
  extractedInfo: Record<string, string>;
  aiResponse: string;
}

export interface CapabilityCard {
  icon: string;
  title: string;
  description: string;
}

export interface ExperienceCard {
  title: string;
  metrics: string[];
  description: string;
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
```

---

## 4. Key Component Implementation Summaries

### `Navbar.tsx` (ScrollSpy + Theme Toggle)
- **Features:** Sticky header with `glass-panel` background blur when scrolled.
- **ScrollSpy:** Uses an `IntersectionObserver` observing all `<section id>` elements to dynamically update the active link with a subtle text highlight and bottom bar indicator.
- **Direct Action:** "Discuss a Project" button links directly to:
  `mailto:shadabkhan2020.sk@gmail.com?subject=Freelance%20Project%20Discussion`.

### `Hero.tsx` & `HeroWorkflow.tsx` (Hero & Visual Pipeline)
- **Content:** Concise tagline, main title *"Custom software. Automated workflows. Better business."*, and dual CTAs.
- **HeroWorkflow:** Compact, minimal product visual depicting 5 pipeline stages:
  1. *Business Input* (Email, Webhook, Form)
  2. *Automation* (Rules, Workflows, Queues)
  3. *Integration* (CRMs, WhatsApp, APIs)
  4. *Application* (Portals, Dashboards)
  5. *Data & Action* (DB, Reports, Notifications)

### `Prototype.tsx` (Interactive Inbox Demo)
- **Features:**
  - Split view between Inbox List and Email Detail view.
  - Interactive actions: **Generate AI Reply** (simulates real-time typewriter output), **Assign**, **Resolve**, **Follow-up**, and **Back to Inbox**.
  - Structured preview surface showing AI extracted data fields.

### `Capabilities.tsx` (Services)
- **Structure:** Exactly 6 service cards (*Automation*, *Web Applications*, *Websites*, *API & Integrations*, *Mobile Apps*, *CRM & Internal Tools*).
- **Design:** Clean icon + title + one-sentence description.

### `Experience.tsx` (Work)
- **Structure:** 3 editorial case studies:
  1. *High-volume business systems* (150+ users, 20,000+ emails/day)
  2. *Finance & document automation*
  3. *Large-scale integrations* (4M+ listings, 500K+ records/day)

### `Process.tsx` (Timeline)
- **Layout:** 4-step horizontal timeline on desktop (vertical on mobile) with subtle step numbers (`01`, `02`, `03`, `04`) and connecting border lines.

### `Contact.tsx` & `Footer.tsx`
- **Contact:** Minimal closing text with primary CTA button and clickable email text (`shadabkhan2020.sk@gmail.com`).
- **Footer:** Quiet metadata row displaying name, professional title, email link, and dynamic copyright year.

---

## 5. Verification & Quality Checklist

- ✅ **No AI Clutter:** Zero glowing neon icons, zero heavy purple/blue background glows, zero technology pill walls.
- ✅ **Navigation & Links:** Tested all section anchors (`#prototype`, `#services`, `#work`, `#process`, `#contact`) and confirmed working `mailto:` link format.
- ✅ **Responsive Design:** Fluid layout across mobile (375px), tablet (768px), and desktop (1280px+).
- ✅ **Performance & Build:** Clean compilation with Vite (`tsc && vite build`).
