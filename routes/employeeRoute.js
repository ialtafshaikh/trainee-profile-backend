const express = require("express");
const { getAllemployees } = require("../controllers/employeeController");

const router = express.Router();

router.route("/").get(getAllemployees);

module.exports = router;
