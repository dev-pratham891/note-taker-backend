import dotenv from "dotenv";
import connectDB from "./config/db.js";
// import { app } from "./app.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router as authRouter } from "./routes/auth.route.js";
import { router as notesRouter } from "./routes/notes.route.js";

dotenv.config({ path: "./.env" });



const app = express();



connectDB()
  .then(() => {
    console.log("Connected to MongoDB");

  })
  .catch((error) => {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  });





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


app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/notes", notesRouter);

app.get("/", (req, res) => {
  res.send(`The backend app is running on this port. Try and test out the routes using testing softwares like postman. For routes, refer to https://github.com/Akhilesh29/SecureU-Note-Taker-Backend#testing`);
});

// export { app };



app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
});
