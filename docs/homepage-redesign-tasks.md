# Homepage Redesign - Implementation Tasks

Based on `homepage-redesign-PRD.md`

## Phase 1: Design System Setup

### CSS Variables & Tokens
- [ ] Create `src/styles/design-system.css` with all color variables
  - [ ] Navy/Dark Blue tokens (navy-950, navy-900, navy-800)
  - [ ] Silver/Light Blue tokens (silver-100 through silver-400)
  - [ ] Purple/Magenta tokens (purple-200 through purple-500)
  - [ ] Orange/Flame tokens (flame-400 through flame-700)
  - [ ] Yellow/Gold tokens (gold-300, gold-400)
  - [ ] Typography scale variables
  - [ ] Spacing scale variables

### Theme Configuration
- [ ] Define semantic theme variables (--bg-primary, --text-primary, etc.)
- [ ] Configure light mode theme values
- [ ] Configure dark mode theme values
- [ ] Test theme switching with new colors

### Tailwind Configuration
- [ ] Update `tailwind.config.ts` with custom colors
- [ ] Add design system colors to Tailwind palette
- [ ] Configure dark mode strategy
- [ ] Test Tailwind utilities with new colors

### Documentation
- [ ] Document color usage guidelines
- [ ] Create component styling examples
- [ ] Test accessibility (color contrast ratios)

**Estimated Time:** 2-3 hours

---

## Phase 2: Layout Implementation

### Create Core Components
- [ ] Create `src/components/homepage/` directory
- [ ] Create `SplitScreenLayout.tsx` (React component with client:load)
  - [ ] Basic flex layout structure
  - [ ] Left pane (37.5% width)
  - [ ] Right pane (37.5% width)
  - [ ] Logo divider column (25% width)
- [ ] Create split-screen CSS in `src/styles/homepage.css`

### Pane Components
- [ ] Create `LeftPane.astro` wrapper component
- [ ] Create `RightPane.astro` wrapper component
- [ ] Set up overflow-y: auto for scrolling
- [ ] Configure fixed heights (100vh)
- [ ] Add proper padding and spacing

### Responsive Breakpoints
- [ ] Implement desktop layout (>= 1024px)
- [ ] Implement mobile/tablet layout (< 1024px)
- [ ] Create vertical stack for small screens
- [ ] Test layout at all breakpoints
- [ ] Ensure smooth transitions between breakpoints

**Estimated Time:** 3-4 hours

---

## Phase 3: Phoenix Logo Divider & Animation

### Logo Setup
- [ ] Obtain/prepare phoenix logo image (PNG with transparency or SVG)
- [ ] Optimize logo file size
- [ ] Place logo in `/public/` directory
- [ ] Create `PhoenixDivider.tsx` component

### Initial State (Pre-Scroll)
- [ ] Position logo center of viewport
- [ ] Set logo size to 25vw width
- [ ] Add subtle drop shadow/glow effect
- [ ] Ensure proper z-index

### Scroll Detection
- [ ] Add scroll event listener in `SplitScreenLayout.tsx`
- [ ] Detect when scrollY > 100px
- [ ] Manage scroll state with useState
- [ ] Pass state to `PhoenixDivider` component

### Logo Animation
- [ ] Implement CSS transform animation
- [ ] Animate scale: 1 → 0.3
- [ ] Animate position: center → top
- [ ] Set duration: 400ms
- [ ] Use cubic-bezier easing
- [ ] Add will-change optimization
- [ ] Remove will-change after animation

### Header Integration
- [ ] Update Header component to accommodate logo
- [ ] Create logo slot in header
- [ ] Ensure logo appears in header after scroll
- [ ] Test logo transition smoothness

### Performance & Polish
- [ ] Test animation at 60fps
- [ ] Add reduced-motion preference support
- [ ] Test on mobile devices
- [ ] Fix any animation jank

**Estimated Time:** 4-5 hours

---

## Phase 4: Scroll Synchronization

### Basic Synchronization
- [ ] Create refs for left and right panes
- [ ] Add scroll event listeners to both panes
- [ ] Implement syncScroll function
- [ ] Sync scrollTop between panes

