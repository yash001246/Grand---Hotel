import { useEffect } from 'react';

// Jelly / spring effect for every element matching SEL (event delegation, no per-card code needed)
const SEL = '.card, .quote, .tile, .perks li, .step';

export default function useJelly() {
  useEffect(() => {
    if (matchMedia('(hover: none)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const S = new WeakMap(), active = new Set();
    let raf = 0, cur = null;
    const st = el => { let s = S.get(el); if (!s) S.set(el, s = { x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0 }); return s; };

    const loop = () => {
      active.forEach(el => {
        const s = S.get(el);
        s.vx = (s.vx + (s.tx - s.x) * 0.1) * 0.8;   // spring stiffness 0.1, damping 0.8
        s.vy = (s.vy + (s.ty - s.y) * 0.1) * 0.8;
        s.x += s.vx; s.y += s.vy;
        const sq = Math.max(-0.08, Math.min(0.08, (Math.abs(s.vx) - Math.abs(s.vy)) * 0.006));
        el.style.transform = `translate3d(${s.x}px,${s.y}px,0) rotate(${s.vx * 0.15}deg) scale(${1 + sq},${1 - sq})`;
        if (!s.tx && !s.ty && Math.abs(s.x) + Math.abs(s.y) + Math.abs(s.vx) + Math.abs(s.vy) < 0.05) {
          el.style.transform = ''; active.delete(el);
        }
      });
      raf = active.size ? requestAnimationFrame(loop) : 0;
    };
    const start = el => { active.add(el); if (!raf) raf = requestAnimationFrame(loop); };
    const release = el => { const s = st(el); s.tx = s.ty = 0; start(el); };

    const move = e => {
      const el = e.target.closest ? e.target.closest(SEL) : null;
      if (cur && cur !== el) release(cur);
      cur = el; if (!el) return;
      const r = el.getBoundingClientRect(), s = st(el);
      s.tx = ((e.clientX - r.left) / r.width - 0.5) * 22;    // 22 = how far the card follows the cursor
      s.ty = ((e.clientY - r.top) / r.height - 0.5) * 22;
      start(el);
    };
    const down = e => {                                       // click = boing
      const el = e.target.closest ? e.target.closest(SEL) : null; if (!el) return;
      const s = st(el); s.vy += 9; s.vx += (Math.random() - 0.5) * 8; start(el);
    };
    const leave = () => { if (cur) release(cur); cur = null; };

    document.addEventListener('pointermove', move);
    document.addEventListener('pointerdown', down);
    document.documentElement.addEventListener('pointerleave', leave);
    return () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerdown', down);
      document.documentElement.removeEventListener('pointerleave', leave);
      cancelAnimationFrame(raf);
    };
  }, []);
}