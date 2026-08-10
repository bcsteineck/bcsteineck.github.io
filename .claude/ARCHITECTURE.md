# Portfolio Architecture

## Overview

This is a personal portfolio website built with React, TypeScript, Vite, React Router, and Sass.

The project is intentionally simple. The goal is to keep the architecture easy to understand, easy to maintain, and appropriate for a relatively small portfolio site.

Avoid introducing unnecessary abstraction, dependencies, state-management libraries, or architectural patterns unless they are clearly needed.

---

## Tech Stack

* React
* TypeScript
* Vite
* React Router
* Sass / SCSS
* Git / GitHub

---

## Application Structure

The site uses React Router for page-level navigation.

Primary pages include:

* Home
* About
* Work
* Contact

Shared site-level UI includes:

* Header
* Navigation
* Footer
* Skip link

The Header and Skip components persist across routes.

The Footer is used on interior pages rather than the non-scrollable home experience.

---

## General File Organization

Keep files organized by responsibility.

```text
src/
  assets/
    images/
      about/
      palceholder/
      work/

  components/
    ...

  pages/
    ...

  styles/
    ...

  App.tsx
  main.tsx
```

### `components/`

Reusable UI components belong here.

Examples include:

* Header
* Footer
* Navigation
* Buttons / links
* Shared visual or interaction components

Do not move page-specific markup into shared components unless it is genuinely reused or the extraction clearly improves readability.

### `pages/`

Top-level route components belong here.

Each page should remain responsible for its own page-specific layout and content.

### `assets/`

Static assets such as images belong here.

Portfolio imagery should remain grouped by purpose when practical, such as:

```text
assets/images/about/
assets/images/placeholder/
assets/images/work/
```

### `styles/`

Global Sass files, variables, shared mixins, tokens, and other site-wide styling utilities belong here.

Prefer keeping component- or page-specific styles close to the structure currently used in the project rather than reorganizing the styling architecture without a specific reason.

---

## Routing

React Router handles navigation between pages.

Use semantic links and `NavLink` where active navigation state is needed.

The router should remain straightforward. Do not introduce nested routing, route loaders, global routing state, or additional routing abstractions unless a feature specifically requires them.

---

## Component Philosophy

Prefer small, focused components with clear responsibilities.

Create a reusable component when:

* The same UI pattern appears in multiple places.
* A component represents a meaningful standalone interface element.
* Extracting it makes the parent substantially easier to understand.

Do not create components solely to reduce line count.

Avoid excessive prop configuration or overly generic components when a simpler implementation is easier to maintain.

---

## State Management

Use local React state when state is needed.

Do not introduce Redux, Zustand, MobX, Context-based global state, or another state-management library unless the application develops a clear need for shared application state.

Most portfolio content should remain static or locally controlled.

---

## Styling Architecture

The project uses Sass.

Prefer:

* Existing Sass variables and shared values.
* Clear class naming.
* Responsive styles colocated with the related styles when practical.
* CSS for visual behavior whenever JavaScript is unnecessary.
* SASS nesting structure when possible.

Avoid:

* CSS-in-JS.
* Utility CSS frameworks unless explicitly requested.
* Inline styles for normal layout and visual styling.
* Duplicating existing design tokens.
* Broad global selectors that could unintentionally affect unrelated components.

Preserve the existing visual system unless a design change is specifically requested.

---

## Responsive Design

The site should work across desktop, tablet, and mobile layouts.

Responsive behavior should be intentional rather than simply allowing elements to shrink.

When modifying layouts:

* Preserve readable line lengths.
* Maintain appropriate spacing.
* Avoid horizontal overflow.
* Ensure images scale correctly.
* Test intermediate viewport widths, not only desktop and mobile extremes.

Do not introduce new breakpoints unnecessarily if an existing breakpoint can support the design.

---

## Accessibility

Accessibility is a core architectural requirement, not a cleanup step.

Preserve and improve:

* Semantic HTML.
* Keyboard navigation.
* Visible focus states.
* Skip navigation.
* Appropriate heading hierarchy.
* Accessible link and button behavior.
* Alternative text for meaningful images.
* Sufficient color contrast.
* ARIA only when native HTML semantics are insufficient.

Do not remove accessibility behavior while refactoring visual or structural code.

---

## Images

Use responsive image assets where appropriate.

Existing portfolio imagery may include multiple exported sizes and WebP files.

Avoid replacing optimized assets with larger originals unless specifically requested.

Preserve aspect ratios and avoid unnecessary image distortion or cropping.

---

## Performance

Keep the site lightweight.

Prefer native browser behavior and existing dependencies over adding packages for small features.

Avoid adding:

* Large UI libraries.
* Animation libraries for simple effects.
* General-purpose utility packages for trivial functionality.

New dependencies should have a clear benefit.

---

## Change Scope

When making changes:

* Modify only the files relevant to the requested task.
* Do not refactor unrelated code.
* Do not rename or move files without a clear reason.
* Do not reorganize folder structure unless explicitly requested.
* Preserve existing behavior unless the task specifically changes it.
* Prefer incremental changes over large rewrites.

If an architectural improvement would require touching unrelated areas of the project, describe the recommendation first rather than implementing it automatically.

---

## Architectural Priorities

When choosing between multiple implementations, prioritize:

1. Simplicity
2. User experience
3. Accessibility
4. Visual fidelity
5. Maintainability
6. Performance
7. Reusability

Do not add architectural complexity solely for theoretical scalability. This is a focused portfolio site, not a large enterprise application.
