// backend/routes/expertRoutes.js
import express from "express";
import {
  getUploadUrl,
  registerExpert,
  getApprovedExperts,
  getExpertById
} from "../controller/expertController.js";

const router = express.Router();

/**
 * Generate signed upload URL (backend)
 * POST body: { fileName, folder }
 * Response: { signedUrl, path }
 */
router.post("/upload-url", getUploadUrl);

/**
 * Register expert after frontend completed direct uploads.
 * POST body: { name, email, phone, bio, specialization, photoPath, documentPaths }
 */
router.post("/register", registerExpert);

/**
 * Public list & single expert
 */
router.get("/", getApprovedExperts);
router.get("/:id", getExpertById);

export default router;
