const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  categoryBook: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  countInStock: {
    type: String,
    required: true,
  },
  ratting: {
    type: String,
    required: true,
  },
  pages: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  authorImage: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Books = mongoose.model("books", bookSchema);
module.exports = Books;
