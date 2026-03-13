# 🎨 Premium Portfolio - Quick Reference

## Color Reference Card

```
PRIMARY COLORS:
├─ Background: #0F0F12
├─ Surface: rgba(255, 255, 255, 0.04)
├─ Accent Purple: #6C5DD3
├─ Accent Blue: #3B82F6
├─ Text Primary: #EAEAEA
└─ Text Secondary: #A0A0A0

GRADIENTS:
├─ Primary Button: from-purple-600 to-blue-600
├─ Hover Glow: from-purple-600/30 via-blue-500/20 to-purple-600/30
├─ Card Background: from-slate-800/60 to-slate-900/60
└─ Scrollbar: from-purple-600 to-blue-600
```

## Component Class Patterns

### Cards
```tsx
className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-purple-500/50 rounded-lg backdrop-blur-sm transition-all p-6"
```

### Accent Text
```tsx
className="text-purple-400 group-hover:text-purple-300 transition-colors"
```

### Hover Effects
```tsx
whileHover={{ y: -5, scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Buttons
```tsx
className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold transition-all shadow-lg shadow-purple-600/30"
```

## Animation Snippets

### Stagger Container
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
>
```

### Icon Hover
```tsx
<motion.div
  whileHover={{ scale: 1.2, rotate: 10 }}
  className="text-purple-400"
>
  {icon}
</motion.div>
```

### Glow Effect
```tsx
<motion.div
  className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-blue-500/50 rounded-lg blur-xl"
  animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
  transition={{ duration: 4, repeat: Infinity }}
/>
```

## Project Structure

```
rohith-saravanakumar-portfolio/
├── components/
│   ├── Hero.tsx           # Landing section
│   ├── About.tsx          # Bio section
│   ├── Skills.tsx         # Tech stack
│   ├── Projects.tsx       # Portfolio items
│   ├── Education.tsx      # Timeline
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── context/
│   └── ThemeContext.tsx   # Theme management
├── constants.tsx          # Data & constants
├── types.ts              # TypeScript types
├── App.tsx               # Main component
├── index.html            # HTML + styles
├── index.tsx             # React entry
├── DESIGN_SYSTEM.md      # Design documentation
├── DEPLOYMENT.md         # Deployment guide
└── package.json          # Dependencies
```

## Key Files & Their Purpose

| File | Purpose | Key Content |
|------|---------|------------|
| `index.html` | HTML + Global Styles | Meta tags, colors, animations |
| `components/Hero.tsx` | Landing section | Background orbs, name, CTA |
| `components/About.tsx` | Bio + principles | Text content, principles box |
| `components/Skills.tsx` | Tech stack | Icons, skill categories |
| `components/Projects.tsx` | Portfolio items | Problem/solution structure |
| `constants.tsx` | Data & config | Project data, skills list |
| `DESIGN_SYSTEM.md` | Design reference | Colors, patterns, guidelines |
| `DEPLOYMENT.md` | Deployment steps | Hosting instructions |

## Common Tasks

### Change Primary Color
1. Update `index.html` CSS:
   ```css
   background: linear-gradient(135deg, #YOUR_COLOR 0%, ...);
   ```
2. Update component classes:
   ```tsx
   from-YOUR_COLOR-600 to-blue-600
   ```
3. Search/replace all `purple-` with `YOUR_COLOR-`

### Add New Project
1. Open `constants.tsx`
2. Add to `PROJECTS` array:
   ```typescript
   {
     id: 'project-id',
     title: 'Project Title',
     problem: 'Problem statement',
     solution: 'How you solved it',
     techStack: ['Tech1', 'Tech2'],
     deployment: 'Deployment info'
   }
   ```

### Update Contact Info
1. Open `components/Contact.tsx`
2. Find `contactItems` array
3. Update URLs and email addresses

### Add Animation to Element
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install Framer Motion (already done)
npm install framer-motion

# Check for TypeScript errors
npx tsc --noEmit

# Check for unused dependencies
npm ls
```

## Browser DevTools Tips

### Debug Animations
1. Open DevTools → Performance
2. Record animation
3. Check FPS (should be 60+)
4. Look for jank/stutters

### Check Colors
```javascript
// In console, get computed colors
getComputedStyle(element).backgroundColor
```

### Test Responsive
1. DevTools → Toggle device toolbar
2. Test breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop)

## Performance Checklist

- [ ] Animations use `transform` only
- [ ] No layout thrashing
- [ ] Images optimized
- [ ] Lazy load where possible
- [ ] Lighthouse score > 90
- [ ] Mobile < 3s load time
- [ ] No console errors

## Accessibility Tips

- Use semantic HTML (`<section>`, `<nav>`, `<main>`)
- Add `alt` text to images
- Ensure 4.5:1 color contrast ratio
- Test with keyboard navigation
- Test with screen reader

## SEO Essentials

- Update meta description in `index.html`
- Add Open Graph tags
- Create `sitemap.xml`
- Add `robots.txt`
- Implement structured data (JSON-LD)

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/component-name

# Commit changes
git add .
git commit -m "feat: add component description"

# Push and create PR
git push origin feature/component-name

# Merge after review
git checkout main
git merge feature/component-name
git push origin main
```

## Useful Links

- **React Docs**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com
- **Lucide Icons**: https://lucide.dev
- **Vite**: https://vitejs.dev
- **TypeScript**: https://www.typescriptlang.org

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open DevTools | F12 |
| Device toolbar | Ctrl+Shift+M |
| Console | Ctrl+Shift+J |
| Network tab | Ctrl+Shift+E |
| Performance tab | Ctrl+Shift+I → Perf |

## 🎯 Next Steps

1. ✅ Review color palette and design
2. ✅ Update all content sections
3. ✅ Test on mobile devices
4. ✅ Check animation smoothness
5. ✅ Run Lighthouse audit
6. ✅ Deploy to Vercel
7. ✅ Add custom domain
8. ✅ Setup analytics
9. ✅ Monitor uptime
10. ✅ Share your portfolio!

## 💡 Pro Tips

- **Animate scale, not size** (better performance)
- **Use `whileInView`** for scroll animations
- **Keep animations under 0.8s** (feels responsive)
- **Test on actual phones** (not just DevTools)
- **Profile with Lighthouse** before deploying
- **Monitor Core Web Vitals** after deployment
- **Use CSS transforms** for animations (GPU accelerated)

---

**Happy coding! 🚀 If you need help, check DESIGN_SYSTEM.md and DEPLOYMENT.md**
