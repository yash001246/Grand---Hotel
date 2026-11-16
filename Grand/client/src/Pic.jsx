import { useEffect, useState } from 'react';
import { IMAGES } from './data.js';

// Tries, in order: /images/<name>.jpg (your own photo) -> IMAGES[name] (stock URL) -> /images/<name>.svg (built-in art).
export default function Pic({ name, alt = '' }) {
  const art = name.replace(/^gallery-(\d+)$/, (_, n) => `gallery-${((+n - 1) % 6) + 1}`);
  const chain = [`/images/${name}.jpg`, IMAGES[name], `/images/${art}.svg`].filter(Boolean);
  const [i, setI] = useState(0);
  useEffect(() => setI(0), [name]);
  return <img className="pic" src={chain[i]} alt={alt || name} loading="lazy" onError={() => setI(n => Math.min(n + 1, chain.length - 1))} />;
}
