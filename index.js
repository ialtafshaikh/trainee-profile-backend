const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
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
app.use(express.json());
app.use("/employees/", router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT no. ${process.env.PORT}`);
});
