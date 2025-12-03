# 🔥 PODPEROS - Modern Snus Vending Website

**Pod perami. Nad ostatnými.** 💋

A stunning, modern website for Slovakia's first nicotine pouch vending machine company. Built with pure HTML, CSS, and JavaScript with a focus on animations, responsive design, and user experience.

## 🎨 Design Features

### Branding
- **Primary Colors**: Red (#ff0080) and Pink (#ff6b9d) gradient theme
- **Typography**: Bebas Neue for headings, Poppins for body text
- **Visual Theme**: Lips and nicotine pouches representing "podperos" (under lips)
- **Modern & Trendy**: Smooth animations, particle effects, glowing elements

### Key Sections
1. **Hero Section** - Bold typography with animated product showcase
2. **Features** - 4 key benefits with hover effects
3. **Products** - 4 product categories (Strong, Medium, Light, Vapes)
4. **How To** - 3-step process explanation with visual aids
5. **Locations** - Interactive location list with map placeholder
6. **Contact** - Contact form and methods

## 🚀 Features

### Interactive Elements
- ✨ Particle.js background effects
- 🎭 AOS (Animate On Scroll) animations
- 💫 Custom hover effects and micro-interactions
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Age verification modal (18+)
- 🔥 Smooth scroll navigation
- 💋 Interactive lips visual
- 🎨 Gradient text effects
- ⚡ Ripple button effects
- 🌈 Easter egg (Konami code)

### Libraries Used
- **Particles.js** - Animated background particles
- **AOS** - Scroll animations
- **Font Awesome** - Icons
- **Google Fonts** - Bebas Neue & Poppins

## 📁 Project Structure

```
/workspace/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive JavaScript
├── images/
│   ├── logo.svg        # SVG logo
│   └── README.md       # Images documentation
└── README.md           # This file
```

## 🛠️ Setup & Installation

### Quick Start
1. Simply open `index.html` in any modern browser
2. No build process required - pure HTML/CSS/JS

### Local Development
```bash
# Option 1: Python simple server
python -m http.server 8000

# Option 2: PHP server
php -S localhost:8000

# Option 3: Node.js server
npx http-server
```

Then open `http://localhost:8000` in your browser.

## 🎯 Customization Guide

### Change Colors
Edit CSS variables in `styles.css` (lines 15-28):
```css
:root {
    --primary-red: #ff0080;
    --primary-pink: #ff6b9d;
    --dark-red: #d4006d;
    /* ... more colors */
}
```

### Add Logo
1. Place your logo in `images/logo.png` or `images/logo.svg`
2. Logo is already configured in the navigation
3. Recommended size: 200x80px (2x for retina)

### Update Content
All text content is in Slovak in `index.html`:
- Hero section: Lines 79-153
- Products: Lines 287-363
- Locations: Lines 459-521
- Contact: Lines 528-580

### Add Locations
Edit location items in `index.html` (lines 459-509):
```html
<div class="location-item">
    <div class="location-icon">
        <i class="fas fa-map-marker-alt"></i>
    </div>
    <div class="location-info">
        <h4>Your City - Location Name</h4>
        <p>Address details</p>
        <span class="location-status active">Aktívny</span>
    </div>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

All sections are fully optimized for mobile viewing with adjusted layouts.

## 🎨 Brand Guidelines

### Typography
- **Headings**: Bebas Neue (display font, all caps)
- **Body**: Poppins (clean, modern sans-serif)
- **Letter spacing**: 1-3px for headings

### Colors
- **Primary**: #ff0080 (Hot Pink/Red) - Main CTA, highlights
- **Secondary**: #ff6b9d (Light Pink) - Accents, hover states
- **Accent**: #8b5cf6 (Purple) - Special elements
- **Dark**: #0a0a0f - Background
- **Card**: #1a1a24 - Card backgrounds

### Imagery
- Focus on lips, nicotine pouches, modern gradients
- Use vibrant colors with glow effects
- SVG graphics for scalability

## 🔒 Age Verification

The website includes an 18+ age verification modal that:
- Appears on first visit
- Stores verification in localStorage
- Blocks users under 18
- Complies with nicotine product regulations

## ⚡ Performance

- Optimized animations with CSS transforms
- Lazy loading ready (can be enabled)
- Minimal dependencies (CDN loaded)
- Fast initial load time
- Smooth 60fps animations

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 SEO & Meta Tags

Meta tags included:
- Description
- Viewport for mobile
- Charset UTF-8
- Title: "Podperos - Tvoj Nový Spôsob"

## 🎁 Easter Eggs

Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A

## 📄 License & Usage

This website is custom-built for Podperos. All rights reserved.

**Warning**: Nikotín je návyková látka. Produkty sú určené výhradne pre dospelých 18+

## 🤝 Support

For questions or support:
- Email: info@podperos.sk
- Phone: +421 900 123 456
- Instagram: @podperos

## 🚀 Deployment

### Static Hosting (Recommended)
- **Netlify**: Drag & drop deployment
- **Vercel**: Connect GitHub repo
- **GitHub Pages**: Push to gh-pages branch
- **Firebase Hosting**: `firebase deploy`

### Traditional Hosting
Upload all files via FTP to your web server's public directory.

## 📊 Analytics

Consider adding:
- Google Analytics for tracking
- Facebook Pixel for ads
- Hotjar for user behavior

## 🔄 Future Enhancements

Potential additions:
- [ ] Online ordering system
- [ ] Real-time stock availability
- [ ] Interactive map with Google Maps API
- [ ] Customer accounts/loyalty program
- [ ] Blog section for news
- [ ] Multi-language support (English, Hungarian)

---

**Made with 💋 in Slovakia**

*Pod perami. Nad ostatnými.*
