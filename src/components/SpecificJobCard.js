import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../img/company.png";
import axios from "axios";

const SpecificJobCard = ({ job, id }) => {
	const [isJobStored, setIsJobStored] = useState(false);
	const user = JSON.parse(localStorage.getItem("user"));

	async function saveJobsToDatabase() {
		try {
			await axios.post(`http://localhost:3001/savedJobs`, {
				companyName: job.companyName,
				location: job.location,
				remuneration: job.remuneration,
				contact: job.contact,
				period: job.period,
				description: job.description,
				requirements: job.requirements,
				companyOffers: job.companyOffers,
				userId: user._id,
				savedJobId: id,
			});
			setIsJobStored(true);
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<>
			<div
				className="pb-4 tns-item tns-slide-cloned"
				aria-hidden="true"
				tabIndex="-1"
				style={{ width: "550px" }}
			>
				<div className="card bg-secondary card-hover h-100">
					<div className="card-body pb-3">
						<div className="d-flex align-items-center mb-2">
							<img className="me-2" src={logo} width="24" alt="XAMPP Logo" />
							<span className="fs-sm text-dark opacity-80 px-1">
								{job.companyName}
							</span>
							<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
								Hot
							</span>
						</div>
						<h3 className="h6 card-title pt-1 mb-2">
							<Link
								to={`/companydetails/${id}`}
								className="text-nav stretched-link text-decoration-none"
							>
								{job.description}
							</Link>
						</h3>
						<p className="fs-sm mb-0">
							Company Offer: {job.companyOffers}
							<br />
							<br />
							Requirements: {job.requirements}
						</p>
					</div>
					<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
						<div className="fs-sm">
							<span className="text-nowrap me-3">
								<i className="fi-map-pin text-muted me-1"> </i>New Jersey
							</span>
							<span className="text-nowrap me-3">
								<i className="fi-cash fs-base text-muted me-1"></i>$
								{job.remuneration}
							</span>
						</div>
						<button
							className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
							type="button"
							data-bs-toggle="tooltip"
							title=""
							data-bs-original-title="Add to saved jobs"
							aria-label="Add to saved jobs"
							disabled={isJobStored}
							onClick={() => saveJobsToDatabase()}
						>
							<i className="fi-heart"></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SpecificJobCard;
