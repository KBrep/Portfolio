# UX Researcher Portfolio - Architecture Documentation

## Overview
A premium, minimal, typography-driven personal portfolio website for a UX Researcher and Storyteller. Editorial design aesthetic with monochrome palette, smooth animations, and case study pages. Includes admin dashboard behind authentication.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js (Credentials provider, JWT strategy)
- **Animations**: Framer Motion (scroll-triggered, fade-in, hover effects)
- **Icons**: Lucide React

## Project Structure
```
apps/web/
├── prisma/
│   ├── schema.prisma          # User, PasswordResetToken, Project models
│   ├── seed.ts                # Demo user + 5 sample projects
│   └── migrations/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Homepage (hero, about, capabilities, work, philosophy, contact)
│   │   ├── layout.tsx         # Root layout (Inter font, monochrome theme)
│   │   ├── globals.css        # Monochrome CSS variables, custom typography classes
│   │   ├── work/[slug]/page.tsx  # Case study pages (SSG)
│   │   ├── work/reflect-flow-emotional-awareness/page.tsx  # Reflect Flow emotional awareness case study (static)
│   │   ├── work/sense-kidney-stone-scanner/page.tsx  # SENSE Bio-HCI case study (static)
│   │   ├── work/wanderoma-cultural-storytelling/page.tsx  # Wanderoma cultural storytelling case study (static)
│   │   ├── work/knot-it-down/page.tsx  # Knot it Down embodied learning case study (static)
│   │   ├── work/multi-user-chatgpt-interface/page.tsx  # Multi-User ChatGPT Interface case study (static)
│   │   ├── work/deception-tracking-vr/page.tsx  # Deception Tracking in VR case study (static)
│   │   ├── work/ux-projects/page.tsx  # UX case studies grid (6 slots)
│   │   ├── work/content-writing/page.tsx  # Content writing portfolio (2 blog articles)
│   │   ├── work/digital-media/page.tsx  # Digital media campaigns (5 social media campaigns)
│   │   ├── work/psychology/page.tsx  # Psychology articles (logical fallacies + persuasion principles)
│   │   ├── work/development/page.tsx  # Development projects (4 full-stack projects)
│   │   ├── dashboard/page.tsx    # Protected admin dashboard
│   │   ├── login/page.tsx        # Styled login with demo credentials
│   │   ├── register/page.tsx     # Styled registration
│   │   ├── forgot-password/page.tsx
│   │   ├── reset-password/page.tsx
│   │   └── api/               # Auth, password reset API routes
│   ├── components/
│   │   ├── portfolio/         # Navigation, Hero, About, Capabilities, Work, Philosophy, Contact, Footer, CaseStudyContent, SenseCaseStudy, WanderomaCaseStudy, ReflectFlowCaseStudy, KnotItDownCaseStudy, DeceptionTrackingCaseStudy
│   │   │   ├── reflectflow/   # Reflect Flow sub-components (Metrics, Research, Process, Testing)
│   │   │   ├── sense/         # SENSE sub-components (Metrics, Research, Process, Testing)
│   │   │   ├── wanderoma/     # Wanderoma sub-components (Metrics, Research, Process, Testing)
│   │   │   ├── knotitdown/    # Knot it Down sub-components (Metrics, Research, Process, Testing)
│   │   │   ├── chatgptinterface/  # ChatGPT Interface sub-components (Metrics, Research, Process, Testing)
│   │   │   └── deceptiontracking/ # Deception Tracking sub-components (Metrics, Research, Process, Testing)
│   │   ├── dashboard/         # DashboardClient (sign-out button)
│   │   ├── tour/              # TourProvider (in-app onboarding tour)
│   │   └── ui/                # shadcn/ui components (37 pre-installed)
│   ├── lib/
│   │   ├── auth.ts            # NextAuth config
│   │   ├── prisma.ts          # Prisma client singleton
│   │   ├── projects.ts        # Project data access functions
│   │   └── utils.ts           # cn() utility
│   └── types/
│       └── next-auth.d.ts     # Session type augmentation
```

## Database Schema
- **User**: id, email (unique), name, image, password (hashed), emailVerified, timestamps
- **PasswordResetToken**: id, email, token (unique), expiresAt, used, usedAt, timestamps
- **Project**: id, slug (unique), title, description, category, role, problem, approach, decisions, outcome, year, order, userId (FK → User)

