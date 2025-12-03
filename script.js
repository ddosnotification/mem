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
// HERO BADGES ANIMATION
// ===============================================
const heroBadges = document.querySelectorAll('.hero-badge');

heroBadges.forEach((badge, index) => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // Staggered animation on page load
    setTimeout(() => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(-20px)';
        badge.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
        setTimeout(() => {
            badge.style.opacity = '1';
            badge.style.transform = 'translateY(0)';
        }, index * 100);
    }, 1000);
});

// ===============================================
// ENHANCED BUTTON EFFECTS
// ===============================================
const heroButtons = document.querySelectorAll('.hero-buttons .btn');

heroButtons.forEach(button => {
    // Add ripple effect on click
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'button-ripple';
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple styles
const rippleStyles = `
    .button-ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;

const rippleStyleSheet = document.createElement('style');
rippleStyleSheet.textContent = rippleStyles;
document.head.appendChild(rippleStyleSheet);

// ===============================================
// STATS COUNTER ANIMATION
// ===============================================
const statsNumbers = document.querySelectorAll('.stat-number');

function animateCounter(element) {
    const target = element.textContent;
    
    // Check if it's a number or contains a number
    const hasPlus = target.includes('+');
    const hasSlash = target.includes('/');
    const numberMatch = target.match(/\d+/);
    
    if (!numberMatch) return;
    
    const number = parseInt(numberMatch[0]);
    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            element.textContent = target; // Restore original text
            clearInterval(timer);
            
            // Add celebration effect
            element.style.transform = 'scale(1.2)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        } else {
            let display = Math.floor(current);
            if (hasPlus) display += '+';
            if (hasSlash) display = `${display}/7`;
            element.textContent = display;
        }
    }, duration / steps);
}

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
            
            // Add particles effect
            createStatsParticles(entry.target);
        }
    });
}, { threshold: 0.5 });

statsNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ===============================================
// STATS PARTICLES EFFECT
// ===============================================
function createStatsParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'stat-particle';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = 50;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.style.left = endX + 'px';
            particle.style.top = endY + 'px';
            particle.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            particle.remove();
        }, 800);
    }
}

// Add particle styles
const particleStyles = `
    .stat-particle {
        position: fixed;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, #ff0080 0%, #ff6b9d 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 0 10px rgba(255, 0, 128, 0.8);
    }
`;

const particleStyleSheet = document.createElement('style');
particleStyleSheet.textContent = particleStyles;
document.head.appendChild(particleStyleSheet);

// ===============================================
// PARALLAX EFFECT FOR HERO
// ===============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    const orbs = document.querySelectorAll('.orb');
    const particles = document.querySelector('.hero-particles');
    
    if (scrolled < window.innerHeight) {
        // Parallax for hero visual
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        // Parallax for orbs with different speeds
        orbs.forEach((orb, index) => {
            const speed = 0.2 + (index * 0.1);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        // Parallax for particles
        if (particles) {
            particles.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    }
});

// ===============================================
// MOUSE MOVEMENT PARALLAX FOR HERO
// ===============================================
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = hero;
        
        const xPos = (clientX / offsetWidth - 0.5) * 2;
        const yPos = (clientY / offsetHeight - 0.5) * 2;
        
        // Move floating elements based on mouse position
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            const speed = 10 + (index * 5);
            element.style.transform = `translate(${xPos * speed}px, ${yPos * speed}px)`;
        });
        
        // Move orbs
        const orbs = document.querySelectorAll('.orb');
        orbs.forEach((orb, index) => {
            const speed = 15 + (index * 10);
            const currentTransform = orb.style.transform || '';
            if (!currentTransform.includes('translateY')) {
                orb.style.transform = `translate(${xPos * speed}px, ${yPos * speed}px)`;
            }
        });
    });
}

// ===============================================
// TYPING EFFECT FOR HERO SUBTITLE
// ===============================================
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 20);
        }
    }
    
    // Start typing after a short delay
    setTimeout(() => {
        typeWriter();
    }, 800);
}

// ===============================================
// DYNAMIC FLAVOR ROTATION IN TITLE
// ===============================================
const flavorHighlights = [
    'Nové Príchute',
    'TOP Značky',
    'Limitované Edície',
    'Fresh Drops',
    'Premium Selection'
];

// Add subtle rotation to badges
let currentFlavorIndex = 0;
const newBadge = document.querySelector('.badge-new');

if (newBadge) {
    setInterval(() => {
        currentFlavorIndex = (currentFlavorIndex + 1) % flavorHighlights.length;
        
        // Fade out
        newBadge.style.opacity = '0';
        newBadge.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            // Change text
            const icon = newBadge.querySelector('i');
            newBadge.innerHTML = `<i class="fas fa-star"></i> ${flavorHighlights[currentFlavorIndex]}`;
            
            // Fade in
            newBadge.style.opacity = '1';
            newBadge.style.transform = 'translateY(0)';
        }, 300);
    }, 4000); // Change every 4 seconds
}

// ===============================================
// LIPS ANIMATION INTERACTION
// ===============================================
const lipsVisual = document.querySelector('.lips-visual');
const animatedLips = document.querySelector('.animated-lips');

if (lipsVisual) {
    lipsVisual.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.15) rotate(5deg)';
        this.style.filter = 'drop-shadow(0 0 60px rgba(255, 0, 128, 1))';
    });
    
    lipsVisual.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        this.style.filter = 'drop-shadow(0 0 40px rgba(255, 0, 128, 0.6))';
    });
    
    // Click to create sparkle burst
    lipsVisual.addEventListener('click', function() {
        createSparkleBurst(this);
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
// PRODUCT SHOWCASE HOVER EFFECTS
// ===============================================
const productShowcases = document.querySelectorAll('.product-showcase');

productShowcases.forEach(showcase => {
    showcase.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(10deg)';
        
        // Add glow effect
        const color = getComputedStyle(this).borderColor;
        this.style.boxShadow = `0 0 30px ${color}, 0 15px 40px rgba(255, 0, 128, 0.4)`;
    });
    
    showcase.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    });
    
    showcase.addEventListener('click', function() {
        const label = this.querySelector('.showcase-label').textContent;
        showNotification(`Objavuj ${label} príchute!`, 'success');
    });
});

// ===============================================
// BRAND TAG INTERACTIONS
// ===============================================
const brandTags = document.querySelectorAll('.brand-tag');

brandTags.forEach(tag => {
    tag.addEventListener('click', function() {
        const brandName = this.querySelector('span').textContent;
        showNotification(`${brandName} - Prémiová značka!`, 'success');
    });
});

// ===============================================
// FLAVOR BADGE INTERACTIONS
// ===============================================
const flavorBadges = document.querySelectorAll('.flavor-badge');

flavorBadges.forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px) scale(1.05)';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
    });
    
    badge.addEventListener('click', function() {
        const flavorName = this.querySelector('.flavor-name').textContent;
        showNotification(`${flavorName} - Skvelá voľba!`, 'success');
    });
});

// ===============================================
// SPARKLE BURST EFFECT
// ===============================================
function createSparkleBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'burst-sparkle';
        sparkle.textContent = '✨';
        sparkle.style.left = centerX + 'px';
        sparkle.style.top = centerY + 'px';
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 100;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.style.left = endX + 'px';
            sparkle.style.top = endY + 'px';
            sparkle.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

// Add sparkle burst styles
const sparkleStyles = `
    .burst-sparkle {
        position: fixed;
        font-size: 20px;
        pointer-events: none;
        z-index: 10000;
        transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.8));
    }
