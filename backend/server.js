require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");

const productRoutes = require("./routes/products");
const contactRoutes = require("./routes/contact");
const companyRoutes = require("./routes/company");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  })
);
app.use(express.json());

// Basic rate limiting on the contact form to reduce spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: "Too many submissions. Please try again later." },
});

app.get("/api/health", (req, res) => res.json({ status: "ok" }));
app.use("/api/products", productRoutes);
app.use("/api/contact", contactLimiter, contactRoutes);
app.use("/api/company", companyRoutes);

app.use((req, res) => res.status(404).json({ error: "Route not found" }));

app.listen(PORT, () => {
  console.log(`[server] Vision Ply API running on port ${PORT}`);
});
