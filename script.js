// ===================================
// Initialize AOS (Animate On Scroll)
// ===================================
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
});

// ===================================
// Navigation Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// ===================================
// Mobile Menu Toggle
// ===================================
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinksContainer.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
    }
});

// ===================================
// Active Nav Link on Scroll
// ===================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Hero Lips Animation Enhancement
// ===================================
const lipsWrapper = document.querySelector('.lips-wrapper');
let mouseX = 0;
let mouseY = 0;
let lipsX = 0;
let lipsY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
});

function animateLips() {
    lipsX += (mouseX - lipsX) * 0.1;
    lipsY += (mouseY - lipsY) * 0.1;
    
    if (lipsWrapper) {
        lipsWrapper.style.transform = `translate(${lipsX}px, ${lipsY}px)`;
    }
    
    requestAnimationFrame(animateLips);
}

animateLips();

// ===================================
// Floating Cards Random Movement
// ===================================
const floatingCards = document.querySelectorAll('.floating-card');

floatingCards.forEach((card, index) => {
    setInterval(() => {
        const randomX = (Math.random() - 0.5) * 20;
        const randomY = (Math.random() - 0.5) * 20;
        const randomRotate = (Math.random() - 0.5) * 5;
        
        card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
    }, 3000 + index * 1000);
});

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - scrolled / 800;
    }
    
    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// ===================================
// Vending Machine Interactive Buttons
// ===================================
const machineButtons = document.querySelectorAll('.machine-button');
const screenItems = document.querySelectorAll('.screen-item');

machineButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all items
        screenItems.forEach(item => item.classList.remove('active'));
        
        // Add active class to random item
        const randomIndex = Math.floor(Math.random() * screenItems.length);
        screenItems[randomIndex].classList.add('active');
        
        // Button press animation
        button.style.transform = 'scale(0.9)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
        
        // Play click sound effect (visual feedback)
        createRipple(button);
    });
});

// Create ripple effect
function createRipple(element) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.width = '100%';
    ripple.style.height = '100%';
    ripple.style.top = '0';
    ripple.style.left = '0';
    ripple.style.background = 'rgba(255, 0, 110, 0.5)';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.pointerEvents = 'none';
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Product Cards Tilt Effect
// ===================================
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===================================
// Feature Cards Hover Effect
// ===================================
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        featureCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.style.opacity = '0.5';
                otherCard.style.transform = 'scale(0.95)';
            }
        });
    });
    
    card.addEventListener('mouseleave', () => {
        featureCards.forEach(otherCard => {
            otherCard.style.opacity = '1';
            otherCard.style.transform = 'scale(1)';
        });
    });
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ff006e 0%, #ff6b9d 100%);
        color: white;
        padding: 30px 50px;
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(255, 0, 110, 0.3);
        z-index: 10000;
        text-align: center;
        animation: slideIn 0.5s ease-out;
    `;
    successMessage.innerHTML = `
        <div style="font-size: 48px; margin-bottom: 15px;">✨</div>
        <h3 style="margin-bottom: 10px; font-size: 24px;">Správa odoslaná!</h3>
        <p style="margin: 0;">Ďakujeme za kontakt. Ozve sa ti čoskoro 💋</p>
    `;
    
    document.body.appendChild(successMessage);
    
    // Add slide in animation
    const slideInStyle = document.createElement('style');
    slideInStyle.textContent = `
        @keyframes slideIn {
            from {
                transform: translate(-50%, -60%);
                opacity: 0;
            }
            to {
                transform: translate(-50%, -50%);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(slideInStyle);
    
    // Reset form
    contactForm.reset();
    
    // Remove message after 3 seconds
    setTimeout(() => {
        successMessage.style.animation = 'slideOut 0.5s ease-out';
        setTimeout(() => {
            successMessage.remove();
        }, 500);
    }, 3000);
    
    // Add slide out animation
    const slideOutStyle = document.createElement('style');
    slideOutStyle.textContent = `
        @keyframes slideOut {
            from {
                transform: translate(-50%, -50%);
                opacity: 1;
            }
            to {
                transform: translate(-50%, -40%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(slideOutStyle);
});

// ===================================
// Cursor Trail Effect
// ===================================
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    // Keep only recent positions
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// Draw cursor trail
function drawCursorTrail() {
    // Remove old trail elements
    document.querySelectorAll('.cursor-trail').forEach(el => {
        const age = Date.now() - parseInt(el.dataset.time);
        if (age > 500) {
            el.remove();
        }
    });
    
    requestAnimationFrame(drawCursorTrail);
}

drawCursorTrail();

// ===================================
// Stats Counter Animation
// ===================================
const statsNumbers = document.querySelectorAll('.stat-number');

function animateCounter(element, target, suffix = '') {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statsSection = entry.target;
            const stats = statsSection.querySelectorAll('.stat-number');
            
            stats.forEach(stat => {
                const text = stat.textContent;
                
                // Don't animate if already done
                if (stat.dataset.animated) return;
                stat.dataset.animated = 'true';
                
                if (text.includes('24/7')) {
                    stat.textContent = '24/7';
                } else if (text.includes('50+')) {
                    animateCounter(stat, 50, '+');
                } else if (text.includes('100%')) {
                    animateCounter(stat, 100, '%');
                }
            });
            
            statsObserver.unobserve(statsSection);
        }
    });
}, observerOptions);

const heroSection = document.querySelector('.hero');
if (heroSection) {
    statsObserver.observe(heroSection);
}

// ===================================
// Page Load Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// Easter Egg: Konami Code
// ===================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Make lips bigger and add party effect
    const lipsWrapper = document.querySelector('.lips-wrapper');
    if (lipsWrapper) {
        lipsWrapper.style.transform = 'scale(2)';
        lipsWrapper.style.transition = 'transform 1s ease-out';
        
        // Create confetti effect
        for (let i = 0; i < 50; i++) {
            createConfetti();
        }
        
        // Reset after 3 seconds
        setTimeout(() => {
            lipsWrapper.style.transform = 'scale(1)';
        }, 3000);
    }
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${['#ff006e', '#ff6b9d', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 4)]};
        top: -10px;
        left: ${Math.random() * 100}%;
        border-radius: 50%;
        z-index: 9999;
        animation: confetti-fall ${2 + Math.random() * 3}s linear forwards;
    `;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Add confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confetti-fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// ===================================
// Performance Optimization: Lazy Loading
// ===================================
const lazyElements = document.querySelectorAll('[data-aos]');

const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px'
});

lazyElements.forEach(element => {
    lazyObserver.observe(element);
});

// ===================================
// Console Easter Egg
// ===================================
console.log('%c💋 PODPEROS ', 'background: linear-gradient(135deg, #ff006e 0%, #ff6b9d 100%); color: white; padding: 10px 20px; font-size: 20px; font-weight: bold;');
console.log('%cPod pery. Na ceste. 24/7. 🔥', 'color: #ff6b9d; font-size: 14px;');
console.log('%cHľadáš prácu? Pošli CV na info@podperos.sk 📧', 'color: #8892b0; font-size: 12px;');

// ===================================
// Add Loading Indicator
// ===================================
function showLoading() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0f0f1e;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease-out;
    `;
    
    loader.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 64px; animation: pulse 2s infinite;">💋</div>
            <h2 style="color: #ff006e; font-family: 'Bebas Neue', cursive; font-size: 48px; letter-spacing: 3px; margin-top: 20px;">PODPEROS</h2>
            <p style="color: #8892b0; margin-top: 10px;">Loading...</p>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
}

// Show loading indicator
if (document.readyState === 'loading') {
    showLoading();
}
