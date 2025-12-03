# 🎨 Image Assets Guide - Podperos Website

## Overview
This guide explains how to replace placeholder images with real product photos and visuals for the Podperos website.

---

## 📁 Current Image Structure

```
/workspace/images/
├── logo.svg (placeholder - replace with real logo)
├── product-velo.svg (placeholder)
├── product-zyn.svg (placeholder)
├── product-pablo.svg (placeholder)
├── product-lyft.svg (placeholder)
└── README.md
```

---

## 🔄 How to Replace Images

### Step 1: Source High-Quality Images

#### **Recommended Sources:**

**Free Stock Photos:**
- [Unsplash](https://unsplash.com) - High-quality, free images
  - Search: "red lips", "vending machine", "minimalist design"
- [Pexels](https://pexels.com) - Free stock photos
  - Search: "modern vending", "pink aesthetic", "lips closeup"
- [Pixabay](https://pixabay.com) - Free images and videos
  - Search: "nicotine pouch", "can mockup", "product photography"

**AI Image Generation:**
- [DALL-E](https://openai.com/dall-e) - Generate custom visuals
  - Prompt: "Modern red and pink gradient nicotine pouch can, 3D render, professional product photography"
- [Midjourney](https://midjourney.com) - High-quality AI art
  - Prompt: "/imagine stylized lips logo, red pink gradient, modern minimalist"
- [Stable Diffusion](https://stability.ai) - Free AI image generation
  - Prompt: "product photography of nicotine pouch container, clean white background, studio lighting"

**Product Photography:**
- Official brand websites (VELO, ZYN, PABLO, LYFT)
- Amazon product listings (screenshot and crop)
- Google Images (ensure proper licensing)

---

### Step 2: Prepare Images

#### **Optimization Tools:**
- [TinyPNG](https://tinypng.com) - Compress PNG/JPG
- [Squoosh](https://squoosh.app) - Advanced image optimization
- [CloudConvert](https://cloudconvert.com) - Convert to WebP format

#### **Recommended Specifications:**

| Asset Type | Dimensions | Format | Max Size |
|-----------|-----------|--------|----------|
| Logo | 200x80px | PNG/SVG | 50KB |
| Product Cans | 400x560px | PNG | 100KB |
| Hero Images | 1920x1080px | JPG/WebP | 300KB |
| Product Cards | 400x400px | PNG | 80KB |
| Icons | 64x64px | PNG/SVG | 20KB |

---

### Step 3: Replace Placeholder Images

#### **Logo Replacement:**

**Current:** `images/logo.svg` (placeholder)

**To replace:**
1. Create/obtain your Podperos logo
2. Save as `logo.png` in `/workspace/images/`
3. Update HTML if needed:

```html
<img src="images/logo.png" alt="Podperos Logo" class="logo-image">
```

#### **Product Can Images:**

**Current placeholders:**
- `product-velo.svg`
- `product-zyn.svg`
- `product-pablo.svg`
- `product-lyft.svg`

**Replacement steps:**

1. Download/create high-quality product images
2. Save with same naming:
   - `product-velo.png` (VELO brand can)
   - `product-zyn.png` (ZYN brand can)
   - `product-pablo.png` (PABLO brand can)
   - `product-lyft.png` (LYFT brand can)

3. Update file extensions in HTML:

**Find in `index.html`:**
```html
<img src="images/product-velo.svg" alt="VELO Ice Cool" class="product-can-image">
```

**Replace with:**
```html
<img src="images/product-velo.png" alt="VELO Ice Cool" class="product-can-image">
```

---

### Step 4: Add Additional Visual Assets

#### **Recommended Additional Images:**

**Create these files in `/workspace/images/`:**

1. **`hero-lips.png`** - Stylized lips visual for hero section
   - 800x600px, transparent background
   - Red/pink gradient lips
   - Use in hero visual section

2. **`vending-machine.jpg`** - Real Podperos vending machine
   - 1200x800px
   - Add to locations section
   - Shows actual product placement

3. **`pouch-single.png`** - Single nicotine pouch close-up
   - 400x400px, white background
   - Use in "How To" section
   - Shows product under lip placement

4. **`brand-pattern.svg`** - Background pattern
   - Repeating lips/pouch pattern
   - Subtle, low opacity
   - Use as section backgrounds

---

## 🎨 Where Images Are Used

### Navigation (Logo)
```html
<!-- Line 46 in index.html -->
<div class="logo">
    <img src="images/logo.svg" alt="Podperos Logo" class="logo-image">
</div>
```

### Hero Section (Product Showcase)
```html
<!-- Lines 155-197 in index.html -->
<div class="product-showcase">
    <div class="showcase-item item-1">
        <img src="images/product-velo.svg" alt="VELO Ice Cool">
    </div>
    <!-- ... more products -->
</div>
```

### Products Section
```html
<!-- Lines 288-362 in index.html -->
<div class="product-card">
    <div class="product-image">
        <img src="images/product-velo.svg" alt="Strong Pouches">
    </div>
</div>
```

---

## 🚀 Quick Start: Add Real Images Now

### Option 1: Use AI Generation (Fastest)

**Generate with ChatGPT/DALL-E:**

1. Go to ChatGPT with DALL-E
2. Use these prompts:

```
"Create a modern logo for 'PODPEROS' with stylized red and pink lips, minimalist design, transparent background"

"Generate a 3D render of a modern nicotine pouch can with VELO branding, purple gradient, professional product photography, white background"

"Create a 3D render of ZYN nicotine pouch can, pink and red gradient, studio lighting, white background"

"Generate a sleek PABLO nicotine pouch can, blue gradient, modern minimalist design, white background"

"Create a LYFT nicotine pouch can, orange and pink gradient, premium look, white background"
```

3. Download generated images
4. Save to `/workspace/images/` with correct names
5. Replace `.svg` with `.png` in HTML

### Option 2: Download from Stock Sites

**Quick searches:**
1. Unsplash: "red lips minimal"
2. Pexels: "vending machine modern"
3. Google Images: "nicotine pouch can" (filter: labeled for reuse)

---

## ⚠️ Legal Considerations

### Copyright Notice
- **Product images**: Ensure you have rights to use brand logos (VELO, ZYN, etc.)
- **Stock photos**: Check license (commercial use allowed?)
- **AI-generated**: Usually free to use, check terms
- **Age restriction**: All visuals should comply with 18+ regulations

### Brand Guidelines
When using branded product images:
- Contact manufacturers for official assets
- Use authorized reseller product photos
- Consider generic/mockup alternatives
- Respect trademark laws

---

## 🎯 Pro Tips

### Creating Engaging Visuals

1. **Consistency**: All product images should have similar:
   - Background style (white/transparent)
   - Lighting setup
   - Angle/perspective
   - Resolution quality

2. **Branding**: Match Podperos color scheme:
   - Primary: #ff0080 (hot pink)
   - Secondary: #ff6b9d (light pink)
   - Accent: #8b5cf6 (purple)

3. **Animations**: Images have built-in CSS animations:
   - Floating effect
   - Hover scaling
   - Glow effects
   - Rotate animations

4. **Mobile**: Ensure images look good on small screens:
   - Test on phone (320px width)
   - Use responsive images
   - Optimize file sizes

---

## 📱 Responsive Images

### Implementing WebP with Fallback

Replace standard `<img>` tags with:

```html
<picture>
  <source srcset="images/product-velo.webp" type="image/webp">
  <source srcset="images/product-velo.png" type="image/png">
  <img src="images/product-velo.png" alt="VELO Ice Cool" class="product-can-image">
</picture>
```

### Lazy Loading

Add `loading="lazy"` to images below the fold:

```html
<img src="images/product-velo.png" alt="VELO Ice Cool" loading="lazy" class="product-can-image">
```

---

## 🔧 Troubleshooting

### Image Not Displaying?
1. Check file path: `/workspace/images/filename.png`
2. Verify file extension matches HTML reference
3. Check browser console for 404 errors
4. Clear browser cache (Ctrl+F5)

### Image Quality Issues?
1. Use higher resolution source
2. Compress without losing quality (TinyPNG)
3. Use PNG for transparency, JPG for photos
4. Consider WebP format for modern browsers

### Performance Problems?
1. Compress all images < 100KB
2. Use lazy loading for below-fold images
3. Implement WebP format
4. Use CDN for faster delivery

---

## 📞 Need Help?

If you need assistance finding or creating images:
1. Check the `/workspace/images/README.md`
2. Search this guide for specific image types
3. Use AI generation tools for quick mockups
4. Consider hiring a designer for professional assets

---

## ✅ Checklist

Before launching:
- [ ] Logo replaced with real brand logo
- [ ] All 4 product cans have real images
- [ ] Images optimized (< 100KB each)
- [ ] Alt text added for accessibility
- [ ] Mobile responsive tested
- [ ] WebP format implemented (optional)
- [ ] Legal/licensing verified
- [ ] Age verification still in place

---

**Remember:** The website already has all the HTML structure and CSS animations ready. You just need to replace the placeholder SVG files with real PNG/JPG images!

🎨 **Happy designing!**
