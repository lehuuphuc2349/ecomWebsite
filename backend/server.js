require("dotenv").config();
const express = require("express");
const connectDatabase = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

connectDatabase();

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
