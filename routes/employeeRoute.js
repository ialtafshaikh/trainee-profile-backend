const express = require("express");

const { getAllemployees } = require("../controllers/employeeController");
const { addEmployees } = require("../controllers/addEmployees");
const { getEmployeebyId } = require("../controllers/getEmployeebyId");

//middlewares
const { uploadImage } = require("../middlewares/imageMiddlewares");

const { multerUploads } = require("../config/multerConfig");
const { cloudinaryConfig } = require("../config/cloudinaryConfig");

const router = express.Router();

router.route("/").get(getAllemployees);
router
  .route("/addEmployee")
  .post(cloudinaryConfig, multerUploads, uploadImage, addEmployees);
router.route("/:empId").get(getEmployeebyId);

module.exports = router;
