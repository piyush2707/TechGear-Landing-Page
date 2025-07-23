// Optional scroll reveal effect for product section
window.addEventListener('scroll', () => {
  const section = document.querySelector('#products');
  const top = section.getBoundingClientRect().top;
  const height = window.innerHeight;

  if (top < height - 100) {
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
  }
});

// Init animation state
const section = document.querySelector('#products');
section.style.opacity = '0';
section.style.transform = 'translateY(40px)';
section.style.transition = 'all 1s ease';
