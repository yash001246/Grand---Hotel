// ---------- IMAGES ----------
// Photo lookup order for every <Pic name="x" />:
//   1) /public/images/x.jpg   <- put YOUR real hotel photos here (best option)
//   2) IMAGES[x] below        <- stock photo URL (replace with your own CDN/Cloudinary links if you like)
//   3) /public/images/x.svg   <- built-in artwork, always works
const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=70`;
export const IMAGES = {
  hero: U('photo-1566073771259-6a8506099945'),
  welcome: U('photo-1551882547-ff40c63fe5fa'),
  about: U('photo-1542314831-068cd1dbfeed'),
  'rooms-and-suites': U('photo-1631049307264-da0ec9d70304'),
  'banquet-hall': U('photo-1519167758481-83f550bb49b3'),
  'wedding-halls': U('photo-1464366400600-7168b8af9bc3'),
  'engagement-halls': U('photo-1511795409834-ef04bbd61622'),
  'makeup-studio': U('photo-1487412947147-5cebf100ffc2'),
  dining: U('photo-1414235077428-338989a2e8c0'),
  cafe: U('photo-1554118811-1e0d58224f24'),
  'events-weddings': U('photo-1519741497674-611481863552'),
  'events-parties': U('photo-1530103862676-de8c9debad1d'),
  'events-corporate': U('photo-1540575467063-178a50c2df87'),
  'gallery-1': U('photo-1520250497591-112f2f40a3f4'),
  'gallery-2': U('photo-1582719508461-905c673771fd'),
  'gallery-3': U('photo-1578683010236-d716f9a3f461'),
  'gallery-4': U('photo-1571896349842-33c89424de2d'),
  'gallery-5': U('photo-1445019980597-93fa8acb246c'),
  'gallery-6': U('photo-1564501049412-61c2a3083791'),
  'gallery-7': U('photo-1522708323590-d24dbb6b0267'),
  'gallery-8': U('photo-1596394516093-501ba68a0ba6'),
  'gallery-9': U('photo-1584132967334-10e028bd69f7'),
  'gallery-10': U('photo-1590490360182-c33d57733427'),
  'gallery-11': U('photo-1559329007-40df8a9345d8'),
  'gallery-12': U('photo-1578645510447-e20b4311e3ce'),
};

// ---------- FACILITIES ----------
export const FACILITIES = [
  { slug: 'rooms-and-suites', title: 'Rooms and Suites', tag: 'Stay in comfort', img: 'rooms-and-suites',
    text: 'Calm, well-appointed rooms and suites with plush beds, Wi-Fi, AC and breakfast, made for rest and recharge.',
    long: ['Every room is designed around one idea: you should wake up rested. Soft linen, blackout curtains, warm lighting and quiet corridors make each stay feel effortless, whether you are here for business or a family trip.', 'Choose from Deluxe Rooms for a comfortable city stay, Executive Suites with a separate lounge and work desk, or our Royal Suite for a special occasion. Housekeeping and a 24/7 front desk are always one call away.', 'Wedding guests can reserve room blocks at special rates, so the whole family stays in one place and travels only as far as the lift to reach the celebration.'],
    specs: [['Check-in', '12:00 pm'], ['Check-out', '11:00 am'], ['Room types', '3 categories'], ['Breakfast', 'Included']],
    points: ['King & twin beds', 'Free Wi-Fi', 'Complimentary breakfast', '24/7 room service', 'Smart TV & work desk', 'Daily housekeeping', 'Air conditioning', 'Hot water round the clock'],
    ideal: ['Business travellers', 'Wedding guests & families', 'Weekend getaways', 'Long stays'] },
  { slug: 'banquet-hall', title: 'Banquet Hall', tag: 'Celebrate in grandeur', img: 'banquet-hall',
    text: 'A spacious, elegant hall for weddings, corporate gatherings and social events, with in-house catering and trained staff.',
    long: ['Our banquet hall is a large, pillar-free space with high ceilings, statement chandeliers and a stage that can be styled to any theme. Flexible seating lets you host an intimate dinner or a grand reception.', 'Our in-house kitchen prepares multi-cuisine menus on a simple per-plate system, and our trained waiters keep service smooth from the first guest to the last.', 'Sound, lighting, projector and a dedicated green room are included, and our team is on site from set-up to the final farewell.'],
    specs: [['Capacity', 'Up to 1,200 guests'], ['Layout', 'Pillar-free'], ['Catering', 'In-house'], ['Parking', 'Ample']],
    points: ['Large guest capacity', 'In-house catering', 'Stage, sound & lighting', 'Ample parking', 'Power backup', 'Per-plate pricing', 'Green room', 'Valet on request'],
    ideal: ['Weddings & receptions', 'Corporate galas', 'Birthdays & anniversaries', 'Cultural functions'] },
  { slug: 'wedding-halls', title: 'Wedding Halls', tag: 'Forever begins here', img: 'wedding-halls',
    text: 'Beautiful spaces for receptions and wedding functions, with décor, cuisine and coordination handled by one team.',
    long: ['From haldi and mehndi to the reception, we offer elegant spaces for every function. Floral arches, warm lighting and custom stage designs set the scene for your photographs and memories.', 'A dedicated event coordinator works with your family from the first visit to the last guest, so you can enjoy the celebration instead of managing it.', 'Bridal rooms, a makeup studio and guest rooms are all under the same roof, which keeps your schedule calm and your guests close.'],
    specs: [['Functions', 'Haldi to reception'], ['Coordinator', 'Dedicated'], ['Bridal rooms', 'Yes'], ['Décor', 'Custom themes']],
    points: ['Custom stage & décor', 'Bridal rooms', 'Multi-cuisine menus', 'Event coordinator', 'Guest room blocks', 'Photography spaces', 'Baraat entry area', 'Mandap setup'],
    ideal: ['Wedding ceremonies', 'Receptions', 'Sangeet & mehndi', 'Pre-wedding functions'] },
  { slug: 'engagement-halls', title: 'Engagement Halls', tag: 'Intimate & elegant', img: 'engagement-halls',
    text: 'Cosy, stylish halls ideal for engagement, roka and ring ceremonies with personal attention to every detail.',
    long: ['Smaller gatherings deserve the same care. Our engagement halls are warm, well lit and easy to style, with a stage that frames the ring ceremony beautifully.', 'Pick a ready package or build your own with floral styling, a curated menu and music. Pricing stays simple and transparent.', 'Ideal for 50 to 300 guests, these halls can be combined with our makeup studio and guest rooms for a complete, hassle-free day.'],
    specs: [['Guests', '50 to 300'], ['Stage', 'Photo-friendly'], ['Packages', 'Flexible'], ['Booking', 'Short notice OK']],
    points: ['Intimate seating', 'Floral styling', 'Photo-friendly stage', 'Flexible packages', 'Curated menus', 'Sound system', 'Ring ceremony setup', 'Live counters'],
    ideal: ['Engagement & ring ceremony', 'Roka', 'Kitty parties', 'Family get-togethers'] },
  { slug: 'makeup-studio', title: 'Makeup Studio', tag: 'Look your best', img: 'makeup-studio',
    text: 'An in-house studio for bridal and party makeup so you can get ready right at the venue.',
    long: ['Getting ready is part of the celebration. Our studio offers bridal, engagement and party looks by trained artists, in a bright, relaxed space with professional lighting.', 'Because the studio is inside the venue, there is no rushing across the city on the big day. Book early for wedding season.', 'We recommend a trial session a few weeks before your event, so you and your artist can settle on the look with plenty of time to spare.'],
    specs: [['Services', 'Bridal, party, hair'], ['Trial', 'Available'], ['Location', 'Inside the venue'], ['Booking', 'Advance']],
    points: ['Bridal makeup', 'Party looks', 'Hair styling', 'Draping & saree styling', 'Trial sessions', 'Advance booking', 'Group bookings', 'Professional lighting'],
    ideal: ['Brides & grooms', 'Bridal party & family', 'Engagement looks', 'Party & festive makeup'] },
];

export const EVENTS = [
  ['Weddings', 'Décor, catering and a dedicated team for your big day.', 'events-weddings'],
  ['Parties', 'Birthdays, anniversaries and get-togethers, hosted with care.', 'events-parties'],
  ['Corporate', 'Conferences, seminars and dinners with modern facilities.', 'events-corporate'],
];

export const ROOMS = [
  { _id: 1, name: 'Deluxe Room', description: 'Quiet, bright room with a plush king bed.', price: 3200, capacity: 2, amenities: ['Wi-Fi', 'AC', 'Breakfast'] },
  { _id: 2, name: 'Executive Suite', description: 'Separate lounge, work desk and city views.', price: 5500, capacity: 3, amenities: ['Wi-Fi', 'AC', 'Lounge', 'Breakfast'] },
  { _id: 3, name: 'Royal Suite', description: 'Our most spacious suite for a special stay.', price: 8500, capacity: 4, amenities: ['Wi-Fi', 'AC', 'Lounge', 'Bathtub'] },
];

export const STATS = [[500, '+', 'Events hosted'], [30, '+', 'Rooms & suites'], [1200, '+', 'Guest capacity'], [24, '/7', 'Guest support']];

// ---------- NEW CONTENT ----------
export const AMENITIES = [
  ['Free Wi-Fi', 'Fast connection in rooms, lobby and halls.'],
  ['Restaurant', 'Multi-cuisine in-house dining, open all day.'],
  ['Rooftop Café', 'Coffee, snacks and evening views.'],
  ['Parking', 'Ample, safe parking for guests and events.'],
  ['Power Backup', 'Uninterrupted power across the property.'],
  ['24/7 Front Desk', 'Help is always one call away.'],
  ['Safety & Hygiene', 'Regular sanitisation and trained staff.'],
  ['Makeup Studio', 'Bridal and party looks, on site.'],
];

export const MENU = [
  ['Starters', ['Paneer Tikka', 'Hara Bhara Kebab', 'Chicken Malai Tikka', 'Crispy Corn']],
  ['Main Course', ['Butter Chicken', 'Dal Makhani', 'Shahi Paneer', 'Lucknowi Biryani']],
  ['Breads & Rice', ['Butter Naan', 'Lachha Paratha', 'Jeera Rice', 'Veg Pulao']],
  ['Desserts', ['Gulab Jamun', 'Rasmalai', 'Kulfi Falooda', 'Chocolate Brownie']],
];

export const PACKAGES = [
  { name: 'Silver', price: 'from ₹899 / plate', note: 'Simple and elegant', items: ['Hall with basic décor', 'Veg multi-cuisine menu', 'Sound system', 'Parking'] },
  { name: 'Gold', price: 'from ₹1,299 / plate', note: 'Most popular', items: ['Themed stage & floral décor', 'Veg + non-veg menu', 'Live counters', 'Event coordinator', 'Bridal room'], featured: true },
  { name: 'Platinum', price: 'from ₹1,799 / plate', note: 'The full celebration', items: ['Custom grand décor', 'Premium menu with live stations', 'Guest room block', 'Makeup studio slot', 'Dedicated team'] },
];

export const CAPACITY = [
  ['Grand Banquet Hall', '600 – 1,200', '300 – 600', 'Weddings, galas'],
  ['Wedding Hall', '300 – 700', '150 – 350', 'Receptions, functions'],
  ['Engagement Hall', '50 – 300', '40 – 150', 'Ring ceremony, roka'],
  ['Rooftop Café', '40 – 80', '30 – 60', 'Small parties, dinners'],
];

export const PROCESS = [
  ['Enquire', 'Call us or send the form with your date and guest count.'],
  ['Visit', 'Tour the venue and meet our event coordinator.'],
  ['Plan', 'Pick a package, finalise the menu and décor.'],
  ['Celebrate', 'Relax. Our team handles everything on the day.'],
];

export const TIMELINE = [
  ['Day one', 'We open with a handful of rooms and one simple promise: genuine hospitality.'],
  ['Banquet hall', 'The hall opens and the city begins to celebrate with us.'],
  ['Growing together', 'Rooftop café, makeup studio and more rooms join the family.'],
  ['Today', 'Hundreds of events and thousands of happy guests later, we are still learning.'],
];

export const VALUES = [
  ['Warm hospitality', 'Every guest is treated like family, every time.'],
  ['Honest pricing', 'Clear per-plate and per-night rates with no surprises.'],
  ['Clean & safe', 'Hygiene and safety are never an afterthought.'],
  ['Attention to detail', 'From the flowers to the final plate, we care.'],
];

export const TEAM = [
  ['GM', 'General Manager', 'Keeps stays and events running smoothly.'],
  ['EC', 'Executive Chef', 'Leads our kitchen and multi-cuisine menus.'],
  ['EM', 'Event Manager', 'Plans your function from first call to farewell.'],
  ['FD', 'Front Desk Head', 'Your first hello and your last goodbye.'],
];

export const NEARBY = [
  ['Heritage Lucknow', 'Bara Imambara, Rumi Darwaza and the old city, a short ride away.'],
  ['Shopping & food', 'Hazratganj and Aminabad for chikankari, street food and sweets.'],
  ['Getting here', 'Easy access from the railway station, bus stands and airport.'],
];

export const POLICIES = [
  ['Check-in / Check-out', '12:00 pm / 11:00 am. Early or late requests subject to availability.'],
  ['ID proof', 'A valid government photo ID is required for every adult guest.'],
  ['Event booking', 'A part-advance confirms your date. Balance as agreed in your package.'],
  ['Cancellation', 'Free date change on request; refund terms are shared at booking.'],
];

export const QUOTES = [
  ['The staff handled everything and our wedding ran smoothly.', 'Ananya S., wedding host'],
  ['Clean rooms, warm service and great food. We will stay again.', 'Rahul M., business traveller'],
  ['Perfect hall for our engagement. The décor team was fantastic.', 'Pooja & Karan'],
  ['Our company annual dinner was seamless, from sound to service.', 'Vikas T., corporate client'],
  ['The rooftop café is a hidden gem. Great coffee and a lovely evening view.', 'Sana K., local guest'],
  ['Our whole family stayed in one place and loved it.', 'Mehta family'],
];

export const FAQS = [
  ['What are the check-in and check-out times?', 'Check-in is at 12:00 pm and check-out is at 11:00 am. Early check-in is subject to availability.'],
  ['Do you provide in-house catering for events?', 'Yes. Our kitchen offers multi-cuisine menus on a per-plate basis for all events.'],
  ['How early should I book the banquet hall?', 'For weddings we suggest booking 3–6 months ahead. Smaller events can often be arranged with shorter notice.'],
  ['Is parking available?', 'Yes, ample parking is available for guests and event visitors.'],
  ['Can we bring our own decorator or photographer?', 'Yes, outside vendors are welcome. Please share their details in advance so our team can coordinate.'],
  ['Do you offer room blocks for wedding guests?', 'Yes. We offer special rates for guest rooms booked along with an event.'],
  ['Is there a makeup studio on site?', 'Yes. Bridal, party and hair services are available by advance booking.'],
  ['Are pets or outside food allowed?', 'Outside food is not permitted in the venue. Please ask us about pets before you travel.'],
];

// ---------- GALLERY ----------
export const GALLERY = [1, 2, 3, 4, 5, 6].map(n => `gallery-${n}`);
export const GALLERY_ALL = [
  ['gallery-1', 'Hotel'], ['gallery-2', 'Rooms'], ['gallery-3', 'Rooms'], ['gallery-4', 'Hotel'],
  ['gallery-5', 'Dining'], ['gallery-6', 'Hotel'], ['gallery-7', 'Events'], ['gallery-8', 'Rooms'],
  ['gallery-9', 'Dining'], ['gallery-10', 'Rooms'], ['gallery-11', 'Hotel'], ['gallery-12', 'Events'],
  ['banquet-hall', 'Events'], ['wedding-halls', 'Events'], ['dining', 'Dining'], ['cafe', 'Dining'],
];

export const SOCIAL = {
  handle: '@hotelemperiogrand',
  url: 'https://www.instagram.com/hotelemperiogrand/',
  posts: [
    { type: 'video', src: 'social/post-1.mp4', cover: 'social/post-1.png', url: 'https://www.instagram.com/reels/DCqo9FQxJoE/', cap: '' },
    { type: 'image', src: 'social/post-2.jpg', cover : 'social/post-2.jpg', url: 'https://www.instagram.com/p/DCjRaJVznHC/', cap: '' },
    { type: 'video', src: 'social/post-3.mp4', cover: 'social/post-3.png', url: 'https://www.instagram.com/reel/DCGe0QGSEOF/?utm_source=ig_web_copy_link&lqvp=NTc4MTIwNjQ2YQ==' },
    { type: 'image', src: 'social/post-4.jpg', cover: 'social/post-4.jpg', url: 'https://www.instagram.com/p/DCD0hqaotLY/' },
    // aur posts isi tarah add karo
  ],
};