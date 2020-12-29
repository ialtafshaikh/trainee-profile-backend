const express = require("express");
const { getAllemployees } = require("../controllers/employeeController");
const {addEmployees} =require("../controllers/addEmployees")

const router = express.Router();

router.route("/").get(getAllemployees);
router.route("/addEmployee").post(addEmployees);

module.exports = router;
