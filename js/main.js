// =================
// LENZOU MAIN SCRIPT
// =================

document.addEventListener('DOMContentLoaded', function() {
    
    // =================
    // MOBILE NAVIGATION
    // =================
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // =================
    // SMOOTH SCROLLING
    // =================
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =================
    // NAVBAR SCROLL EFFECT
    // =================
    
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add background on scroll
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // =================
    // SCROLL ANIMATIONS
    // =================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.about-card, .service-card, .portfolio-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // =================
    // HERO ANIMATIONS
    // =================
    
    // Typing effect for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Animate hero elements on load
    setTimeout(() => {
        const titleLine1 = document.querySelector('.title-line-1');
        const titleLine2 = document.querySelector('.title-line-2');
        
        if (titleLine1 && titleLine2) {
            typeWriter(titleLine1, "Don't think.", 80);
            setTimeout(() => {
                typeWriter(titleLine2, "Just link!", 80);
            }, 1200);
        }
    }, 500);

    // =================
    // FLOATING SHAPES ANIMATION
    // =================
    
    const floatShapes = document.querySelectorAll('.float-shape');
    
    floatShapes.forEach((shape, index) => {
        // Add random movement
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            const currentTransform = shape.style.transform || '';
            
            if (shape.classList.contains('square')) {
                shape.style.transform = `translate(calc(-50% + ${randomX}px), calc(-50% + ${randomY}px)) rotate(${45 + Math.random() * 360}deg)`;
            } else {
                shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
            }
        }, 3000 + index * 1000);
    });

    // =================
    // GEOMETRIC BACKGROUND ANIMATION
    // =================
    
    const geometricShapes = document.querySelectorAll('.geometric-shape');
    
    geometricShapes.forEach((shape, index) => {
        // Random position changes
        setInterval(() => {
            const randomX = Math.random() * 10 - 5;
            const randomY = Math.random() * 10 - 5;
            shape.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 360}deg)`;
        }, 4000 + index * 1500);
    });

    // =================
    // PORTFOLIO HOVER EFFECTS
    // =================
    
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    portfolioCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            
            // Add glowing effect
            const glowEffect = document.createElement('div');
            glowEffect.className = 'glow-effect';
            glowEffect.style.cssText = `
                position: absolute;
                top: -10px;
                left: -10px;
                right: -10px;
                bottom: -10px;
                background: linear-gradient(45deg, #FF0000, #ff4444, #FF0000);
                border-radius: 25px;
                z-index: -1;
                opacity: 0.3;
                blur: 20px;
            `;
            this.appendChild(glowEffect);
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            // Remove glow effect
            const glowEffect = this.querySelector('.glow-effect');
            if (glowEffect) {
                glowEffect.remove();
            }
        });
    });

    // =================
    // SERVICE CARDS INTERACTION
    // =================
    
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add pulsing effect to icon
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.animation = 'pulse 1s infinite';
            }
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.animation = '';
            }
        });
    });

    // =================
    // CTA BUTTON EFFECTS
    // =================
    
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // =================
    // PARALLAX EFFECTS
    // =================
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.neural-grid, .geometric-lines');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // =================
    // CONTACT FORM ANIMATION
    // =================
    
    const megaButton = document.querySelector('.cta-button.mega');
    
    if (megaButton) {
        megaButton.addEventListener('mouseenter', function() {
            this.style.animation = 'bounce 0.6s ease-in-out';
        });

        megaButton.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    }

    // =================
    // SOCIAL LINKS ANIMATION
    // =================
    
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(360deg)';
            this.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    // =================
    // LOADING ANIMATION
    // =================
    
    window.addEventListener('load', function() {
        // Fade in body content
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        
        // Animate hero content
        const heroContent = document.querySelector('.hero-content');
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroContent) {
            heroContent.style.animation = 'slideInLeft 1s ease-out';
        }
        
        if (heroVisual) {
            heroVisual.style.animation = 'slideInRight 1s ease-out 0.3s both';
        }
    });

    // =================
    // CUSTOM CURSOR EFFECT
    // =================
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: #FF0000;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX - 5 + 'px';
        cursor.style.top = e.clientY - 5 + 'px';
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
    });

    // Enlarge cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .portfolio-card, .service-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.marginLeft = '-10px';
            cursor.style.marginTop = '-10px';
            cursor.style.background = 'rgba(255, 0, 0, 0.3)';
            cursor.style.border = '2px solid #FF0000';
        });

        element.addEventListener('mouseleave', function() {
            cursor.style.width = '10px';
            cursor.style.height = '10px';
            cursor.style.marginLeft = '0';
            cursor.style.marginTop = '0';
            cursor.style.background = '#FF0000';
            cursor.style.border = 'none';
        });
    });

    // =================
    // PERFORMANCE OPTIMIZATION
    // =================
    
    // Debounce scroll events
    let scrollTimeout;
    
    function debounce(func, wait) {
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(scrollTimeout);
                func(...args);
            };
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll-heavy functions
    const debouncedScrollHandler = debounce(function() {
        // Additional scroll-based animations can be added here
    }, 16); // ~60fps

    window.addEventListener('scroll', debouncedScrollHandler);

});

// =================
// CSS ANIMATIONS (injected via JS)
// =================

const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }

    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }

    @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
            transform: translateY(0) scale(1);
        }
        40%, 43% {
            transform: translateY(-10px) scale(1.05);
        }
        70% {
            transform: translateY(-5px) scale(1.02);
        }
        90% {
            transform: translateY(-2px) scale(1.01);
        }
    }

    body {
        opacity: 0;
    }

    @media (max-width: 768px) {
        .custom-cursor {
            display: none;
        }
    }
`;

document.head.appendChild(style);