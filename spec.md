# spec.md

This file is the project checklist. Each step should be completed **in order**, with the checkbox updated to reflect the current state.

## How to use this spec

- A step is **done** when the checkbox is checked and its acceptance criteria are met.
- Keep the project **single-page**: everything lives in `index.html` (no extra routes/pages).
- Prefer **semantic HTML**, **inline CSS** in a `<style>` block, and **no frameworks / no external stylesheets**.
- When you implement a step, add only what's needed for that step (avoid gold-plating).

## Definition of done (applies to every step)

- `index.html` loads and renders correctly in a modern browser.
- Navigation links jump to the correct section IDs.
- Mobile layout is usable (no horizontal scrolling, readable text, tappable targets).
- Accessibility basics are respected (contrast, focus styles, reduced-motion support where relevant).

## Requirements

### Step 1
- [x] Create the raw HTML skeleton in `index.html` with semantic sections for Hero, About, Projects, Skills, Contact, and Fun Facts.

Acceptance criteria:
- Single file: all content is inside `index.html`.
- Basic `<head>` metadata exists: `<title>`, `viewport`, and a short `description`.
- A simple header/nav links to section IDs (e.g., `#about`, `#projects`) and each target section exists.
- Copy feels friendly and on-theme: AI, coding, music/vinyl, and cats.

### Step 2
- [x] Add a fun, clean visual system using a `<style>` block (inline CSS) featuring a Klein-blue accent and a subtle gradient background.

Acceptance criteria:
- CSS lives in a `<style>` block in `index.html` (no external CSS).
- CSS variables exist for: colors (including a Klein-blue accent), spacing, border radius.
- Layout uses a readable centered container (`max-width`) and a modern type scale.
- Sections feel like "cards" with consistent surfaces, spacing, and borders/shadows.
- Contrast is solid and the design remains lightweight (no frameworks).

Notes:
- "Klein blue" can be approximated with a deep blue like `#002FA7` (tweak as needed for contrast).

### Step 3
- [x] Layer in "personality" with hover animations and playful UI details that nod to vinyl records and cats.

Acceptance criteria:
- Buttons/links/cards have hover states (e.g., lift + shadow + underline animation) with subtle transitions.
- A `prefers-reduced-motion` fallback exists that disables/reduces animations.
- Projects is a small responsive grid of cards.
- Each project card includes a small "tag" system (e.g., `AI`, `Python`, `Music`, `Cats`).
- Optional: a CSS-only "vinyl" badge exists and can "spin" on hover (respect reduced-motion).

### Step 4
- [x] Finish with Skills progress bars, polish, and responsive touch-ups to make the page feel complete.

Acceptance criteria:
- Skills section includes labeled progress bars built with pure HTML/CSS.
- Progress values are readable (not color-only; text labels are present).
- Hero includes a clear call-to-action (e.g., "See projects", "Get in touch").
- Contact block is tidy and includes email/social placeholders.
- Keyboard focus styles are visible and consistent for interactive elements.
- Mobile responsiveness is verified: flexible grids, sensible font sizing, usable nav on small screens.

## Quick verification checklist (manual)

- Open `index.html` locally and click each nav item -> it scrolls to the right section.
- Tab through the page -> focus is always visible.
- Resize to a narrow viewport -> no horizontal scroll; cards stack nicely.
- Enable reduced motion -> animations stop or become minimal.
