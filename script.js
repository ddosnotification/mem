// ===============================================
// PODPEROS - Interactive JavaScript
// ===============================================

// ===============================================
// AGE VERIFICATION
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    const ageModal = document.getElementById('ageModal');
    const ageYes = document.getElementById('ageYes');
    const ageNo = document.getElementById('ageNo');
    
    // Check if user has already verified age
    const ageVerified = localStorage.getItem('podperosAgeVerified');
    
    if (ageVerified === 'true') {
        ageModal.classList.add('hidden');
    }
    
    // Handle Yes button
    ageYes.addEventListener('click', function() {
        localStorage.setItem('podperosAgeVerified', 'true');
        ageModal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            ageModal.classList.add('hidden');
        }, 300);
    });
    
    // Handle No button
    ageNo.addEventListener('click', function() {
        alert('Ľutujeme, musíš mať aspoň 18 rokov na prezeranie tohto webu.');
        window.location.href = 'https://www.google.com';
    });
});

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// ===============================================
// NAVIGATION
// ===============================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for styling
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===============================================
// PARTICLES.JS CONFIGURATION
// ===============================================
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#ff0080', '#ff6b9d', '#8b5cf6']
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ff0080',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// ===============================================
// AOS (ANIMATE ON SCROLL) INITIALIZATION
// ===============================================
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 100
    });
}

// ===============================================
// CONTACT FORM
// ===============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simulate form submission (replace with actual backend call)
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        showNotification('Ďakujeme! Tvoja správa bola odoslaná.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// ===============================================
// NEWSLETTER FORM
// ===============================================
const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Simulate newsletter subscription
        console.log('Newsletter subscription:', email);
        
        showNotification('Úspešne prihlásený do newslettera!', 'success');
        this.reset();
    });
});

// ===============================================
// NOTIFICATION SYSTEM
// ===============================================
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #ff0080 0%, #ff6b9d 100%);
            color: white;
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(255, 0, 128, 0.4);
            z-index: 10000;
            animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 2.5s;
            font-family: 'Poppins', sans-serif;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 16px;
            font-weight: 500;
        }
        
        .notification-content i {
            font-size: 24px;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    
    // Add styles to head if not already added
    if (!document.getElementById('notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = notificationStyles;
        document.head.appendChild(styleSheet);
    }
    
    // Append notification
    document.body.appendChild(notification);
    
    // Remove after animation
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ===============================================
// PRODUCT CARDS HOVER EFFECTS
// ===============================================
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===============================================
// STATS COUNTER ANIMATION
// ===============================================
const statsNumbers = document.querySelectorAll('.stat-number');

function animateCounter(element) {
    const target = element.textContent;
    const isNumber = !isNaN(parseInt(target));
    
    if (!isNumber) return;
    
    const number = parseInt(target);
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = number / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            element.textContent = target; // Restore original text
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (target.includes('+') ? '+' : '');
        }
    }, duration / steps);
}

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

statsNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ===============================================
// PARALLAX EFFECT FOR HERO
// ===============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual && scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ===============================================
// FADE IN EFFECT FOR HERO SUBTITLE
// ===============================================
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    // Add fade-in animation instead of typing effect for better readability
    heroSubtitle.style.opacity = '0';
    heroSubtitle.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        heroSubtitle.style.opacity = '1';
    }, 300);
}

// ===============================================
// LIPS ANIMATION INTERACTION
// ===============================================
const lipsVisual = document.querySelector('.lips-visual-enhanced');
const animatedLips = document.querySelector('.animated-lips');

if (lipsVisual) {
    lipsVisual.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.15) rotate(5deg)';
        this.style.filter = 'drop-shadow(0 0 60px rgba(255, 0, 128, 0.9))';
    });
    
    lipsVisual.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        this.style.filter = 'drop-shadow(0 0 40px rgba(255, 0, 128, 0.7))';
    });
}

if (animatedLips) {
    animatedLips.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'pulse 2s ease-in-out infinite';
        }, 10);
    });
}

// ===============================================
// FLOATING PRODUCTS INTERACTION
// ===============================================
const miniProducts = document.querySelectorAll('.mini-product');

miniProducts.forEach((product, index) => {
    product.addEventListener('click', function() {
        const label = this.querySelector('.product-label').textContent;
        showNotification(`🎉 ${label} kategória - Pozri si naše top produkty!`, 'success');
        
        // Add pulse animation
        this.style.animation = 'pulse 0.5s ease-in-out';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
    
    product.addEventListener('mouseenter', function() {
        // Pause orbit rotation on hover
        const orbit = this.parentElement;
        orbit.style.animationPlayState = 'paused';
    });
    
    product.addEventListener('mouseleave', function() {
        // Resume orbit rotation
        const orbit = this.parentElement;
        orbit.style.animationPlayState = 'running';
    });
});

// ===============================================
// BRAND TAGS INTERACTION
// ===============================================
const brandTags = document.querySelectorAll('.brand-tag');

brandTags.forEach(tag => {
    tag.addEventListener('click', function() {
        const brandName = this.textContent;
        showNotification(`${brandName} - Prémiová kvalita v našich automatoch!`, 'success');
        
        // Add bounce effect
        this.style.animation = 'bounce 0.6s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
    });
});

// Add bounce animation
const bounceAnimation = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0) scale(1); }
        25% { transform: translateY(-10px) scale(1.1); }
        50% { transform: translateY(-5px) scale(1.05); }
        75% { transform: translateY(-8px) scale(1.08); }
    }
