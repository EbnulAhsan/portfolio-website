# Customization Examples

Detailed examples for customizing each section of the portfolio.

## Table of Contents
1. [Update Contact Information](#update-contact-information)
2. [Modify Projects](#modify-projects)
3. [Update Experience](#update-experience)
4. [Change Colors](#change-colors)
5. [Customize Skills](#customize-skills)
6. [Update Process Steps](#update-process-steps)
7. [Modify FAQ](#modify-faq)

---

## Update Contact Information

### File: `components/contact.tsx`

Find the `contactInfo` array:

```tsx
const contactInfo = [
  { 
    icon: Mail, 
    label: 'Email', 
    value: 'hello@example.com',  // ← Change this
    href: 'mailto:hello@example.com'  // ← And this
  },
  { 
    icon: Phone, 
    label: 'Phone', 
    value: '+1 (555) 123-4567',  // ← Change this
    href: 'tel:+15551234567'  // ← And this
  },
  { 
    icon: MapPin, 
    label: 'Location', 
    value: 'San Francisco, CA',  // ← Change this
    href: '#'  // ← Add link if desired
  },
]
```

### Connect Form to Email Service

Add form submission logic:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    // Example: Using Formspree
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      // Show success message
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    setIsSubmitting(false)
  }
}
```

---

## Modify Projects

### File: `components/projects.tsx`

Update the projects array with your own:

```tsx
const projects = [
  {
    id: 1,
    title: 'Your Project Name',  // ← Your title
    description: 'Project description here',  // ← Your description
    tags: ['React', 'Node.js', 'MongoDB'],  // ← Your tech stack
    gradient: 'from-blue-500/20 to-purple-500/20',  // ← Color combo
    borderColor: 'border-blue-500/30',  // ← Border color
  },
  // Add more projects...
]
```

### Add Project Links

Modify the card to be clickable:

```tsx
<motion.a
  href={project.url}  // Add URL to project object
  target="_blank"
  rel="noopener noreferrer"
  // ... rest of props
>
  {/* Card content */}
</motion.a>
```

### Add Project Images

Replace the placeholder background:

```tsx
{/* Background Image Placeholder */}
<div 
  className="h-48 bg-cover bg-center"
  style={{
    backgroundImage: `url('${project.image}')`  // Add image property
  }}
/>
```

---

## Update Experience

### File: `components/experience.tsx`

Modify the experiences array:

```tsx
const experiences = [
  {
    role: 'Your Job Title',  // ← Your role
    company: 'Company Name',  // ← Company name
    period: '2023 - Present',  // ← Date range
    description: 'What you did at this company...',  // ← Description
    highlights: ['Achievement 1', 'Achievement 2', 'Achievement 3'],  // ← Key highlights
  },
  // Add more experiences...
]
```

---

## Change Colors

### File: `app/globals.css`

Update the color tokens in the `:root` section:

```css
:root {
  /* Light theme colors */
  --primary: 0 0% 9%;          /* ← Main brand color */
  --background: 0 0% 100%;      /* ← Background */
  --foreground: 0 0% 3.9%;      /* ← Text color */
  --card: 0 0% 100%;            /* ← Card background */
  --secondary: 0 0% 96.1%;      /* ← Secondary color */
  /* ... other colors */
}

.dark {
  /* Dark theme colors */
  --primary: 0 0% 98%;          /* ← Main brand color (dark) */
  --background: 0 0% 3.9%;      /* ← Background (dark) */
  --foreground: 0 0% 98%;       /* ← Text color (dark) */
  /* ... other colors */
}
```

### Example: Change Primary Color to Blue

```css
:root {
  --primary: 217 91.2% 59.8%;   /* Blue */
}

.dark {
  --primary: 217 91.2% 59.8%;   /* Same blue in dark mode */
}
```

### Example: Change Primary Color to Purple

```css
:root {
  --primary: 280 85.1% 56.1%;   /* Purple */
}

.dark {
  --primary: 280 85.1% 56.1%;   /* Same purple in dark mode */
}
```

---

## Customize Skills

### File: `components/skills.tsx`

Update the skills grid:

```tsx
const skills = [
  { 
    icon: Code, 
    label: 'Your Skill', 
    color: 'text-blue-500',      // ← Icon color
    bg: 'bg-blue-500/10'         // ← Background color
  },
  // Add more skills...
]
```

### Update Tech Stack

Modify the tech stack sections:

```tsx
{[
  {
    title: 'Frontend Stack',
    techs: ['React', 'Next.js', 'Your Tech', 'Another Tech'],
  },
  {
    title: 'Backend Stack',
    techs: ['Node.js', 'Express', 'Your Tech'],
  },
  {
    title: 'Tools & Services',
    techs: ['Git', 'Docker', 'Your Tools'],
  },
]}
```

---

## Update Process Steps

### File: `components/process.tsx`

Customize the 4-step process:

```tsx
const steps = [
  {
    number: '01',
    title: 'Your Step Name',  // ← Step title
    description: 'Description of what happens in this step',
    icon: Lightbulb,  // ← Change icon from lucide-react
    color: 'from-blue-500/20 to-blue-500/5',
  },
  // Steps 02, 03, 04...
]
```

### Available Icons from Lucide

```tsx
import {
  Lightbulb,    // Ideate
  Pencil,       // Design
  Code,         // Develop
  Rocket,       // Deploy
  // Or choose from 400+ other icons
} from 'lucide-react'
```

---

## Modify FAQ

### File: `components/faq.tsx`

Update the FAQs array:

```tsx
const faqs = [
  {
    question: "Your question here?",
    answer: "Detailed answer to the question...",
  },
  {
    question: "Another question?",
    answer: "Another comprehensive answer...",
  },
  // Add more FAQs...
]
```

---

## Brand Customization

### Update Logo/Brand Name

**File: `components/navbar.tsx`**

```tsx
<div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
  Your Brand Name  {/* ← Change this */}
</div>
```

### Update Metadata

**File: `app/layout.tsx`**

```tsx
export const metadata: Metadata = {
  title: 'Your Name - Your Title',  // ← Update this
  description: 'Your portfolio description',  // ← Update this
  keywords: 'your, keywords, here',  // ← Add your keywords
}
```

---

## Animation Customization

### Adjust Animation Duration

**File: `components/projects.tsx` (Example)**

```tsx
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },  // ← Increase/decrease here
  },
}
```

### Change Stagger Timing

```tsx
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,  // ← Increase for slower cascade
      delayChildren: 0.3,     // ← Increase for longer initial delay
    },
  },
}
```

### Adjust Hover Scale

```tsx
whileHover={{ scale: 1.08 }}  // ← Increase for bigger scale
whileTap={{ scale: 0.92 }}    // ← Increase for more tap effect
```

---

## Add New Section

### Steps to Add a New Section

1. Create new component in `components/`

```tsx
// components/my-section.tsx
'use client'

