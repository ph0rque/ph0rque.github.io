# Active Context

## Current Focus
- **Task**: Build simplified grey Bezier overlays for each major logo shape so we can iterate manually.
- **Context**: After auto-tracing the PNG, the user hand-traced the top wing feather manually. I mirrored that workflow by adding a grouped set of translucent grey paths for the remaining feathers, body, tail, and head directly in `public/logo.svg`.

## Recent Changes
- Added `<g id="manual-trace">` containing the user's original top-feather path plus new bezier approximations for other major shapes.
- Applied shared transparency (`fill-opacity=0.45`) so the rasterized art remains visible underneath.

## Next Steps
- Refine each overlay path for higher fidelity (adjust control points, add missing smaller features like the beak/eye highlight).
- Once shapes are approved, replace fills with final gradients/colors.
