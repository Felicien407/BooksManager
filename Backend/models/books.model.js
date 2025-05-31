import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
      maxlength: 100,
    },
    author: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const bookModel = mongoose.model("Book", bookSchema);
export default bookModel;