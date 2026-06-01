# Vercel + Lovable Dual Deployment Setup

## Overview

This setup enables deployment on **both Vercel and Lovable** from a single GitHub repository:

- **Lovable Preview**: Continues to work as before (grannysrvroute.lovable.app)
- **Vercel Production**: Automatically deploys from main branch (grannysroute.vercel.app)
- **GitHub**: Single source of truth
- **Cloudflare Configuration**: Ignored by Vercel (preserved in repo for future use)

---

## Architecture

```
grannysroute-create/grannyswebsite (GitHub)
           ↓
    ┌──────┴──────┐
    ↓             ↓
Lovable        Vercel
Preview        Production
(lovable.app)  (vercel.app)
```

---

## Performance Optimizations Included

### ✅ CSS Animations (GPU-Accelerated)
- Flicker and drift animations use `transform` only
- Separated `opacity` changes for better performance
- Eliminates layout recalculations during animation

### ✅ QueryClient Configuration
- 5-minute stale time prevents unnecessary refetches
- 10-minute cache garbage collection
- Preloaded data stays fresh longer

### ✅ Component Optimization
- Static data extracted outside components
- Year calculation moved to module load
- Prevents unnecessary re-renders

---

## Deployment Configuration

### 1. Lovable Preview (No Changes Required)
Lovable.dev continues to work with its own configuration.
The environment variable detection preserves this behavior.

**Setup:**
- No action needed - existing deployments continue
- Lovable preview remains at grannysrvroute.lovable.app
- Lovable still uses `@lovable.dev/vite-tanstack-config`

### 2. Vercel Production Deployment

#### Step 1: Connect GitHub Repository
1. Go to https://vercel.com/new
2. Select "grannysroute-create/grannyswebsite" repository
3. Import project

#### Step 2: Configure Build Settings
- **Framework Preset**: Other
- **Build Command**: `cd grannysrvroute-main && npm run build`
- **Output Directory**: `grannysrvroute-main/dist`
- **Install Command**: `npm install`

#### Step 3: Environment Variables (Vercel Dashboard)
No manual environment variables needed - Vercel auto-detects:
- `VERCEL_ENV=production`
- `VERCEL_URL` (automatically set)
- `VERCEL_PROJECT_ID` (automatically set)

#### Step 4: Deploy
- Connect to main branch
- Vercel automatically deploys on push
- Preview deployments for pull requests

---

## Environment Detection

### Base URL Resolution (in order of precedence)

1. **SITE_URL** environment variable (if explicitly set)
2. **Vercel Production** → `https://grannysroute.vercel.app`
3. **Vercel Preview** → `https://{VERCEL_URL}`
4. **Lovable Build** → `https://grannysrvroute.lovable.app`
5. **Development** → `http://localhost:5173`

### Used For:
- Sitemap generation (`/sitemap.xml`)
- Schema.org metadata
- Open Graph URLs
- SEO canonical URLs

---

## File Changes Summary

### New Files (Vercel Configuration)
1. `vercel.json` - Vercel build & deployment configuration
2. `grannysrvroute-main/src/lib/base-url.ts` - Environment detection

### Modified Files (Vercel-Compatible)
1. `grannysrvroute-main/src/routes/sitemap[.]xml.ts` - Uses dynamic BASE_URL
2. Performance optimization files from perf branch

### Unchanged (Still Works)
- `grannysrvroute-main/vite.config.ts` - Works with Lovable's config wrapper
- `grannysrvroute-main/wrangler.jsonc` - Cloudflare workers (ignored by Vercel)
- `grannysrvroute-main/package.json` - All dependencies preserved
- Lovable preview environment - Fully compatible

---

## Verification Checklist

### Before Merging PR:
- [x] `npm run build` succeeds locally
- [x] `npm run lint` shows no errors
- [x] Sitemap generates with correct BASE_URL
- [x] Performance optimizations applied (3 commits in perf branch)

### After Vercel Connect:
- [ ] Vercel build succeeds
- [ ] Production URL deployed
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Schema.org metadata correct
- [ ] Lovable preview still working (unchanged)

### Testing Vercel Deployment:
```bash
# Test build locally
cd grannysrvroute-main
npm run build
npm run preview

# Should see:
# - Optimized CSS animations
# - Dynamic BASE_URL (http://localhost:5173 in dev)
# - All pages loading correctly
```

---

## DNS & Domain Setup (Future)

When ready to move grannysroute.com to Vercel:

### Option 1: Direct Vercel Hosting
```
grannysroute.com → Vercel nameservers
```

### Option 2: Keep Cloudflare (CDN Layer)
```
grannysroute.com → Cloudflare → Vercel
```
(Provides additional caching/DDoS protection)
*Note: Cloudflare config in repo can be used if needed later*

---

## Rollback / Troubleshooting

### Issue: Lovable preview broken
**Solution**: Lovable environment auto-detected - should not happen. Check `LOVABLE_BUILD` variable.

### Issue: Vercel sitemap shows wrong domain
**Solution**: Check Vercel environment variables → verify VERCEL_ENV and VERCEL_URL are set.

### Issue: Local development shows wrong BASE_URL
**Solution**: Set manually: `SITE_URL=http://localhost:5173 npm run dev`

---

## Performance Metrics

### Before Optimizations:
- Animations: CPU-intensive (scale + opacity + transform)
- Date calculation: Recomputed on every render
- Component data: Recreated on every render
- QueryClient: Refetches immediately on stale

### After Optimizations:
- Animations: GPU-accelerated (transform only)
- Date calculation: Computed once at module load
- Component data: Static constants
- QueryClient: 5-minute stale time prevents refetches

**Expected Impact**:
- 🚀 Smoother animations (60fps stable)
- ⚡ Faster initial render
- 📉 Reduced network requests
- 💾 Better memory efficiency

---

## Next Steps

1. ✅ Merge performance optimization branch (`perf/optimize-performance`)
2. ✅ Merge Vercel configuration
3. 🔄 Connect GitHub repository to Vercel
4. 🔄 Configure custom domain (when ready)
5. 🔄 Set up monitoring/alerts in Vercel dashboard

---

## Support & Questions

- **Lovable Preview Issues**: Contact Lovable.dev support
- **Vercel Deployment Issues**: Check https://vercel.com/docs
- **Repository/Build Issues**: Check GitHub Actions logs

