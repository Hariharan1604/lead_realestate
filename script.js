/* ═══════════════════════════════════════════════════
   LeadForce AI — Interactive Scripts
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initParticles();
    initCountUp();
    initScrollReveal();
    initContactForm();
    initSmoothScroll();
    initActiveNav();
});

/* ── Navbar Scroll Effect ── */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile toggle
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        links.classList.toggle('open');
        document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    links.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('open');
            links.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

/* ── Hero Floating Particles ── */
function initParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    const particleCount = 30;
    const colors = [
        'rgba(59, 130, 246, 0.4)',
        'rgba(139, 92, 246, 0.3)',
        'rgba(6, 182, 212, 0.3)',
        'rgba(245, 158, 11, 0.2)',
    ];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('hero-particle');

        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 15;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            background: ${color};
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            box-shadow: 0 0 ${size * 3}px ${color};
        `;

        container.appendChild(particle);
    }
}

/* ── Animated Counter ── */
function initCountUp() {
    const counters = document.querySelectorAll('.stat-number');
    let started = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el, target) {
    const duration = 2000;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);

        el.textContent = current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

/* ── Scroll Reveal ── */
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.about-card, .service-card, .timeline-item, .tech-feature, .testimonial-card'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 0.1}s`;
        observer.observe(el);
    });
}

/* ── Contact Form ── */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = document.getElementById('submitBtn');
        const originalContent = btn.innerHTML;

        // Loading state
        btn.innerHTML = '<span>Sending...</span>';
        btn.disabled = true;
        btn.style.opacity = '0.7';

        // Simulate send
        setTimeout(() => {
            // Show success
            form.innerHTML = `
                <div class="form-success show">
                    <div class="form-success-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                    </div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </div>
            `;
        }, 1500);
    });
}

/* ── Smooth Scroll ── */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ── Active Nav Link on Scroll ── */
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}