## API Routes
- `POST /api/auth/[...nextauth]` - NextAuth sign-in/sign-out
- `POST /api/auth/register` - User registration
- `POST /api/forgot-password` - Generate password reset token
- `GET /api/verify-reset-token` - Validate reset token
- `POST /api/reset-password` - Set new password

## Key Components
- **Navigation** (`portfolio/Navigation.tsx`) - Luxury-brand fixed nav with 'KB' logo, scroll-aware backdrop blur
- **HeroSection** (`portfolio/HeroSection.tsx`) - 85vh hero with monochrome portrait, dual-tone quote styling
- **AboutSection** (`portfolio/AboutSection.tsx`) - Structured "About" content block, 12-col grid
- **CapabilitiesSection** (`portfolio/CapabilitiesSection.tsx`) - 3-column grid with 5 capabilities + placeholder cell
- **WorkSection** (`portfolio/WorkSection.tsx`) - 5 work categories with links: UX Projects, Content Writing, Digital Media, Psychology, Development
- **UXProjectsGrid** (`portfolio/UXProjectsGrid.tsx`) - 6-slot grid with optional logo previews: Slot 1 Reflect Flow (with logo), Slot 2 Wanderoma (with logo), Slot 3 Knot it Down (with logo), Slot 4 Deception Tracking in VR (with logo), Slot 5 Multi-User ChatGPT Interface (with logo), Slot 6 SENSE (with logo)
- **ContentWritingGrid** (`portfolio/ContentWritingGrid.tsx`) - 2 blog articles showcasing strategic content approach: video marketing and digital trends (2019). Displays content approach methodology
- **DigitalMediaGrid** (`portfolio/DigitalMediaGrid.tsx`) - 5 social media campaigns with creative process breakdown. Includes professional metrics: managed 13+ accounts, $39K budget, 35% engagement uplift, 18% conversion growth
- **PsychologyGrid** (`portfolio/PsychologyGrid.tsx`) - 2 articles: Logical Fallacies (5 types) and Science of Persuasion (6 Cialdini principles). Shows application in UX/digital design with behavioral research outcomes
- **DevelopmentGrid** (`portfolio/DevelopmentGrid.tsx`) - 4 projects: Digital Books microservice, LMS system, ToffyJar website, database architecture. Technical stack: Java/Spring Boot, Angular/React, MySQL, AWS, Docker
- **KnotItDownCaseStudy** - Embodied history education. 4 sub-components in `portfolio/knotitdown/`
- **ReflectFlowCaseStudy** - Emotional awareness in digital choices. 4 sub-components in `portfolio/reflectflow/`
- **SenseCaseStudy** - Bio-HCI wearable scanner. 4 sub-components in `portfolio/sense/`
- **WanderomaCaseStudy** - Cultural storytelling. 4 sub-components in `portfolio/wanderoma/`
- **ChatGPTInterfaceCaseStudy** - Multi-user ChatGPT speculative UX. Hero ("What if ChatGPT wasn't just yours?"), problem/design questions, metrics, research (lit review, system mapping, trend analysis), 6-phase process, 5 features (multi-user mode, coloured prompt threads, emotion-aware responses, AI facilitation, multilingual communication), testing (heuristic walkthrough + 2 peer reviews), outcomes, reflection, Figma prototype link only. 4 sub-components in `portfolio/chatgptinterface/`. Forward-thinking, technically curious tone
- **DeceptionTrackingCaseStudy** - VR biosignal truthfulness speculative UX. Hero ("What if you could see the truth in real time?"), problem (lack of non-verbal cues in VR), 7 metrics (6 biosignal types, 0 formal testing), research (literature synthesis, design fiction), 4-phase process, 4 feedback modalities (honesty meter, halo, sincerity score, opacity), testing (informal critique, no formal usability), outcomes, future directions, reflection. No prototype/artefact link (concept only). 4 sub-components in `portfolio/deceptiontracking/`. Bold, intellectually provocative, ethically aware tone
- **PhilosophySection** (`portfolio/PhilosophySection.tsx`) - Inverted (dark bg) section with strategic quotes
- **ContactSection** (`portfolio/ContactSection.tsx`) - karthik.dwaj@gmail.com + LinkedIn
- **Footer** (`portfolio/Footer.tsx`) - Centered 'KB' label, dynamic copyright year
- **CaseStudyContent** (`portfolio/CaseStudyContent.tsx`) - Generic case study layout (database-driven)
- **TourProvider** (`tour/TourProvider.tsx`) - In-app tour with spotlight, tooltip, localStorage persistence

