/**
 * UIT CODING CLUB (UCC) - OFFICIAL BRAND SCRIPT
 * High Performance, Zero-Dependency, Fully Accessible
 */

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.getElementById('mobileToggleBtn');
  const navDrawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const desktopLinks = document.querySelectorAll('.nav-item-link');

  // Helper: Open / Close Mobile Navigation
  const openMenu = () => {
    if (!toggleBtn || !navDrawer || !backdrop) return;
    toggleBtn.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    navDrawer.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.body.classList.add('nav-open');
  };

  const closeMenu = () => {
    if (!toggleBtn || !navDrawer || !backdrop) return;
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    navDrawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navDrawer && navDrawer.classList.contains('is-open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  // Close drawer on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navDrawer && navDrawer.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Smooth scroll with sticky navbar height compensation
  const allAnchors = document.querySelectorAll('a[href^="#"]');
  allAnchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        closeMenu();

        const navHeight = navbar ? navbar.offsetHeight : 72;
        const targetPos = targetElem.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: Math.max(0, targetPos),
          behavior: 'smooth'
        });

        // Update URL hash without jumping
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // Scrollspy: highlight active section in navbar
  const sections = document.querySelectorAll('section[id]');
  const handleScroll = () => {
    const scrollY = window.pageYOffset;
    const navHeight = (navbar ? navbar.offsetHeight : 72) + 20;

    sections.forEach(sec => {
      const secTop = sec.offsetTop - navHeight;
      const secHeight = sec.offsetHeight;
      const secId = sec.getAttribute('id');

      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
        mobileLinks.forEach(link => {
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});
