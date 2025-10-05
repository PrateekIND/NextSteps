import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const protectAdmin = async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id).select("-passwordHash");
    if (!admin) return res.status(401).json({ message: "Admin not found" });

    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

export default protectAdmin;
