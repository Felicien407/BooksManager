import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import BooksRouter from "./routes/books.route.js";
import db_conn from "./config/db.conn.js";

const app = express();

app.use(express.json());

app.use(cors())
// app.use(
//   cors({
//     origin: "http://localhost:5173/",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"]
//   })
// );

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Torch Library Books API" });
});

app.use("/books", BooksRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  try {
    console.log(
      `Server connected successfully! On port: http://localhost:${PORT}`
    );
  } catch (error) {
    console.log({
      message: "Eror while connecting server",
      error: error.message,
    });
  }
});

db_conn();