### Prevent Infinite Loops
- [ ] Add isScrolling flag
- [ ] Use requestAnimationFrame for sync
- [ ] Test that sync doesn't create loops
- [ ] Handle edge cases

### Cross-Device Support
- [ ] Test mouse wheel scrolling
- [ ] Test touch scrolling on mobile
- [ ] Test keyboard scrolling (Page Up/Down, Space)
- [ ] Handle momentum scrolling

### Performance Optimization
- [ ] Use passive event listeners
- [ ] Throttle if needed for performance
- [ ] Test with long content
- [ ] Ensure 60fps during scroll

**Estimated Time:** 3-4 hours

---

## Phase 5: Content Migration

### About Section (Left Pane)
- [ ] Create `AboutSection.astro` component
- [ ] Move content from `/src/pages/about.astro`
- [ ] Update typography with new design system
- [ ] Apply new color scheme
- [ ] Add spacing using new spacing scale
- [ ] Integrate social links
- [ ] Test responsiveness

### Contact Form (Left Pane Bottom)
- [ ] Create `ContactSection.tsx` wrapper
- [ ] Update `ContactForm.tsx` with new design system
- [ ] Restyle inputs with new colors
- [ ] Update button styling (orange accent)
- [ ] Style focus states
- [ ] Update validation error states
- [ ] Position at bottom of left pane
- [ ] Ensure smooth scroll to form

### Project Gallery (Right Pane)
- [ ] Create `ProjectGallery.astro` for right pane
- [ ] Update `ProjectCard.astro` with new design system
- [ ] Apply new card background colors
- [ ] Update hover effects (orange border)
- [ ] Restyle tech tags (orange accent)
- [ ] Configure grid/masonry layout
- [ ] Test with all project cards

### Project Modal Updates
- [ ] Update modal backdrop with new colors
- [ ] Update modal background and borders
- [ ] Update close button (orange accent)
- [ ] Update link colors
- [ ] Test modal functionality

**Estimated Time:** 4-5 hours

---

## Phase 6: Header & Navigation Updates

### Header Redesign
- [ ] Update `Header.astro` component
- [ ] Integrate logo slot for scrolled state
- [ ] Update header background color
- [ ] Add backdrop blur effect
- [ ] Update navigation link colors
- [ ] Ensure fixed positioning works

### Navigation Updates
- [ ] Remove About page link (now on homepage)
- [ ] Remove Contact page link (now on homepage)
- [ ] Update navigation to homepage sections if needed
- [ ] Update mobile menu if applicable
- [ ] Test navigation functionality

### Theme Toggle
- [ ] Update `ThemeToggle.astro` styling
- [ ] Ensure toggle works with new color scheme
- [ ] Test light → dark → light transitions
- [ ] Verify colors in both modes

**Estimated Time:** 2-3 hours

---

## Phase 7: Polish & Refinement

### Visual Polish
- [ ] Fine-tune spacing throughout
- [ ] Adjust typography sizes
- [ ] Perfect color usage
- [ ] Add subtle animations/transitions
- [ ] Test all hover states
- [ ] Ensure consistency across components

### Animation Polish
- [ ] Review all animation timing
- [ ] Ensure smooth 60fps performance
- [ ] Test reduced-motion preferences
- [ ] Add loading states if needed

### Responsive Polish
- [ ] Test on actual mobile devices
- [ ] Test on tablets
- [ ] Test on various desktop sizes
- [ ] Fix any layout issues
- [ ] Ensure touch interactions work

**Estimated Time:** 3-4 hours

---

## Phase 8: Testing & Accessibility

### Accessibility Audit
- [ ] Test keyboard navigation through entire page
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Add/verify ARIA labels
- [ ] Check focus indicators
- [ ] Verify color contrast ratios (4.5:1 text, 3:1 UI)
- [ ] Test with browser zoom at 200%
- [ ] Test high contrast mode

### Cross-Browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Fix any browser-specific issues

### Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check First Contentful Paint (< 1.5s target)
- [ ] Check Time to Interactive (< 3s target)
- [ ] Check Cumulative Layout Shift (< 0.1 target)
- [ ] Optimize any issues found
- [ ] Test on slow 3G connection

### Functional Testing
- [ ] Test scroll synchronization thoroughly
- [ ] Test logo animation at various scroll speeds
- [ ] Test contact form submission
- [ ] Test project modal open/close
- [ ] Test theme switching
- [ ] Test all links

### Playwright Test Updates
- [ ] Update existing tests for new layout
- [ ] Add test for split-screen layout
- [ ] Add test for logo animation
- [ ] Add test for scroll synchronization
- [ ] Run full test suite

**Estimated Time:** 4-5 hours

---

## Phase 9: Cleanup & Deployment

### Remove Old Pages
- [ ] Delete `src/pages/about.astro`
- [ ] Delete `src/pages/contact.astro`
- [ ] Update any internal links
- [ ] Test 404 page still works

### Code Cleanup
- [ ] Remove unused components
- [ ] Remove unused styles
- [ ] Clean up console.logs
- [ ] Organize imports
- [ ] Run linter and fix issues
- [ ] Update component documentation

### Documentation Updates
- [ ] Update README if needed
- [ ] Document new design system
- [ ] Add setup instructions for new developers
- [ ] Document component usage

### Pre-Deployment Checklist
- [ ] All tests passing
- [ ] No linter errors
- [ ] Build completes successfully
- [ ] Preview build works correctly
- [ ] All images optimized
- [ ] No console errors

### Deployment
- [ ] Build production version
- [ ] Test production build locally
- [ ] Commit changes to git
- [ ] Push to GitHub
- [ ] Verify GitHub Pages deployment
- [ ] Test live site thoroughly
- [ ] Check on mobile device

### Post-Deployment
- [ ] Monitor for any issues
- [ ] Check analytics (if configured)
- [ ] Get user feedback
- [ ] Document any learnings

**Estimated Time:** 2-3 hours

---

## Total Estimated Time

- **Phase 1:** 2-3 hours (Design System)
- **Phase 2:** 3-4 hours (Layout)
- **Phase 3:** 4-5 hours (Logo Animation)
- **Phase 4:** 3-4 hours (Scroll Sync)
- **Phase 5:** 4-5 hours (Content Migration)
- **Phase 6:** 2-3 hours (Header Updates)
- **Phase 7:** 3-4 hours (Polish)
- **Phase 8:** 4-5 hours (Testing)
- **Phase 9:** 2-3 hours (Cleanup & Deploy)

**Total: 28-36 hours** (approximately 4-5 working days)

---

## Priority Order

### Critical Path (MVP)
1. Phase 1: Design System Setup
2. Phase 2: Layout Implementation
3. Phase 5: Content Migration (basic)
4. Phase 3: Logo Animation (basic)

### Enhancement Path
5. Phase 4: Scroll Synchronization (polish)
6. Phase 6: Header Updates
7. Phase 7: Visual Polish
8. Phase 8: Full Testing
9. Phase 9: Deployment

---

## Risk Mitigation

### Technical Risks
- **Scroll sync complexity**: Start simple, enhance gradually
- **Animation performance**: Test early, optimize as needed
- **Mobile layout**: Test frequently during development
- **Browser compatibility**: Test in all browsers regularly

### Mitigation Strategies
- Build in phases, test after each
- Keep original components as backup
- Use feature branches for major changes
- Deploy to preview URL before production

---

## Success Criteria

- [ ] Split-screen layout works on desktop
- [ ] Logo animates smoothly on scroll
- [ ] Both sides scroll in sync
- [ ] Mobile layout stacks vertically
- [ ] All content migrated successfully
- [ ] Theme switching works with new colors
- [ ] Lighthouse score > 90 maintained
- [ ] All accessibility requirements met
- [ ] No console errors
- [ ] Cross-browser compatible
- [ ] Successfully deployed to production

---

*Document created: October 12, 2025*  
*Based on: homepage-redesign-PRD.md*  
*Status: Ready to begin Phase 1*

