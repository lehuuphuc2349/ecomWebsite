const computerModel = require("../models/computerSchema");

const computerController = {
  getAllComputer: async (req, res) => {
    try {
      const computers = await computerModel.find({});
      res.json(computers);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Not found computers" });
    }
  },
  getComputerById: async (req, res) => {
    try {
      const id = req.params.id;
      const computer = await computerModel.findById(id);
      res.json(computer);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Not found computer" });
    }
  },
};

module.exports = computerController;
