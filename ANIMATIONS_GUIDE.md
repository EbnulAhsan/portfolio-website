# Framer Motion Animations Guide

Complete reference for all animations used in this portfolio.

## Animation Types Implemented

### 1. Page Load Animation
**File**: `components/navbar.tsx`, `components/hero.tsx`

```tsx
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

**Effect**: Elements fade in and slide up when page loads
**Use Case**: Headers, navigation bars, main content blocks

---

### 2. Scroll Reveal Animation
**File**: All components with `whileInView`

```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.6 }}
```

**Effect**: Elements fade in and animate up as they scroll into view
**Use Case**: Project cards, skill icons, experience timeline

---

### 3. Stagger Children Animation
**File**: `components/projects.tsx`, `components/skills.tsx`

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
```

**Effect**: Each child element animates in sequence with delay
**Use Case**: Grid items, list items, card collections
**Performance**: Smooth cascade without overwhelming the browser

---

### 4. Hover Scale Animation
**File**: Buttons, cards, links throughout

```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
transition={{ duration: 0.2 }}
```

**Effect**: Element scales up on hover, down on click
**Use Case**: Buttons, card containers, interactive elements
**Duration**: 0.2s for snappy feel

---

### 5. Hover Lift Animation
**File**: `components/projects.tsx`, `components/process.tsx`

```tsx
whileHover={{ y: -8 }}
transition={{ duration: 0.3 }}
```

**Effect**: Element moves up (lifts) on hover
**Use Case**: Cards, project items
**Distance**: -8px creates subtle lift effect

---

### 6. Rotate and Scale Animation
**File**: `components/skills.tsx`, `components/contact.tsx`

```tsx
whileHover={{ rotate: 12, scale: 1.2 }}
transition={{ duration: 0.3 }}
```

**Effect**: Icon/element rotates and scales on hover
**Use Case**: Icons, badges
**Angle**: 12 degrees provides gentle rotation

---

### 7. Button Ripple Effect
**File**: `components/contact.tsx` (submit button)

```tsx
animate={{ rotate: 360 }}
transition={{ duration: 1, repeat: Infinity }}
```

**Effect**: Loading spinner rotates continuously
**Use Case**: Loading states, async operations

---

### 8. Shimmer/Shine Effect
**File**: `components/projects.tsx`, `components/skills.tsx`

```tsx
animate={{
  x: ['-100%', '100%'],
}}
transition={{
  duration: 3,
  repeat: Infinity,
  ease: 'linear',
}}
```

**Effect**: Light slides across element left to right
**Use Case**: Background overlays, shimmer effects
**Duration**: 3 seconds for smooth, continuous effect

---

### 9. Parallax Animation
**File**: `components/hero.tsx`

```tsx
animate={{
  x: [0, 50, 0],
  y: [0, 30, 0],
}}
transition={{
  duration: 8,
  repeat: Infinity,
  ease: 'easeInOut',
}}
```

**Effect**: Background elements move in floating pattern
**Use Case**: Hero section background blobs
**Duration**: 8-10 seconds for slow, natural movement

---

### 10. Accordion Open/Close
**File**: `components/faq.tsx`

```tsx
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto' }}
exit={{ opacity: 0, height: 0 }}
transition={{ duration: 0.3, ease: 'easeInOut' }}
```

**Effect**: FAQ items smoothly expand/collapse
**Use Case**: Accordion components
**Mode**: Uses `AnimatePresence` for proper exit animations

---

### 11. Slide Animation
**File**: `components/navbar.tsx`, `components/hero.tsx`

```tsx
whileHover={{ x: 4, y: -4 }}
whileTap={{ scale: 0.9 }}
```

**Effect**: Element slides diagonally on hover
**Use Case**: CTA buttons, arrow icons
**Distance**: 4px slide for subtle effect

---

### 12. Fade In Different Directions
**File**: Multiple components

**Fade Up**:
```tsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
```

**Fade Left**:
```tsx
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
```

**Fade Right**:
```tsx
initial={{ opacity: 0, x: 50 }}
animate={{ opacity: 1, x: 0 }}
```

---

## Animation Timing Reference

| Animation | Duration | Delay | Use Case |
|-----------|----------|-------|----------|
| Fade In | 0.6s | 0s | Page loads, main content |
| Scroll Reveal | 0.6s | Varied | Cards, sections |
| Stagger Delay | 0.1s | Per item | Grid items |
| Hover Scale | 0.2s | 0s | Interactive elements |
| Hover Lift | 0.3s | 0s | Cards, containers |
| Shimmer | 3s | 0s | Background effects |
| Parallax | 8-10s | 0s | Background elements |
| Accordion | 0.3s | 0s | FAQ, collapsible |

---

## Performance Optimization

### GPU Acceleration
Always animate these properties for best performance:
- `transform` (translate, scale, rotate)
- `opacity`

**Avoid animating**:
- `top`, `left`, `right`, `bottom`
- `width`, `height`
- `margin`, `padding`
- `background-color` (use sparingly)

### Viewport Settings
```tsx
viewport={{ once: true, amount: 0.2 }}
```

- `once: true` - Animation runs only once when first in view
- `amount: 0.2` - Trigger when 20% of element is visible

### Stagger Best Practice
```tsx
staggerChildren: 0.1,    // 100ms between items
delayChildren: 0.2,      // Wait 200ms before starting
```

---

## Common Patterns

### 1. Hover Button Animation
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 rounded-lg bg-primary"
>
  Click Me
</motion.button>
```

### 2. Scroll-Triggered Card
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Card Content
</motion.div>
```

### 3. Staggered List
```tsx
<motion.ul
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.li key={item} variants={itemVariants}>
      {item}
    </motion.li>
  ))}
</motion.ul>
```

### 4. Loading Spinner
```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
  className="w-6 h-6 border-2 rounded-full border-primary border-t-transparent"
/>
```

### 5. Floating Element
```tsx
<motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
>
  Content
</motion.div>
```

---

## Easing Functions

Used throughout the portfolio:

```tsx
ease: 'easeOut'        // Fast start, slow end
ease: 'easeInOut'      // Slow start and end
ease: 'easeIn'         // Slow start, fast end
ease: 'linear'         // Constant speed
ease: 'anticipate'     // Bouncy effect
```

---

## Debugging Animations

### Check if Animation is Rendering
```tsx
// Add debug console logs
<motion.div
  onAnimationStart={() => console.log('[v0] Animation started')}
  onAnimationComplete={() => console.log('[v0] Animation complete')}
>
  Content
</motion.div>
```

### Test Viewport Triggering
```tsx
// Verify element enters viewport
<motion.div
  whileInView={{ backgroundColor: 'red' }} // Visual indicator
  viewport={{ once: true }}
>
  This turns red when in view
</motion.div>
```

---

## Animation Checklist

- [x] Page load animations on navbar, hero
- [x] Scroll reveal on all major sections
- [x] Stagger animations on grids
- [x] Hover effects on interactive elements
- [x] Button ripple and loading states
- [x] Section transitions smooth
- [x] Parallax background elements
- [x] FAQ accordion animations
- [x] Form input focus animations
- [x] Shimmer/shine overlays
- [x] Optimized for 60 FPS
- [x] Mobile performance tested

---

## Resources

- [Framer Motion Official Docs](https://www.framer.com/motion/)
- [Animation Best Practices](https://www.framer.com/motion/)
- [Performance Tips](https://www.framer.com/motion/)

---

**Pro Tip**: Always use `transition: { duration: 0.3 }` or less for UI interactions to feel snappy. Use longer durations (0.6-1s) for entrance animations.
