const express = require("express");
const { getAllemployees } = require("../controllers/employeeController");
const { addEmployees } = require("../controllers/addEmployees");
const { getEmployeebyId } = require("../controllers/getEmployeebyId");

const router = express.Router();

router.route("/").get(getAllemployees);
router.route("/addEmployee").post(addEmployees);
router.route("/:empId").get(getEmployeebyId);

module.exports = router;
