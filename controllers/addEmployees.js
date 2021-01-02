const Employee = require("../models/employeeSchema");

//custom imports
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

const addEmployees = (req, res, next) => {
  let newEmployee;
  newEmployee.firstName = req.body.firstName;
  newEmployee.lastName = req.body.lastName;
  newEmployee.company = req.body.company;
  newEmployee.email = req.body.email;
  newEmployee.contact = req.body.contact;
  newEmployee.skills = req.body.skills;
  newEmployee.altDescription = req.body.altDescription;
  newEmployee.hobbies = req.body.hobbies;
  newEmployee.socialLinks = [
    {
      gitHub: req.body.gitHub,
      linkedIn: req.body.linkedIn,
      website: req.body.website,
    },
  ];
  newEmployee.imageUrl = req.image;

  Employee.create(newEmployee)
    .then((data) => {
      sendResponse(200, "Employee added Succesfully", data, req, res);
    })
    .catch((err) => {
      return sendErrorMessage(new AppError(400, "unsuccessful", err), req, res);
    });
};

module.exports.addEmployees = addEmployees;
