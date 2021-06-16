require("dotenv").config();
// import package library
const express = require("express");
const connectDatabase = require("./config/connection");
//
// import router
const bookRouter = require("./routes/bookRoutes");
const computerRouter = require("./routes/computerRoutes");
//
const app = express();
const PORT = process.env.PORT || 5000;

// Router
app.use("/api/books", bookRouter);
app.use("/api/computers", computerRouter);
//

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

connectDatabase();

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
