import express from "express";
import cors from "cors";
import lyricsRoutes from "./routes/lyricsRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/lyrics", lyricsRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});