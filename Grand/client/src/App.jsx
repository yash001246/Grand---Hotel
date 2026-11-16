import { useEffect, useState } from 'react';
import { NavLink, Link, Routes, Route, useLocation } from 'react-router-dom';
import { Home, About, Facilities, Facility, Gallery, Contact } from './pages.jsx';
import { FACILITIES } from './data.js';

const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
const ICONS = {
  'rooms-and-suites': <svg viewBox="0 0 24 24" {...P}><path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.6"/></svg>,
  'banquet-hall': <svg viewBox="0 0 24 24" {...P}><path d="M12 3v3M8 21V11l4-3 4 3v10M4 21h16M10 21v-4h4v4"/><path d="M9 7h6"/></svg>,
  'wedding-halls': <svg viewBox="0 0 24 24" {...P}><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>,
  'engagement-halls': <svg viewBox="0 0 24 24" {...P}><circle cx="12" cy="15" r="5"/><path d="M9 6l1.5-3h3L15 6l-3 3z"/></svg>,
  'makeup-studio': <svg viewBox="0 0 24 24" {...P}><path d="M9 21V10h6v11zM10 10V6l2-3 2 3v4M9 15h6"/></svg>,
};

export default function App() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); setOpen(false); }, [pathname]);
  useEffect(() => { const f = () => setSolid(scrollY > 40); f(); addEventListener('scroll', f); return () => removeEventListener('scroll', f); }, []);

  return (<>
    <header className={`nav ${solid ? 'solid' : ''}`}>
      <Link to="/" className="logo">GRAND<span>Hotel & Banquet</span></Link>
      <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      <nav className={open ? 'open' : ''}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <div className="dropdown">
          <NavLink to="/facilities" end>Facilities <i className="chev" /></NavLink>
          <div className="menu">{FACILITIES.map(f => <NavLink key={f.slug} to={`/facilities/${f.slug}`} className="mi"><span className="ico">{ICONS[f.slug]}</span><span><b>{f.title}</b><small>{f.tag}</small></span></NavLink>)}</div>
        </div>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <Link to="/contact" className="btn">Book Now</Link>
      </nav>
    </header>
    <main key={pathname} className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/facilities/:slug" element={<Facility />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
    <footer>© {new Date().getFullYear()} Grand Hotel & Banquet Hall</footer>
  </>);
}
