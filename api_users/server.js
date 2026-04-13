require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const userRoutes = require("./routes/users");

const app = express();

// REVIEW: `cors()` allows any origin; `render.yaml` defines `CORS_ORIGINS` but this server never reads it — wire `cors({ origin: ... })` for production or remove the unused env var.
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

connectDB();

app.use("/users", userRoutes);

// REVIEW: `render.yaml` sets `healthCheckPath: /health` but no `/health` route exists — Render health checks will fail until you add e.g. `app.get('/health', (_, res) => res.send('ok'))`.
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
