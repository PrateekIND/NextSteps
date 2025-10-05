import express from "express";
import { loginAdmin, getAllExperts, approveExpert, getAllBookings, updateBookingStatus } from "../controller/adminController.js";
import protectAdmin from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/experts", protectAdmin, getAllExperts);
router.put("/experts/:id/approve", protectAdmin, approveExpert);
router.get("/bookings", protectAdmin, getAllBookings);
router.put("/bookings/:id/status", protectAdmin, updateBookingStatus);

export default router;
