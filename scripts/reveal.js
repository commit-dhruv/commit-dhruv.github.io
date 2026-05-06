/* ============================================================
   Reveal-on-scroll: any element with class="reveal" gets ".in"
   added when it enters the viewport.
   ============================================================ */

(function () {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
})();
