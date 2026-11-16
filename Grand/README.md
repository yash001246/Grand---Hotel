# Hotel & Banquet MERN Starter
Structure and UX inspired by luxury hotel/banquet sites. All copy is original placeholder text; replace images/branding with your own.

## Run
1. Server: `cd server && npm i && cp .env.example .env && npm run dev`  (needs MongoDB; seeds rooms on first start)
2. Client: `cd client && npm i && npm run dev`  -> http://localhost:5173 (Vite proxies /api to :5000)

## Photos
Every image slot checks, in order: `client/public/images/<name>.jpg` (your own photo) -> stock URL in `client/src/data.js` (`IMAGES`) -> built-in `<name>.svg`.
To use real photos of your hotel, save them in `client/public/images/` with these names (jpg, ~1400px wide):
hero, welcome, about, rooms-and-suites, banquet-hall, wedding-halls, engagement-halls, makeup-studio, dining, cafe, events-weddings, events-parties, events-corporate, gallery-1 ... gallery-12.
Prices, capacities and package rates in `data.js` are sample values; edit them to match the hotel.
