// seedAdmin.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js"; // adjust path if needed
import dotenv from "dotenv";

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected ✅"))
.catch((err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

const seed = async () => {
  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: "admin@example.com" });
    if (existingAdmin) {
      console.log("Admin already exists ✅");
      process.exit();
    }

    // Hash password
    const passwordHash = await bcrypt.hash("nextstep123", 10);

    // Create new admin
    const admin = new Admin({
      name: "Admin",
      email: "admin@nextstep.com",
      passwordHash,
    });

    await admin.save();
    console.log("Admin seeded successfully ✅");
    process.exit();
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

seed();