`;

const bounceStyle = document.createElement('style');
bounceStyle.textContent = bounceAnimation;
document.head.appendChild(bounceStyle);

// ===============================================
// FLAVOR CAROUSEL INTERACTION
// ===============================================
const flavorTags = document.querySelectorAll('.flavor-tag-animated');

flavorTags.forEach(tag => {
    tag.addEventListener('click', function() {
        const flavorName = this.textContent;
        showNotification(`${flavorName} - Skvelá voľba! 😋`, 'success');
        
        // Add glow effect
        this.style.boxShadow = '0 10px 40px rgba(255, 0, 128, 0.8)';
        this.style.transform = 'scale(1.15)';
        
        setTimeout(() => {
            this.style.boxShadow = '0 5px 20px rgba(255, 0, 128, 0.3)';
            this.style.transform = 'scale(1)';
        }, 300);
    });
});

// ===============================================
// HERO BADGES ANIMATION
// ===============================================
const heroBadges = document.querySelectorAll('.hero-badge');

heroBadges.forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(-2deg)';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ===============================================
// ROTATING RINGS SPEED CONTROL
// ===============================================
const showcaseCircle = document.querySelector('.showcase-circle');

if (showcaseCircle) {
    showcaseCircle.addEventListener('mouseenter', function() {
        const rings = this.querySelectorAll('.rotating-ring');
        rings.forEach(ring => {
            const currentAnimation = window.getComputedStyle(ring).animation;
            ring.style.animationDuration = '5s'; // Speed up on hover
        });
    });
    
    showcaseCircle.addEventListener('mouseleave', function() {
        const rings = this.querySelectorAll('.rotating-ring');
        rings[0].style.animationDuration = '20s';
        rings[1].style.animationDuration = '15s';
        rings[2].style.animationDuration = '25s';
    });
}

// ===============================================
// CURSOR TRAIL EFFECT (Optional Enhancement)
// ===============================================
const cursorTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', (e) => {
    // Create trail dot
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';
    
    document.body.appendChild(dot);
    cursorTrail.push(dot);
    
    // Remove old dots
    if (cursorTrail.length > maxTrailLength) {
        const oldDot = cursorTrail.shift();
        oldDot.remove();
    }
    
    // Fade out dots
    setTimeout(() => {
        dot.style.opacity = '0';
        setTimeout(() => dot.remove(), 500);
    }, 100);
});

// Add cursor trail styles
const cursorTrailStyles = `
    .cursor-trail {
        position: absolute;
        width: 6px;
        height: 6px;
        background: radial-gradient(circle, rgba(255,0,128,0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: opacity 0.5s ease;
    }
`;

const cursorStyleSheet = document.createElement('style');
cursorStyleSheet.textContent = cursorTrailStyles;
document.head.appendChild(cursorStyleSheet);

// ===============================================
// FEATURE CARDS STAGGER ANIMATION
// ===============================================
const featureCards = document.querySelectorAll('.feature-card');

const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    featureObserver.observe(card);
});

// ===============================================
// LOCATION ITEMS ANIMATION
// ===============================================
const locationItems = document.querySelectorAll('.location-item');

locationItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    
    setTimeout(() => {
        item.style.transition = 'all 0.6s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
    }, index * 100 + 500);
});

// ===============================================
// DYNAMIC YEAR IN FOOTER
// ===============================================
const currentYear = new Date().getFullYear();
const footerYearElements = document.querySelectorAll('.footer-bottom p');
if (footerYearElements.length > 0) {
    footerYearElements[0].textContent = `© ${currentYear} Podperos. Všetky práva vyhradené.`;
}

// ===============================================
// LOADING ANIMATION
// ===============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===============================================
// PERFORMANCE OPTIMIZATION
// ===============================================
// Lazy load images when they come into view
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ===============================================
// CONSOLE MESSAGE
// ===============================================
console.log('%c🔥 PODPEROS 🔥', 'font-size: 30px; font-weight: bold; color: #ff0080; text-shadow: 2px 2px 4px rgba(255,0,128,0.3);');
console.log('%cPod perami. Nad ostatnými.', 'font-size: 16px; color: #ff6b9d; font-style: italic;');
console.log('%c⚠️ Nikotín je návyková látka. Len pre 18+', 'font-size: 12px; color: #ff0080; background: #1a1a24; padding: 10px; border-radius: 5px; margin-top: 10px;');

// ===============================================
// EASTER EGG: Konami Code
// ===============================================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    showNotification('🎉 Našiel si tajný kód! Extra zľava na ďalší nákup! 🎉', 'success');
    
    // Add party mode
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    const rainbowAnimation = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = rainbowAnimation;
    document.head.appendChild(rainbowStyle);
    
    setTimeout(() => {
        document.body.style.animation = 'none';
    }, 5000);
}

// ===============================================
// SMOOTH REVEAL ON SCROLL
// ===============================================
const revealElements = document.querySelectorAll('.section-header, .product-card, .step-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Add reveal styles
const revealStyles = `
    .section-header,
    .product-card,
    .step-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .section-header.revealed,
    .product-card.revealed,
    .step-card.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;

const revealStyleSheet = document.createElement('style');
revealStyleSheet.textContent = revealStyles;
document.head.appendChild(revealStyleSheet);

// ===============================================
// DYNAMIC GLOW ORBS MOVEMENT
// ===============================================
const glowOrbs = document.querySelectorAll('.glow-orb');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    glowOrbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (mouseX - 0.5) * speed;
        const yOffset = (mouseY - 0.5) * speed;
        
        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// ===============================================
// HERO SECTION PARALLAX ENHANCEMENT
// ===============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        const visualShowcase = document.querySelector('.visual-showcase');
        const heroBrands = document.querySelector('.hero-brands');
        const flavorCarousel = document.querySelector('.flavor-carousel');
        
        if (visualShowcase) {
            visualShowcase.style.transform = `translateY(${scrolled * 0.2}px) scale(${1 - scrolled * 0.0002})`;
        }
        
        if (heroBrands) {
            heroBrands.style.transform = `translateY(${scrolled * 0.1}px)`;
            heroBrands.style.opacity = 1 - (scrolled * 0.002);
        }
        
        if (flavorCarousel) {
            flavorCarousel.style.transform = `translateX(-50%) translateY(${scrolled * 0.15}px)`;
        }
    }
});

