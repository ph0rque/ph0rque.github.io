# Portfolio Website - Product Requirements Document

## Overview
A minimal, modern portfolio website to showcase projects created at Gauntlet AI, featuring video demonstrations and resource links.

## Goals
- Showcase web apps, mobile apps, and desktop applications
- Provide an elegant, simple user experience
- Ensure fast performance and SEO compliance
- Support both light and dark modes

## Target Audience
- Potential employers
- Colleagues and collaborators
- Professional network

## Technical Requirements

### Tech Stack
- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Interactive Components**: React/Preact (minimal usage)
- **Form Handling**: EmailJS or Formspree
- **Hosting**: GitHub Pages

### Performance Requirements
- Lighthouse score > 90 for all metrics
- Static site generation (no SSR)
- Lazy-loaded video content
- Optimized images and fonts

## Features

### 1. Homepage
- Responsive grid layout of project cards
- Immediate visibility of projects (no hero section)
- Clean, minimal design aesthetic

### 2. Project Showcase
- **Project Cards**:
  - YouTube video thumbnail
  - Project title
  - Brief description
  - Technology tags
  - Hover effects showing play icon
  - Click to open modal

- **Project Modal**:
  - Embedded YouTube video (lazy-loaded)
  - Full project description
  - Links to additional resources
  - Technology stack details
  - Close on backdrop click or X button

### 3. Navigation
- Fixed header with:
  - Logo/Name (left)
  - Navigation links (right): About, Contact
  - Dark/Light mode toggle
- Mobile: Hamburger menu with slide-in drawer

### 4. About Page
- Personal/professional information
- Link to external blog (Substack)
- Social media links (X, LinkedIn, etc.)

### 5. Contact Page
- Simple contact form with:
  - Name
  - Email
  - Message
  - Submit button
- Form validation
- Success/error feedback

### 6. Theme Support
- Light mode (default):
  - White background
  - Gray-900 text
- Dark mode:
  - Gray-900 background
  - Gray-100 text
- System preference detection
- User preference persistence

## Design Specifications

### Layout
- Max container width: 1200px
- Responsive breakpoints:
  - Mobile: < 640px (1 column)
  - Tablet: 640px - 1024px (2 columns)
  - Desktop: > 1024px (3 columns)
- Grid gap: 1.5-2rem

### Typography
- Font family: System font stack
- Base font size: 16px
- Heading sizes: 1.5rem - 2.5rem
- Font weights: 400 (body), 600-700 (headings)
- Line height: 1.5-1.6

### Colors
- Primary text: Gray-900 (light), Gray-100 (dark)
- Background: White (light), Gray-900 (dark)
- Accent color: TBD
- Shadows: Subtle, for depth

### Components

#### Project Card
```
┌─────────────────────┐
│   [Video Thumbnail] │ ← 16:9 aspect ratio
│   ▶ (on hover)      │
├─────────────────────┤
│ Project Title       │
│ Brief description...│
│ [React] [Node.js]   │ ← Tech tags
└─────────────────────┘
```

#### Modal
```
┌─────────────────────────────┐
│                         [X] │
│  [Embedded YouTube Video]   │
│                             │
│  Project Title              │
│  Full description...        │
│                             │
│  Tech Stack: React, Node... │
│  [View Live] [GitHub]       │
└─────────────────────────────┘
```

## Content Structure

### Project Data Model
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  videoUrl: string;
  videoThumbnail?: string;
  links: {
    live?: string;
    github?: string;
    other?: { label: string; url: string }[];
  };
  featured?: boolean;
  order?: number;
}
```

## SEO Requirements
- Meta tags for all pages
- Open Graph tags
- Structured data for projects
- Sitemap generation
- Robots.txt

## Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Focus indicators
- Alt text for images

## Future Considerations
- Blog integration
- Project filtering/categories
- Animation enhancements
- Analytics integration