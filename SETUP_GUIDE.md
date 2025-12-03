# 🚀 PODPEROS - Setup & Launch Guide

Quick guide to get your Podperos website up and running in minutes!

---

## ⚡ Quick Launch (3 Easy Steps)

### Step 1: Add Your Logo
Replace the placeholder logo with your actual logo:

1. Save your logo as `logo.png` in the `/images/` folder
2. Recommended size: 200x80px (or maintain aspect ratio)
3. Format: PNG with transparent background

**If you don't have a logo yet:**
- The website will show a text-based logo automatically
- Or use the provided SVG logo placeholder

### Step 2: Open the Website
Double-click `index.html` or run a local server:

```bash
# Option 1: Direct open
open index.html

# Option 2: Python server
python -m http.server 8000
# Then visit: http://localhost:8000

# Option 3: PHP server
php -S localhost:8000

# Option 4: Node.js
npx http-server
```

### Step 3: Customize Content
Edit `index.html` to update:
- Company contact information
- Location addresses
- Product details
- Social media links

---

## 🎨 Customization Checklist

### Essential Updates
- [ ] Replace logo in `/images/logo.png`
- [ ] Update email: `info@podperos.sk`
- [ ] Update phone: `+421 900 123 456`
- [ ] Update Instagram: `@podperos`
- [ ] Add real vending machine locations
- [ ] Update company address

### Optional Enhancements
- [ ] Add Google Analytics tracking code
- [ ] Set up contact form backend
- [ ] Connect newsletter to email service
- [ ] Add more product images
- [ ] Create additional pages (About, FAQ, etc.)

---

## 📍 Update Locations

Find this section in `index.html` (around line 450):

```html
<div class="location-card" data-aos="fade-up" data-aos-delay="100">
    <div class="location-icon">
        <i class="fas fa-map-marker-alt"></i>
    </div>
    <h3 class="location-name">YOUR CITY - LOCATION NAME</h3>
    <p class="location-address">Your Street Address</p>
    <span class="location-status active">AKTÍVNY</span>
    <div class="location-hours">
        <i class="fas fa-clock"></i>
        <span>24/7 Nonstop</span>
    </div>
</div>
```

**Status Options:**
- `active` = Green (operational)
- `coming` = Orange (coming soon)

---

## 🎨 Change Colors

Edit `styles.css` (lines 30-40):

```css
:root {
    /* Change these to your brand colors */
    --primary-red: #ff0080;      /* Main brand color */
    --primary-pink: #ff6b9d;     /* Accent color */
    --dark-red: #d4006d;         /* Dark variant */
    --accent-purple: #8b5cf6;    /* Secondary accent */
}
```

---

## 📧 Connect Contact Form

### Option 1: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action in `index.html`:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Follow their integration guide
3. Update `script.js` contact form handler

### Option 3: Custom Backend
Create your own API endpoint and update the form submission handler in `script.js`.

---

## 📰 Setup Newsletter

### Mailchimp Integration
1. Create Mailchimp account
2. Create audience/list
3. Get embedded form code
4. Replace newsletter form in `index.html` footer

### Alternative Services
- **Sendinblue**: Free up to 300 emails/day
- **ConvertKit**: Great for creators
- **MailerLite**: User-friendly interface

---

## 🌐 SEO Optimization

### 1. Update Meta Tags
Edit `index.html` head section:

```html
<title>Podperos - Your Custom Title</title>
<meta name="description" content="Your custom description (150-160 characters)">
<meta name="keywords" content="snus, nicotine pouches, vending, slovakia">
```

### 2. Add Open Graph Tags
For better social media sharing:

```html
<meta property="og:title" content="Podperos - Pod perami. Nad ostatnými.">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yourdomain.com/images/share-image.jpg">
<meta property="og:url" content="https://yourdomain.com">
```

### 3. Create Sitemap
Generate sitemap.xml:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 📊 Add Analytics

### Google Analytics 4
1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add before `</head>`:

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

---

## 🚀 Deployment Options

### 1. GitHub Pages (FREE)
```bash
# Initialize git
git init
git add .
git commit -m "Initial Podperos website"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/podperos.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in Settings > Pages > Source: main branch
```

Your site: `https://yourusername.github.io/podperos/`

### 2. Netlify (FREE)
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop project folder
3. Done! (or connect Git repo for auto-deploy)

Custom domain setup available.

### 3. Vercel (FREE)
```bash
npm i -g vercel
vercel
```

Follow prompts, done in 2 minutes!

