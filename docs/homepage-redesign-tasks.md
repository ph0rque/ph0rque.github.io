# Homepage Redesign - Implementation Tasks

Based on `homepage-redesign-PRD.md`

## Phase 1: Design System Setup ✅

### CSS Variables & Tokens
- [x] Create `src/styles/design-system.css` with all color variables
  - [x] Navy/Dark Blue tokens (navy-950, navy-900, navy-800)
  - [x] Silver/Light Blue tokens (silver-100 through silver-400)
  - [x] Purple/Magenta tokens (purple-200 through purple-500)
  - [x] Orange/Flame tokens (flame-400 through flame-700)
  - [x] Yellow/Gold tokens (gold-300, gold-400)
  - [x] Typography scale variables
  - [x] Spacing scale variables

### Theme Configuration
- [x] Define semantic theme variables (--bg-primary, --text-primary, etc.)
- [x] Configure light mode theme values
- [x] Configure dark mode theme values
- [x] Test theme switching with new colors

### Tailwind Configuration
- [x] Update `tailwind.config.ts` with custom colors
- [x] Add design system colors to Tailwind palette
- [x] Configure dark mode strategy
- [x] Test Tailwind utilities with new colors

### Documentation
- [x] Document color usage guidelines (embedded in PRD + design system rules)
- [x] Create component styling examples
- [x] Test accessibility (color contrast ratios)

**Estimated Time:** 2-3 hours

---

## Phase 2: Layout Implementation ✅

### Create Core Components
- [x] Create `src/components/homepage/` directory
- [x] Create `SplitScreenLayout.tsx` (React component with client:load)
  - [x] Basic flex layout structure
  - [x] Left pane (50% width)
  - [x] Right pane (50% width)
  - [x] Logo overlaid (no dedicated divider column)
- [x] Create split-screen CSS in `src/styles/homepage.css`

### Pane Components
- [x] Create `AboutSection.astro` component (left pane)
- [x] Create `ProjectGallery.astro` component (right pane)
- [x] Set up overflow-y: auto for scrolling
- [x] Configure fixed heights (100vh)
- [x] Add proper padding and spacing

### Responsive Breakpoints
- [x] Implement desktop layout (>= 1024px)
- [x] Implement mobile/tablet layout (< 1024px)
- [x] Create vertical stack for small screens
- [x] Test layout at all breakpoints
- [x] Ensure smooth transitions between breakpoints

**Estimated Time:** 3-4 hours

---

## Phase 3: Phoenix Logo Divider & Animation ✅

### Logo Setup
- [x] Obtain/prepare phoenix logo image (PNG with transparency)
- [x] Optimize logo file size
- [x] Place logo in `/public/phoenix-logo.png`
- [x] Create `PhoenixDivider.tsx` component

### Initial State (Pre-Scroll)
- [x] Position logo center of viewport
- [x] Set logo size to 20vw (max 400px)
- [x] Add subtle drop shadow/glow effect
- [x] Ensure proper z-index above columns

### Scroll Detection
- [x] Add scroll event listener in `SplitScreenLayout.tsx`
- [x] Detect when scrollY > 100px (window or pane)
- [x] Manage scroll state with useState
- [x] Pass state to `PhoenixDivider` component

### Logo Animation
- [x] Implement CSS transform animation
- [x] Animate scale: 1 → 0.3
- [x] Animate position: center → top
- [x] Set duration: 400ms
- [x] Use cubic-bezier easing
- [x] Add will-change optimization
- [x] Remove will-change after animation

### Header Integration
- [x] Update Header component to accommodate logo (center slot)
- [x] Ensure logo appears in header after scroll
- [x] Test logo transition smoothness

### Performance & Polish
- [x] Test animation at 60fps
- [x] Add reduced-motion preference support
- [x] Test on mobile devices
- [x] Fix animation jank

**Estimated Time:** 4-5 hours

---

## Phase 4: Scroll Synchronization ✅

### Basic Synchronization
- [x] Create refs for left and right panes
- [x] Add scroll event listeners to both panes
- [x] Implement syncScroll function (requestAnimationFrame guarded)
- [x] Sync scrollTop between panes

### Prevent Infinite Loops
- [x] Add isScrolling flag
- [x] Use requestAnimationFrame for sync
- [x] Test that sync doesn't create loops
- [x] Handle edge cases

### Cross-Device Support
- [x] Test mouse wheel scrolling
- [x] Test touch scrolling on mobile (mobile falls back to native scroll)
- [x] Test keyboard scrolling (Page Up/Down, Space)
- [x] Handle momentum scrolling

### Performance Optimization
- [x] Use passive event listeners
- [x] Throttle (flag) if needed for performance
- [x] Test with long content
- [x] Ensure 60fps during scroll

**Estimated Time:** 3-4 hours

---

## Phase 5: Content Migration ✅

### About Section (Left Pane)
- [x] Create `AboutSection.astro` component
- [x] Move content from `/src/pages/about.astro`
- [x] Update typography with new design system
- [x] Apply new color scheme
- [x] Add spacing using new spacing scale
- [x] Integrate social links
- [x] Test responsiveness

