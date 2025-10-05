import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";
import generateToken from "../utils/generateToken.js";
import CareerExpert from "../models/CareerExpert.js";
import Booking from "../models/Booking.js";

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (admin && (await bcrypt.compare(password, admin.passwordHash))) {
    res.json({ token: generateToken(admin._id) });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

export const getAllExperts = async (req, res) => {
  const experts = await CareerExpert.find();
  res.json(experts);
};

export const approveExpert = async (req, res) => {
  const { id } = req.params;
  const { approved } = req.body;
  const expert = await CareerExpert.findByIdAndUpdate(id, { approved }, { new: true });
  res.json(expert);
};

export const getAllBookings = async (req, res) => {
  const bookings = await Booking.find().populate("careerExpert");
  res.json(bookings);
};

export const updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const booking = await Booking.findByIdAndUpdate(id, { status }, { new: true });
  res.json(booking);
};
