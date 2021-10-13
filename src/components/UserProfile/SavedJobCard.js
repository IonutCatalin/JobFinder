import React, { useContext, useEffect, useState } from "react";
import companyImage from "../../img/company.png";
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";

const SavedJobCard = ({ job, id, type }) => {
	// const { removeJobFromSavedJobs } = useContext(GlobalContext);
	const user = JSON.parse(localStorage.getItem("user"));
	const [savedJobs, setSavedJobs] = useState([]);

	const removeJobFromSavedJobs = () => {
		// fetch(`http://localhost:3001/savedJobs/id=?${id}`, {
		// 	method: "DELETE",
		// })
		// 	.then((res) => res.json()) // or res.json()
		// 	.then((res) => console.log(res));
		fetch("http://localhost:3001/savedJobs/" + id, {
			method: "DELETE",
		})
			.then((res) => {
				return res.json();
			})
			.then(() => {
				console.log("Saved Job deleted");
			});
		getUserSavedJobs();
	};

	async function getUserSavedJobs() {
		fetch(`http://localhost:3001/savedJobs?userId=${user._id}`, {
			method: "GET",
			headers: { "Content-type": "application/json" },
		})
			.then((res) => res.json())
			.then((data) => {
				setSavedJobs(data);
			});
		// console.log("aici", savedJobs);
	}

	useEffect(() => {
		getUserSavedJobs();
	}, []);

	// console.log("id", id);
	// console.log("savedJobs", savedJobs);

	return (
		<>
			<div key={id} className="col-md-6 col-lg-4">
				<div className="card bg-secondary card-hover h-100">
					<div className="card-body">
						<div className="d-flex align-items-center mb-3">
							<img
								className="me-2"
								src={companyImage}
								width="24"
								alt="IT Pro TV"
							/>
							<span className="fs-sm text-dark opacity-80 px-1">
								{job.companyName}
							</span>
							<span className="badge bg-faded-info rounded-pill fs-sm ms-auto">
								New
							</span>
						</div>
						<h3 className="h6 card-title mb-2">
							<a
								className="text-nav stretched-link text-decoration-none"
								href="job-board-single.html"
							>
								{job.description}
							</a>
						</h3>
						<p className="fs-sm mb-0">Requirements: {job.requirements}</p>
						<p className="fs-sm mb-0">Company Offers: {job.companyOffers}</p>
						<p className="fs-sm mb-0">Period: {job.period}</p>
						<p className="fs-sm mb-0">Contact: {job.contact}</p>
					</div>
					<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
						<div className="fs-sm">
							<span className="text-nowrap me-3">
								<i className="fi-map-pin text-muted me-1"> </i>
								{job.location}
							</span>
							<span className="text-nowrap me-3">
								<i className="fi-cash fs-base text-muted me-1"></i>$
								{job.remuneration}
							</span>
						</div>

						<button
							className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm content-overlay"
							type="button"
							data-bs-toggle="tooltip"
							title=""
							data-bs-original-title="Remove from saved jobs"
							aria-label="Remove from saved jobs"
							onClick={() => {
								removeJobFromSavedJobs(job._id);
							}}
						>
							<i className="fi-heart-filled"></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SavedJobCard;
