import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(express.static("public"));
app.use(cookieParser());

import { router as authRouter } from "./routes/auth.route.js";
import { router as notesRouter } from "./routes/notes.route.js";

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/notes", notesRouter);

app.get("/", (req, res) => {
  res.send(`hello world`);
});

export { app };
