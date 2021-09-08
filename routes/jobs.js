const express = require("express");
const router = express.Router();
const Jobs = require("../models/Jobs");

// GET BACK ALL THE JOBS
router.get("/", async (req, res) => {
	try {
		// res.send("We are on jobs");
		const jobs = await Jobs.find();
		res.json(jobs);
	} catch (err) {
		res.json({ message: err });
	}
});

// SUBMITS A USER
router.post("/", async (req, res) => {
	const job = new Jobs({
		companyName: req.body.companyName,
		location: req.body.location,
		remuneration: req.body.remuneration,
		contact: req.body.contact,
		period: req.body.period,
		description: req.body.description,
		requirements: req.body.requirements,
		companyOffers: req.body.companyOffers,
	});

	try {
		const savedJob = await job.save();
		res.json(savedJob);
	} catch (err) {
		res.json({ message: err });
	}
});

// SPECIFIC USER
router.get("/:jobId", async (req, res) => {
	try {
		const job = await Jobs.findById(req.params.jobId);
		res.json(job);
	} catch (err) {
		res.json({ message: err });
	}
});

// DELETE USER
router.delete("/:jobId", async (req, res) => {
	try {
		const removedJob = await Jobs.deleteOne({ _id: req.params.jobId });
		res.json(removedJob);
	} catch (err) {
		res.json({ message: err });
	}
});

// UPDATE USER

router.patch("/:jobId", async (req, res) => {
	try {
		const updatedJob = await Jobs.updateOne(
			{ _id: req.params.jobId },
			{
				$set: {
					companyName: req.body.companyName,
					location: req.body.location,
					remuneration: req.body.remuneration,
					contact: req.body.contact,
					period: req.body.period,
					description: req.body.description,
					requirements: req.body.requirements,
					companyOffers: req.body.companyOffers,
				},
			}
		);
		res.json(updatedJob);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
