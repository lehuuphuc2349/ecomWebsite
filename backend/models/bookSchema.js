const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
    required: true,
  },
  category: {
    type: String,
    default: "",
    required: true,
  },
  categoryBook: {
    type: String,
    default: "",
    required: true,
  },
  price: {
    type: String,
    default: "",
    required: true,
  },
  countInStock: {
    type: String,
    default: "",
    required: true,
  },
  ratting: {
    type: String,
    default: "",
    required: true,
  },
  pages: {
    type: String,
    default: "",
    required: true,
  },
  year: {
    type: String,
    default: "",
    required: true,
  },
  author: {
    type: String,
    default: "",
    required: true,
  },
  authorImage: {
    type: String,
    default: "",
    required: true,
  },
  image: {
    type: String,
    default: "",
    required: true,
  },
  description: {
    type: String,
    default: "",
    required: true,
  },
});

module.exports = mongoose.model("product", bookSchema);
