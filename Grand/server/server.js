import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const Room = mongoose.model('Room', new mongoose.Schema({
  name: String, description: String, price: Number, capacity: Number, amenities: [String]
}));
const Enquiry = mongoose.model('Enquiry', new mongoose.Schema({
  name: { type: String, required: true }, email: { type: String, required: true },
  phone: { type: String, required: true }, type: { type: String, default: 'General' },
  date: String, message: String
}, { timestamps: true }));

const app = express();
app.use(cors(), express.json());

app.get('/api/rooms', async (_q, r) => r.json(await Room.find()));
app.post('/api/enquiries', async (q, r) => {
  try { r.status(201).json(await Enquiry.create(q.body)); }
  catch (e) { r.status(400).json({ error: e.message }); }
});

await mongoose.connect(process.env.MONGO_URI);
if (!(await Room.countDocuments())) await Room.insertMany([
  { name: 'Deluxe Room', description: 'Quiet, bright room with a plush king bed.', price: 3200, capacity: 2, amenities: ['Wi-Fi', 'AC', 'Breakfast'] },
  { name: 'Executive Suite', description: 'Separate lounge, work desk and city views.', price: 5500, capacity: 3, amenities: ['Wi-Fi', 'AC', 'Lounge', 'Breakfast'] },
  { name: 'Royal Suite', description: 'Our most spacious suite for a special stay.', price: 8500, capacity: 4, amenities: ['Wi-Fi', 'AC', 'Lounge', 'Bathtub'] }
]);
app.listen(process.env.PORT || 5000, () => console.log('API running'));
