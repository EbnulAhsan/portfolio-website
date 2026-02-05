# Image Setup Guide

This guide explains how to add your own images to the portfolio website.

## Directory Structure

Create an `public` folder in your project root with the following structure:

```
project-root/
├── public/
│   ├── profile.jpg          # Your profile/hero image
│   └── projects/
│       ├── ecommerce.jpg    # Project 1 image
│       ├── dashboard.jpg    # Project 2 image
│       ├── chat.jpg         # Project 3 image
│       ├── mobile.jpg       # Project 4 image
│       ├── portfolio.jpg    # Project 5 image
│       └── cms.jpg          # Project 6 image
```

## Hero Section - Profile Picture

### Step 1: Add Your Profile Image
1. Add your profile picture to `public/profile.jpg`
2. Recommended dimensions: **320x320px** (square format)
3. File should be named exactly `profile.jpg`

### Step 2: Customize in Component
The hero section already references the image at `/profile.jpg`

If you want to change the image path or filename, edit `components/hero.tsx`:

```jsx
<img
  src="/profile.jpg"  // Change this path if needed
  alt="Profile Picture"
  className="w-full h-full object-cover"
/>
```

## Projects Section - Project Images

### Step 1: Add Project Images
Add your project images to `public/projects/` folder:
- `ecommerce.jpg` - E-Commerce Platform project
- `dashboard.jpg` - SaaS Dashboard project
- `chat.jpg` - AI Chat Application project
- `mobile.jpg` - Mobile App Design project
- `portfolio.jpg` - Portfolio Website project
- `cms.jpg` - Content Management System project

### Step 2: Image Specifications
- **Recommended dimensions**: 600x300px (2:1 aspect ratio)
- **File format**: JPG or PNG
- **File size**: Optimize for web (< 200KB each)

### Step 3: Customize Project Data
Edit `components/projects.tsx` and update the `projects` array:

```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Your project description',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    image: '/projects/your-image.jpg',  // Update this path
    gradient: 'from-blue-500/20 to-purple-500/20',
    borderColor: 'border-blue-500/30',
  },
  // ... more projects
]
```

## Image Optimization Tips

### For Best Performance:
1. **Compress images** using tools like:
   - TinyPNG (https://tinypng.com)
   - ImageOptim (https://imageoptim.com)
   - Squoosh (https://squoosh.app)

2. **Use correct format**:
   - JPG for photos (smaller file size)
   - PNG for graphics with transparency

3. **Responsive images**:
   - Create multiple sizes for different devices
   - Use `next/image` component for automatic optimization (optional)

## Using Next.js Image Component (Optional)

For better performance, you can use Next.js Image component:

```jsx
import Image from 'next/image'

// In Hero section:
<Image
  src="/profile.jpg"
  alt="Profile Picture"
  width={320}
  height={320}
  className="w-full h-full object-cover rounded-3xl"
  priority
/>

// In Projects section:
<Image
  src={project.image}
  alt={project.title}
  width={600}
  height={300}
  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
/>
```

## Fallback Images

If an image doesn't load, the components will show:
- **Hero section**: Glass effect placeholder with gradient animation
- **Projects section**: Gradient background with loading animation

## Common Issues

### Images Not Showing?
1. Check file paths match exactly (case-sensitive)
2. Ensure files are in the `public` folder
3. Verify file extensions are correct (.jpg, .png)
4. Clear browser cache and refresh (Ctrl+Shift+Delete)

### Images Look Blurry?
1. Use higher resolution source images
2. Optimize file size but maintain quality
3. Check image dimensions match recommended specs

### Slow Loading?
1. Compress images to < 200KB
2. Use JPG for photos
3. Use PNG only for graphics with transparency
4. Consider using WebP format for modern browsers

## File Path Reference

| Section | File Path | Size | Format |
|---------|-----------|------|--------|
| Hero Profile | `/public/profile.jpg` | 320x320px | JPG |
| Project 1 | `/public/projects/ecommerce.jpg` | 600x300px | JPG |
| Project 2 | `/public/projects/dashboard.jpg` | 600x300px | JPG |
| Project 3 | `/public/projects/chat.jpg` | 600x300px | JPG |
| Project 4 | `/public/projects/mobile.jpg` | 600x300px | JPG |
| Project 5 | `/public/projects/portfolio.jpg` | 600x300px | JPG |
| Project 6 | `/public/projects/cms.jpg` | 600x300px | JPG |

## Quick Setup Checklist

- [ ] Create `public` folder in project root
- [ ] Create `public/projects` subfolder
- [ ] Add `profile.jpg` to `public/`
- [ ] Add 6 project images to `public/projects/`
- [ ] Run `npm run dev` to test
- [ ] Verify images load correctly
- [ ] Update project titles and descriptions in components

## Deployment

When you deploy to Vercel:
1. Images in the `public` folder are automatically served
2. No additional configuration needed
3. Images will be cached and optimized by Vercel

## Getting Stock Images

If you don't have project screenshots, use:
- **Unsplash** (https://unsplash.com) - Free high-quality photos
- **Pexels** (https://pexels.com) - Free stock photos
- **Pixabay** (https://pixabay.com) - Free images and vectors
- **Placeholders** (https://placeholder.com) - Generate placeholder images

## Further Customization

### Change Image Hover Effect
Edit `components/projects.tsx` - modify the `whileHover={{ scale: 1.05 }}` value or add new effects

### Add Image Captions
Update the project cards in `components/projects.tsx` to display additional image information

### Lazy Loading
Images automatically load when visible (Next.js Image component feature)

---

**Ready to add images?** Follow the steps above and your portfolio will look professional and attractive!