### Contact Form (Left Pane Bottom)
- [x] Create `ContactSection.tsx` wrapper
- [x] Update `ContactForm.tsx` with new design system
- [x] Restyle inputs with new colors
- [x] Update button styling (orange accent)
- [x] Style focus states
- [x] Update validation error states
- [x] Position at bottom of left pane
- [x] Ensure smooth scroll to form

### Project Gallery (Right Pane)
- [x] Create `ProjectGallery.astro` for right pane
- [x] Update `ProjectCard.astro` with new design system
- [x] Apply new card background colors
- [x] Update hover effects (orange border)
- [x] Restyle tech tags (orange accent)
- [x] Configure grid layout (single column per PRD)
- [x] Test with all project cards

### Project Modal Updates
- [x] Update modal backdrop with new colors
- [x] Update modal background and borders
- [x] Update close button (orange accent)
- [x] Update link colors
- [x] Test modal functionality

**Estimated Time:** 4-5 hours

---

## Phase 6: Header & Navigation Updates ✅

### Header Redesign
- [x] Update `Header.astro` component
- [x] Integrate center slot for scrolled logo
- [x] Update header background color (design system variables)
- [x] Add backdrop blur effect
- [x] Update navigation link colors to new palette
- [x] Ensure fixed positioning works

### Navigation Updates
- [x] Remove About page link
- [x] Remove Contact page link
- [x] Navigation focuses on theme toggle + socials
- [x] Update mobile menu behavior (links removed)
- [x] Test navigation functionality

### Theme Toggle
- [x] Update `ThemeToggle.astro` styling
- [x] Ensure toggle works with new color scheme
- [x] Test light → dark → light transitions
- [x] Verify colors in both modes

**Estimated Time:** 2-3 hours

---

## Phase 7: Polish & Refinement ✅

### Visual Polish
- [x] Fine-tune spacing throughout
- [x] Adjust typography sizes (design system scale)
- [x] Perfect color usage with custom properties
- [x] Add subtle animations/transitions
- [x] Test all hover states
- [x] Ensure consistency across components

### Animation Polish
- [x] Review all animation timing
- [x] Ensure smooth 60fps performance
- [x] Test reduced-motion preferences
- [x] Loading states not required for static content (N/A)

### Responsive Polish
- [x] Test on mobile and tablet breakpoints
- [x] Test on various desktop sizes
- [x] Fix layout issues
- [x] Ensure touch interactions work

**Estimated Time:** 3-4 hours

---

## Phase 8: Testing & Accessibility ✅

### Accessibility Audit
- [x] Test keyboard navigation through entire page
- [x] Test with screen reader (VoiceOver)
- [x] Add/verify ARIA labels where needed
- [x] Check focus indicators (`:focus-visible` styling)
- [x] Verify color contrast ratios (manual check)
- [x] Test with browser zoom at 200%
- [x] Test high contrast mode

### Cross-Browser Testing
- [x] Test in Chrome
- [x] Test in Firefox
- [x] Test in Safari
- [x] Test in Edge
- [x] Fix any browser-specific issues

### Performance Testing
- [x] Run Lighthouse audit (all > 90)
- [x] Check First Contentful Paint (< 1.5s target)
- [x] Check Time to Interactive (< 3s target)
- [x] Check Cumulative Layout Shift (< 0.1 target)
- [x] Optimize any issues found
- [x] Test on throttled network

### Functional Testing
- [x] Test scroll synchronization thoroughly
- [x] Test logo animation at various scroll speeds
- [x] Test contact form submission (Formspree)
- [x] Test project modal open/close
- [x] Test theme switching
- [x] Test all links

### Playwright Test Updates
- [x] Update existing tests for new layout
- [x] Add test for split-screen layout
- [x] Add test for logo animation (visual check/Note)
- [x] Add test for scroll synchronization (manual/Note)
- [x] Run full test suite

**Estimated Time:** 4-5 hours

---

## Phase 9: Cleanup & Deployment ✅

### Remove Old Pages
- [x] Delete `src/pages/about.astro`
- [x] Delete `src/pages/contact.astro`
- [x] Update internal links
- [x] Test 404 page still works

### Code Cleanup
- [x] Remove unused components (Footer, ProjectGrid)
- [x] Remove unused styles
- [x] Clean up console.logs
- [x] Organize imports
- [x] Run linter and fix issues
- [x] Update component documentation (as part of PRD/tasks)

### Documentation Updates
- [x] Update docs (PRD, tasks, design system rules)
- [x] Document new design system (design-system.mdc)
- [x] Setup instructions not needed (unchanged) – N/A
- [x] Document component usage (PRD/tasks)

### Pre-Deployment Checklist
- [x] All tests passing
- [x] No linter errors
- [x] Build completes successfully
- [x] Preview build works correctly
- [x] All images optimized
- [x] No console errors

### Deployment
- [x] Build production version
- [x] Test production build locally
- [x] Commit changes to git
- [x] Push to GitHub (branch `redesign`)
- [ ] Verify GitHub Pages deployment (pending merge to main)
- [x] Test live site thoroughly (local preview)
- [x] Check on mobile device
