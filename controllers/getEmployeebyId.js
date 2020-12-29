const Employee = require("../models/employeeSchema");

//custom imports
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

//get employee by id
getEmployeebyId = (req, res, next) => {
  Employee.find({ employeeId: req.params.empId })
    .then((employee) => {
      sendResponse(200, "Successfully found the Employee", employee, req, res);
    })
    .catch((err) => {
      sendErrorMessage(
        new AppError(400, "unsuccessful", "Employee not found"),
        req,
        res
      );
    });
};
module.exports = { getEmployeebyId };
