import express from 'express';
import { getAllLyrics, addLyrics, deleteLyrics, updateLyrics } from '../services/lyricsService.js';

const router = express.Router();

// Get all lyrics
router.get("/", async (req, res) => {
  try {
    const lyrics = await getAllLyrics();
    res.status(200).json(lyrics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new lyrics
router.post("/", async (req, res) => {
  try {
    const { author, lyrics } = req.body;
    const newLyrics = await addLyrics(author, lyrics);
    res.status(201).json(newLyrics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE lyrics by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteLyrics(id);
    res.status(200).json({ message: "Lyrics deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE lyrics by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { author, lyrics } = req.body;
    const updatedLyrics = await updateLyrics(id, author, lyrics);
    res.status(200).json(updatedLyrics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
