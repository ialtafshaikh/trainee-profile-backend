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
   
  },
  lastName: {
    type: String,
    required: [true, "Please enter last name"],
    
  },
  company: {
    type: String,
    required: [true, "Please enter your company. "],
    
  },
  email: {
    type: String,
    required: [true, "Please enter your email. "],
    
  },
  contact: {
    type: String,
    default:"",
    
  },
  imageUrl: {
    type: String,
    default: "",
  },
  skills: [],
  altDescription: {
    type: String,
   default:"alt-image-description",
  },
  hobbies: [],
  socialLinks: [],
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
