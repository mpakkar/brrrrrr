const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger) {
  burger.addEventListener('click', () => nav.classList.toggle('open'));
}
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Temporary published fallback: use the bundled hero visual anywhere an image asset is unavailable.
document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('error', () => {
    img.src = 'assets/hero-interior.svg';
  }, { once: true });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.getElementById('leadForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = document.getElementById('formSuccess');
    success.style.display = 'block';
    form.reset();
    setTimeout(() => success.style.display = 'none', 5000);
  });
}
