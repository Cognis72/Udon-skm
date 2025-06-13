// Language Management
class LanguageManager {
    constructor() {
        this.language = localStorage.getItem('language') || 'en';
        this.init();
    }

    init() {
        // Apply saved language on page load
        this.applyLanguage(this.language);
        
        // Set up language toggle button
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
            this.updateLanguageButton();
        }
    }

    toggleLanguage() {
        this.language = this.language === 'en' ? 'th' : 'en';
        this.applyLanguage(this.language);
        this.updateLanguageButton();
        
        // Save language preference
        localStorage.setItem('language', this.language);
    }

    applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-en][data-th]');
        elements.forEach(element => {
            if (lang === 'th' && element.getAttribute('data-th')) {
                element.textContent = element.getAttribute('data-th');
            } else if (lang === 'en' && element.getAttribute('data-en')) {
                element.textContent = element.getAttribute('data-en');
            }
        });

        // Update placeholders for inputs and textareas
        const placeholderElements = document.querySelectorAll('[data-en-placeholder][data-th-placeholder]');
        placeholderElements.forEach(element => {
            if (lang === 'th' && element.getAttribute('data-th-placeholder')) {
                element.placeholder = element.getAttribute('data-th-placeholder');
            } else if (lang === 'en' && element.getAttribute('data-en-placeholder')) {
                element.placeholder = element.getAttribute('data-en-placeholder');
            }
        });
        
        // Update document language attribute
        document.documentElement.setAttribute('lang', lang);
    }

    updateLanguageButton() {
        const langText = document.querySelector('.lang-text');
        if (langText) {
            langText.textContent = this.language === 'en' ? 'TH' : 'EN';
        }
    }
}

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        // Apply saved theme on page load
        this.applyTheme(this.theme);
        
        // Set up theme toggle button
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
            this.updateThemeIcon();
        }
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.theme);
        this.updateThemeIcon();
        
        // Save theme preference
        localStorage.setItem('theme', this.theme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    updateThemeIcon() {
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = this.theme === 'light' ? '🌙' : '☀️';
        }
    }
}

// Mobile Navigation Management
class MobileNavigation {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        if (this.hamburger && this.navMenu) {
            // Toggle mobile menu
            this.hamburger.addEventListener('click', () => this.toggleMobileMenu());
            
            // Close mobile menu when clicking on nav links
            this.navLinks.forEach(link => {
                link.addEventListener('click', () => this.closeMobileMenu());
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.hamburger.contains(e.target) && !this.navMenu.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });

            // Handle window resize
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    toggleMobileMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        
        // Toggle body scroll
        document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : '';
    }

    closeMobileMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Smooth Scrolling for Navigation Links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleSmoothScroll(e));
        });
    }

    handleSmoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// Header Scroll Effect
class HeaderScrollEffect {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        if (this.header) {
            window.addEventListener('scroll', () => this.handleScroll());
        }
    }

    handleScroll() {
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 100) {
            this.header.style.background = 'var(--header-bg)';
            this.header.style.boxShadow = 'var(--shadow)';
        } else {
            this.header.style.background = 'var(--header-bg)';
            this.header.style.boxShadow = 'none';
        }
    }
}

// Animation on Scroll (Simple fade-in effect)
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        // Create intersection observer
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            this.observerOptions
        );

        // Observe elements
        const animatedElements = document.querySelectorAll('.feature-card, .hero-content, .hero-visual');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            this.observer.observe(el);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Form Validation (for future contact forms)
class FormValidator {
    constructor() {
        this.init();
    }

    init() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        });
    }

    handleFormSubmit(e) {
        const form = e.target;
        const isValid = this.validateForm(form);
        
        if (!isValid) {
            e.preventDefault();
        }
    }

    validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showError(input, 'This field is required');
                isValid = false;
            } else {
                this.clearError(input);
            }
        });

        return isValid;
    }

    showError(input, message) {
        input.classList.add('error');
        let errorElement = input.parentNode.querySelector('.error-message');
        
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            errorElement.style.color = '#ef4444';
            errorElement.style.fontSize = '0.875rem';
            errorElement.style.marginTop = '0.25rem';
            errorElement.style.display = 'block';
            input.parentNode.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }

    clearError(input) {
        input.classList.remove('error');
        const errorElement = input.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
}

// Button Click Effects
class ButtonEffects {
    constructor() {
        this.init();
    }

    init() {
        const buttons = document.querySelectorAll('.cta-button');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => this.createRippleEffect(e));
        });
    }

    createRippleEffect(e) {
        const button = e.target;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new LanguageManager();
    new ThemeManager();
    new MobileNavigation();
    new SmoothScroll();
    new HeaderScrollEffect();
    new ScrollAnimations();
    new FormValidator();
    new ButtonEffects();
    
    // Add ripple animation keyframes
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    console.log('UDON SKM website initialized successfully!');
});

// Handle page visibility change (pause animations when tab is not active)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause any running animations
        document.documentElement.style.animationPlayState = 'paused';
    } else {
        // Resume animations
        document.documentElement.style.animationPlayState = 'running';
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(() => {
    // Any additional scroll-based functionality can be added here
}, 10));

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const mobileNav = document.querySelector('.nav-menu.active');
        if (mobileNav) {
            const hamburger = document.getElementById('hamburger');
            if (hamburger) {
                hamburger.click();
            }
        }
    }
    
    // Toggle theme with Ctrl/Cmd + D
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.click();
        }
    }
});

// Export classes for potential future use
window.UDONComponents = {
    ThemeManager,
    MobileNavigation,
    SmoothScroll,
    HeaderScrollEffect,
    ScrollAnimations,
    FormValidator,
    ButtonEffects
};
