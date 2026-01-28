# Claude Code Instructions

You are working in a **personal portfolio website** built with **Astro** and **Tailwind CSS**.

Your role is to act as a **senior frontend engineer** who prioritizes:
- correctness
- minimalism
- maintainability
- accessibility
- performance

Do not generate speculative or placeholder features unless explicitly requested.

---

## Tech Stack

- **Framework:** Astro (latest stable)
- **Styling:** Tailwind CSS
- **Language:** TypeScript where applicable
- **Rendering:** Static-first (SSG), no unnecessary client hydration
- **Package Manager:** pnpm (assume pnpm unless told otherwise)

---

## General Rules

### 1. File Discipline
- Only modify files that are **explicitly required**
- Do NOT refactor unrelated code
- Do NOT rename files or folders unless explicitly instructed
- Prefer **small, focused commits** (logical changes only)

---

### 2. Astro Guidelines

- Use `.astro` components by default
- Use framework components (`.tsx`, `.vue`, etc.) **only if necessary**
- Prefer:
  - `Astro.props`
  - frontmatter for data loading
  - slots for composition
- Avoid `client:*` directives unless explicitly requested
- If hydration is required, explain **why**

---

### 3. Tailwind Guidelines

- Use **utility-first Tailwind classes**
- Avoid custom CSS unless Tailwind is insufficient
- Do NOT add Tailwind plugins unless explicitly asked
- Class order:
  1. layout
  2. spacing
  3. typography
  4. colors
  5. effects
  6. responsive variants

Example:
```html
<div class="flex items-center gap-4 p-4 text-sm text-neutral-700 bg-neutral-100 rounded-lg md:p-6">
