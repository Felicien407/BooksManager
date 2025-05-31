import mongoose from "mongoose";
import bookModel from "../models/books.model.js";

export const createBook = async (req, res) => {
  try {
    const { name, author, publishedYear } = req.body;

    if (!name || !author || !publishedYear) {
      return res.status(400).json({
        message: "All fields(name,author, publishedYear) are required!",
      });
    }

    const data = await bookModel.create({
      name: name,
      author: author,
      publishedYear: publishedYear,
    });

    if (!data) {
      return res.status(500).json({
        message: "Failed to create book!",
      });
    }

    return res.status(201).json({
      message: "Book created successfully!",
      data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const readAllBooks = async (req, res) => {
  try {
    const data = await bookModel.find({});

    if (data.length === 0) {
      return res.status(200).json({
        message: "No books found!",
      });
    }
    const counter = data.length;
    return res.status(200).json({
      count: counter,
      message: "Books fetched successfully!",
      data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const readSingleBook = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid book ID format" });
    }

    const bookData = await bookModel.findById(id);
    if (!bookData) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({
      message: "Book fetched successfully!",
      data: bookData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { name, author, publishedYear } = req.body;

    if (!name || !author || !publishedYear) {
      return res.status(400).json({
        message: "All fields(name,author, publishedYear) are required!",
      });
    }

    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid book ID format" });
    }

    const updatedBook = await bookModel.findByIdAndUpdate(
      id,
      { name, author, publishedYear },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({
        message: "Book not found!",
      });
    }

    return res.status(200).json({
      message: "Book updated successfully!",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedBook = await bookModel.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({
        message: "Book not found!",
      });
    }

    return res.status(200).json({
      message: "Book deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
