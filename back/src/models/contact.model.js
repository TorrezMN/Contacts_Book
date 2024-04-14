// Post.model.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    max: 120,
  },
  dateOfBirth: {
    type: Date,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  role: {
    type: String,
    enum: ["friend", "family", "coworker"],
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
