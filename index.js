const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var cors = require("cors");

const router = require("./routes/employeeRoute");

dotenv.config({
	path: "./config.env",
});

mongoose.connect(
	process.env.DATABASE_URL,
	{
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) {
			console.log(err);
		}
		console.log("Successfully connected to mongoDB");
	}
);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/employees/", router);

app.listen(process.env.PORT, () => {
	console.log(`Server running on PORT no. ${process.env.PORT}`);
});