## Authentication & Authorization
- JWT session strategy via NextAuth.js
- Middleware protects `/dashboard` and `/admin` routes only
- All portfolio pages (/, /work/*) are public
- Password hashed with bcryptjs (10 salt rounds)
- Demo account: demo@example.com / demo1234

## State Management
- Server components for data fetching (case studies, dashboard); homepage is static (no DB fetch)
- Client components for interactivity (navigation, forms, tour, animations)
- localStorage for tour completion state per screen

## Design System
- **Palette**: Pure monochrome (black #0a0a0a, white #fafafa, greys)
- **Typography**: Inter font (local woff2, src/app/fonts/), heading-xl/lg/md/body-lg/md utility classes
- **Spacing**: section-padding (py-12 to py-16), compact whitespace throughout
- **Animations**: Framer Motion fade-up on scroll, subtle hover transitions
- **Layout**: Max-width 7xl, 12-column grid system

## Important Patterns
- `data-tour` attributes on key sections for tour targeting
- SSG for case study pages via `generateStaticParams`
- Scroll-triggered animations with `useInView` hook
- Monochrome inverted sections (philosophy) for visual contrast

## Recent Changes
- 2026-04-21: Fixed navigation links to work from all pages. Changed nav hrefs from hash-only anchors (#about, #work, etc.) to full paths with hashes (/#about, /#work, etc.) so clicking navigation items from any page (case studies, work categories) now correctly navigates back to homepage sections.
- 2026-04-21: Made logo and navigation bar fixed/static across all pages. Moved Navigation component from home page to root layout, added proper top padding (pt-16 sm:pt-20 for home, pt-24 sm:pt-28 for case studies, pt-32 sm:pt-36 for category pages) to all work pages to accommodate fixed header. Navigation now appears on all pages with z-50 layering, maintaining scroll-aware backdrop blur.
- 2026-04-21: Added VR Deception logo (vr-deception-logo.png) as UI preview to Deception Tracking in VR case study in UXProjectsGrid. Illustrated scene of two people with VR headsets and dialogue bubbles about deception detection now displays as card preview on /work/ux-projects.
- 2026-04-21: Added Multi-User ChatGPT Interface logo (multi-user-chatgpt-logo.png) as UI preview to UXProjectsGrid. The GPT logo with colorful arrows representing multi-user collaboration now displays as a card preview on /work/ux-projects.
- 2026-04-21: Removed Wanderoma logo from inside case study page (WanderomaCaseStudy.tsx). Deleted the Logo Preview section and unused Image import. The logo still appears as grid card preview on /work/ux-projects via UXProjectsGrid.
- 2026-04-21: Added Wanderoma logo (wanderoma-logo.png) as UI preview to UXProjectsGrid. Logo displays as card preview on /work/ux-projects grid, completing the visual consistency with Reflect Flow, Knot it Down, and SENSE case studies.
- 2026-04-21: Moved Knot It Down logo from inside case study page to UXProjectsGrid as a previewImage on the UI/UX listing page. Removed logo preview section and unused Image import from KnotItDownCaseStudy. Logo now appears as card preview on /work/ux-projects grid, matching Reflect Flow and SENSE pattern.
- 2026-04-21: Fixed color uniformity across Content Writing, Digital Media, Psychology, and Development grid components. Replaced all hardcoded `bg-zinc-900/50`, `bg-zinc-800/50`, `border-zinc-800/*`, `text-zinc-400/500` classes with semantic theme tokens (`bg-background`, `border-border`, `bg-muted/20`, `bg-secondary/20`, `text-muted-foreground`, `hover:bg-secondary/30`) to match UX Projects case study card styling. All 4 sections now visually consistent with the 6 case study cards.
- 2026-04-21: Added Content Writing, Digital Media, Psychology, and Development sections with portfolio content from CV and PORTFOLIO.pdf. Created 4 new work pages with corresponding grid components. Content includes: 2 blog articles, 5 social media campaigns with metrics, 2 psychology articles (logical fallacies, persuasion principles), 4 development projects.
- 2026-04-16: Repositioned Reflect Flow logo as grid card preview image in UXProjectsGrid (previewImage property) — logo now appears as a separate preview element on the /work/ux-projects grid, not inside the case study page content.

---

# LLM Model Configuration

> **Last updated:** February 26, 2026
> **Purpose:** Always use the latest model strings when calling external LLM APIs. Never use deprecated models.

---

## Anthropic (Claude)

| Model | API String | Use When |
|---|---|---|
| Claude Opus 4.6 | `claude-opus-4-6` | Deepest reasoning, complex agentic coordination, long-horizon tasks |
| Claude Sonnet 4.6 | `claude-sonnet-4-6` | Daily driver — Opus-level intelligence at Sonnet pricing, best computer use |
| Claude Haiku 4.5 | `claude-haiku-4-5-20251001` | High-volume, classification, simple/cheap tasks |

- 200K context default; Opus & Sonnet 4.6 support 1M with `context-1m-2025-08-07` beta header
- Adaptive thinking (`thinking: {type: "adaptive"}`) is the recommended mode for 4.6 models
- ❌ Never use: `claude-3-opus`, `claude-3-sonnet`, `claude-3-haiku`, `claude-3.5-sonnet`, `claude-3.5-haiku`, `claude-sonnet-4-5-20250929`

---

## OpenAI (GPT)

| Model | API String | Use When |
|---|---|---|
| GPT-5.2 | `gpt-5.2` | Flagship reasoning — coding, agentic tasks, complex problems |
| GPT-5.2 Pro | `gpt-5.2-pro` | Max accuracy, extended reasoning (Responses API only) |
| GPT-5.2 Instant | `gpt-5.2-chat-latest` | Fast non-reasoning responses |
| GPT-5.2 Codex | `gpt-5.2-codex` | Repo-scale agentic coding, refactors, migrations |
| GPT-5 mini | `gpt-5-mini` | Cost-efficient for well-defined tasks |
| GPT-5 nano | `gpt-5-nano` | Fastest/cheapest for simple tasks |

- Use Responses API for all new development (Chat Completions is legacy)
- ❌ Never use: `gpt-4`, `gpt-4-turbo`, `gpt-4o`, `gpt-4o-mini`, `o1`, `o3`, `o3-mini`, `o4-mini`

---

## Google (Gemini)

| Model | API String | Use When |
|---|---|---|
| Gemini 3.1 Pro | `gemini-3.1-pro-preview` | Best reasoning, agentic coding, complex multimodal (1M context) |
| Gemini 3 Flash | `gemini-3-flash-preview` | Pro-level intelligence at Flash speed and pricing |
| Gemini 2.5 Flash | `gemini-2.5-flash` | Production-stable, great price-performance with thinking |
| Gemini 2.5 Flash Lite | `gemini-2.5-flash-lite` | Budget — fastest, high-volume simple tasks |

- Gemini 3 series uses dynamic thinking by default; control with `thinking_level` param
- ⚠️ `gemini-3-pro-preview` is deprecated — shuts down March 9, 2026
- ❌ Never use: `gemini-pro`, `gemini-1.5-pro`, `gemini-1.5-flash`, `gemini-2.0-flash`, `gemini-3-pro-preview`

---

## xAI (Grok)

| Model | API String | Use When |
|---|---|---|
| Grok 4.1 Fast (Reasoning) | `grok-4-1-fast-reasoning` | Agentic tool-calling, search, code execution (2M context) |
| Grok 4.1 Fast (Non-Reasoning) | `grok-4-1-fast-non-reasoning` | Instant responses, no thinking tokens, cheaper |
| Grok 4 | `grok-4` | Flagship deep reasoning (always-on reasoning, no off switch) |
| Grok 3 Mini | `grok-3-mini-fast` | Lightweight budget option |

- Grok 4 does NOT support `reasoning_effort`, `presencePenalty`, `frequencyPenalty`, or `stop`
- Native tools: web_search, x_search, code_execution, collections_search
- ❌ Never use: `grok-2`, `grok-beta`, `grok-2-vision-beta`, `grok-3-beta`

