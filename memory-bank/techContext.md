# Technical Context

## Stack
- **Framework**: Astro
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Interactive**: React (or Preact)
- **Package Manager**: npm

## Development Environment
- **Node Version**: (Assumed latest LTS)
- **Build Tool**: Astro CLI
- **Deployment**: GitHub Pages (static hosting)

## Project Structure
- `src/pages`: Routes (index, about, contact).
- `src/components`: Reusable UI components.
- `src/layouts`: Page wrappers.
- `src/content`: Data source for projects.
- `public`: Static assets (images, favicon).
- `docs`: Documentation.

## Constraints
- **Static Hosting**: No server-side dynamic rendering (everything pre-built).
- **Performance**: Heavy assets (videos) must be lazy-loaded or optimized to maintain high scores.

