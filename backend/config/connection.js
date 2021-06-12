require("dotenv").config();
const mongoose = require("mongoose");
const mongodbURI = process.env.MONGODB_URI;

const connectDatabase = async () => {
  try {
    await mongoose.connect(mongodbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Database Successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDatabase;
