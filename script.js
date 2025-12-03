// ===============================================
// PODPEROS - Enhanced Interactive JavaScript
// Modern Animations & Interactions
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
        ageModal.style.animation = 'fadeOut 0.4s ease';
        setTimeout(() => {
            ageModal.classList.add('hidden');
        }, 400);
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
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.9); }
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
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger menu toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });
}

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
    if (hamburger && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
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
            const offsetTop = target.offsetTop - 90;
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
                    size_min: 0.5,
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
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
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
        duration: 1200,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 50
    });
}

// ===============================================
// GSAP ANIMATIONS (IF AVAILABLE)
// ===============================================
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero title animation
    gsap.from('.hero-title-main .title-word', {
        opacity: 0,
        y: 100,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Hero subtitle animation
    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.8,
        ease: 'power2.out'
    });
    
    // Product cards parallax
    gsap.utils.toArray('.product-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                end: 'bottom top',
                scrub: true
            },
            y: 50,
            opacity: 0
        });
    });
}

// ===============================================
// SCROLL INDICATOR
// ===============================================
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    // Hide scroll indicator on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'all';
        }
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
        const phone = document.getElementById('phone') ? document.getElementById('phone').value : '';
        const message = document.getElementById('message').value;
        
        // Simulate form submission
        console.log('Form submitted:', { name, email, phone, message });
        
        // Show success notification
        showNotification('🎉 Ďakujeme! Tvoja správa bola odoslaná.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// ===============================================
// NEWSLETTER FORM
// ===============================================
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        console.log('Newsletter subscription:', email);
        showNotification('✅ Úspešne prihlásený do newslettera!', 'success');
        this.reset();
    });
}

// ===============================================
// NOTIFICATION SYSTEM
// ===============================================
function showNotification(message, type = 'info') {
    // Remove existing notification
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
            top: 120px;
            right: 30px;
            background: linear-gradient(135deg, #ff0080 0%, #ff6b9d 100%);
            color: white;
            padding: 22px 35px;
            border-radius: 15px;
            box-shadow: 0 15px 50px rgba(255, 0, 128, 0.5);
            z-index: 10000;
            animation: slideInRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), slideOutRight 0.5s ease 3s forwards;
            font-family: 'Montserrat', sans-serif;
            max-width: 400px;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 18px;
            font-size: 16px;
            font-weight: 600;
        }
        
        .notification-content i {
            font-size: 26px;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(500px);
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
                transform: translateX(500px);
                opacity: 0;
            }
        }
        
        @media (max-width: 768px) {
            .notification {
                right: 20px;
                left: 20px;
                max-width: none;
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
    }, 3500);
}

// ===============================================
// HERO PARALLAX EFFECT
// ===============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Only apply parallax if not on mobile
    if (window.innerWidth > 768 && scrolled < window.innerHeight) {
        const heroVisual = document.querySelector('.hero-visual-section');
        const heroText = document.querySelector('.hero-text-section');
        
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        if (heroText) {
            heroText.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    }
});

// ===============================================
// PRODUCT CARDS INTERACTION
// ===============================================
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===============================================
// FLOATING PRODUCT CANS INTERACTION
// ===============================================
const productCanFloats = document.querySelectorAll('.product-can-float');
productCanFloats.forEach((can, index) => {
    can.addEventListener('click', function() {
        const brandName = this.querySelector('.can-brand-name').textContent;
        showNotification(`🔥 ${brandName} - Najlepší výber v našich automatoch!`, 'success');
        
        // Add bounce animation
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
});

// ===============================================
// LIPS VISUAL INTERACTION
// ===============================================
const lipsVisual = document.querySelector('.lips-main-visual');
if (lipsVisual) {
    lipsVisual.addEventListener('click', function() {
        showNotification('💋 Pod perami. Nad ostatnými! 💋', 'success');
        
        // Add pulse effect
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'lipsFloat 4s ease-in-out infinite';
        }, 10);
    });
}

// ===============================================
// STEP CARDS ANIMATION ON HOVER
// ===============================================
const stepItems = document.querySelectorAll('.step-item');
stepItems.forEach(step => {
    step.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.step-icon-wrapper i');
        if (icon) {
            icon.style.animation = 'iconSpin 0.6s ease-in-out';
        }
    });
    
    step.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.step-icon-wrapper i');
        if (icon) {
            icon.style.animation = 'none';
        }
    });
});

// Add icon spin animation
const iconSpinStyle = document.createElement('style');
iconSpinStyle.textContent = `
    @keyframes iconSpin {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.2); }
        100% { transform: rotate(360deg) scale(1); }
    }
`;
document.head.appendChild(iconSpinStyle);

// ===============================================
// LOCATION CARDS ANIMATION
// ===============================================
const locationCards = document.querySelectorAll('.location-card');
locationCards.forEach((card, index) => {
    // Stagger animation on load
    card.style.opacity = '0';
    card.style.transform = 'translateX(-50px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
    }, 300 + (index * 100));
});

