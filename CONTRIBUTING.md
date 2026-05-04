# Contributing to Single Core Labs Website

Welcome! This guide helps you contribute to the Single Core Labs website. All prompts in this file are designed to be copy-pasted directly into AI coding agents or GitHub issues.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Single-Core-Labs/website-.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Architecture

### Tech Stack
- **Framework**: React 18 with Vite
- **Routing**: React Router DOM v6
- **Animations**: Framer Motion v11
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **3D Effects**: Three.js via @react-three/fiber and @react-three/drei
- **SEO**: React Helmet Async
- **Build**: Vite

### Directory Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Route pages (13 total)
├── data/          # Static data (solutions.js, faq.js, etc.)
├── hooks/         # Custom React hooks
├── App.jsx        # Main app with routing
├── main.jsx       # Entry point
└── index.css      # Global styles + grain overlay
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run preview` - Preview production build

---

## Copy-Paste Prompts

Use these prompts directly in your AI agent or when opening issues:

### 🆕 Adding a New Page

```
Create a new React page component at src/pages/[PageName].jsx for the Single Core Labs website.

Requirements:
- Use the same patterns as existing pages (Home.jsx, About.jsx, etc.)
- Include Helmet for SEO (title, meta description)
- Use Framer Motion for page animations with variants like:
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  }
- Wrap in <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
- Use Tailwind CSS matching the dark theme (bg-black, text-white, etc.)
- Add the route in App.jsx following the lazy loading pattern
- Use the design guidelines from .agents/rules/frontend.md

Theme: Dark mode, grain overlay, grid backgrounds, white text, minimal aesthetic.
```

### 🎨 Adding a New Component

```
Create a new reusable React component at src/components/[ComponentName].jsx

Requirements:
- Follow the existing component patterns (SolutionCard.jsx, FAQAccordion.jsx, etc.)
- Use Tailwind CSS with the dark theme tokens
- Ensure it works with the site's design system (bg-black, text-white, etc.)
- Include proper prop types and defaults
- Add animations using Framer Motion if appropriate
- Match the aesthetic from .agents/rules/frontend.md (avoid generic AI slop)

