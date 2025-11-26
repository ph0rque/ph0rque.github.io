# System Patterns

## Architecture
- **Static Site Generation (SSG)**: Astro builds the site to static HTML/CSS/JS for optimal performance.
- **Component-Based**: UI is built using Astro components for layout and structure, and React/Preact for interactive elements like Modals.
- **Styling**: Tailwind CSS is used for utility-first styling, ensuring consistency and ease of maintenance.

## Design Patterns
- **Layouts**: `BaseLayout` wraps all pages to provide common structure (Head, Header, Footer).
- **Data Management**: Project data is stored in `src/content/projects/*.json` and accessed via Astro's content collections or simple imports (currently JSON files in `src/content` per file structure, likely adapted to Content Collections API or simple imports).
- **Interactivity**:
  - **Modals**: implemented using React/Preact to handle state (open/close) and DOM manipulation (portals if needed).
  - **Theme**: handled via local storage and system preference detection, applying a class to the `html` element.

## key Decisions
- **Astro**: Chosen for performance and "islands architecture" where only interactive parts ship JS.
- **Tailwind**: Chosen for rapid development and built-in dark mode support.
- **No Hero**: Strategic decision to put projects front and center.
- **Video Thumbnails**: Prioritizing dynamic content over static screenshots.

