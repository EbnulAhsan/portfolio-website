# Deployment Guide

Get your portfolio live on the internet in minutes! 🚀

---

## Overview

You can deploy this portfolio to several platforms. **Vercel** is the easiest and recommended option.

| Platform | Difficulty | Cost | Time |
|----------|-----------|------|------|
| **Vercel** | ⭐ Very Easy | Free | 2 min |
| **Netlify** | ⭐ Very Easy | Free | 3 min |
| **GitHub Pages** | ⭐⭐ Easy | Free | 5 min |
| **AWS** | ⭐⭐⭐ Medium | $$ | 10 min |

---

## 🥇 Option 1: Vercel (Recommended)

### Method A: Using Vercel Dashboard

**Step 1: Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

**Step 2: Connect to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"

**Done!** 🎉 Your portfolio is live!

**Your URL**: `https://YOUR_REPO.vercel.app`

---

### Method B: Using Vercel CLI

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Login to Vercel**
```bash
vercel login
```

**Step 3: Deploy**
```bash
vercel
# Follow the prompts
```

**Your URL will be displayed** ✅

---

## 🥈 Option 2: Netlify

### Method A: Using Netlify Drag & Drop

**Step 1: Build the project**
```bash
npm run build
```

**Step 2: Go to Netlify**
1. Visit [netlify.com](https://netlify.com)
2. Sign up / Login
3. Drag and drop the `.next` folder
4. Done! 🎉

---

### Method B: Using Netlify Git

**Step 1: Push to GitHub**
```bash
git push
```

**Step 2: Connect to Netlify**
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select your GitHub repo
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Click "Deploy"

---

## 🥉 Option 3: GitHub Pages

### Step 1: Update next.config.mjs
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/YOUR_REPO_NAME',
}
```

### Step 2: Build
```bash
npm run build
```

### Step 3: Push to GitHub
```bash
git add .
git commit -m "Deploy"
git push
```

### Step 4: Enable GitHub Pages
1. Go to repository Settings
2. Select "Pages"
3. Source: "Deploy from branch"
4. Branch: "main" / Folder: "out"
5. Save

**Your URL**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## 🏢 Option 4: AWS

### Using AWS Amplify (Easiest)

**Step 1: Connect GitHub**
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Create new app
3. Connect GitHub

**Step 2: Configure Build**
- Build command: `npm run build`
- Output directory: `.next`

**Step 3: Deploy**
Click "Deploy" ✅

---

## 📝 Pre-Deployment Checklist

- [ ] Update your name and info
- [ ] Add your projects
- [ ] Add your experience
- [ ] Update contact email
- [ ] Test locally with `npm run dev`
- [ ] Test on mobile device
- [ ] Check dark mode works
- [ ] Verify all links work
- [ ] Check form functionality
- [ ] Optimize images
- [ ] Review SEO metadata

---

## 🌐 Custom Domain Setup

### Using Vercel

**Step 1: Add Domain**
1. Go to Vercel Dashboard
2. Select your project
3. Settings → Domains
4. Add custom domain

**Step 2: Update DNS**
- Point your domain to Vercel nameservers
- Wait 24-48 hours for propagation

### Using Netlify

**Step 1: Add Domain**
1. Go to Netlify Site Settings
2. Click "Domain"
3. Add custom domain

**Step 2: Update DNS**
- Point to Netlify nameservers

### Using GitHub Pages

**Step 1: Add Custom Domain**
1. Repository → Settings → Pages
2. Enter custom domain
3. Create CNAME file

**Step 2: Update DNS**
- Point CNAME record to your GitHub Pages URL

---

## 🔒 Environment Variables

If you add environment variables to your project:

### For Vercel
1. Dashboard → Settings → Environment Variables
2. Add your variables
3. Redeploy

### For Netlify
1. Site Settings → Build & Deploy → Environment
2. Add your variables
3. Redeploy

### For GitHub Pages
Add to your `.env.local` (local only):
```bash
NEXT_PUBLIC_YOUR_VAR=value
```

---

## 🐛 Troubleshooting

### "Build Failed"
```bash
# Check locally first
npm run build

# Check for errors in console output
# Usually missing dependencies
npm install
```

### "Page Not Found"
- For GitHub Pages: Make sure `basePath` is set in next.config.mjs
- For Vercel/Netlify: Check build command

### "Slow Performance"
- Optimize images
- Minimize bundle size
- Enable caching headers

### "Dark Mode Not Working"
- Clear browser cache
- Check if next-themes is installed
- Try incognito window

---

## 📊 Monitor Your Site

### Google Analytics
```bash
# Add to .env.local
NEXT_PUBLIC_GA_ID=YOUR_TRACKING_ID
```

### Vercel Analytics
- Automatic on Vercel
- No extra setup needed

### Monitor Performance
- Chrome DevTools
- Lighthouse
- Vercel Analytics

---

## 🚀 Advanced Deployment

### CI/CD Pipeline

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Vercel
        uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

### Docker Deployment
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📈 Post-Deployment

### After Going Live

1. ✅ Share on social media
2. ✅ Add to resume/LinkedIn
3. ✅ Add to email signature
4. ✅ Get feedback from friends
5. ✅ Monitor analytics
6. ✅ Update regularly with new projects

### Keep It Fresh

- Update projects monthly
- Add new experiences
- Fix typos/bugs
- Optimize performance
- Add testimonials

---

## 💡 Optimization Tips

### Before Deployment

**Optimize Images**
```bash
# Use WebP format
# Compress images
# Use next/image component
```

**Minimize Bundle**
```bash
# Check bundle size
npm run build

# Use dynamic imports
import dynamic from 'next/dynamic'
```

**Enable Caching**
```bash
# Already enabled in next.config.mjs
# Configure in Vercel/Netlify
```

---

## 🆘 Getting Help

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Build fails | Run `npm run build` locally |
| Page blank | Check console errors |
| Animations slow | Profile with DevTools |
| Form not working | Check backend connection |
| Styles look wrong | Clear cache, hard refresh |

### Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

---

## 📊 Deployment Comparison

### Vercel
✅ Best for Next.js  
✅ Easiest setup  
✅ Free tier  
✅ Great performance  
❌ Limited free tier

### Netlify
✅ Easy setup  
✅ Good performance  
✅ Free tier  
✅ Form handling  
❌ Slower than Vercel

### GitHub Pages
✅ Free  
✅ Integrated with GitHub  
✅ No setup required  
❌ Static only  
❌ Performance limits

### AWS
✅ Highly scalable  
✅ More control  
✅ More expensive  
❌ More complex setup

---

## 🎯 Next Steps

1. **Choose platform** - Recommend Vercel
2. **Deploy** - Follow steps above
3. **Test** - Click your live link
4. **Share** - Tell friends & family! 🎉
5. **Monitor** - Check analytics
6. **Update** - Add new projects regularly

---

## 🏁 You're Live! 🎉

Congratulations! Your portfolio is now on the internet!

### Share Your Portfolio
- Twitter/X
- LinkedIn
- GitHub
- Email
- Resume

### Keep Improving
- Monitor analytics
- Get feedback
- Update content
- Optimize performance

---

## Quick Links

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [AWS Amplify](https://aws.amazon.com/amplify)

---

**Your portfolio is ready for the world!** 🌍

Time to make an impression. Go forth and build amazing things! 🚀