`;

const sparkleStyleSheet = document.createElement('style');
sparkleStyleSheet.textContent = sparkleStyles;
document.head.appendChild(sparkleStyleSheet);

// ===============================================
// HERO STATS ENHANCED ANIMATION
// ===============================================
const heroStats = document.querySelectorAll('.hero-stats .stat-item');

heroStats.forEach((stat, index) => {
    stat.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    stat.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===============================================
// FLOATING NEW BADGE INTERACTION
// ===============================================
const floatingBadge = document.querySelector('.floating-new-badge');

if (floatingBadge) {
    floatingBadge.addEventListener('click', function() {
        showNotification('🔥 Každý týždeň nové prémiové produkty! 🔥', 'success');
        
        // Add burst effect
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'badgeFloat 4s ease-in-out infinite';
        }, 10);
    });
    
    floatingBadge.addEventListener('mouseenter', function() {
        this.querySelector('.new-badge-content').style.transform = 'scale(1.2)';
        this.querySelector('.new-badge-content').style.boxShadow = '0 0 60px rgba(255, 0, 128, 1), 0 15px 40px rgba(255, 0, 128, 0.7)';
    });
    
    floatingBadge.addEventListener('mouseleave', function() {
        this.querySelector('.new-badge-content').style.transform = 'scale(1)';
        this.querySelector('.new-badge-content').style.boxShadow = '0 0 40px rgba(255, 0, 128, 0.8), 0 10px 30px rgba(255, 0, 128, 0.5)';
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
    // Fade in body
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Staggered reveal of hero elements
    setTimeout(() => {
        const heroElements = [
            '.hero-badges',
            '.hero-title',
            '.hero-subtitle',
            '.hero-brands',
            '.hero-buttons',
            '.hero-flavors',
            '.hero-stats',
            '.hero-visual'
        ];
        
        heroElements.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, 500);
    
    // Animate floating elements entrance
    setTimeout(() => {
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'scale(0)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
            }, 1200 + (index * 200));
        });
    }, 500);
    
    // Animate sparkles entrance
    setTimeout(() => {
        const sparkles = document.querySelectorAll('.sparkle');
        sparkles.forEach((sparkle, index) => {
            sparkle.style.opacity = '0';
            sparkle.style.transform = 'scale(0)';
            
            setTimeout(() => {
                sparkle.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                sparkle.style.opacity = '1';
                sparkle.style.transform = 'scale(1)';
            }, 2000 + (index * 150));
        });
    }, 500);
    
    // Show new badge with pop effect
    setTimeout(() => {
        const newBadge = document.querySelector('.floating-new-badge');
        if (newBadge) {
            newBadge.style.opacity = '0';
            newBadge.style.transform = 'scale(0) rotate(180deg)';
            
            setTimeout(() => {
                newBadge.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                newBadge.style.opacity = '1';
                newBadge.style.transform = 'scale(1) rotate(0deg)';
            }, 2200);
        }
    }, 500);
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
