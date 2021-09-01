const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

// IMPORT ROUTES
const jobsRoute = require("./routes/jobs");

//app.use("/posts", postsRoute);

app.use("/jobs", jobsRoute);

app.get("/", (req, res) => {
	res.send("We are on home");
});

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
	console.log("connected to db");
});

app.listen(3001, () => {
	console.log("Listening at port 3001");
});
