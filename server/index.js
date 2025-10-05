import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import expertRoutes from "./routes/expertRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
dotenv.config();

const app = express();

// Connecting to the database 
connectDb();

// Defining port
const port = process.env.PORT || 5000;

// Using middlewares
app.use(express.json());
app.use(cookieParser("helloworld"));
app.set('trust proxy', 1); // Ensures secure cookies are properly set behind a proxy

app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400 
}));

app.options('*', (req, res) => {
    res.header("Access-Control-Allow-Origin", process.env.BASE_URL);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Max-Age", "86400");  // Cache for 24 hours
    res.sendStatus(204);
});


// Defining the routes
app.get('/', async(req, res) =>{
    res.status(201).json({
        message:"Welcome to the NextStep Backend Server and enjoy your ride."
    })
})
app.use("/api/admin", adminRoutes);
app.use("/api/experts", expertRoutes);
app.use("/api/bookings", bookingRoutes);
// Starting the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
