//mongoose schema
const mongoose = require("mongoose");
const uniquid = require("uniquid");

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    default: uniquid(),
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, "Please enter first name"],
    validate: {
      validator: function (firstName) {
        return this.firstName.trim().length;
      },
      message: "first name should not be empty",
    },
  },
  lastName: {
    type: String,
    required: [true, "Please enter last name"],
    validate: {
      validator: function (lastName) {
        return this.lastName.trim().length;
      },
      message: "last name should not be empty",
    },
  },
  company: {
    type: String,
    required: [true, "Please enter your company. "],
    validate: {
      validator: function (company) {
        return this.company.trim().length;
      },
      message: "company should not be empty",
    },
  },
  email: {
    type: String,
    required: [true, "Please enter your email. "],
    validate: {
      validator: function (email) {
        return this.email.trim().length;
      },
      message: "email should not be empty",
    },
  },
  contact: {
    type: String,
    required: [true, "Please enter your contact number. "],
    validate: {
      validator: function (contact) {
        return this.contact.trim().length;
      },
      message: "contact number should not be empty",
    },
  },
  imageUrl: {
    type: String,
    required: false,
    default: "",
  },
  skills: [],
  altDescription: {
    type: String,
    required: false,
  },
  hobbies: [],
  socialLinks: [],
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
