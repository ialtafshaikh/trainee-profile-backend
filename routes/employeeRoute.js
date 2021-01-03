const express = require("express");

const { getAllEmployees } = require("../controllers/getAllEmployees");
const { addEmployees } = require("../controllers/addEmployees");
const { getEmployeeById } = require("../controllers/getEmployeeById");

//middlewares
const { uploadImage } = require("../middlewares/imageMiddlewares");

const { multerUploads } = require("../config/multerConfig");
const { cloudinaryConfig } = require("../config/cloudinaryConfig");

const router = express.Router();

router.route("/").get(getAllEmployees);
router
	.route("/addEmployee")
	.post(cloudinaryConfig, multerUploads, uploadImage, addEmployees);
router.route("/:empId").get(getEmployeeById);

module.exports = router;
