const bookModel = require("../models/bookSchema");

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await bookModel.find({});
      res.json(books);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Not found books" });
    }
  },
  getBookById: async (req, res) => {
    try {
      const id = req.params.id;
      const book = await bookModel.findById(id);
      res.json(book);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Not found book" });
    }
  },
};

module.exports = bookController;
