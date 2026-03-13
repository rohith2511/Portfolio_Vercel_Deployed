# 🚀 Deployment Guide

## Overview

Your premium portfolio is ready for production deployment. This guide covers multiple hosting options with step-by-step instructions.

## 🎯 Pre-Deployment Checklist

- [ ] All sections content updated with your information
- [ ] Contact form backend configured (if using form)
- [ ] Social links updated to your profiles
- [ ] Project links pointing to correct repositories
- [ ] SEO meta tags updated in `index.html`
- [ ] Build successful with `npm run build`
- [ ] Tested on mobile, tablet, and desktop
- [ ] Performance checked with Lighthouse

## 📋 Prepare for Production

### 1. Update Meta Tags

Edit `index.html`:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="devops, cloud, kubernetes, aws">
<meta property="og:title" content="Your Name | Developer Portfolio">
<meta property="og:description" content="Your tagline">
<meta property="og:image" content="/og-image.png">
```

### 2. Add Favicon

Place your favicon in the root directory:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

### 3. Create .env.production

```env
VITE_ANALYTICS_ID=your_google_analytics_id
VITE_CONTACT_EMAIL=your.email@example.com
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
```

### 4. Build for Production

```bash
npm run build
```

Output directory: `dist/`

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Best for:** Zero-config deployment, automatic CI/CD, edge functions

#### Step 1: Create Vercel Account
- Go to [vercel.com](https://vercel.com)
- Sign up with GitHub account
- Authorize Vercel

#### Step 2: Deploy Repository
```bash
# Option A: Push to GitHub and import
# 1. Push repo to GitHub
# 2. Go to vercel.com/import
# 3. Select your GitHub repository
# 4. Deploy

# Option B: Use Vercel CLI
npm i -g vercel
vercel
```

#### Step 3: Configure Build Settings
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### Step 4: Add Environment Variables
In Vercel dashboard:
1. Go to Settings → Environment Variables
2. Add your variables from `.env.production`
3. Redeploy

#### Step 5: Add Custom Domain
1. Go to Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. SSL certificate auto-issued

**Cost**: Free tier includes deployments and custom domains

---

### Option 2: Netlify

**Best for:** Simple setup, generous free tier, built-in forms

#### Step 1: Connect Repository
```bash
npm i -g netlify-cli
netlify login
netlify init
```

#### Step 2: Configure `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[context.production.environment]
  VITE_ANALYTICS_ID = "your_id"
```

#### Step 3: Deploy
```bash
netlify deploy --prod
```

#### Step 4: Add Custom Domain
1. In Netlify dashboard → Domain settings
2. Add your domain
3. Update nameservers or CNAME record

**Cost**: Free tier with 300 build minutes/month, bandwidth not limited

---

### Option 3: GitHub Pages

**Best for:** Free, version-controlled hosting

#### Step 1: Update vite.config.ts
```typescript
export default {
  base: '/your-repo-name/',
  // ... rest of config
}
```

#### Step 2: Create GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### Step 3: Update GitHub Settings
1. Go to repository → Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Click Save

**Cost**: Free, limited to github.io domain or custom domain

---

### Option 4: Self-Hosted (VPS)

**Best for:** Maximum control, custom configurations

#### Step 1: Choose VPS Provider
Popular options:
- **DigitalOcean** (~$5/month)
- **Linode** (~$5/month)
- **AWS Lightsail** (~$3.50/month)

#### Step 2: Setup Server
```bash
# SSH into your server
ssh root@your_server_ip

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# Install Nginx
apt install -y nginx

# Install PM2 for process management
npm install -g pm2
```

#### Step 3: Deploy Application
```bash
# Clone repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install and build
npm install
npm run build

# Start with PM2
pm2 start "npm run dev" --name "portfolio"
pm2 startup
pm2 save
```

#### Step 4: Configure Nginx
Create `/etc/nginx/sites-available/portfolio`:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Step 5: Setup HTTPS
```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate
certbot certonly --nginx -d yourdomain.com

# Update Nginx config with SSL
certbot install --nginx
```

**Cost**: Starting from $3.50/month for basic server

---

## 🔐 Security Checklist

### Before Going Live

- [ ] Remove API keys from code
- [ ] Add environment variables for secrets
- [ ] Enable HTTPS/SSL
- [ ] Update robots.txt for SEO
- [ ] Add security headers
  ```nginx
  add_header X-Frame-Options "SAMEORIGIN";
  add_header X-Content-Type-Options "nosniff";
  add_header X-XSS-Protection "1; mode=block";
  ```
- [ ] Implement Content Security Policy
- [ ] Regular dependency updates: `npm audit`

### Environment Variables Never Commit
```env
API_KEYS=xxx
DATABASE_URL=xxx
GITHUB_TOKEN=xxx
```

## 📊 Monitor & Maintain

### Setup Analytics

#### Google Analytics
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your tracking ID
3. Add to `.env`: `VITE_GA_ID=your_id`
4. Implement in `App.tsx`:
```typescript
import { useEffect } from 'react';

export function GoogleAnalytics() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
  }, []);
}
```

### Uptime Monitoring

Use services like:
- **Uptimerobot** (free tier)
- **Statuspage.io** (status dashboard)
- **New Relic** (performance monitoring)

### Regular Backups
```bash
# Automated backup script
#!/bin/bash
tar -czf ~/backups/portfolio-$(date +%Y%m%d).tar.gz /path/to/portfolio
```

## 🚀 Continuous Deployment

### GitHub Actions Auto-Deploy

Create `.github/workflows/deploy-vercel.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## 🎯 Performance Optimization

### Image Optimization
```typescript
// Use image optimization services
import { Image } from '@unpic/react';

<Image src="your-image.jpg" alt="description" />
```

### Code Splitting
```typescript
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./components/Projects'));

<Suspense fallback={<Loading />}>
  <Projects />
</Suspense>
```

### Caching Headers
```nginx
# Cache static assets for 1 year
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Don't cache HTML
location ~ \.html$ {
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

## 📞 Support & Troubleshooting

### Common Issues

**Issue**: Deployment fails with "npm not found"
```bash
# Solution: Ensure Node 18+ and npm installed
node --version
npm --version
```

**Issue**: Routes not working on custom domain
```nginx
# Solution: Add fallback to index.html
try_files $uri $uri/ /index.html;
```

**Issue**: Animations not smooth
- Check GPU acceleration in DevTools
- Reduce animation complexity
- Use `will-change: transform`

## 📞 Getting Help

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Guide](https://pages.github.com)
- [Framer Motion Performance](https://www.framer.com/motion/performance/)

---

**You're ready to go live! 🎉**

For questions or issues, check the relevant platform's documentation or reach out to community forums.
