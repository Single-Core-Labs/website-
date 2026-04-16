# Single Core Labs - Codebase Context

## Project Overview
A React-based startup website for "Single Core Labs" - a sovereign AI cloud company offering full AI infrastructure lifecycle services from bare-metal GPU clusters to production LLM observability.

## Tech Stack
- **Framework**: React 18 with Vite
- **Routing**: React Router DOM v6
- **Animations**: Framer Motion v11
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **3D**: Three.js (for visual effects)
- **Build Tool**: Vite

## Directory Structure

```
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── DataFlowCanvas.jsx
│   │   ├── SolutionCard.jsx
│   │   ├── LightPillar.jsx / LightPillar.css
│   │   ├── CourseCard.jsx
│   │   ├── SectionLabel.jsx
│   │   ├── StatCounter.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/            # Route pages
│   │   ├── Home.jsx
│   │   ├── Solutions.jsx
│   │   ├── Research.jsx
│   │   ├── Products.jsx
│   │   ├── Contact.jsx
│   │   ├── Enterprise.jsx
│   │   ├── About.jsx
│   │   ├── AgenticSolutions.jsx
│   │   ├── GenAISolutions.jsx
│   │   └── Courses.jsx
│   ├── data/             # Static data files
│   │   ├── solutions.js
│   │   ├── faq.js
│   │   ├── courses.js
│   │   └── projects.js
│   ├── hooks/            # Custom React hooks
│   │   └── useScrollReveal.js
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── dist/                 # Build output
├── index.html            # HTML entry
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Routing Structure

| Path | Component |
|------|-----------|
| `/` | Home |
| `/solutions` | Solutions |
| `/products` | Products |
| `/research` | Research |
| `/contact` | Contact |
| `/enterprise` | Enterprise |
| `/enterprise/agentic` | AgenticSolutions |
| `/enterprise/genai` | GenAISolutions |
| `/about` | About |

## Key Implementation Details

### Code Splitting
All pages use React.lazy() for code splitting with Suspense fallback.

### Animation
- Framer Motion for page transitions (AnimatePresence mode="wait")
- Scroll animations via custom useScrollReveal hook
- LightPillar 3D effect using Three.js

### Styling
- Tailwind CSS with custom colors defined in tailwind.config.js
- CSS variables in index.css for theming
- Fonts: Instrument Sans, Outfit, JetBrains Mono

### Components Pattern
- Functional components with hooks
- Tailwind utility classes for styling
- Lucide React for icons