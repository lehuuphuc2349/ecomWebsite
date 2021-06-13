require("dotenv").config();

const connectDatabase = require("./config/connection");
const bookModel = require("./models/bookSchema");
const database = require("./database/book");

connectDatabase();

const insertDatabase = async () => {
  try {
    await bookModel.deleteMany({});
    await bookModel.insertMany(database);
    console.log("Insert database success");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

insertDatabase();
