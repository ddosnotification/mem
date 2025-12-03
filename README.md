# 🔥 PODPEROS - Modern Snus Vending Website

**Pod perami. Nad ostatnými.** *(Under lips. Above others.)*

A cutting-edge, fully responsive website for Podperos - Slovakia's premier nicotine pouch vending machine company. Built with modern web technologies, stunning animations, and optimized for both mobile and desktop experiences.

---

## 🎨 Features

### Design & Branding
- **Modern Red/Pink Theme**: Eye-catching gradient color scheme (#ff0080, #ff6b9d)
- **Lips Visual Branding**: Creative SVG lips with nicotine pouch visualization
- **Clean Hero Section**: Simple background with modern wide fonts (Bebas Neue, Montserrat, Oswald)
- **Funny & Trendy**: Youth-oriented, edgy aesthetic perfect for the modern consumer

### Technical Features
- ✅ **100% Responsive**: Perfect on all devices (mobile, tablet, desktop)
- ⚡ **Super Fast Loading**: Optimized assets and lazy loading
- 🎭 **Advanced Animations**: 
  - AOS (Animate On Scroll)
  - GSAP with ScrollTrigger
  - Particles.js for background effects
  - Custom CSS animations
- 🌍 **Slovak Language**: Complete localization
- ♿ **Accessible**: WCAG compliant with skip links and keyboard navigation
- 🔒 **Age Verification**: Built-in 18+ age gate with localStorage

### Sections
1. **Hero Section** - Clean, impactful first impression with animated lips visual
2. **About** - Clear explanation of Podperos mission
3. **Products** - Showcase of nicotine pouches (Strong, Medium, Light) and vapes
4. **How It Works** - 3-step process explanation
5. **Locations** - Vending machine locations across Slovakia
6. **Contact** - Contact form and social links
7. **Footer** - Newsletter signup, links, and legal info

---

## 🚀 Quick Start

### Option 1: Direct Browser
Simply open `index.html` in any modern browser:
```bash
open index.html
# or
double-click index.html
```

### Option 2: Local Server (Recommended)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

---

## 📁 Project Structure

```
podperos/
├── index.html          # Main HTML file
├── styles.css          # All styles (2096 lines of pure CSS magic)
├── script.js           # Interactive JavaScript with animations
├── images/             # Images folder
│   └── logo.png        # Company logo (add your own)
└── README.md          # This file
```

---

## 🎨 Branding & Design Choices

### Color Palette
```css
--primary-red: #ff0080;     /* Hot pink/red for energy */
--primary-pink: #ff6b9d;    /* Lighter pink for accents */
--dark-red: #d4006d;        /* Dark red for depth */
--accent-purple: #8b5cf6;   /* Purple for variety */
--bg-dark: #0a0a0f;         /* Dark background */
```

### Typography
- **Display Font**: Bebas Neue (Hero titles, section headers)
- **Secondary Font**: Oswald (Buttons, navigation)
- **Body Font**: Montserrat (All body text)

### Key Visual Elements
1. **Lips SVG**: Custom-designed lips with gradient fill showing pouch placement
2. **Floating Product Cans**: 3D-styled cans with brand names (VELO, ZYN, PABLO)
3. **Gradient Overlays**: Subtle radial gradients for depth
4. **Particle Effects**: Interactive background particles

---

## 🔧 Customization Guide

### Change Logo
Replace `/images/logo.png` with your own logo. Recommended specs:
- Format: PNG with transparency
- Dimensions: 200x80px (or proportional)
- File size: < 50KB

### Update Colors
Edit CSS variables in `styles.css` (lines 30-40):
```css
:root {
    --primary-red: #YOUR_COLOR;
    --primary-pink: #YOUR_COLOR;
    /* ... */
}
```

### Add New Locations
Edit `index.html` in the Locations section, duplicate a `.location-card` block:
```html
<div class="location-card" data-aos="fade-up" data-aos-delay="700">
    <div class="location-icon">
        <i class="fas fa-map-marker-alt"></i>
    </div>
    <h3 class="location-name">NEW CITY - LOCATION</h3>
    <p class="location-address">Street address here</p>
    <span class="location-status active">AKTÍVNY</span>
    <div class="location-hours">
        <i class="fas fa-clock"></i>
        <span>24/7 Nonstop</span>
    </div>
</div>
```

### Modify Products
Edit product cards in `index.html` (Products section). Each card includes:
- Product name
- Strength level
- Description
- Flavors (badges)
- Brand tags

---

## 📱 Mobile Optimization

The site is fully responsive with breakpoints at:
- **1024px**: Tablet landscape
- **768px**: Tablet portrait / Mobile landscape
- **480px**: Mobile portrait

Mobile-specific features:
- Hamburger menu navigation
- Touch-optimized buttons
- Adjusted font sizes
- Simplified animations
- Optimized image sizes

---

## 🎭 Animation Libraries Used

### AOS (Animate On Scroll)
```html
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

### GSAP + ScrollTrigger
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

### Particles.js
```html
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```

### Font Awesome Icons
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

---

## 🌐 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+
- ⚠️ Internet Explorer: Not supported (use modern browser)

---

## ⚡ Performance Tips

1. **Optimize Images**: Compress all images before deploying
2. **Enable Gzip**: Configure server to compress HTML/CSS/JS
3. **Use CDN**: Consider using a CDN for faster global delivery
4. **Lazy Loading**: Already implemented for images
5. **Minify**: Minify CSS and JS for production

---

## 🔒 Legal & Compliance

### Age Verification
- Built-in 18+ age gate (localStorage based)
- Warning messages throughout
- Footer disclaimer

### GDPR Compliance
- Add privacy policy page
- Cookie consent banner (if using analytics)
- Contact form data handling disclosure

### Content Warnings
```
⚠️ Nikotín je návyková látka. Len pre dospelých 18+
```

---

## 🎯 Marketing Integration

### Social Media
Update social links in footer:
```html
<a href="https://facebook.com/yourpage" class="social-link">...</a>
<a href="https://instagram.com/yourpage" class="social-link">...</a>
```

### Analytics
Add Google Analytics or similar:
```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
```

### Email Marketing
Newsletter form ready - integrate with:
- Mailchimp
- Sendinblue
- Custom API

---

## 🐛 Troubleshooting

### Logo Not Showing
1. Make sure `logo.png` exists in `/images/` folder
2. Check browser console for 404 errors
3. Fallback text logo will display if image fails

### Animations Not Working
1. Check browser console for JavaScript errors
2. Ensure all CDN links are loading (check Network tab)
3. Clear browser cache

### Mobile Menu Not Opening
1. Check if JavaScript is enabled
2. Look for console errors
3. Try different browser

---

## 📈 SEO Optimization

### Meta Tags
Already included:
```html
<meta name="description" content="...">
<title>Podperos - Pod perami. Nad ostatnými.</title>
```

### Recommended Additions
1. Open Graph tags for social sharing
2. Twitter Card meta tags
3. JSON-LD structured data
4. Sitemap.xml
5. Robots.txt

---

## 🚀 Deployment

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/podperos.git
git push -u origin main
```

Then enable GitHub Pages in repository settings.

### Netlify
1. Drag & drop project folder to Netlify
2. Or connect Git repository
3. Deploy automatically

### Vercel
```bash
npm i -g vercel
vercel
```

---

## 🎨 Design Inspiration

This design was inspired by:
- Modern nicotine pouch brand websites (VELO, ZYN, Nordic Spirit)
- Vending machine interfaces
- Youth-oriented lifestyle brands
- Apple's clean design philosophy
- Gaming industry's bold aesthetics

---

## 📝 Credits

### Fonts
- Bebas Neue by Ryoichi Tsunekawa
- Montserrat by Julieta Ulanovsky
- Oswald by Vernon Adams

### Icons
- Font Awesome 6.4.0

### Animation Libraries
- AOS by Michał Sajnóg
- GSAP by GreenSock
- Particles.js by Vincent Garreau

---

## 📄 License

This project is created for Podperos company. All rights reserved.

For commercial use or licensing inquiries: **info@podperos.sk**

---

## 🤝 Contributing

Want to improve the website? 

1. Report bugs via issues
2. Suggest features
3. Submit pull requests
4. Contact: info@podperos.sk

---

## 📞 Contact

**Podperos**
- 📧 Email: info@podperos.sk
- 📱 Phone: +421 900 123 456
- 📸 Instagram: [@podperos](https://instagram.com/podperos)
- 🌐 Website: www.podperos.sk

---

## 🎉 Easter Eggs

Try these hidden features:
1. **Konami Code**: ↑ ↑ ↓ ↓ ← → ← → B A
2. Click on the lips visual in hero section
3. Click on floating product cans
4. Check browser console for messages

---

**Built with ❤️ and 💋 for Podperos**

*Pod perami. Nad ostatnými.*
