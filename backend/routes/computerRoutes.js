const express = require("express");
const computerControler = require("../controller/computerController");
const router = express.Router();

router.get("/", computerControler.getAllComputer);
router.get("/:id", computerControler.getComputerById);

module.exports = router;
