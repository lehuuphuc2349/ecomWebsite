require("dotenv").config();

const connectDatabase = require("./config/connection");

const bookModel = require("./models/bookSchema");
const databaseBook = require("./database/book");

const computerModel = require("./models/computerSchema");
const databaseComputer = require("./database/computer");
connectDatabase();

const insertDatabase = async () => {
  try {
    // Book
    await bookModel.deleteMany({});
    await bookModel.insertMany(databaseBook);
    // Computer
    await computerModel.deleteMany({});
    await computerModel.insertMany(databaseComputer);

    console.log("Insert database success");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

insertDatabase();
