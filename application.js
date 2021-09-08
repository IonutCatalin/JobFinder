const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
// const Jobs = require("./models/Jobs");

// app.use(express.json());
app.use(bodyParser.json());

// IMPORT ROUTES
const jobsRoute = require("./routes/jobs");

//app.use("/posts", postsRoute);

app.use("/jobs", jobsRoute);

app.get("/", (req, res) => {
	res.send("We are on home");
});

// app.get("/jobslist", (req, res) => {
// 	Jobs.find()
// 		.then((result) => {
// 			res.send(result);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
	console.log("connected to db");
});

app.listen(3001, () => {
	console.log("Listening at port 3001");
});
