import React from "react";
import { Link, useHistory } from "react-router-dom";
import companyImage from "./../img/company.png";
import { useState, useEffect } from "react";

// import application from "./../../application";
// const Jobs = require("../../models/Jobs");

const JobCard = () => {
	// const job = app.get("/jobs", (req, res) => {
	// 	Jobs.find()
	// 		.then((result) => {
	// 			res.send(result);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// });

	const [jobList, setJobList] = useState([]);

	// Getting the jobs info
	const getJobs = () => {
		fetch("http://localhost:3001/jobs/", {
			mode: "no-cors",
			method: "GET",
			headers: { "Content-type": "application/json" },
		})
			.then((res) => res.json())
			.then((data) => {
				setJobList(data);
			});
	};

	useEffect(() => {
		getJobs();
	}, []);

	return (
		<>
			<div className="card bg-secondary card-hover mb-2">
				<div className="card-body">
					<div className="d-flex justify-content-between align-items-start mb-2">
						<div className="d-flex align-items-center">
							<img
								className="me-2"
								src={companyImage}
								width="24"
								alt="IT Pro Logo"
							/>
							<span className="fs-sm text-dark opacity-80 px-1">IT Pro TV</span>
						</div>
						<div className="dropdown content-overlay">
							<button
								className="btn btn-icon btn-light btn-xs rounded-circle shadow-sm"
								type="button"
								id="contextMenu1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<i className="fi-dots-vertical"></i>
							</button>
							<ul className="dropdown-menu my-1" aria-labelledby="contextMenu1">
								<li>
									<button className="dropdown-item" type="button">
										<i className="fi-heart opacity-60 me-2"></i>Add to Saved
										Jobs
									</button>
								</li>
								<li>
									<button className="dropdown-item" type="button">
										<i className="fi-x-circle opacity-60 me-2"></i>Not
										interested
									</button>
								</li>
							</ul>
						</div>
					</div>
					<h3 className="h6 card-title pt-1 mb-3">
						<Link to="/specificjob" style={{ textDecoration: "none" }}>
							<a className="text-nav stretched-link text-decoration-none">
								{jobList.map((job) => {
									return <p>{job.description}</p>;
								})}
								Business Analyst
							</a>
						</Link>
					</h3>
					<div className="fs-sm">
						<span className="text-nowrap me-3">
							<i className="fi-map-pin text-muted me-1"> </i>Chicago
						</span>
						<span className="text-nowrap me-3">
							<i className="fi-cash fs-base text-muted me-1"></i>$7,500
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default JobCard;
