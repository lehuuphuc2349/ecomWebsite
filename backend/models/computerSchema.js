const mongoose = require("mongoose");

const computerSchema = {
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  ratting: {
    type: String,
    required: true,
  },
  Options: {
    CPU: {
      type: String,
      required: true,
    },
    capacity: {
      type: String,
      required: true,
    },
    style: {
      type: String,
    },
    operatingSystem: {
      type: String,
      required: true,
    },
    hardwareInterface: {
      type: String,
      default: "",
    },
    screenSize: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    chipsetBrand: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
};

const Computer = mongoose.model("Computer", computerSchema);
module.exports = Computer;
