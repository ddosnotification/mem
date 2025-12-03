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
// PARTICLES.JS CONFIGURATION - ENHANCED
// ===============================================
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 120,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#ff0080', '#ff6b9d', '#8b5cf6', '#ff1a8c']
            },
            shape: {
                type: ['circle', 'triangle'],
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.6,
                random: true,
                anim: {
                    enable: true,
                    speed: 1.5,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: true,
                    speed: 3,
                    size_min: 0.3,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ff0080',
                opacity: 0.3,
                width: 1.5
            },
            move: {
                enable: true,
                speed: 2.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 800,
                    rotateY: 1400
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: ['grab', 'bubble']
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 180,
                    line_linked: {
                        opacity: 0.7
                    }
                },
                bubble: {
                    distance: 200,
                    size: 8,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                },
                push: {
                    particles_nb: 6
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
// ENHANCED PARALLAX EFFECTS FOR HERO
// ===============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    const heroText = document.querySelector('.hero-text');
    const bgCircles = document.querySelectorAll('.bg-circle');
    
    if (scrolled < window.innerHeight) {
        // Parallax for hero visual
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
        
        // Parallax for hero text (opposite direction)
        if (heroText) {
            heroText.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
        
        // Parallax for background circles
        bgCircles.forEach((circle, index) => {
            const speed = 0.15 + (index * 0.1);
            circle.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed}px)`;
        });
    }
});

// ===============================================
// SCROLL INDICATOR CLICK
// ===============================================
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const featuresSection = document.querySelector('.features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ===============================================
// HERO BUTTONS RIPPLE EFFECT
// ===============================================
const heroButtons = document.querySelectorAll('.hero-buttons .btn');

heroButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple element
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        
        // Get click position
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple styles
const rippleStyles = `
    .ripple-effect {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: translate(-50%, -50%);
        animation: rippleAnimation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleAnimation {
        from {
            width: 20px;
            height: 20px;
            opacity: 1;
        }
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;

const rippleStyleSheet = document.createElement('style');
rippleStyleSheet.textContent = rippleStyles;
document.head.appendChild(rippleStyleSheet);

// ===============================================
// DYNAMIC BRAND FLOATERS
// ===============================================
const brandFloaters = document.querySelectorAll('.brand-float');

// Make brand floaters interactive
brandFloaters.forEach(brand => {
    brand.style.cursor = 'pointer';
    brand.style.pointerEvents = 'all';
    brand.style.transition = 'all 0.3s ease';
    
    brand.addEventListener('mouseenter', function() {
        this.style.color = 'rgba(255, 0, 128, 1)';
        this.style.transform = 'scale(1.5)';
        this.style.textShadow = '0 0 40px rgba(255, 0, 128, 1)';
    });
    
    brand.addEventListener('mouseleave', function() {
        this.style.color = 'rgba(255, 0, 128, 0.3)';
        this.style.transform = 'scale(1)';
        this.style.textShadow = '0 0 20px rgba(255, 0, 128, 0.5)';
    });
    
    brand.addEventListener('click', function() {
        showNotification(`🏆 ${this.textContent} - Premium značka dostupná v našich automatoch!`, 'success');
    });
});

// ===============================================
// HERO PRODUCT SHOWCASE INTERACTIONS
// ===============================================
const showcaseItems = document.querySelectorAll('.showcase-item');

showcaseItems.forEach((item, index) => {
    // Add click interaction for product cans
    item.addEventListener('click', function() {
        const productName = this.querySelector('.product-name').textContent;
        showNotification(`🔥 ${productName} - Teraz v našich automatoch!`, 'success');
        
        // Add special animation
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
    
    // Add stagger animation on load
    item.style.opacity = '0';
    item.style.transform = 'scale(0.5)';
    setTimeout(() => {
        item.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    }, 800 + (index * 200));
});

// ===============================================
// BRAND HIGHLIGHTS ANIMATION
// ===============================================
const brandHighlights = document.querySelectorAll('.brand-highlight');

brandHighlights.forEach(brand => {
    brand.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.textShadow = '0 0 20px rgba(255, 0, 128, 0.8)';
    });
    
    brand.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.textShadow = 'none';
    });
});

// ===============================================
// MINI FEATURES HOVER EFFECTS
// ===============================================
const miniFeatures = document.querySelectorAll('.mini-feature');

miniFeatures.forEach(feature => {
    feature.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.mini-icon');
        icon.style.transform = 'scale(1.3) rotate(360deg)';
        icon.style.transition = 'transform 0.5s ease';
    });
    
    feature.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.mini-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ===============================================
// HERO STATS COUNTER WITH ENHANCED ANIMATION
// ===============================================
const heroStats = document.querySelectorAll('.hero-stats .stat-number');
let statsAnimated = false;

function animateHeroStats() {
    if (statsAnimated) return;
    
    heroStats.forEach(stat => {
        const text = stat.textContent;
        const hasPlus = text.includes('+');
        const hasSlash = text.includes('/');
        
        if (hasSlash) {
            // For 24/7 type stats - no animation needed
            stat.style.animation = 'statPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            return;
        }
        
        const number = parseInt(text);
        if (isNaN(number)) return;
        
        let current = 0;
        const increment = number / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                stat.textContent = text;
                clearInterval(timer);
                stat.style.animation = 'statPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            } else {
                stat.textContent = Math.floor(current) + (hasPlus ? '+' : '');
            }
        }, stepTime);
    });
    
    statsAnimated = true;
}

// Add stat pop animation
const statPopStyles = `
    @keyframes statPop {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`;

const statStyleSheet = document.createElement('style');
statStyleSheet.textContent = statPopStyles;
document.head.appendChild(statStyleSheet);

// Trigger stats animation when hero section is visible
const heroSection = document.querySelector('.hero');
if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    animateHeroStats();
                }, 1000);
            }
        });
    }, { threshold: 0.3 });
    
    heroObserver.observe(heroSection);
}

// ===============================================
// LIPS VISUAL CENTER INTERACTION
// ===============================================
const lipsVisualCenter = document.querySelector('.lips-visual-center');

if (lipsVisualCenter) {
    lipsVisualCenter.addEventListener('click', function() {
        showNotification('💋 Pod perami. Nad ostatnými! 💋', 'success');
        
        // Add pulse effect
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'lipsFloat 4s ease-in-out infinite, lipsPulse 0.6s ease-out';
        }, 10);
    });
}

// Add lips pulse animation
const lipsPulseStyles = `
    @keyframes lipsPulse {
        0% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.15); }
        100% { transform: translate(-50%, -50%) scale(1); }
    }
`;

const lipsPulseStyleSheet = document.createElement('style');
lipsPulseStyleSheet.textContent = lipsPulseStyles;
document.head.appendChild(lipsPulseStyleSheet);

// ===============================================
// TYPING EFFECT FOR HERO SUBTITLE (REMOVED FOR CLEANER LOOK)
// ===============================================
// Removed typing effect to keep hero subtitle immediately visible

// ===============================================
// LIPS ANIMATION INTERACTION
// ===============================================
const lipsVisual = document.querySelector('.lips-visual');
const animatedLips = document.querySelector('.animated-lips');

if (lipsVisual) {
    lipsVisual.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
        this.style.filter = 'drop-shadow(0 0 50px rgba(255, 0, 128, 0.8))';
    });
    
    lipsVisual.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        this.style.filter = 'drop-shadow(0 0 30px rgba(255, 0, 128, 0.5))';
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

console.log('🚀 Podperos website fully loaded and interactive!');
