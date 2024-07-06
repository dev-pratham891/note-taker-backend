import express from "express";
import { Note } from "../models/note.model.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// Create Note
router.post("/", authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = new Note({
      userId: req.user.id,
      title,
      content,
    });

    const note = await newNote.save();
    res.json(note);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Get Notes
router.get("/", authMiddleware, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Update Note
router.put("/:id", authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found" });

    if (note.userId.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not authorized" });

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    res.json(note);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Delete Note
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found" });

    if (note.userId.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not authorized" });

    await Note.findByIdAndRemove(req.params.id);
    res.json({ msg: "Note removed" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

export { router };
