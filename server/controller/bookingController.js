import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const {
      userName,
      userEmail,
      userPhone,
      careerExpert,
      sessionType,
      sessionDate,
      sessionTime,
      goals,
      experience,
    } = req.body;

    // Basic validation (you can expand this later)
    if (!userName || !userEmail || !careerExpert || !sessionDate || !sessionTime || !sessionType) {
      return res.status(400).json({ error: "Missing required fields ⚠️" });
    }

    const booking = new Booking({
      userName,
      userEmail,
      userPhone,
      careerExpert,
      sessionType,
      sessionDate,
      sessionTime,
      goals,
      experience,
    });

    
    
    
    await booking.save();

    res.status(201).json({
      message: "Booking created successfully 🎉",
      booking,
    });
  } catch (error) {
    console.error("Booking creation failed ❌", error);
    res.status(500).json({ error: "Server Error 💀", details: error.message });
  }
};
