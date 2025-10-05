import mongoose from "mongoose";

const CareerExpertSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  bio: String,
  price: String, 
  specialization: String,
  photoUrl: String,
  documents: [String],
  approved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model("CareerExpert", CareerExpertSchema);
