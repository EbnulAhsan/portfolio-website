# Modern Portfolio Website

A stunning, feature-rich personal portfolio website built with React, Next.js, Tailwind CSS, and Framer Motion animations. Inspired by premium SaaS design aesthetics with smooth, performant animations.

## Features

### 🎨 Design
- **Premium SaaS Aesthetic**: Clean, minimal design with large typography
- **Dark Mode**: Built-in dark/light theme toggle using next-themes
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Glass Morphism**: Modern glass effect UI elements
- **Gradient Effects**: Subtle gradients and visual enhancements

### ✨ Animations
- **Page Load Animations**: Smooth fade and slide effects on initial page load
- **Scroll Reveal Animations**: Elements animate as they come into view using `whileInView`
- **Hover Effects**: Scale, lift, and interactive hover states
- **Stagger Animations**: Cascading animations for project cards and list items
- **Button Ripple**: Interactive button animations with ripple effects
- **Section Transitions**: Smooth transitions between sections
- **Parallax Effects**: Animated background elements

### 📱 Sections

1. **Navbar**
   - Sticky navigation with scroll detection
   - Animated logo and nav links
   - Dark mode toggle
   - Mobile responsive menu with animations

2. **Hero Section**
   - Large, impactful headline with gradient text
   - Animated background elements
   - Call-to-action buttons
   - Scroll indicator with animation

3. **Projects Section**
   - Grid layout (1 col mobile, 2 col tablet, 3 col desktop)
   - Animated project cards with hover effects
   - Gradient backgrounds for each project
   - Shimmer animation overlay

4. **Process Section**
   - 4-step process cards (Ideate, Design, Develop, Deploy)
   - Numbered cards with icons
   - Timeline layout on mobile
   - Animated numbers and hover effects

5. **Skills Section**
   - Grid of skill icons (8 categories)
   - Interactive hover animations
   - Tech stack breakdown cards
   - Shine effect animations

6. **Experience Section**
   - Timeline layout with animated dots
   - Experience cards with smooth reveal
   - Highlight badges
   - Responsive design with mobile-friendly timeline

7. **FAQ Section**
   - Accordion-style questions with smooth open/close
   - Animated chevron indicators
   - Smooth height transitions
   - Beautiful styling with borders

8. **Contact Section**
   - Contact information cards
   - Fully functional form with input animations
   - Form validation
   - Submit button with loading state

9. **Footer**
   - Brand information
   - Quick navigation links
   - Social media links
   - Scroll-to-top button
   - Copyright information

## Technology Stack

### Frontend
- **React 19**: Latest React features
- **Next.js 16**: App Router, server components
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling

### Animation & UI
- **Framer Motion 11**: Production-ready animation library
- **next-themes**: Dark mode management
- **Lucide React**: Beautiful icon library

### Development
- **ESLint**: Code quality
- **Autoprefixer**: CSS vendor prefixes
- **PostCSS**: CSS processing

## Installation & Setup

### Using shadcn CLI (Recommended)

```bash
# Create a new Next.js project
npx shadcn-cli@latest init

# Navigate to project directory
cd my-project

# This portfolio is already set up with all dependencies
# Install dependencies
npm install
```

### Manual Installation

```bash
# Clone or download the project
git clone <repository-url>

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
app/
├── layout.tsx           # Root layout with theme provider
├── globals.css          # Global styles and animations
├── page.tsx             # Main portfolio page
└── fonts/               # Font configurations

components/
├── navbar.tsx           # Navigation bar with dark mode
├── hero.tsx             # Hero section
├── projects.tsx         # Projects showcase
├── process.tsx          # 4-step process
├── skills.tsx           # Skills grid with tech stack
├── experience.tsx       # Timeline experience
├── faq.tsx              # FAQ accordion
├── contact.tsx          # Contact form
└── footer.tsx           # Footer with links

lib/
├── animations.ts        # Framer Motion presets
└── utils.ts             # Tailwind utilities

public/                  # Static assets
```

## Customization Guide

### Update Personal Information

1. **Navbar** (`components/navbar.tsx`)
   - Change the logo/brand name in the navbar section

2. **Hero** (`components/hero.tsx`)
   - Update headline and subtext
   - Modify CTA button links

3. **Projects** (`components/projects.tsx`)
   - Update project data array with your projects
   - Modify titles, descriptions, and tags
   - Update gradient colors

4. **Skills** (`components/skills.tsx`)
   - Customize skills grid
   - Update tech stack details

5. **Experience** (`components/experience.tsx`)
   - Update experience array with your background
   - Modify roles, companies, and dates

6. **Contact** (`components/contact.tsx`)
   - Update contact information (email, phone, location)
   - Connect form submission to your backend/service

### Design Customization

#### Colors
Edit design tokens in `app/globals.css`:
```css
:root {
  --primary: 0 0% 9%;
  --background: 0 0% 100%;
  /* ... other colors ... */
}

.dark {
  --primary: 0 0% 98%;
  --background: 0 0% 3.9%;
  /* ... other colors ... */
}
```

#### Typography
Modify fonts in `app/layout.tsx`:
```tsx
import { YourFont } from 'next/font/google'
const customFont = YourFont({ subsets: ['latin'] })
```

#### Animation Timing
Edit `lib/animations.ts` to adjust animation durations and delays:
```ts
export const animations = {
  fadeIn: {
    transition: { duration: 0.8 }, // Increase/decrease duration
  },
  // ...
}
```

## Performance Optimization

- **Optimized Animations**: All animations use GPU acceleration with `transform` and `opacity`
- **Lazy Loading**: Components animate in view with `whileInView`
- **Smooth Scrolling**: CSS smooth scroll behavior
- **Responsive Images**: Optimized for different screen sizes
- **No Lag**: Animations configured for 60 FPS performance

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Connect to GitHub
git push

# Vercel automatically detects Next.js projects
# Configure at vercel.com and click Deploy
```

### Deploy to Other Platforms

```bash
# Build production bundle
npm run build

# Start production server
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Animation Features Detailed

### Page Load Animation
```tsx
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### Scroll Reveal Animation
```tsx
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
```

### Stagger Children Animation
```tsx
variants={{
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}}
```

### Hover Scale Animation
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

## Tips & Best Practices

1. **Keep Animations Fast**: 0.3-0.6s for most animations
2. **Use Hardware Acceleration**: Animate `transform` and `opacity`
3. **Provide Fallbacks**: Ensure content is readable without animations
4. **Test on Real Devices**: Check performance on mobile devices
5. **Update Content**: Regularly update projects and experience

## Troubleshooting

### Animations Not Showing
- Check browser console for errors
- Verify Framer Motion is installed: `npm install framer-motion`
- Ensure motion components are imported correctly

### Dark Mode Not Working
- Clear browser cache
- Check if `next-themes` is properly installed
- Verify ThemeProvider is wrapping the app

### Layout Issues on Mobile
- Check responsive classes in Tailwind
- Test on real device using `npm run dev` and device IP
- Verify viewport settings in layout.tsx

## License

This portfolio template is free to use and customize for personal use.

## Support & Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## Future Enhancements

- [ ] Add blog section
- [ ] Integrate email service for contact form
- [ ] Add testimonials section
- [ ] Implement analytics
- [ ] Add case studies
- [ ] Performance monitoring

---

**Happy building! 🚀**
