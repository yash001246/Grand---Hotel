import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Reveal, { Counter } from './Reveal.jsx';
import Pic from './Pic.jsx';
import {
  FACILITIES, EVENTS, ROOMS, STATS, QUOTES, FAQS, GALLERY, GALLERY_ALL, AMENITIES, MENU, PACKAGES,
  CAPACITY, PROCESS, TIMELINE, VALUES, TEAM, NEARBY, POLICIES,  SOCIAL,
} from './data.js';

const Banner = ({ eyebrow, title, img }) => (
  <section className={`banner ${img ? 'has-img' : ''}`}>
    {img && <div className="banner-bg"><Pic name={img} /></div>}
    <p className="eyebrow">{eyebrow}</p><h1>{title}</h1>
  </section>);
const Head = ({ title, text }) => <Reveal><h2>{title}</h2>{text && <p>{text}</p>}</Reveal>;
const Card = ({ to, img, title, text, delay }) => (
  <Reveal delay={delay}><Link to={to || '#'} className="card hover"><div className="img"><Pic name={img} alt={title} /></div><h3>{title}</h3><p>{text}</p></Link></Reveal>);
const Stats = () => <section className="stats">{STATS.map(([n, s, l]) => <Reveal key={l}><strong><Counter to={n} suffix={s} /></strong><span>{l}</span></Reveal>)}</section>;
const GalleryGrid = ({ items = GALLERY }) => <div className="gallery">{items.map((g, i) => <Reveal key={g} delay={i * 80} className="gimg"><Pic name={g} /></Reveal>)}</div>;
const Faq = ({ items = FAQS }) => <div className="faq">{items.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>;
const Cta = ({ title }) => <section className="cta"><Reveal><h2>{title}</h2><Link to="/contact" className="btn">Book an Appointment</Link></Reveal></section>;

function Social() {
  const [open, setOpen] = useState(null);
  useEffect(() => {
    if (!open) return;
    const k = e => e.key === 'Escape' && setOpen(null);
    addEventListener('keydown', k);
    document.body.style.overflow = 'hidden';
    return () => { removeEventListener('keydown', k); document.body.style.overflow = ''; };
  }, [open]);
  return (
    <section className="wrap"><Head title="Our Latest Social Media Updates" text={`Follow ${SOCIAL.handle} for weddings, food, rooms and events.`} />
      <div className="feed">{SOCIAL.posts.map((p, i) => (
        <Reveal key={p.src} delay={(i % 4) * 80}>
          <button className="tile" onClick={() => setOpen(p)} aria-label={p.cap || 'Open post'}>
            {p.type === 'video' && !p.cover
              ? <video className="pic" src={`${p.src}#t=0.1`} muted playsInline preload="metadata" />
              : <img className="pic" src={p.cover || p.src} alt={p.cap || ''} loading="lazy" />}
            {p.type === 'video' && <span className="play">▶</span>}
          </button>
        </Reveal>))}</div>
      <Reveal><a className="btn" style={{ marginTop: 36 }} href={SOCIAL.url} target="_blank" rel="noreferrer">Follow on Instagram</a></Reveal>
      {open && (
        <div className="lb" onClick={() => setOpen(null)}>
          <button className="x" aria-label="Close">×</button>
          {open.type === 'video'
            ? <video src={open.src} controls autoPlay playsInline onClick={e => e.stopPropagation()} />
            : <img src={open.src} alt={open.cap || ''} onClick={e => e.stopPropagation()} />}
          {open.cap && <p className="lb-cap">{open.cap}</p>}
          {open.url && <a className="btn" href={open.url} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>View on Instagram</a>}
        </div>)}
    </section>);
}

const Amenities = ({ alt }) => (
  <section className={`wrap ${alt ? 'alt' : ''}`}><Head title="Amenities & Services" text="Small comforts that make a big difference to your stay and your event." />
    <div className="grid feat">{AMENITIES.map(([t, d], i) => <Reveal key={t} delay={(i % 4) * 80}><div className="card pad"><span className="gem">✦</span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></section>);

const Packages = ({ alt }) => (
  <section className={`wrap ${alt ? 'alt' : ''}`}><Head title="Event Packages" text="Simple per-plate pricing. Sample rates shown, final quote depends on date, menu and décor." />
    <div className="grid">{PACKAGES.map((p, i) => (
      <Reveal key={p.name} delay={i * 120}><div className={`card pad pkg ${p.featured ? 'featured' : ''}`}>
        <p className="eyebrow">{p.note}</p><h3>{p.name}</h3><strong>{p.price}</strong>
        <ul>{p.items.map(x => <li key={x}>{x}</li>)}</ul>
        <Link to="/contact" className="btn">Enquire</Link></div></Reveal>))}</div></section>);

const Process = ({ alt }) => (
  <section className={`wrap ${alt ? 'alt' : ''}`}><Head title="How Booking Works" />
    <div className="steps">{PROCESS.map(([t, d], i) => <Reveal key={t} delay={i * 100}><div className="step"><span>{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></section>);

export function Home() {
  return (<>
    <section className="hero">
      <div className="hero-bg"><video className="pic" src="/social/post-1.mp4" autoPlay muted loop playsInline preload="auto" /></div>
      <p className="eyebrow rise">Luxury awaits in Lucknow</p>
      <h1 className="rise d1">Hotel & Banquet Hall</h1>
      <p className="rise d2">Where comfort meets celebration. Stay in refined rooms or host an unforgettable event.</p>
      <div className="rise d3"><a href="tel:+919876543210" className="btn">Call Us</a> <Link to="/contact" className="btn ghost">Book Now</Link></div>
    </section>
    <section className="services">
      {[['Inhouse Restaurant', 'dining'], ['Banquet Hall', 'banquet-hall'], ['Makeup Studio', 'makeup-studio'], ['Rooftop Cafe', 'cafe']].map(([s, i], k) =>
        <Reveal key={s} delay={k * 120} className="dark"><Pic name={i} alt={s} /><h3>{s}</h3></Reveal>)}
    </section>
    <section className="wrap split">
      <Reveal className="sp-img"><Pic name="welcome" alt="Welcome" /></Reveal>
      <Reveal delay={150} className="sp-txt"><p className="eyebrow">Welcome</p><h2>Luxurious Accommodations & Serene Ambiance</h2>
        <p>Step into a hotel where every detail is considered. Well-appointed rooms, a calm atmosphere and warm, attentive staff help you rest, recharge and feel at home.</p>
        <p>Beyond your stay, our banquet hall, rooftop café and in-house restaurant make us a single destination for dining, celebrations and business events.</p>
        <p>Whether you are travelling for work, planning a wedding or simply meeting friends for dinner, you will find a seat at our table.</p>
        <Link to="/about" className="btn">Our Story</Link></Reveal>
    </section>
    <Stats />
    <section className="wrap alt"><Head title="Our Facilities" text="Everything you need for a stay, a celebration or a meeting." />
      <div className="grid">{FACILITIES.map((f, i) => <Card key={f.slug} to={`/facilities/${f.slug}`} img={f.img} title={f.title} text={f.tag} delay={i * 100} />)}</div></section>
    <Amenities />
    <section className="wrap alt split rev">
      <Reveal className="sp-img"><Pic name="dining" alt="Dining" /></Reveal>
      <Reveal delay={150} className="sp-txt"><p className="eyebrow">Taste the difference</p><h2>Dining & Rooftop Café</h2>
        <p>Our kitchen serves North Indian classics, Chinese and continental favourites, cooked fresh and plated with care. Start the day with a hearty breakfast and end it with coffee and dessert on the rooftop.</p>
        <p>For events, choose from curated menus with live counters, or ask our chef to design something special.</p>
        <Link to="/facilities/banquet-hall" className="btn">Explore Catering</Link></Reveal>
    </section>
    <section className="wrap"><Head title="Signature Menu" text="A taste of what our kitchen is known for." />
      <div className="grid menu">{MENU.map(([c, items], i) => <Reveal key={c} delay={i * 100}><div className="card pad"><h3>{c}</h3><ul className="dishes">{items.map(d => <li key={d}>{d}</li>)}</ul></div></Reveal>)}</div></section>
    <section className="wrap alt"><Head title="The Ideal Venue for Every Occasion" text="With attention to detail and unhurried service, we help every occasion feel special." />
      <div className="grid">{EVENTS.map(([t, d, im], i) => <Card key={t} to="/facilities/banquet-hall" img={im} title={t} text={d} delay={i * 120} />)}</div></section>
    <Packages />
    <Process alt />
    <section className="wrap"><Head title="Guest Stories" text="Kind words from the people we have been lucky to host." />
      <div className="grid">{QUOTES.map(([q, a], i) => <Reveal key={a} delay={(i % 3) * 120}><blockquote className="quote">“{q}”<cite>{a}</cite></blockquote></Reveal>)}</div></section>
    <section className="wrap alt"><Head title="Gallery" /><GalleryGrid />
      <Reveal><Link to="/gallery" className="btn" style={{ marginTop: 36 }}>View Full Gallery</Link></Reveal></section>
    <Social />
    <section className="wrap"><Head title="Explore the City" text="Lucknow is famous for its culture, cuisine and craft. We are happy to arrange cabs and local guides." />
      <div className="grid">{NEARBY.map(([t, d], i) => <Reveal key={t} delay={i * 100}><div className="card pad"><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></section>
    <section className="wrap alt"><Head title="Quick Answers" /><Reveal><Faq items={FAQS.slice(0, 4)} /></Reveal></section>
    <Cta title="Want to make a booking or have a question?" />
  </>);
}

export function About() {
  return (<>
    <Banner eyebrow="Our story" title="About Us" img="about" />
    <section className="wrap split">
      <Reveal className="sp-img"><Pic name="about" alt="Our hotel" /></Reveal>
      <Reveal delay={150} className="sp-txt"><h2>A Home for Stays & Celebrations</h2>
        <p>We bring a comfortable hotel and a grand banquet hall together under one roof, so guests, families and businesses are looked after by a single, caring team.</p>
        <p>Our promise is simple: genuine hospitality, clean and comfortable spaces, honest pricing and food made with care. From a quiet overnight stay to a three-day wedding, we treat every guest as family.</p>
        <p>Many of our team members have been with us since the beginning. That continuity is why regular guests are greeted by name and why event after event runs the way you hoped it would.</p></Reveal>
    </section>
    <section className="wrap alt"><div className="grid two">
      <Reveal><div className="card pad"><h3>Our Mission</h3><p>To make every stay restful and every celebration memorable through warm service and attention to detail.</p></div></Reveal>
      <Reveal delay={120}><div className="card pad"><h3>Our Vision</h3><p>To be the most trusted address for hospitality and events in the city.</p></div></Reveal></div></section>
    <Stats />
    <section className="wrap"><Head title="Our Journey" />
      <div className="timeline">{TIMELINE.map(([t, d], i) => <Reveal key={t} delay={i * 100}><div className="tl"><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></section>
    <section className="wrap alt"><Head title="What We Stand For" />
      <div className="grid">{VALUES.map(([t, d], i) => <Reveal key={t} delay={i * 100}><div className="card hover pad"><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></section>
    <section className="wrap"><Head title="Why Guests Choose Us" />
      <div className="grid">{[['Unparalleled service', 'Attentive staff available around the clock.'], ['Exclusive elegance', 'Thoughtful décor in every corner.'], ['Gastronomic delight', 'In-house catering with per-plate pricing.'], ['Added comforts', 'Free Wi-Fi, parking and a 24/7 concierge.']].map(([t, d], i) =>
        <Reveal key={t} delay={i * 100}><div className="card hover pad"><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></section>
    <section className="wrap alt"><Head title="Meet the Team" text="The people behind every smooth check-in and every perfect evening." />
      <div className="grid">{TEAM.map(([ini, role, d], i) => <Reveal key={role} delay={i * 100}><div className="card pad"><span className="avatar">{ini}</span><h3>{role}</h3><p>{d}</p></div></Reveal>)}</div></section>
    <section className="wrap"><Head title="A Look Around" /><GalleryGrid items={GALLERY.slice(0, 3)} /></section>
    <Cta title="Come and experience it yourself" />
  </>);
}

export function Facilities() {
  return (<>
    <Banner eyebrow="What we offer" title="Our Facilities" img="banquet-hall" />
    <section className="wrap"><Reveal><p>Five spaces, one team. Explore each facility to see what is included and enquire in a minute.</p></Reveal></section>
    {FACILITIES.map((f, i) => (
      <section key={f.slug} className={`wrap split ${i % 2 ? 'rev alt' : ''}`}>
        <Reveal className="sp-img"><Pic name={f.img} alt={f.title} /></Reveal>
        <Reveal delay={150} className="sp-txt"><p className="eyebrow">{f.tag}</p><h2>{f.title}</h2><p>{f.text}</p><p>{f.long[0]}</p>
          <Link to={`/facilities/${f.slug}`} className="btn">Explore</Link></Reveal>
      </section>))}
    <section className="wrap"><Head title="Hall Capacity at a Glance" text="Approximate guest capacity by space. Tell us your numbers and we will recommend the best fit." />
      <Reveal><div className="table-wrap"><table className="cap"><thead><tr><th>Space</th><th>Standing</th><th>Seated</th><th>Best for</th></tr></thead>
        <tbody>{CAPACITY.map(r => <tr key={r[0]}>{r.map((c, k) => <td key={k}>{c}</td>)}</tr>)}</tbody></table></div></Reveal></section>
    <Amenities alt />
    <Process />
    <Cta title="Not sure which space fits? Talk to us." />
  </>);
}

export function Facility() {
  const { slug } = useParams(); const f = FACILITIES.find(x => x.slug === slug);
  const [rooms, setRooms] = useState(ROOMS);
  useEffect(() => { if (slug === 'rooms-and-suites') fetch('/api/rooms').then(r => r.json()).then(d => d.length && setRooms(d)).catch(() => {}); }, [slug]);
  if (!f) return <Navigate to="/facilities" />;
  const others = FACILITIES.filter(x => x.slug !== slug).slice(0, 3);
  const isRoom = slug === 'rooms-and-suites';
  const isEvent = ['banquet-hall', 'wedding-halls', 'engagement-halls'].includes(slug);
  return (<>
    <Banner eyebrow={f.tag} title={f.title} img={f.img} />
    <section className="wrap split">
      <Reveal className="sp-img"><Pic name={f.img} alt={f.title} /></Reveal>
      <Reveal delay={150} className="sp-txt"><h2>{f.title}</h2>{f.long.map(p => <p key={p}>{p}</p>)}</Reveal>
    </section>
    <section className="stats specs">{f.specs.map(([k, v]) => <Reveal key={k}><strong>{v}</strong><span>{k}</span></Reveal>)}</section>
    <section className="wrap alt"><Head title="Highlights" /><ul className="perks">{f.points.map(p => <li key={p}>✦ {p}</li>)}</ul></section>
    <section className="wrap"><Head title="Perfect For" />
      <div className="grid">{f.ideal.map((t, i) => <Reveal key={t} delay={i * 80}><div className="card pad"><h3>{t}</h3></div></Reveal>)}</div></section>
    {isRoom && <section className="wrap alt"><Head title="Choose Your Room" />
      <div className="grid">{rooms.map((r, i) => <Reveal key={r._id} delay={i * 100}><article className="card hover"><div className="img"><Pic name={i === 0 ? 'gallery-3' : i === 1 ? 'gallery-8' : 'gallery-10'} alt={r.name} /></div><h3>{r.name}</h3><p>{r.description}</p><small>{r.amenities.join(' · ')} · up to {r.capacity} guests</small><strong>₹{r.price} / night</strong></article></Reveal>)}</div></section>}
    {isEvent && <Packages alt />}
    {slug === 'makeup-studio' && <section className="wrap alt"><Head title="Our Services" />
      <div className="grid">{[['Bridal makeup', 'HD and airbrush looks, trial included on request.'], ['Party & festive', 'Quick, glamorous looks for any occasion.'], ['Hair & draping', 'Styling, braids, buns and saree draping.']].map(([t, d], i) => <Reveal key={t} delay={i * 100}><div className="card pad"><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></section>}
    <Process alt={!isRoom && !isEvent && slug !== 'makeup-studio'} />
    <section className="wrap alt"><Head title="Gallery" /><GalleryGrid items={GALLERY.slice(0, 3)} /></section>
    <section className="wrap"><Head title="Questions about this space?" /><Reveal><Faq items={FAQS.slice(0, 5)} /></Reveal></section>
    <section className="wrap alt"><Head title="Explore More" />
      <div className="grid">{others.map((o, i) => <Card key={o.slug} to={`/facilities/${o.slug}`} img={o.img} title={o.title} text={o.tag} delay={i * 100} />)}</div></section>
    <Cta title={`Interested in ${f.title}?`} />
  </>);
}

export function Gallery() {
  const cats = ['All', ...new Set(GALLERY_ALL.map(g => g[1]))];
  const [cat, setCat] = useState('All');
  const items = GALLERY_ALL.filter(g => cat === 'All' || g[1] === cat).map(g => g[0]);
  return (<>
    <Banner eyebrow="Moments & spaces" title="Gallery" img="gallery-1" />
    <section className="wrap">
      <div className="tabs">{cats.map(c => <button key={c} className={c === cat ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}</div>
      <GalleryGrid key={cat} items={items} />
    </section>
    <Cta title="Like what you see? Visit us in person." />
  </>);
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'Room Booking', date: '', message: '' });
  const [status, setStatus] = useState('');
  const set = k => e => setForm({ ...form, [k]: e.target.value });
  async function submit(e) {
    e.preventDefault(); setStatus('Sending...');
    try {
      const res = await fetch('/api/enquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      setStatus(res.ok ? 'Thank you! We will contact you shortly.' : 'Something went wrong. Please try again.');
      if (res.ok) setForm({ ...form, name: '', email: '', phone: '', message: '' });
    } catch { setStatus('Server not reachable. Please call us instead.'); }
  }
  return (<>
    <Banner eyebrow="Visit us today" title="Contact Us" img="welcome" />
    <section className="wrap"><div className="grid">
      {[['Our Location', 'Plot No. 00, Sample Road, Lucknow, Uttar Pradesh'], ['Call or Email', '+91 9876543210 · contect@grandhotel.com'], ['Timings', 'Check-in 12:00 pm · Check-out 11:00 am · Front desk 24/7']].map(([t, d], i) =>
        <Reveal key={t} delay={i * 100}><div className="card pad"><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></section>
    <section className="wrap alt contact">
      <Reveal className="left"><h2>Want to make a booking?</h2>
        <p>Tell us about your stay or event and our team will get back to you within a day. For urgent dates, please call us directly.</p>
        <p>We help with room bookings, weddings, engagements, parties, corporate events and makeup studio appointments.</p>
        <p>Planning a wedding? Mention your guest count and preferred dates, and we will suggest the right hall, package and room block.</p></Reveal>
      <Reveal delay={150}><form onSubmit={submit}>
        <input required placeholder="Name" value={form.name} onChange={set('name')} />
        <input required type="email" placeholder="Email" value={form.email} onChange={set('email')} />
        <input required placeholder="Phone" value={form.phone} onChange={set('phone')} />
        <select value={form.type} onChange={set('type')}><option>Room Booking</option><option>Wedding</option><option>Engagement</option><option>Party</option><option>Corporate Event</option><option>Makeup Studio</option></select>
        <input type="date" value={form.date} onChange={set('date')} />
        <textarea placeholder="Message" value={form.message} onChange={set('message')} />
        <button className="btn">Send Query</button><p>{status}</p>
      </form></Reveal>
    </section>
    <section className="wrap"><Head title="Good to Know" text="A few simple policies so your visit goes smoothly." />
      <div className="grid">{POLICIES.map(([t, d], i) => <Reveal key={t} delay={i * 80}><div className="card pad"><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></section>
    <section className="wrap alt"><Head title="Getting Here" />
      <div className="grid">{NEARBY.map(([t, d], i) => <Reveal key={t} delay={i * 100}><div className="card pad"><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></section>
    <section className="wrap"><Head title="Frequently Asked Questions" /><Reveal><Faq /></Reveal></section>
    <section className="map"><iframe title="Map" loading="lazy" src="https://www.google.com/maps?q=Lucknow&output=embed" /></section>
  </>);
}