//mongoose schema
const mongoose = require("mongoose");
const uniquid = require("uniquid");

const employeeSchema = new mongoose.Schema({
	employeeId: {
		type: String,
		default: uniquid() + Date.now(),
		unique: true,
	},

	firstName: {
		type: String,
		required: [true, "Please enter first name"],
		validate: [
			{
				validator: function () {
					return this.firstName.trim().length;
				},
				message: "Employee's First name should not be empty",
			},
			{
				validator: function () {
					const re = /<("[^"]?"|'[^']?'|[^'">])*>/;
					if (re.test(this.firstName)) {
						return false;
					}
				},
				message: "Field content cannot be HTML",
			},
		],
	},
	lastName: {
		type: String,
		required: [true, "Please enter last name"],
		validate: [
			{
				validator: function () {
					return this.lastName.trim().length;
				},
				message: "Employee's Last name should not be empty",
			},
			{
				validator: function () {
					const re = /<("[^"]?"|'[^']?'|[^'">])*>/;
					if (re.test(this.lastName)) {
						return false;
					}
				},
				message: "Field content cannot be HTML",
			},
		],
	},
	company: {
		type: String,
		required: [true, "Please enter your company. "],
		validate: [
			{
				validator: function () {
					return this.company.trim().length;
				},
				message: "Employee's Company should not be empty",
			},
			{
				validator: function () {
					const re = /<("[^"]?"|'[^']?'|[^'">])*>/;
					if (re.test(this.company)) {
						return false;
					}
				},
				message: "Field content cannot be HTML",
			},
		],
	},

	email: {
		type: String,
		required: [true, "Please enter your email. "],
		unique: [true, "Email Id already exist. Try with another Email Id. "],
		validate: [
			{
				validator: function () {
					return this.email.trim().length;
				},
				message: "Employee's Email should not be empty",
			},
			{
				validator: function () {
					const re = /<("[^"]?"|'[^']?'|[^'">])*>/;
					if (re.test(this.email)) {
						return false;
					}
				},
				message: "Field content cannot be HTML",
			},
			{
				validator: function () {
					const re = /<("[^"]?"|'[^']?'|[^'">])*>/;
					if (re.test(this.email)) {
						return false;
					}
				},
				message: "Email id is not valid",
			},
		],
	},
	contact: {
		type: Number,
		default: "",
	},
	imageUrl: {
		type: String,
		default: "",
	},
	skills: [],
	altDescription: {
		type: String,
		default: "alt-image-description",
	},
	hobbies: [],
	socialLinks: [],
});

let Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
