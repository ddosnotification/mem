// ===============================
// NAVIGATION SCROLL EFFECT
// ===============================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===============================
// MOBILE MENU TOGGLE
// ===============================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===============================
// PARTICLES.JS CONFIGURATION
// ===============================
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
            value: ['#FF1744', '#FF4081', '#FF80AB']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.3,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 4,
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
            color: '#FF4081',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
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

// ===============================
// AOS (ANIMATE ON SCROLL) INIT
// ===============================
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// ===============================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===============================
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

// ===============================
// FORM SUBMISSION HANDLER
// ===============================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Show success message (you can replace this with actual form submission)
        alert('Ďakujeme za tvoju správu! Ozveme sa čoskoro. 💋');
        
        // Reset form
        contactForm.reset();
    });
}

// ===============================
// PARALLAX EFFECT ON SCROLL
// ===============================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===============================
// PRODUCT CARD TILT EFFECT
// ===============================
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

// ===============================
// FEATURE CARD HOVER ANIMATION
// ===============================
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.feature-icon i');
        icon.style.animation = 'none';
        setTimeout(() => {
            icon.style.animation = 'pulse 0.5s ease-in-out';
        }, 10);
    });
});

// ===============================
// SCROLL PROGRESS INDICATOR
// ===============================
const createScrollProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #FF1744, #FF4081, #FF80AB);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
        box-shadow: 0 0 20px rgba(255, 23, 68, 0.5);
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercentage + '%';
    });
};

createScrollProgressBar();

// ===============================
// NUMBER COUNTER ANIMATION
// ===============================
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Observe elements with counters (if you add them)
const observeCounters = () => {
    const counters = document.querySelectorAll('[data-counter]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.counter);
                animateValue(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
};

observeCounters();

// ===============================
// CURSOR TRAIL EFFECT (OPTIONAL)
// ===============================
const createCursorTrail = () => {
    let cursorTrail = [];
    const trailLength = 10;
    
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 968) return; // Disable on mobile
        
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, rgba(255, 23, 68, 0.8), transparent);
            border-radius: 50%;
            pointer-events: none;
            left: ${e.clientX - 5}px;
            top: ${e.clientY - 5}px;
            z-index: 9998;
            animation: fadeOut 0.5s ease-out forwards;
        `;
        
        document.body.appendChild(trail);
        cursorTrail.push(trail);
        
        if (cursorTrail.length > trailLength) {
            const oldTrail = cursorTrail.shift();
            oldTrail.remove();
        }
        
        setTimeout(() => {
            trail.remove();
        }, 500);
    });
};

// Add fadeOut animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(style);

createCursorTrail();

// ===============================
// LOADING ANIMATION
// ===============================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add smooth entrance animation to hero
    const heroText = document.querySelector('.hero-text');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroText && heroVisual) {
        heroText.style.opacity = '0';
        heroVisual.style.opacity = '0';
        
        setTimeout(() => {
            heroText.style.transition = 'opacity 1s ease, transform 1s ease';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 100);
        
        setTimeout(() => {
            heroVisual.style.transition = 'opacity 1s ease, transform 1s ease';
            heroVisual.style.opacity = '1';
            heroVisual.style.transform = 'translateX(0)';
        }, 300);
    }
});

// ===============================
// EASTER EGG: KONAMI CODE
// ===============================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s ease infinite';
        alert('🎉 Našiel si tajný kód! Pod peros level: Master! 💋');
        
        // Add rainbow animation
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// ===============================
// AGE VERIFICATION (OPTIONAL)
// ===============================
const checkAgeVerification = () => {
    const ageVerified = localStorage.getItem('ageVerified');
    
    if (!ageVerified) {
        // You can add an age verification modal here
        const userAge = confirm('Máš viac ako 18 rokov? Tento web je určený pre dospelých.');
        
        if (userAge) {
            localStorage.setItem('ageVerified', 'true');
        } else {
            // Redirect or show warning
            document.body.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column;"><h1>⚠️ Prístup odmietnutý</h1><p>Tento web je určený len pre osoby staršie ako 18 rokov.</p></div>';
        }
    }
};

// Uncomment to enable age verification
// checkAgeVerification();

console.log('🔥 podperos website loaded! Always under the lip! 💋');
