# 🚀 podperos - Quick Start Guide

## Getting Started in 3 Steps

### 1️⃣ Open the Website
Simply double-click on `index.html` or drag it into your web browser.

**Or** start a local server:
```bash
# Using Python (most common)
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

### 2️⃣ Customize Your Content

#### Update Company Information
Edit `index.html` and find these sections:

```html
<!-- Update email -->
<p>info@podperos.sk</p>

<!-- Update phone -->
<p>+421 XXX XXX XXX</p>

<!-- Add your locations -->
<div class="location-item">
    <h4>Bratislava - Centrum</h4>
    <p>Obchodná ulica 15</p>
</div>
```

#### Change Colors
Edit `styles.css` at the top:

```css
:root {
    --primary-red: #FF1744;      /* Change main red color */
    --primary-pink: #FF4081;     /* Change main pink color */
    --secondary-pink: #FF80AB;   /* Change accent pink */
}
```

#### Add Your Product Images
Replace the Unsplash URLs in `index.html`:

```html
<img src="YOUR-IMAGE-URL.jpg" alt="Product Name">
```

### 3️⃣ Deploy to the Web

#### Option A: Netlify (Easiest, Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag the entire folder to Netlify
3. Done! Your site is live

#### Option B: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site is live at `yourusername.github.io/podperos`

#### Option C: Traditional Hosting
1. Get hosting (cPanel, FTP access)
2. Upload all files via FTP/File Manager
3. Point your domain to the hosting
4. Done!

## 📁 File Structure

```
podperos/
├── index.html          ← Main website file
├── styles.css          ← All styling and colors
├── script.js           ← Animations and interactions
├── manifest.json       ← PWA configuration
├── README.md           ← Full documentation
├── FEATURES.md         ← Feature breakdown
├── QUICKSTART.md       ← This file!
└── .gitignore          ← Git ignore file
```

## ✏️ Common Customizations

### Change Logo/Brand Name
```html
<div class="logo">
    <span class="logo-text">pod<span class="accent">peros</span></span>
    <span class="logo-emoji">💋</span>  <!-- Change emoji here -->
</div>
```

### Edit Hero Section Text
```html
<h1 class="hero-title">
    <span class="title-line">Vždy po ruke,</span>
    <span class="title-line highlight">vždy pod peros</span>
</h1>
<p class="hero-subtitle">
    Your new subtitle text here...
</p>
```

### Add/Remove Products
Copy this block in the products section:

```html
<div class="product-card" data-aos="zoom-in" data-aos-delay="0">
    <div class="product-badge">HOT</div>
    <div class="product-image">
        <img src="YOUR-IMAGE.jpg" alt="Product Name">
    </div>
    <div class="product-info">
        <h3 class="product-name">Product Name</h3>
        <p class="product-desc">Product description</p>
        <div class="product-strength">
            <span class="strength-label">Sila:</span>
            <div class="strength-dots">
                <span class="dot active"></span>
                <span class="dot active"></span>
                <span class="dot active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        </div>
    </div>
</div>
```

### Change Animation Speed
Edit `script.js`:

```javascript
// Particles speed
speed: 2,  // Change this number (1-10)

// AOS duration
AOS.init({
    duration: 1000,  // Change milliseconds (500-2000)
});
```

### Enable Age Verification
In `script.js`, uncomment this line at the bottom:

```javascript
// Change this:
// checkAgeVerification();

// To this:
checkAgeVerification();
```

## 🎨 Brand Assets Needed

To make the site fully yours, prepare:

- [ ] High-quality product photos (at least 800x800px)
- [ ] Vending machine photos
- [ ] Logo (if different from text logo)
- [ ] Favicon (32x32px icon)
- [ ] Location addresses and coordinates
- [ ] Social media links (Instagram, Facebook, TikTok)
- [ ] Contact information (email, phone)
- [ ] Legal documents (terms, privacy policy)

## 📱 Testing Checklist

Before going live:

- [ ] Test on Chrome (desktop & mobile)
- [ ] Test on Safari (iPhone)
- [ ] Test on Firefox
- [ ] Test on Edge
- [ ] Check all links work
- [ ] Test contact form
- [ ] Verify phone numbers are correct
- [ ] Check all images load
- [ ] Test on slow internet (3G)
- [ ] Verify age restriction notice is visible
- [ ] Test navigation menu on mobile
- [ ] Check all buttons work
- [ ] Verify social media links

## 🐛 Troubleshooting

### Animations not working?
- Check if you have internet connection (CDN libraries)
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)

### Images not showing?
- Verify image URLs are correct
- Check file paths are relative
- Ensure images are in correct format (jpg, png, webp)

### Mobile menu not opening?
- Check JavaScript is enabled
- Clear browser cache
- Try a different browser

### Particles not appearing?
- Check internet connection (particles.js is loaded from CDN)
- Verify script.js is loaded correctly
- Check browser console for errors

## 💡 Pro Tips

1. **Images**: Use WebP format for smaller file sizes
2. **SEO**: Update meta tags in `<head>` section
3. **Speed**: Compress images before uploading (tinypng.com)
4. **Analytics**: Add Google Analytics code before `</body>`
5. **Forms**: Connect form to backend (FormSpree, Netlify Forms)
6. **Backup**: Always keep a backup of original files
7. **Updates**: Test changes on local version first

## 🆘 Need Help?

Common resources:
- HTML/CSS Questions: [MDN Web Docs](https://developer.mozilla.org)
- JavaScript Help: [JavaScript.info](https://javascript.info)
- Hosting: [Netlify Docs](https://docs.netlify.com)
- Image Optimization: [TinyPNG](https://tinypng.com)

## 📊 Performance Optimization

For better loading speeds:

1. **Compress Images**: Use TinyPNG or ImageOptim
2. **Minify CSS/JS**: Use online minifiers before production
3. **Enable Caching**: Add .htaccess rules (Apache)
4. **Use CDN**: For images and assets
5. **Lazy Load**: Add loading="lazy" to images

## 🔐 Security Notes

- Keep your hosting credentials safe
- Use HTTPS (SSL certificate)
- Don't commit sensitive data to GitHub
- Regularly update libraries
- Implement rate limiting on forms
- Add CAPTCHA to prevent spam

## 📈 Going Live Checklist

Final steps before launch:

- [ ] Buy domain name (podperos.sk)
- [ ] Set up hosting
- [ ] Install SSL certificate
- [ ] Upload all files
- [ ] Test everything again
- [ ] Set up email (info@podperos.sk)
- [ ] Connect social media accounts
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google
- [ ] Create Facebook page
- [ ] Create Instagram account
- [ ] Design social media graphics
- [ ] Plan content calendar
- [ ] Set up customer support
- [ ] Train staff on vending machines

---

## 🎉 You're Ready!

Your podperos website is now complete and ready to attract customers!

**Remember**: Always display age warnings (18+) and comply with Slovak regulations on nicotine product advertising.

**Need custom features?** Consider hiring a developer for:
- Backend integration
- Payment processing
- User accounts
- Mobile app
- Advanced analytics
- Custom animations

---

**Made with 💋 for podperos**

*Vždy po ruke, vždy pod peros!*
