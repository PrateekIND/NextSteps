// backend/controllers/expertController.js
import CareerExpert from "../models/CareerExpert.js";
import { generateSignedUploadUrl, getPublicUrl } from "../utils/supabaseSignedUrl.js";

/**
 * POST /api/experts/upload-url
 * body: { fileName, folder }  // folder optional (e.g., "photos" or "documents")
 * Returns: { signedUrl, path }
 */
export const getUploadUrl = async (req, res) => {
  try {
    const { fileName, folder } = req.body;
    if (!fileName) return res.status(400).json({ error: "fileName is required" });

    const { signedUrl, path } = await generateSignedUploadUrl(fileName, folder);
    return res.json({ signedUrl, path });
  } catch (error) {
    console.error("getUploadUrl error:", error);
    return res.status(500).json({ error: error.message || "Failed to create signed URL" });
  }
};

/**
 * POST /api/experts/register
 * body: {
 *   name, email, phone, bio, specialization,
 *   photoPath (path returned after signed upload), documentPaths (array of paths)
 * }
 *
 * The frontend will:
 *  - request signed URL(s) from /upload-url
 *  - PUT file(s) to the signed URL(s)
 *  - send the resulting storage path(s) (path strings) to this register endpoint
 *
 * This endpoint translates storage paths to public URLs and saves the expert in MongoDB.
 */
export const registerExpert = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      bio,
      price,
      specialization,
      photoPath,
      documentPaths // array of strings (paths)
    } = req.body;

    if (!name || !email) return res.status(400).json({ error: "name and email are required" });

    // Convert storage paths to public URLs (or null)
    const photoUrl = photoPath ? getPublicUrl(photoPath) : null;
    const documents = Array.isArray(documentPaths) ? documentPaths.map((p) => getPublicUrl(p)) : [];

    const expert = new CareerExpert({
      name,
      email,
      phone,
      bio,
      price,
      specialization,
      photoUrl,
      documents,
      approved: false // default: false until admin approves
    });

    await expert.save();

    return res.status(201).json({ message: "Expert registered successfully", expert });
  } catch (error) {
    console.error("registerExpert error:", error);
    return res.status(500).json({ error: error.message || "Registration failed" });
  }
};

/**
 * GET /api/experts
 * Public endpoint - returns only approved experts
 */
export const getApprovedExperts = async (req, res) => {
  try {
    const experts = await CareerExpert.find({ approved: true }).sort({ createdAt: -1 });
    return res.json(experts);
  } catch (error) {
    console.error("getApprovedExperts error:", error);
    return res.status(500).json({ error: error.message || "Failed to fetch experts" });
  }
};

/**
 * GET /api/experts/:id
 * Public: get single expert (if approved)
 */
export const getExpertById = async (req, res) => {
  try {
    const { id } = req.params;
    const expert = await CareerExpert.findById(id);
    if (!expert) return res.status(404).json({ error: "Expert not found" });
    if (!expert.approved) return res.status(403).json({ error: "Expert not approved" });
    return res.json(expert);
  } catch (error) {
    console.error("getExpertById error:", error);
    return res.status(500).json({ error: error.message || "Failed to fetch expert" });
  }
};
