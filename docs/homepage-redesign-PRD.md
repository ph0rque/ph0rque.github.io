# Homepage Redesign - Product Requirements Document

## Overview
Complete redesign of the portfolio homepage to feature a vertical split-screen layout with phoenix logo divider, unified About/Contact/Projects experience, and a new color scheme inspired by the phoenix brand identity.

## Goals
- Create an immersive, single-page experience showcasing all content
- Implement sophisticated scroll animations with logo transition
- Establish a cohesive design system based on phoenix logo colors
- Maintain excellent performance and accessibility
- Deliver a memorable, professional first impression

## Design Philosophy
**Phoenix Rising**: The design embodies transformation and elegance, with the phoenix logo serving as a central divider that rises to the header on scroll, symbolizing the journey through the portfolio content.

---

## Layout Specification

### Desktop Layout (> 1024px)

```
┌──────────────────────────────────────────────────┐
│                    Header                        │
├─────────────────────────────┬────────────────────┤
│                             │                    │
│          About +            │  Phoenix logo      │
│          Contact            │  floats above      │
│          (50%)              │  centered content  │
│                             │                    │
│  - Bio / About text         │  Project Gallery   │
│  - Social links             │  (50%)             │
│  - Contact form             │  [Project Card]    │
│                             │  [Project Card]    │
│                             │  [Project Card]    │
└─────────────────────────────┴────────────────────┘
```

**Initial State (Before Scroll):**
- Logo overlaid in the center of the viewport (20vw width, max 400px) with both columns visible beneath
- Left side (50%): About content stacked above the contact form
- Right side (50%): Project gallery grid
- Header present but minimal to keep focus on the split columns

**Scroll State (After Scroll Begins):**
- Logo shrinks and transitions to header center (60px tall)
- Logo remains fixed at top center of viewport
- Both sides continue synchronized scrolling
- No vertical divider column; subtle border on right column provides separation

### Tablet/Mobile Layout (< 1024px)

```
┌──────────────────────┐
│   Header + Logo      │
├──────────────────────┤
│                      │
│   About Content      │
│   (Full Width)       │
│                      │
│   Contact Form       │
│                      │
├──────────────────────┤
│                      │
│   Project Gallery    │
│   (Full Width)       │
│                      │
└──────────────────────┘
```

- Switches to single column vertical stack
- Order: Header → About → Contact → Projects
- Natural scroll behavior (no sync)
- Logo in header, shrinks on scroll

---

## Color System & Design Tokens

### Color Palette (Extracted from Phoenix Logo)

#### Primary Colors
```css
/* Navy/Dark Blues (Top of Phoenix) */
--color-navy-950: #0a1628;      /* Darkest - dark mode background */
--color-navy-900: #0f1f3d;
--color-navy-800: #162a52;

/* Silver/Light Blues (Phoenix Wings) */
--color-silver-400: #a8c5d9;
--color-silver-300: #c1d9e8;
--color-silver-200: #d4e6f1;
--color-silver-100: #e8f2f7;

/* Purples/Magentas (Middle Gradient) */
--color-purple-200: #e8d4f1;    /* Lightest - light mode background */
--color-purple-300: #d4b8e6;
--color-purple-400: #b88dd9;
--color-purple-500: #9b6bc9;

/* Oranges (Phoenix Flames) */
--color-flame-400: #ff9d5c;
--color-flame-500: #ff7b3d;     /* Primary accent */
--color-flame-600: #ff5722;
--color-flame-700: #f04318;

/* Yellows (Flame Highlights) */
--color-gold-300: #ffd966;
--color-gold-400: #ffcc33;
```

### Theme Configuration

#### Light Mode
```css
--bg-primary: var(--color-purple-200);      /* #e8d4f1 */
--bg-secondary: var(--color-purple-100);    /* Even lighter tint */
--text-primary: var(--color-navy-900);      /* #0f1f3d */
--text-secondary: var(--color-navy-800);    /* #162a52 */
--accent: var(--color-flame-500);           /* #ff7b3d */
--accent-hover: var(--color-flame-600);     /* #ff5722 */
--divider: var(--color-purple-300);         /* #d4b8e6 */
```

#### Dark Mode
```css
--bg-primary: var(--color-navy-950);        /* #0a1628 */
--bg-secondary: var(--color-navy-900);      /* #0f1f3d */
--text-primary: var(--color-silver-200);    /* #d4e6f1 */
--text-secondary: var(--color-silver-300);  /* #c1d9e8 */
--accent: var(--color-flame-500);           /* #ff7b3d */
--accent-hover: var(--color-flame-600);     /* #ff5722 */
--divider: var(--color-navy-800);           /* #162a52 */
```

### Typography Scale
```css
--font-size-xs: 0.75rem;      /* 12px */
--font-size-sm: 0.875rem;     /* 14px */
--font-size-base: 1rem;       /* 16px */
--font-size-lg: 1.125rem;     /* 18px */
--font-size-xl: 1.25rem;      /* 20px */
--font-size-2xl: 1.5rem;      /* 24px */
--font-size-3xl: 1.875rem;    /* 30px */
--font-size-4xl: 2.25rem;     /* 36px */
--font-size-5xl: 3rem;        /* 48px */
```

