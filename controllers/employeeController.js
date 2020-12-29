const Employee = require("../models/employeeSchema");

//custom imports
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

//get all employees
getAllemployees = (req, res, next) => {
  Employee.find({})
    .then((allEmployees) => {
      sendResponse(200, "Successful", allEmployees, req, res);
    })
    .catch((err) => {
      sendErrorMessage(
        new AppError(400, "unsuccessful", "request body is inavlid"),
        req,
        res
      );
    });
};
module.exports = { getAllemployees };
