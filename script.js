// ========== LOADING SCREEN ==========
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 1200);
});

// ========== HAMBURGER MENU ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 4px 0 var(--black)';
  } else {
    navbar.style.boxShadow = 'none';
  }
  lastScroll = currentScroll;
});

// ========== DARK MODE ==========
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
  themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  themeIcon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', next);
});

// ========== PROGRESS BARS ANIMATION ==========
function animateProgressBars() {
  document.querySelectorAll('.progress-fill').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.width = progress + '%';
  });
}

// ========== SCROLL REVEAL ==========
const revealElements = document.querySelectorAll('.section-header, .skill-card, .project-card, .achievement-card, .testimonial-card, .about-content, .contact-wrapper');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      if (entry.target.closest('#skills')) {
        animateProgressBars();
      }
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ========== CURSOR ==========
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', (e) => {
  cursorDot.style.left = e.clientX + 'px';
  cursorDot.style.top = e.clientY + 'px';

  setTimeout(() => {
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
  }, 50);
});

document.querySelectorAll('a, button, .skill-card, .project-card, .testimonial-card, .achievement-card, .contact-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorDot.style.width = '20px';
    cursorDot.style.height = '20px';
    cursorDot.style.background = 'var(--yellow)';
    cursorRing.style.width = '50px';
    cursorRing.style.height = '50px';
    cursorRing.style.borderColor = 'var(--yellow)';
  });
  el.addEventListener('mouseleave', () => {
    cursorDot.style.width = '12px';
    cursorDot.style.height = '12px';
    cursorDot.style.background = 'var(--black)';
    cursorRing.style.width = '40px';
    cursorRing.style.height = '40px';
    cursorRing.style.borderColor = 'var(--black)';
  });
});

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('.btn-submit');
  const original = btn.innerHTML;
  btn.innerHTML = 'Terkirim! <i class="fas fa-check"></i>';
  btn.style.background = 'var(--pink)';
  setTimeout(() => {
    btn.innerHTML = original;
    btn.style.background = '';
    contactForm.reset();
  }, 3000);
});

// ========== YEAR ==========
document.getElementById('year').textContent = new Date().getFullYear();
