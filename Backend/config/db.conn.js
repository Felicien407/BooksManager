import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URL = process.env.MONGO_URI;

const db_conn = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log({
      message: "Database connection failed!",
      error: error.message,
    });
  }
};

export default db_conn;
