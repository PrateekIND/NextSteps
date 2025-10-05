import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true }
});

export default mongoose.model("Admin", AdminSchema);
