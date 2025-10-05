import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  userName: { type: String,  },
  userEmail: { type: String,  },
  userPhone: { type: String },
  careerExpert: { type: mongoose.Schema.Types.ObjectId, ref: "CareerExpert" },
  sessionType: { type: String,  },
  sessionDate: { type: Date,  },
  sessionTime: { type: String, },
  goals: { type: String,  },
  experience: { type: String },
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Booking", BookingSchema);