### 4. Traditional Hosting
Upload via FTP to:
- Webhost
- Hostinger  
- SiteGround
- Any hosting provider

---

## 🔒 SSL Certificate

All recommended hosting providers offer FREE SSL:
- **GitHub Pages**: Automatic
- **Netlify**: Automatic (Let's Encrypt)
- **Vercel**: Automatic
- **Traditional Hosting**: Enable in cPanel

---

## 📱 Test Your Website

### Cross-Browser Testing
- ✅ Chrome DevTools (F12)
- ✅ Firefox Developer Tools
- ✅ Safari Web Inspector
- ✅ Edge DevTools

### Mobile Testing
- Use Chrome DevTools Device Mode
- Test on real devices
- Use [BrowserStack](https://www.browserstack.com/) for comprehensive testing

### Performance Testing
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

---

## 🐛 Common Issues & Fixes

### Issue: Logo Not Showing
**Solution:**
1. Check file path: `/images/logo.png`
2. Check file name (case-sensitive)
3. Clear browser cache (Ctrl+Shift+R)

### Issue: Animations Not Working
**Solution:**
1. Check browser console (F12)
2. Ensure JavaScript is enabled
3. Check if CDN links are loading
4. Try incognito mode

### Issue: Contact Form Not Sending
**Solution:**
1. Form needs backend integration
2. Use Formspree or EmailJS
3. Check browser console for errors

### Issue: Mobile Menu Not Opening
**Solution:**
1. Check JavaScript errors in console
2. Clear cache and reload
3. Test in different browser

---

## 🔧 Advanced Customization

### Add New Sections
Copy existing section structure:
```html
<section class="your-section">
    <div class="container">
        <div class="section-header" data-aos="fade-up">
            <span class="section-tag">TAG</span>
            <h2 class="section-title">YOUR <span class="highlight">TITLE</span></h2>
            <p class="section-description">Your description</p>
        </div>
        <!-- Your content -->
    </div>
</section>
```

### Add More Products
Duplicate product card in Products section:
```html
<div class="product-card" data-aos="flip-left" data-aos-delay="100">
    <!-- Product content -->
</div>
```

### Change Fonts
Replace Google Fonts import in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

Update CSS variables:
```css
--font-display: 'YourFont', sans-serif;
```

---

## 📈 Marketing Tips

### Social Media Integration
1. Add Instagram feed widget
2. Include TikTok videos
3. Show Facebook reviews
4. Add social share buttons

### Content Updates
- Blog section for news
- Product showcases
- Customer testimonials
- Location opening announcements

### Email Marketing
- Welcome series for newsletter subscribers
- New product announcements
- Location updates
- Special offers

---

## ✅ Pre-Launch Checklist

Before going live:

- [ ] All content reviewed and proofread
- [ ] Logo added and displays correctly
- [ ] Contact information updated
- [ ] All links tested (internal and external)
- [ ] Forms tested and working
- [ ] Mobile responsive check
- [ ] Cross-browser tested
- [ ] SSL certificate active
- [ ] Google Analytics installed
- [ ] Sitemap created
- [ ] robots.txt created
- [ ] 404 page created
- [ ] Privacy policy added
- [ ] Legal disclaimers added
- [ ] Age verification working
- [ ] Social media links active
- [ ] Newsletter signup working

---

## 🎉 Post-Launch

### Week 1
- Monitor analytics
- Check for errors
- Gather feedback
- Fix any bugs

### Month 1
- SEO optimization
- Content updates
- Social media promotion
- Email campaigns

### Ongoing
- Regular content updates
- New product additions
- Location expansions
- Performance monitoring

---

## 💡 Tips for Success

1. **Keep Content Fresh**: Update products and locations regularly
2. **Monitor Performance**: Check analytics weekly
3. **Engage Users**: Respond to inquiries quickly
4. **Mobile First**: Most users will visit on mobile
5. **Load Speed**: Optimize images and code
6. **SEO**: Update content for search engines
7. **Social Proof**: Add testimonials and reviews

---

## 📞 Need Help?

### Support Resources
- 📧 Email: info@podperos.sk
- 📱 Phone: +421 900 123 456
- 📸 Instagram: @podperos

### Documentation
- This guide
- README.md for technical details
- Inline code comments

---

## 🎊 You're Ready!

Your Podperos website is ready to launch! 🚀

**Next Steps:**
1. Complete customization checklist
2. Test everything thoroughly
3. Deploy to your chosen platform
4. Announce on social media
5. Start driving traffic!

---

**Pod perami. Nad ostatnými.** 💋

Good luck with your launch! 🔥
