# 🚀 Podperos Website - Deployment Guide

## Quick Deployment Options

### 1. 🎯 GitHub Pages (FREE)

**Steps:**
1. Create GitHub repository
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit - Podperos website"
git branch -M main
git remote add origin https://github.com/yourusername/podperos.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Scroll to "Pages"
   - Source: Deploy from branch
   - Branch: main, folder: / (root)
   - Save

4. Your site will be at: `https://yourusername.github.io/podperos/`

### 2. ⚡ Netlify (FREE)

**Drag & Drop Method:**
1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up/Login
3. Drag your project folder to deploy
4. Done! You get a URL like: `https://podperos-xyz.netlify.app`

**Git Method:**
1. Push code to GitHub
2. Connect Netlify to GitHub
3. Select repository
4. Deploy!

**Custom Domain:**
- Go to Domain Settings
- Add custom domain (e.g., podperos.sk)
- Update DNS records as instructed

### 3. 🔥 Vercel (FREE)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd /workspace
vercel
```

3. Follow prompts
4. Get instant URL!

### 4. 📦 Traditional Web Hosting

**For services like:**
- cPanel hosting
- Webhosting.sk
- Websupport.sk
- Any FTP hosting

**Steps:**
1. Connect via FTP:
   - Host: ftp.yourdomain.com
   - Username: your_username
   - Password: your_password

2. Upload files to `public_html` or `www` folder:
   - index.html
   - styles.css
   - script.js
   - README.md (optional)

3. Visit: `https://yourdomain.com`

## 🌐 Custom Domain Setup

### For podperos.sk:

#### DNS Settings (A Records):
```
Type: A
Name: @
Value: [Your hosting IP]
TTL: 3600

Type: A
Name: www
Value: [Your hosting IP]
TTL: 3600
```

#### For Netlify/Vercel (CNAME):
```
Type: CNAME
Name: www
Value: your-site.netlify.app
TTL: 3600
```

## 🔒 SSL Certificate (HTTPS)

### GitHub Pages:
- Automatic and free!
- Just enable "Enforce HTTPS" in settings

### Netlify/Vercel:
- Automatic SSL with Let's Encrypt
- Enabled by default

### Traditional Hosting:
1. Get free SSL from [Let's Encrypt](https://letsencrypt.org/)
2. Or use cPanel "AutoSSL"
3. Or purchase SSL certificate

## ⚙️ Pre-Deployment Checklist

- [ ] Test age verification modal
- [ ] Check all links work
- [ ] Verify contact form submission
- [ ] Test on mobile devices
- [ ] Check in different browsers
- [ ] Optimize images (if added)
- [ ] Update contact information
- [ ] Add real location addresses
- [ ] Test newsletter signup
- [ ] Verify social media links
- [ ] Check console for errors
- [ ] Test responsive design

## 📊 Analytics Setup (Optional)

### Google Analytics:
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID (e.g., G-XXXXXXXXXX)
3. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔧 Performance Optimization

### Before Deployment:

1. **Minify CSS/JS** (optional):
```bash
# Using online tools or:
npm install -g clean-css-cli uglify-js

cleancss styles.css -o styles.min.css
uglifyjs script.js -o script.min.js
```

2. **Optimize Images**:
   - Use WebP format
   - Compress with TinyPNG
   - Use appropriate sizes

3. **Enable Caching**:
Add `.htaccess` for Apache:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType text/javascript "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

## 📱 Testing After Deployment

### Test These:
1. **Age Verification**: First visit should show modal
2. **Navigation**: All menu links work
3. **Forms**: Contact and newsletter submit
4. **Animations**: AOS and particles load
5. **Mobile**: Hamburger menu works
6. **External Links**: CDNs load (fonts, icons)

### Tools to Use:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- Browser DevTools (F12)

## 🔄 Continuous Deployment

### With GitHub + Netlify:
1. Connect repository to Netlify
2. Every `git push` auto-deploys
3. Preview deployments for branches
4. Rollback if needed

### With GitHub + Vercel:
1. Connect to Vercel
2. Auto-deploy on push
3. Preview URLs for PRs

## 🆘 Troubleshooting

### Site Not Loading:
- Check DNS propagation (can take 24-48h)
- Verify files uploaded correctly
- Check file permissions (644 for files, 755 for folders)

### CSS/JS Not Working:
- Check file paths (case-sensitive on Linux)
- Verify CDN links work
- Clear browser cache

### Age Modal Not Working:
- Check JavaScript console
- Verify script.js loaded
- Test in incognito mode

## 📝 Post-Deployment Tasks

1. **Submit to Search Engines**:
   - [Google Search Console](https://search.google.com/search-console)
   - [Bing Webmaster](https://www.bing.com/webmasters)

2. **Create Sitemap**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://podperos.sk/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

3. **Setup robots.txt**:
```
User-agent: *
Allow: /

Sitemap: https://podperos.sk/sitemap.xml
```

4. **Social Media Cards**:
Add to `<head>`:
```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://podperos.sk/">
<meta property="og:title" content="Podperos - Pod perami. Nad ostatnými.">
<meta property="og:description" content="Moderné nikotínové vrecúška z automatu">
<meta property="og:image" content="https://podperos.sk/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://podperos.sk/">
<meta property="twitter:title" content="Podperos - Pod perami. Nad ostatnými.">
<meta property="twitter:description" content="Moderné nikotínové vrecúška z automatu">
<meta property="twitter:image" content="https://podperos.sk/og-image.jpg">
```

## 💰 Cost Estimates

### Free Options:
- GitHub Pages: $0
- Netlify: $0 (100GB bandwidth/month)
- Vercel: $0 (100GB bandwidth/month)

### Paid Hosting:
- Basic Shared Hosting: €3-10/month
- .sk Domain: €10-20/year
- Premium Hosting: €10-50/month

## 🎯 Recommended: Netlify

**Why?**
- ✅ Easy to use
- ✅ Free SSL
- ✅ CDN included
- ✅ Continuous deployment
- ✅ Form handling
- ✅ Perfect for static sites

**Steps:**
1. Sign up at netlify.com
2. Drag project folder
3. Get instant URL
4. Add custom domain
5. Done!

## 📞 Support

If you need help with deployment:
- Check hosting provider docs
- Use hosting support chat
- Search for specific error messages
- Test locally first

---

**Ready to deploy?** Choose a method above and go live! 🚀

**POD PERAMI. NAD OSTATNÝMI.** 💋
