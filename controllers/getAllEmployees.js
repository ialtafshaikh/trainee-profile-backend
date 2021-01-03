const Employee = require("../models/employeeSchema");

//custom imports
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

//get all employees
getAllEmployees = async (req, res, next) => {
	try {
		let allEmployees = await Employee.find({});
		sendResponse(200, "Successful", allEmployees, req, res);
	} catch (error) {
		sendErrorMessage(
			new AppError(400, "Unsuccessful", "Request body is Invalid..."),
			req,
			res
		);
	}
};
module.exports = { getAllEmployees };
