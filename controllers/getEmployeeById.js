const Employee = require("../models/employeeSchema");

//custom imports
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

//get employee by id
getEmployeeById = async (req, res, next) => {
	try {
		let employee = await Employee.find({ employeeId: req.params.empId });
		sendResponse(
			200,
			"Successfully found the Employee by Id",
			employee,
			req,
			res
		);
	} catch (error) {
		sendErrorMessage(
			new AppError(400, "Unsuccessful", "Employee not found"),
			req,
			res
		);
	}
};
module.exports = { getEmployeeById };
