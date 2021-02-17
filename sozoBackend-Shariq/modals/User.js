const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  lastname: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 40,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 255,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", userSchema);
