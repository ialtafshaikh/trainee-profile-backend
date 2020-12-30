const Employee = require("../models/employeeSchema");

//custom imports
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

const addEmployees = (req, res, next) => {
	console.log(req.body);
	// new Employee(req.body)
	// 	.save()
	// 	.then((data) => {
	// 		sendResponse(200, "Employee added Succesfully", data, req, res);
	// 	})
	// 	.catch((err) => {
	// 		return sendErrorMessage(
	// 			new AppError(400, "unsuccessful", "request body is inavlid"),
	// 			req,
	// 			res
	// 		);
	// 	});
	Employee.create(req.body)
		.then((data) => {
			res.status(200);
			res.setHeader("Content-Type", "application/json");
			res.json({ status: "Employee added successfully", data: data });
		})
		.catch((err) => {
			res.status(404);
			res.json({ message: "Invalid Object Property", error: err });
		});
};

module.exports.addEmployees = addEmployees;