### Spacing Scale
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
```

---

## Component Specifications

### 1. Phoenix Logo Divider

**Initial State:**
- Position: Fixed, centered over both columns
- Width: 20vw (max 400px)
- Height: Auto (maintain aspect ratio)
- Z-index: 40 (above columns, below modals)
- Opacity: 1
- Transform: translate(-50%, -50%) scale(1)

**Scroll Transition:**
- Trigger: When window.scrollY > 100px or either pane scrollTop > 100px
- Duration: 400ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Target position: Fixed at top center of viewport
- Target size: Height 60px (width auto, maintains aspect)
- Transform: translate(-50%, -50%) scale(0.3)

**Visual Treatment:**
- Drop shadow: subtle glow effect
- No background
- Phoenix logo PNG with transparency (`public/phoenix-logo.png`)

### 2. Split-Screen Container

**Left Side (About + Contact):**
- Width: 50% (desktop), 100% (mobile)
- Padding: 2rem - 4rem
- Background: var(--bg-primary)
- Overflow-y: auto
- Height: 100vh

**Right Side (Projects):**
- Width: 50% (desktop), 100% (mobile)
- Padding: 2rem - 4rem
- Background: var(--bg-primary)
- Border-left: 1px solid var(--divider) (visual separation)
- Overflow-y: auto
- Height: 100vh

**Divider:**
- No dedicated column; phoenix logo overlays both panes
- Subtle border on project column provides separation

**Scroll Synchronization:**
```javascript
const syncScroll = (source) => {
  if (isSyncing || window.innerWidth < 1024) return;
  isSyncing = true;
  requestAnimationFrame(() => {
    if (source === 'left') rightPane.scrollTop = leftPane.scrollTop;
    else leftPane.scrollTop = rightPane.scrollTop;
    isSyncing = false;
  });
};
```

### 3. Header

**Desktop:**
- Height: 80px
- Background: var(--bg-secondary) with backdrop blur
- Position: Fixed, top: 0
- Contains:
  - Logo (after scroll) - center
  - Theme toggle - right
  - Social links - right
- Z-index: 50

**Mobile:**
- Same as desktop
- Hamburger menu if needed

### 4. About Section (Left Side)

**Content:**
- Heading: "About Me" (--font-size-4xl)
- Bio paragraphs (--font-size-lg)
- Social links with icons
- Spacing: --space-8 between sections

**Styling:**
- Text color: var(--text-primary)
- Links: var(--accent) with hover effects
- Social icons: var(--accent) fill

### 5. Contact Form (Left Side, Bottom)

**Fields:**
- Name input
- Email input
- Message textarea
- Submit button

**Styling:**
- Inputs: 
  - Border: 2px solid var(--divider)
  - Focus: border-color var(--accent)
  - Background: var(--bg-secondary)
  - Text: var(--text-primary)
  - Padding: --space-3
  - Border radius: 8px
  
- Submit button:
  - Background: var(--accent)
  - Text: white
  - Hover: var(--accent-hover)
  - Padding: --space-3 --space-6
  - Border radius: 8px
  - Font weight: 600

**Validation:**
- Required fields
- Email format validation
- Error states with red border
- Success message with green text

### 6. Project Gallery (Right Side)

**Layout:**
- Masonry/Grid layout
- Gap: --space-6
- Cards: Full width or 2-column if space allows

**Project Card:**
```
┌─────────────────────┐
│   [Thumbnail/GIF]   │
├─────────────────────┤
│ Project Title       │
│ Brief description   │
│ [Tech] [Tags]       │
└─────────────────────┘
```

**Card Styling:**
- Background: var(--bg-secondary)
- Border: 1px solid var(--divider)
- Border radius: 12px
- Padding: --space-4
- Hover: 
  - Transform: translateY(-4px)
  - Shadow: 0 8px 24px rgba(flame-500, 0.2)
  - Border: 1px solid var(--accent)
- Cursor: pointer

**Tech Tags:**
- Background: var(--accent) with 10% opacity
- Text: var(--accent)
- Padding: --space-1 --space-3
- Border radius: 4px
- Font size: --font-size-sm

### 7. Project Modal (Existing)

**Updates for New Design System:**
- Backdrop: rgba(navy-950, 0.8) in light mode, rgba(navy-950, 0.95) in dark mode
- Modal background: var(--bg-primary)
- Border: 1px solid var(--divider)
- Close button: var(--accent)
- Links: var(--accent)

---

## Animation & Interaction Specifications

### Logo Scroll Animation
```javascript
const logoAnimation = {
  trigger: 'scroll > 100px',
  duration: 400,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  properties: {
    scale: '1 → 0.3',
    translateY: 'center → top',
    position: 'absolute center → fixed top'
  }
}
```

### Page Transitions
- Fade in on load: 300ms
- Section scroll: smooth behavior
- Card hover: 200ms ease-out

### Synchronized Scroll
- Both sides scroll together
- Maintain scroll position ratio
- Handle independent scroll events
- Debounce scroll sync to avoid loops

### Responsive Breakpoints
```css
/* Mobile First */
@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop - Split Screen */ }
@media (min-width: 1280px) { /* Large Desktop */ }
```

---

## Technical Implementation Notes

### File Structure Changes
```
src/
├── components/
│   ├── homepage/
│   │   ├── SplitScreenLayout.astro      [NEW]
│   │   ├── PhoenixDivider.tsx           [NEW]
│   │   ├── AboutSection.astro           [NEW]
│   │   ├── ContactSection.tsx           [NEW]
│   │   └── ProjectGallery.astro         [MODIFIED]
│   ├── ContactForm.tsx                   [MODIFIED - reuse]
│   ├── ProjectCard.astro                 [MODIFIED - new styles]
│   └── Header.astro                      [MODIFIED - logo integration]
├── styles/
│   ├── design-system.css                 [NEW - CSS variables]
│   ├── homepage.css                      [NEW - split screen styles]
│   └── animations.css                    [NEW - scroll animations]
└── pages/
    ├── index.astro                       [MAJOR REWRITE]
    ├── about.astro                       [REMOVE]
    └── contact.astro                     [REMOVE]
