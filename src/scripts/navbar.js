document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  const navbar = document.getElementById('navbar');

  let menuOpen = false;
  let lastScroll = window.scrollY;

  toggleBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (menuOpen && !mobileMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
      menuOpen = false;
    }
  });

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll) {
      navbar.classList.add('opacity-0', '-translate-y-10');
    } else {
      navbar.classList.remove('opacity-0', '-translate-y-10');
    }
    lastScroll = currentScroll;
  });
});
