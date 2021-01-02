const Employee = require("../models/employeeSchema");

//custom imports
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

const addEmployees = (req, res, next) => {
  const data = JSON.parse(JSON.stringify(req.body));
  let newEmployee = {};
  newEmployee.lastName = data.lastName;
  newEmployee.firstName = data.firstName;
  newEmployee.company = data.company;
  newEmployee.email = data.email;
  newEmployee.contact = data.contact;
  newEmployee.skills = data.skills.split(",");
  newEmployee.altDescription = data.altDescription;
  newEmployee.hobbies = data.hobbies.split(",");
  newEmployee.socialLinks = [
    {
      gitHub: data.gitHub,
      linkedIn: data.linkedIn,
      website: data.website,
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
