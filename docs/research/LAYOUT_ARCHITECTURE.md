# Layout Architecture - oliviaharperhomes.com

## Grid System
- **Main Container:** Max-width 1440px, centered.
- **Section Layout:** Vertical stack of full-width or contained sections.
- **Project Grid:** CSS Grid (likely 2-column or 3-column on desktop, 1-column on mobile).
- **Service Cards:** Flexbox or Grid.

## Responsive Behavior
- **Desktop (1440px+):** Full editorial layout with generous margins.
- **Tablet (~768px - 1024px):** Reduced padding, multi-column grids may collapse to 2 columns.
- **Mobile (<768px):** Single column stack, centered text, simplified navigation (hamburger menu).

## Z-Index Layers
- **Header:** Top layer (sticky).
- **Modals/Overlays:** If any (likely for contact form or gallery).
- **Main Content:** Base layer.

## Scroll Behavior
- Potential smooth scrolling or scroll-triggered animations (fade-in, slide-up).
- Sticky header transition (e.g., background color change or shrinking).
