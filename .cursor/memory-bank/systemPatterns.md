# System Patterns

## Architecture

### Islands Architecture (Astro)
- Most components are static Astro components (.astro)
- Interactive React components (.tsx) hydrated only when needed
- Directives: `client:load` for components needing interactivity

### Component Hierarchy
```
BaseLayout (layout wrapper)
├── Header (navigation)
├── Main content (page-specific)
│   ├── ProjectGrid (homepage)
│   │   ├── ProjectCard (static)
│   │   └── ProjectModalWrapper (interactive)
│   │       └── ProjectModal (React)
│   ├── About content (about page)
│   └── ContactForm (React, contact page)
└── Footer
```

## Key Design Patterns

### 1. Content Collections (Astro)
- Projects stored as JSON in `src/content/projects/`
- Schema validation via Zod in `src/content/config.ts`
- Type-safe access through Astro's content layer

### 2. Layout Pattern
- BaseLayout provides consistent structure (head, body)
- All pages import and use BaseLayout
- Handles meta tags, theme, global styles

### 3. Modal Pattern
- ProjectModalWrapper (.astro) handles server-side data fetching
- ProjectModal (.tsx) handles client-side interactivity
- Separation of concerns: data vs. interaction

### 4. Component Separation
- `.astro` files: Static content, SSG
- `.tsx` files: Interactive elements needing client-side JS
- Minimal use of client-side JavaScript

### 5. Theme Management
- CSS variables for colors
- Dark mode class applied to root element
- System preference detection + localStorage persistence

## Code Organization

### Naming Conventions
- Components: PascalCase (ProjectCard.astro, ContactForm.tsx)
- Utilities: camelCase
- Types: PascalCase interfaces

### Import Aliases
```typescript
@components/  → src/components/
@layouts/     → src/layouts/
@styles/      → src/styles/
```

### File Structure
- One component per file
- Co-located types when component-specific
- Shared types in src/types/

## Styling Patterns

### Tailwind Usage
- Utility classes in templates
- No @apply in CSS (keep utilities in markup)
- Dark mode: dark: prefix (class-based strategy)
- Responsive: mobile-first breakpoints (sm:, md:, lg:)

### Style Organization
- global.css: CSS reset and base styles
- tailwind.css: Tailwind directives
- app.css: Component-specific overrides if needed

## Data Flow

### Static Content
1. Project JSON files → Content collection
2. Astro generates pages at build time
3. Static HTML served to client

### Interactive Content
1. Component hydrated on client
2. React manages local state
3. Forms submit (currently to console, will integrate service)

## Testing Strategy
- Playwright for E2E testing
- Test dark mode functionality
- Test CSS presence and styling
- Tests in test/tests/ directory

