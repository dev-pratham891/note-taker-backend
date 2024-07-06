import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
});

export const Note = mongoose.model("Note", noteSchema);
