import express from "express";
import {
  createBook,
  readAllBooks,
  readSingleBook,
  updateBook,
  deleteBook,
} from "../controllers/books.controller.js";

const router = express.Router();

// Create a new book
router.post("/create", createBook);

// Read all books
router.get("/", readAllBooks);

// Read a single book by ID
router.get("/details/:id", readSingleBook);

// Update a book by ID
router.put("/edit/:id", updateBook);

// Delete a book by ID
router.delete("/delete/:id", deleteBook);

export default router;