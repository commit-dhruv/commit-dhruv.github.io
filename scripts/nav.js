/* ============================================================
   Top nav behavior:
   1. Active-section highlighting based on scroll position.
   2. Border appears once scrolled past 8px.
   3. Hide on scroll-down, show on scroll-up.
   ============================================================ */

(function () {
  const links = document.querySelectorAll('nav.top a');
  const linkMap = new Map();
  links.forEach((a) => {
    const id = a.getAttribute('href').slice(1);
    linkMap.set(id, a);
  });
  const sections = [...linkMap.keys()]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function updateActive() {
    // Clear when near the top
    if (window.scrollY < 80) {
      links.forEach((a) => a.classList.remove('is-active'));
      return;
    }
    const probeY = window.innerHeight * 0.32;
    let current = null;
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= probeY) current = sec;
    }
    links.forEach((a) => a.classList.remove('is-active'));
    if (current) {
      const link = linkMap.get(current.id);
      if (link) link.classList.add('is-active');
    }
  }

  let raf = 0;
  function onActiveScroll() {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      updateActive();
    });
  }
  window.addEventListener('scroll', onActiveScroll, { passive: true });
  window.addEventListener('resize', onActiveScroll);
  updateActive();

  // Border + hide-on-scroll-down
  const nav = document.querySelector('nav.top');
  let lastY = window.scrollY;
  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 8);
    const goingDown = y > lastY;
    if (y > 80 && goingDown) nav.classList.add('hidden');
    else nav.classList.remove('hidden');
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
