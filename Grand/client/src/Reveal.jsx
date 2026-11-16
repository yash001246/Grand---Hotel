import { useEffect, useRef, useState } from 'react';
// Fades/slides children in when scrolled into view
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(); const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.15 });
    io.observe(ref.current); return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>;
}

// Number that counts up when scrolled into view
export function Counter({ to, suffix = '' }) {
  const ref = useRef(); const [n, setN] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      const tick = t => { const p = Math.min((t - t0) / 1600, 1); setN(Math.round(to * (1 - Math.pow(1 - p, 3)))); p < 1 && requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(ref.current); return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}
