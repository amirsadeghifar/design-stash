# Motion Primitives Components + CLI Install Commands

Source: Motion Primitives docs and installation guide as of March 5, 2026.

## Base installation

Motion Primitives docs say to:

1. Set up Tailwind CSS in your project.
2. Install Motion:

```bash
npm install motion
```

3. Add a `lib/utils.ts` helper:

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

4. Install Lucide React icons:

```bash
npm install lucide-react
```

## General component install pattern

```bash
npx motion-primitives@latest add <component-name>
```

---

## Core Components

### Accordion
```bash
npx motion-primitives@latest add accordion
```

### Animated Background
```bash
npx motion-primitives@latest add animated-background
```

### Animated Group
```bash
npx motion-primitives@latest add animated-group
```

### Border Trail
```bash
npx motion-primitives@latest add border-trail
```

### Carousel
```bash
npx motion-primitives@latest add carousel
```

### Cursor
```bash
npx motion-primitives@latest add cursor
```

### Dialog
```bash
npx motion-primitives@latest add dialog
```

### Disclosure
```bash
npx motion-primitives@latest add disclosure
```

### In View
```bash
npx motion-primitives@latest add in-view
```

### Infinite Slider
```bash
npx motion-primitives@latest add infinite-slider
```

### Transition Panel
```bash
npx motion-primitives@latest add transition-panel
```

---

## Text Effects

### Text Effect
```bash
npx motion-primitives@latest add text-effect
```

### Text Loop
```bash
npx motion-primitives@latest add text-loop
```

### Text Morph
```bash
npx motion-primitives@latest add text-morph
```

### Text Roll
```bash
npx motion-primitives@latest add text-roll
```

### Text Scramble
```bash
npx motion-primitives@latest add text-scramble
```

### Text Shimmer
```bash
npx motion-primitives@latest add text-shimmer
```

### Text Shimmer Wave
```bash
npx motion-primitives@latest add text-shimmer-wave
```

---

## Number Effects

### Animated Number
```bash
npx motion-primitives@latest add animated-number
```

### Sliding Number
```bash
npx motion-primitives@latest add sliding-number
```

---

## Interactive Elements

### Dock
```bash
npx motion-primitives@latest add dock
```

### Glow Effect
```bash
npx motion-primitives@latest add glow-effect
```

### Image Comparison
```bash
npx motion-primitives@latest add image-comparison
```

### Scroll Progress
```bash
npx motion-primitives@latest add scroll-progress
```

### Spotlight
```bash
npx motion-primitives@latest add spotlight
```

### Spinning Text
```bash
npx motion-primitives@latest add spinning-text
```

### Tilt
```bash
npx motion-primitives@latest add tilt
```

---

## Toolbars

### Toolbar Dynamic
```bash
npx motion-primitives@latest add toolbar-dynamic
```

### Toolbar Expandable
```bash
npx motion-primitives@latest add toolbar-expandable
```

---

## Advanced Effects

### Magnetic
```bash
npx motion-primitives@latest add magnetic
```

### Morphing Dialog
```bash
npx motion-primitives@latest add morphing-dialog
```

### Morphing Popover
```bash
npx motion-primitives@latest add morphing-popover
```

### Progressive Blur
```bash
npx motion-primitives@latest add progressive-blur
```

---

## Install all component commands at once

```bash
npx motion-primitives@latest add accordion
npx motion-primitives@latest add animated-background
npx motion-primitives@latest add animated-group
npx motion-primitives@latest add border-trail
npx motion-primitives@latest add carousel
npx motion-primitives@latest add cursor
npx motion-primitives@latest add dialog
npx motion-primitives@latest add disclosure
npx motion-primitives@latest add in-view
npx motion-primitives@latest add infinite-slider
npx motion-primitives@latest add transition-panel
npx motion-primitives@latest add text-effect
npx motion-primitives@latest add text-loop
npx motion-primitives@latest add text-morph
npx motion-primitives@latest add text-roll
npx motion-primitives@latest add text-scramble
npx motion-primitives@latest add text-shimmer
npx motion-primitives@latest add text-shimmer-wave
npx motion-primitives@latest add animated-number
npx motion-primitives@latest add sliding-number
npx motion-primitives@latest add dock
npx motion-primitives@latest add glow-effect
npx motion-primitives@latest add image-comparison
npx motion-primitives@latest add scroll-progress
npx motion-primitives@latest add spotlight
npx motion-primitives@latest add spinning-text
npx motion-primitives@latest add tilt
npx motion-primitives@latest add toolbar-dynamic
npx motion-primitives@latest add toolbar-expandable
npx motion-primitives@latest add magnetic
npx motion-primitives@latest add morphing-dialog
npx motion-primitives@latest add morphing-popover
npx motion-primitives@latest add progressive-blur
```
