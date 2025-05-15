const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    experience: {
      type: Number, // in years
      required: true,
      min: 0,
    },
    expertise: {
      type: String, // brief expertise title
      required: true,
    },
    linkedinProfile: {
      type: String,
    },
    areasOfExpertise:{
        type: String,
    },
    availability: {
      type: String, // e.g. "Weekdays", "Weekends", "Evenings", or specific times
      required: true,
    },
    bio: {
      type: String,
      maxlength: 1000,
    },

    // Cloudinary URLs or file paths
    resume: {
      type: String,
    },
    certificate: {
      type: String,
    },
    idProof: {
      type: String,
    },
    isApproved: {
    type: Boolean,
    default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mentor", mentorSchema);
