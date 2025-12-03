# 🔥 PODPEROS - Moderná Webová Stránka pre Nikotínové Automaty

![Podperos Logo](https://img.shields.io/badge/PODPEROS-Pod%20perami.%20Nad%20ostatn%C3%BDmi.-ff0080?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSAzMCw2MCBRIDUwLDQwIDEwMCw0MCBRIDE1MCw0MCAxNzAsNjAiIGZpbGw9IiNmZjAwODAiLz48cGF0aCBkPSJNIDMwLDYwIFEgNTAsODUgMTAwLDg1IFEgMTUwLDg1IDE3MCw2MCIgZmlsbD0iI2ZmMDA4MCIvPjwvc3ZnPg==)

Stránka pre spoločnosť **Podperos** - poskytovateľa moderných nikotínových vrecúšok (snus) a vapes z automatov. Dizajn je moderný, zábavný a postavený na červeno-ružovej farebnej schéme s vizuálmi pier a nikotínových vrecúšok.

## 🎨 Vlastnosti Dizajnu

### Branding
- **Názov**: "Podperos" (Pod perami)
- **Slogan**: "Pod perami. Nad ostatnými."
- **Farebná schéma**: Červeno-ružová s fialovými akcentmi
- **Vizuálne prvky**: Pery, nikotínové vrecúška, moderné geometrické tvary

### Dizajnové Prvky
- ✨ **Úžasná hero sekcia** s animovanými perami a floating vrecúškami
- 🎭 **Particles.js efekty** pre dynamické pozadie
- 🌊 **Smooth scroll animácie** pomocou AOS library
- 💫 **Hover efekty** na všetkých interaktívnych prvkoch
- 📱 **Plne responzívny dizajn** pre mobily aj PC
- 🎨 **Gradientové pozadia** a tieňové efekty
- ⚡ **Rýchle animácie** s cubic-bezier easing
- 🖱️ **Cursor trail efekt** pre lepší UX

## 📁 Štruktúra Projektu

```
podperos/
├── index.html          # Hlavná HTML štruktúra
├── styles.css          # Všetky CSS štýly a animácie
├── script.js           # JavaScript logika a interaktivita
└── README.md           # Táto dokumentácia
```

## 🚀 Sekcie Webovej Stránky

### 1. **Age Verification Modal** 🔞
- Overenie veku pri prvej návšteve
- LocalStorage pamätanie verifikácie
- Moderný dizajn s varovaniami

### 2. **Navigation** 🧭
- Sticky navbar s scroll efektom
- Hamburger menu pre mobily
- Smooth scroll k sekciám
- Animované hover stavy

### 3. **Hero Section** 🌟
- Masívny nadpis s gradientom
- Particles.js pozadie
- Animované pery a vrecúška (floating)
- Štatistiky (24/7, 50+ príchutí, 10+ lokalít)
- CTA tlačidlá
- Scroll indikátor

### 4. **Features** ⚡
- 4 key features v grid layoute
- Ikony s gradientmi
- Hover lift efekty
- Responzívny layout

### 5. **Products** 🛍️
- 4 kategórie produktov:
  - Strong Pouches (20-50mg)
  - Medium Pouches (10-20mg)
  - Light Pouches (4-10mg)
  - Premium Vapes (limitka)
- Product badges (Top, Nové, Special)
- Príchute tagy
- Flip animácie pri zobrazení

### 6. **How To** 📖
- 3-step proces:
  1. Nájdi automat
  2. Vyber produkt
  3. Zaplať & užívaj
- Vizualizácia pier s vrecúškom
- Arrows medzi krokmi
- Animated lips SVG

### 7. **Locations** 📍
- Zoznam automatov po Slovensku
- Status badges (Aktívny/Čoskoro)
- Mapa placeholder
- Hover efekty na položkách

### 8. **Contact** 📧
- Kontaktný formulár
- Email, telefón, Instagram info
- Notifikácie pri odoslaní
- Responzívny grid layout

### 9. **Footer** 📄
- Brand info a sociálne siete
- Rýchle linky
- Newsletter form
- Právne informácie
- Copyright a varovania

## 🎯 Technológie

### Frontend
- **HTML5** - Sémantická štruktúra
- **CSS3** - Moderné vlastnosti (Grid, Flexbox, Custom Properties)
- **JavaScript (ES6+)** - Interaktivita a animácie

### Knižnice
- **[AOS](https://michalsnik.github.io/aos/)** (v2.3.1) - Animate On Scroll
- **[Particles.js](https://vincentgarreau.com/particles.js/)** (v2.0.0) - Particle efekty
- **[Font Awesome](https://fontawesome.com/)** (v6.4.0) - Ikony
- **[Google Fonts](https://fonts.google.com/)** - Poppins & Bebas Neue

## 💻 Inštalácia a Použitie

### Základné Použitie
1. Klonuj alebo stiahni projekt
2. Otvor `index.html` v prehliadači
3. Stránka je ready! 🎉

### Pre Vývoj
```bash
# Použite live server pre hot reload
# Napríklad VS Code Live Server extension
# Alebo Python simple server:
python -m http.server 8000

# Alebo Node.js http-server:
npx http-server
```

### Deployment
Stránka je statická a môže byť nasadená na:
- GitHub Pages
- Netlify
- Vercel
- Akýkoľvek web hosting

## 🎨 Prispôsobenie

### Farby
Zmeň CSS premenné v `:root`:
```css
:root {
    --primary-red: #ff0080;
    --primary-pink: #ff6b9d;
    --dark-red: #d4006d;
    --light-pink: #ffb3d9;
    --accent-purple: #8b5cf6;
}
```

### Obsah
- Upravuj text v `index.html`
- Pridaj nové sekcie kopírovaním existujúcich
- Zmeň obrázky a ikony

### Animácie
- Nastavenia AOS v `script.js`:
```javascript
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
});
```

## 📱 Responzívne Breakpointy

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ⚡ Výkonnostné Funkcie

- Lazy loading obrázkov
- Optimalizované animácie (GPU acceleration)
- Debounced scroll listeners
- Intersection Observer API
- Minimálne DOM manipulácie

## 🎭 Špeciálne Funkcie

### Easter Eggs 🥚
- **Konami Code**: ↑ ↑ ↓ ↓ ← → ← → B A
- **Cursor Trail**: Myš zanecháva ružovú stopu
- **Console Art**: Otvor developer console pre prekvapenie

### Interaktívne Prvky
- Click na pery pre pulse efekt
- Hover na produkty pre scale & rotate
- Parallax scroll na hero sekcii
- Typing efekt na subtitle
- Counter animácia pre štatistiky

## 🔒 Bezpečnosť a Compliance

- ✅ Age verification (18+)
- ✅ Varovania o nikotíne
- ✅ LocalStorage pre verifikáciu
- ⚠️ Upozornenie: "Nikotín je návyková látka"

## 🌐 Prehliadače

Testované a podporované:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 SEO Optimalizácia

- Meta tags pre description
- Semantic HTML5 elementy
- Proper heading hierarchy (h1, h2, h3)
- Alt texty pre obrázky (ak sú použité)
- Fast loading times
- Mobile-first approach

## 🎓 Učebné Zdroje

Táto stránka demonštruje:
- Modern CSS Grid & Flexbox
- Advanced CSS animations
- JavaScript DOM manipulation
- Intersection Observer API
- LocalStorage API
- Custom scrollbar styling
- SVG animations
- Responsive design patterns
- Performance optimization

## 📝 Budúce Vylepšenia

- [ ] Integrácia s backend API
- [ ] Real-time mapa automatov (Google Maps API)
- [ ] Online objednávkový systém
- [ ] Blog sekcia
- [ ] Multi-language support (SK/CZ/EN)
- [ ] Dark/Light mode toggle
- [ ] PWA (Progressive Web App)
- [ ] Product rating system
- [ ] Customer reviews
- [ ] Instagram feed integration

## 🤝 Prispievanie

Ak chceš prispieť k projektu:
1. Fork repository
2. Vytvor feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit zmeny (`git commit -m 'Add some AmazingFeature'`)
4. Push do branch (`git push origin feature/AmazingFeature`)
5. Otvor Pull Request

## 📄 Licencia

Tento projekt je vytvorený pre spoločnosť Podperos.
Všetky práva vyhradené © 2024 Podperos

## ⚠️ Disclaimer

**Tento web obsahuje informácie o nikotínových produktoch.**

Nikotín je vysoko návyková látka. Produkty sú určené výhradne pre dospelých používateľov tabakových výrobkov alebo nikotínu. Nie sú určené pre:
- Osoby mladšie ako 18 rokov
- Tehotné alebo dojčiace ženy
- Osoby s kardiovaskulárnymi ochoreniami
- Nefajčiarov

## 📞 Kontakt

- **Email**: info@podperos.sk
- **Telefón**: +421 900 123 456
- **Instagram**: [@podperos](https://instagram.com/podperos)
- **Web**: www.podperos.sk

---

<div align="center">

**POD PERAMI. NAD OSTATNÝMI.** 💋

Made with ❤️ and lots of ☕ in Slovakia

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>