import { motion } from 'framer-motion'

const MySection = () => {
  return (
    <section id="my-section" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Section Title
        </motion.h2>
        {/* Your content */}
      </div>
    </section>
  )
}

export default MySection
```

2. Import in `app/page.tsx`

```tsx
import MySection from '@/components/my-section'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MySection />  {/* Add here */}
      <Footer />
    </main>
  )
}
```

3. Add link in Navbar navigation

```tsx
const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'My Section', href: '#my-section' },  // ← Add this
  { label: 'Contact', href: '#contact' },
]
```

---

## Form Integration Examples

### Formspree Integration

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Message sent successfully!')
    }
  } finally {
    setIsSubmitting(false)
  }
}
```

### Firebase Integration

```tsx
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const db = getFirestore()
    await addDoc(collection(db, 'messages'), {
      ...formData,
      timestamp: new Date(),
    })
    setFormData({ name: '', email: '', subject: '', message: '' })
  } catch (error) {
    console.error('Error:', error)
  }
}
```

### SendGrid Integration

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    // Handle response...
  } catch (error) {
    console.error('Error:', error)
  }
}
```

---

## Mobile Optimization

### Responsive Typography

```tsx
{/* Already implemented in portfolio */}
<h1 className="text-5xl sm:text-6xl lg:text-7xl">
  Responsive heading
</h1>
```

### Responsive Grid

```tsx
{/* Already implemented in portfolio */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

---

## Testing Your Changes

### Local Development
```bash
npm run dev
# Visit http://localhost:3000
```

### Test on Mobile
```bash
# Get your local IP
ipconfig getifaddr en0  # macOS
hostname -I            # Linux

# Visit http://YOUR_IP:3000 on mobile device
```

### Check Performance
- Open DevTools (F12)
- Go to Performance tab
- Record interactions
- Check for smooth animations (60 FPS)

---

## Deployment Checklist

Before deploying:

- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Test all links work
- [ ] Test contact form submission
- [ ] Test dark mode toggle
- [ ] Test on mobile devices
- [ ] Check animations performance
- [ ] Verify meta tags and SEO

---

**Need Help?** Refer to the main PORTFOLIO_README.md or ANIMATIONS_GUIDE.md for more information.
