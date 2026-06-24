// ===========================
//  EMBER & SPICE — CAROUSEL
// ===========================
const cards = document.querySelectorAll('.carousel-card');
const dots = document.querySelectorAll('.dot');
const total = cards.length;
let current = 0;
let autoTimer;

function update() {
  cards.forEach((card, i) => {
    const offset = i - current;
    const abs = Math.abs(offset);
    const x = offset * 130;
    const scale = abs === 0 ? 1 : abs === 1 ? 0.78 : 0.62;
    const opacity = abs === 0 ? 1 : abs === 1 ? 0.6 : abs === 2 ? 0.3 : 0;
    const blur = abs === 0 ? 0 : abs === 1 ? 2 : 5;
    const z = total - abs;
    const shadow = abs === 0 ? '0 30px 70px rgba(0,0,0,0.5)' : 'none';
    const border = abs === 0 ? '1px solid rgba(200,96,26,0.5)' : '1px solid transparent';
    card.style.transform = `translate(calc(-50% + ${x}px), -50%) scale(${scale})`;
    card.style.opacity = opacity;
    card.style.filter = `blur(${blur}px)`;
    card.style.zIndex = z;
    card.style.boxShadow = shadow;
    card.style.border = border;
    card.style.pointerEvents = abs > 2 ? 'none' : 'auto';
  });
  dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
}

function goTo(index) { current = index; update(); resetAuto(); }
function next() { current = (current + 1) % total; update(); }
function resetAuto() { clearInterval(autoTimer); autoTimer = setInterval(next, 3000); }

cards.forEach((card, i) => card.addEventListener('click', () => goTo(i)));
dots.forEach(dot => dot.addEventListener('click', () => goTo(+dot.dataset.i)));

let startX = 0;
document.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  const diff = startX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) {
    current = diff > 0 ? (current + 1) % total : (current - 1 + total) % total;
    update(); resetAuto();
  }
});

update();
resetAuto();