Use these design tokens from tailwind.config.js:
- Colors: bg-primary (#000000), text-primary (#FFFFFF), accent-purple (#7C3AED)
- Fonts: Inter for body, JetBrains Mono for code
- Effects: grain overlay, grid pattern, subtle glows
```

### 📝 Updating Data/Content

```
Update the content in src/data/[file].js for the Single Core Labs website.

Available data files:
- solutions.js - Add/edit solution offerings
- faq.js - Add/edit FAQ items
- courses.js - Add/edit course listings
- projects.js - Add/edit project showcases

Requirements:
- Follow the existing data structure in the file
- Keep the same field names and types
- Ensure text matches the brand voice (professional, AI-focused)
- Add any new fields consistently if extending the data
```

### 🐛 Fixing a Bug

```
Fix a bug in the Single Core Labs website.

Bug description: [Describe the bug]

Steps to reproduce:
1. [Step 1]
2. [Step 2]
3. [Step 3]

Expected behavior: [What should happen]
Actual behavior: [What actually happens]

Requirements:
- Identify the component/page causing the issue
- Fix using React best practices
- Ensure the fix doesn't break other functionality
- Test the fix locally with npm run dev
- Use the same styling patterns as the codebase
```

### ✨ Adding Animations

```
Add animations to an existing component/page in the Single Core Labs website.

Target: [Component/Page name]
Animation type: [e.g., scroll-triggered, hover, page transition]

Requirements:
- Use Framer Motion for React animations
- Follow the existing animation patterns:
  - Page transitions: AnimatePresence mode="wait" with variants
  - Scroll reveals: custom useScrollReveal hook
  - Hover effects: whileHover, whileTap
- Keep animations subtle and performant
- Match the site's minimalist aesthetic
- Ensure animations work well with the grain overlay effect
```

### 🔍 Fixing SEO/Meta Tags

```
Add/update SEO metadata for [page name] in the Single Core Labs website.

Current meta tags:
- Title: [current]
- Description: [current]

Required:
- Add react-helmet-async import if not present
- Add Helmet component with updated title and meta description
- Follow the pattern from Home.jsx or other pages with SEO
- Ensure description is 150-160 characters for optimal SEO
```

### 🎯 Styling/Beautifying UI

```
Improve the visual design of [component/page] in the Single Core Labs website.

Current state: [Describe what's there]
Desired improvement: [What you want to achieve]

Requirements:
- Follow the frontend design guidelines in .agents/rules/frontend.md
- Avoid generic "AI slop" aesthetics
- Use the dark theme tokens from tailwind.config.js
- Add creative touches: gradients, shadows, borders, micro-interactions
- Consider typography choices (Inter, display fonts)
- Ensure responsive design works on mobile/tablet/desktop
- Test locally with npm run dev

Design direction: [e.g., brutalist, maximalist, minimalist, retro-futuristic]
```

### 🧪 Adding Tests

```
Write tests for [component name] in the Single Core Labs website.

Test requirements:
- Unit tests for component functionality
- Test key user interactions (clicks, hovers, form inputs)
- Mock any external dependencies
- Follow testing patterns if any exist in the project

Run tests with: npm test
```

### 📱 Adding Responsive Design

```
Make [component/page] fully responsive in the Single Core Labs website.

Current issues:
- [Describe what breaks on mobile/tablet]

Requirements:
- Use Tailwind's responsive prefixes (md:, lg:, xl:)
- Test on mobile (375px), tablet (768px), desktop (1280px+)
- Ensure touch targets are at least 44px
- Maintain visual hierarchy on all screen sizes
- Don't sacrifice the design aesthetic on smaller screens
```

### 🔧 Adding a New Dependency

```
Add [package name] to the Single Core Labs website.

Purpose: [Why you need it]
Alternative considered: [If any]

Requirements:
- Run: npm install [package-name]
- Update package.json if needed
- Import and use in the appropriate component
- Ensure it doesn't conflict with existing dependencies
- Check if there's a TypeScript types package to install
```

---

## Code Style Guidelines

Based on `.agents/rules/frontend.md`:

### Design Principles
- **Avoid generic AI aesthetics** - No Inter defaults, no purple gradients on white
- **Bold direction** - Commit to a clear aesthetic (minimal, maximal, retro-futuristic, etc.)
- **Typography** - Use distinctive fonts; pair display fonts with refined body fonts
- **Motion** - Prioritize high-impact animations over scattered micro-interactions
- **Backgrounds** - Create atmosphere with textures, not solid colors

### Technical Guidelines
- Use `React.lazy()` for code splitting on new pages
- Use Tailwind utility classes, extend via `tailwind.config.js` when needed
- Use Framer Motion for animations
- Include `<Helmet>` for SEO on every page
- Use Lucide React for icons

### Dark Theme Tokens
```css
/* Use these Tailwind classes */
bg-black / bg-bg-primary
text-white / text-text-primary
text-text-secondary / text-text-muted
accent-purple / accent-cyan
border-white/10
```

---

## Opening Issues

When opening a GitHub issue, use this template:

```markdown
## Issue Type
- [ ] Bug
- [ ] Feature Request
- [ ] Design Improvement
- [ ] Documentation

## Description
[Clear description of the issue]

## Expected Behavior
[What should happen]

## Actual Behavior
[What currently happens]

## Screenshots
[If applicable, add screenshots]

## Steps to Reproduce
1. 
2. 
3. 

## Suggested Solution
[If you have an idea, describe it]
```

---

## Pull Request Guidelines

1. **Before submitting:**
   - Test locally with `npm run dev`
   - Ensure build passes with `npm run build`
   - Follow the design guidelines in `.agents/rules/frontend.md`

2. **PR Title Format:**
   - `feat: [description]` - New features
   - `fix: [description]` - Bug fixes
   - `style: [description]` - Design/styling changes
   - `docs: [description]` - Documentation
   - `refactor: [description]` - Code refactoring

3. **PR Description:**
   - Explain what you changed and why
   - Reference any related issues
   - Include screenshots for design changes

---

## Need Help?

- Check the [CODEBASE_CONTEXT.md](./CODEBASE_CONTEXT.md) for detailed architecture
- Review `.agents/rules/frontend.md` for design guidelines
- Open an issue for clarification