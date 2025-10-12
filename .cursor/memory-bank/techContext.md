# Technical Context

## Tech Stack

### Core Technologies
- **Framework**: Astro 5.12.4
  - Chosen for: Static site generation, excellent performance, islands architecture
  - Build output: Static HTML with minimal JavaScript
  
- **Styling**: Tailwind CSS 4.1.11
  - Utility-first CSS framework
  - Integrated via @tailwindcss/vite
  - Custom configuration in tailwind.config.ts
  
- **Language**: TypeScript
  - Type safety throughout the codebase
  - Better developer experience and fewer bugs
  
- **Interactive Components**: React 19.1.1
  - Used sparingly for interactive elements (ContactForm, Modal, ThemeToggle)
  - Hydrated only when needed via client:load directive

### Development Tools
- **Testing**: Playwright 1.54.1
  - E2E tests for critical user flows
  - Dark mode and CSS tests
  
- **Package Manager**: npm
- **Version Control**: Git + GitHub
- **Deployment**: GitHub Pages

## Project Structure
```
src/
├── components/       # Reusable UI components (.astro, .tsx)
├── content/         # Content collections (projects)
├── layouts/         # Page layouts
├── pages/           # Route pages (index, about, contact, 404)
├── styles/          # Global styles and Tailwind
└── types/           # TypeScript type definitions

public/
├── project-images/  # Static assets for projects
└── favicon.svg

test/
└── tests/           # Playwright tests
```

## Content Management
- **Projects**: JSON files in src/content/projects/
- **Schema**: Defined in src/content/config.ts
- **Type Safety**: TypeScript types in src/types/project.ts

## Performance Optimizations
- Static site generation (pre-rendered HTML)
- Lazy-loaded YouTube videos in modals
- Minimal JavaScript (islands architecture)
- Optimized images in public/ directory
- CSS purging via Tailwind

## Development Workflow
```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production
npm run preview   # Preview production build
npm run test      # Run Playwright tests
npm run test:ui   # Run tests with UI
```

## Environment
- **Node**: Uses ES modules (type: "module")
- **Browser Support**: Modern browsers (ES6+)
- **Build Target**: Static HTML for GitHub Pages

## Dependencies
- **Production**: Minimal (Astro, React, Tailwind)
- **Development**: Playwright for testing
- **No External APIs**: Forms use browser-native or will integrate EmailJS/Formspree

