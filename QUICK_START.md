# 🚀 Quick Start Guide - Podperos Website

## Immediate Use

### 1. View the Website
Simply open `index.html` in your browser. That's it! No installation needed.

### 2. Test Locally
Run a local server (recommended):

```bash
# Python 3
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

## First Steps

### Add Your Logo
1. Put your `logo.png` or `logo.svg` in the `images/` folder
2. It's already configured to display automatically
3. Recommended size: 200x80px at 2x resolution

### Update Contact Info
Edit `index.html` (around line 537-558):
- Change email: `info@podperos.sk` → your email
- Change phone: `+421 900 123 456` → your phone
- Change Instagram: `@podperos` → your handle

### Add Your Locations
Edit `index.html` (lines 459-509) to add real vending machine locations:
```html
<div class="location-item">
    <div class="location-icon">
        <i class="fas fa-map-marker-alt"></i>
    </div>
    <div class="location-info">
        <h4>Your Location Name</h4>
        <p>Your Address</p>
        <span class="location-status active">Aktívny</span>
    </div>
</div>
```

## Customization Priority List

### Must Change
1. ✅ Contact email & phone (in Contact section)
2. ✅ Locations (add your actual vending machine locations)
3. ✅ Social media links (footer & contact)

### Should Change
4. Logo image (add yours to `/images/`)
5. Product details (if different from defaults)
6. Hero stats (adjust numbers to match reality)

### Nice to Have
7. Color scheme (edit CSS variables)
8. Add real product images
9. Integrate Google Maps
10. Add analytics tracking

## Deploy to Web

### Option 1: Netlify (Easiest)
1. Create account at netlify.com
2. Drag & drop the entire folder
3. Done! You get a free URL

### Option 2: GitHub Pages
1. Create GitHub repository
2. Push code
3. Enable GitHub Pages in settings
4. Access at `username.github.io/repo-name`

### Option 3: Traditional Hosting
1. Connect via FTP
2. Upload all files to `public_html` or `www`
3. Access via your domain

## Key Files

- **index.html** - Main website content
- **styles.css** - All styling and colors
- **script.js** - Interactive features
- **images/** - Logo and graphics

## Need Help?

1. Check README.md for full documentation
2. All code is commented in Slovak
3. Search "TODO" in code for customization points

## Testing Checklist

- [ ] Age verification works
- [ ] All navigation links work
- [ ] Contact form displays correctly
- [ ] Website looks good on mobile
- [ ] All animations work smoothly
- [ ] Logo displays correctly

## Performance Tips

- Keep images optimized (use TinyPNG.com)
- Don't add too many animations
- Test on mobile devices
- Check loading speed

---

**Ready to go live in less than 10 minutes!** 🚀

*Otázky? info@podperos.sk*
