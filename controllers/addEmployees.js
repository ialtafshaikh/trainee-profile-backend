const Employee = require("../models/employeeSchema");

//custom imports
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

const addEmployees = async (req, res, next) => {
	try {
		let data = req.body;
		let newEmployee = {};
		newEmployee.firstName = data.firstName.trim();
		newEmployee.lastName = data.lastName.trim();
		newEmployee.company = data.company.trim();
		newEmployee.email = data.email.trim();
		newEmployee.contact = data.contact;
		newEmployee.skills = data.skills.split(",").map((skill) => {
			return skill.trim();
		});
		newEmployee.altDescription = data.altDescription.trim();
		newEmployee.hobbies = data.hobbies.split(",").map((hobby) => {
			return hobby.trim();
		});
		newEmployee.socialLinks = [
			{
				gitHub: data.gitHub.trim(),
				linkedIn: data.linkedIn.trim(),
				website: data.website.trim(),
			},
		];
		newEmployee.imageUrl = req.image;
		let employee = await Employee.find({ email: newEmployee.email });
		if (employee.length) {
			return sendErrorMessage(
				new AppError(
					400,
					"Unsuccessful",
					"Email already exist try with another Email id"
				),
				req,
				res
			);
		} else {
			let data = await Employee.create(newEmployee);
			sendResponse(200, "Employee added Succesfully", data, req, res);
		}
	} catch (err) {
		return sendErrorMessage(new AppError(400, "unsuccessful", err), req, res);
	}
};

module.exports.addEmployees = addEmployees;