// ===============================================
// FEATURE PILLS INTERACTION
// ===============================================
const featurePills = document.querySelectorAll('.feature-pill');
featurePills.forEach(pill => {
    pill.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        if (icon) {
            icon.style.transform = 'scale(1.3) rotate(360deg)';
            icon.style.transition = 'transform 0.5s ease';
        }
    });
    
    pill.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ===============================================
// DYNAMIC YEAR IN FOOTER
// ===============================================
const currentYear = new Date().getFullYear();
const copyright = document.querySelector('.copyright');
if (copyright) {
    copyright.textContent = `© ${currentYear} Podperos. Všetky práva vyhradené.`;
}

// ===============================================
// BUTTON RIPPLE EFFECT
// ===============================================
const buttons = document.querySelectorAll('.btn-hero, .btn-submit, .btn-primary');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple styles
const rippleStyles = `
    .ripple-effect {
        position: absolute;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: translate(-50%, -50%);
        animation: rippleAnimation 0.6s ease-out;
        pointer-events: none;
        z-index: 10;
    }
    
    @keyframes rippleAnimation {
        from {
            width: 25px;
            height: 25px;
            opacity: 1;
        }
        to {
            width: 250px;
            height: 250px;
            opacity: 0;
        }
    }
`;
const rippleStyleSheet = document.createElement('style');
rippleStyleSheet.textContent = rippleStyles;
document.head.appendChild(rippleStyleSheet);

// ===============================================
// SMOOTH REVEAL ON SCROLL
// ===============================================
const revealElements = document.querySelectorAll('.about-content, .section-header');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
    revealObserver.observe(el);
});

// ===============================================
// CURSOR TRAIL EFFECT (OPTIONAL - DESKTOP ONLY)
// ===============================================
if (window.innerWidth > 1024) {
    const cursorTrail = [];
    const maxTrailLength = 15;
    
    document.addEventListener('mousemove', (e) => {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.left = e.pageX + 'px';
        dot.style.top = e.pageY + 'px';
        
        document.body.appendChild(dot);
        cursorTrail.push(dot);
        
        if (cursorTrail.length > maxTrailLength) {
            const oldDot = cursorTrail.shift();
            oldDot.remove();
        }
        
        setTimeout(() => {
            dot.style.opacity = '0';
            setTimeout(() => dot.remove(), 500);
        }, 100);
    });
    
    // Add cursor trail styles
    const cursorTrailStyles = `
        .cursor-trail {
            position: absolute;
            width: 5px;
            height: 5px;
            background: radial-gradient(circle, rgba(255,0,128,0.7) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
    `;
    const cursorStyleSheet = document.createElement('style');
    cursorStyleSheet.textContent = cursorTrailStyles;
    document.head.appendChild(cursorStyleSheet);
}

// ===============================================
// LOADING ANIMATION
// ===============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===============================================
// CONSOLE EASTER EGG
// ===============================================
console.log('%c🔥 PODPEROS 🔥', 'font-size: 40px; font-weight: bold; color: #ff0080; text-shadow: 3px 3px 6px rgba(255,0,128,0.5); font-family: Arial;');
console.log('%cPod perami. Nad ostatnými.', 'font-size: 18px; color: #ff6b9d; font-style: italic; font-family: Arial;');
console.log('%c⚠️ Nikotín je návyková látka. Len pre 18+', 'font-size: 14px; color: #ff0080; background: #1a1a24; padding: 12px; border-radius: 8px; margin-top: 10px; font-family: Arial;');
console.log('%c💻 Hľadáš prácu? info@podperos.sk', 'font-size: 12px; color: #8b5cf6; margin-top: 10px; font-family: Arial;');

// ===============================================
// KONAMI CODE EASTER EGG
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
    showNotification('🎉 GRATULUJEME! Našiel si tajný kód! Získavaš extra zľavu 15% na ďalší nákup! 🎉', 'success');
    
    // Rainbow mode
    document.body.style.animation = 'rainbowEffect 3s linear';
    
    const rainbowAnimation = `
        @keyframes rainbowEffect {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = rainbowAnimation;
    document.head.appendChild(rainbowStyle);
    
    setTimeout(() => {
        document.body.style.animation = 'none';
    }, 3000);
}

// ===============================================
// PERFORMANCE OPTIMIZATION
// ===============================================
// Lazy load images
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
// MOBILE TOUCH ENHANCEMENTS
// ===============================================
if ('ontouchstart' in window) {
    // Add touch feedback for mobile
    const touchElements = document.querySelectorAll('.btn-hero, .product-card, .location-card, .step-item');
    touchElements.forEach(el => {
        el.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        el.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// ===============================================
// ACCESSIBILITY ENHANCEMENTS
// ===============================================
// Skip to content
const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.textContent = 'Preskočiť na obsah';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -100px;
    left: 20px;
    background: var(--primary-red);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 10001;
    transition: top 0.3s;
    font-weight: 600;
`;
skipLink.addEventListener('focus', function() {
    this.style.top = '20px';
});
skipLink.addEventListener('blur', function() {
    this.style.top = '-100px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

console.log('🚀 Podperos website fully loaded and interactive!');
console.log('📱 Mobile optimized | 💻 Desktop enhanced | ♿ Accessibility ready');