// ===============================================
// HIGHLIGHT ITEMS SEQUENTIAL ANIMATION
// ===============================================
const highlightItems = document.querySelectorAll('.highlight-item');

const highlightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.5 });

highlightItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'all 0.6s ease';
    highlightObserver.observe(item);
});

// ===============================================
// MINI PRODUCTS SEQUENTIAL APPEARANCE
// ===============================================
const productOrbits = document.querySelectorAll('.product-orbit');

const orbitObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

productOrbits.forEach(orbit => {
    orbit.style.opacity = '0';
    orbit.style.transform = 'scale(0)';
    orbit.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    orbitObserver.observe(orbit);
});

// ===============================================
// BRAND TAGS HOVER SOUND EFFECT (VISUAL)
// ===============================================
const brandsScroll = document.querySelector('.brands-scroll');

if (brandsScroll) {
    let isScrolling = false;
    
    brandsScroll.addEventListener('mouseenter', () => {
        isScrolling = true;
        brandsScroll.style.animation = 'none';
    });
    
    brandsScroll.addEventListener('mouseleave', () => {
        isScrolling = false;
        brandsScroll.style.animation = 'scrollBrands 20s linear infinite';
    });
    
    // Touch support for mobile
    brandsScroll.addEventListener('touchstart', () => {
        brandsScroll.style.animation = 'none';
    });
}

// ===============================================
// ROTATING RINGS GLOW EFFECT
// ===============================================
const rotatingRings = document.querySelectorAll('.rotating-ring');

setInterval(() => {
    rotatingRings.forEach((ring, index) => {
        const colors = [
            'rgba(255, 0, 128, 0.4)',
            'rgba(139, 92, 246, 0.4)',
            'rgba(255, 107, 157, 0.4)'
        ];
        
        ring.style.borderColor = colors[index];
        ring.style.boxShadow = `0 0 30px ${colors[index]}`;
        
        setTimeout(() => {
            ring.style.borderColor = colors[index].replace('0.4', '0.2');
            ring.style.boxShadow = 'none';
        }, 500);
    });
}, 3000);

// ===============================================
// HERO BADGES FLOATING ANIMATION
// ===============================================
const heroBadgeContainer = document.querySelector('.hero-badge-container');

if (heroBadgeContainer) {
    const badges = heroBadgeContainer.querySelectorAll('.hero-badge');
    
    badges.forEach((badge, index) => {
        setInterval(() => {
            badge.style.transform = `translateY(-5px) scale(1.05) rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`;
            
            setTimeout(() => {
                badge.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            }, 800);
        }, 3000 + (index * 500));
    });
}

console.log('🚀 Podperos website fully loaded and interactive!');
console.log('✨ Enhanced hero section with premium visuals and top brand showcase!');