```

### Performance Considerations
- Logo image: Optimize PNG, consider SVG
- Scroll synchronization: Use requestAnimationFrame
- Intersection Observer for scroll animations
- Lazy load project images
- CSS containment for split sections

### Accessibility Requirements
- Skip to content links
- Keyboard navigation for all interactive elements
- Focus management in modal
- ARIA labels for logo states
- Color contrast ratios: 4.5:1 minimum
- Reduced motion preferences respected

### Browser Support
- Modern browsers (ES6+)
- CSS Grid and Flexbox
- CSS Custom Properties
- Intersection Observer API
- Fallbacks for older browsers

---

## Success Metrics

### Performance
- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

### User Experience
- Clear visual hierarchy
- Intuitive navigation
- Smooth animations (60fps)
- Responsive across devices
- Fast perceived loading

### Design
- Cohesive color system
- Consistent spacing
- Professional aesthetic
- Memorable brand impression

---

## Migration Plan

### Phase 1: Design System Setup
1. Create CSS variables file with color tokens
2. Update Tailwind config with custom colors
3. Test theme switching with new colors
4. Document design system

### Phase 2: Layout Implementation
1. Create SplitScreenLayout component
2. Implement responsive breakpoints
3. Test mobile stack layout
4. Ensure scroll behavior works

### Phase 3: Logo Animation
1. Create PhoenixDivider component
2. Implement scroll detection
3. Animate logo transitions
4. Test performance

### Phase 4: Content Migration
1. Move About content to homepage
2. Integrate ContactForm into left side
3. Update ProjectGallery for new layout
4. Update Header for logo integration

### Phase 5: Polish & Testing
1. Fine-tune animations
2. Test scroll synchronization
3. Accessibility audit
4. Cross-browser testing
5. Performance optimization

### Phase 6: Cleanup
1. Remove /about and /contact pages
2. Update navigation links
3. Update tests
4. Deploy

---

## Open Questions & Decisions

- [ ] Logo file format: PNG with transparency or SVG?
- [ ] Should logo have subtle animation when in center (before scroll)?
- [ ] Contact form submission: Which service (EmailJS vs Formspree)?
- [ ] Should project gallery be grid or masonry layout?
- [ ] Footer: Keep it, remove it, or integrate into layout?

---

## Appendix: Component Hierarchy

```
index.astro
├── BaseLayout
│   ├── Head (meta tags, theme)
│   └── Body
│       ├── Header (with logo slot)
│       │   ├── ThemeToggle
│       │   └── SocialLinks
│       ├── SplitScreenLayout
│       │   ├── LeftPane
│       │   │   ├── AboutSection
│       │   │   └── ContactSection
│       │   │       └── ContactForm
│       │   ├── PhoenixDivider (logo)
│       │   └── RightPane
│       │       └── ProjectGallery
│       │           └── ProjectCard[]
│       │               └── ProjectModal (on click)
│       └── Footer (optional)
```

---

## Design System Quick Reference

### Color Usage Guide

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Page Background | Purple-200 | Navy-950 |
| Card Background | Purple-100 | Navy-900 |
| Primary Text | Navy-900 | Silver-200 |
| Secondary Text | Navy-800 | Silver-300 |
| Accent/CTA | Flame-500 (Orange) | Flame-500 (Orange) |
| Borders/Dividers | Purple-300 | Navy-800 |
| Hover States | Flame-600 | Flame-600 |

### Spacing Guidelines
- Container padding: --space-8 to --space-16
- Section gaps: --space-12 to --space-16
- Component gaps: --space-4 to --space-8
- Element padding: --space-2 to --space-4

### Typography Guidelines
- Page title: --font-size-5xl, font-bold
- Section heading: --font-size-4xl, font-bold
- Subsection heading: --font-size-2xl, font-semibold
- Body: --font-size-lg, font-normal
- Small text: --font-size-sm, font-normal

---

*Document Version: 1.0*  
*Created: October 12, 2025*  
*Status: Ready for Implementation*

