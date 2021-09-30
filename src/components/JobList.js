import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import JobCard from "./JobCard";
import JobsFindHeader from "./JobsFindHeader";
import JobPagination from "./JobPagination";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const JobList = () => {
	// Second get jobslist
	const [newJobs, setNewJobs] = useState([]);
	// Get current jobs
	const [currentPage, setCurrentPage] = useState(1);
	const [jobsPerPage] = useState(4);

	const [jobList, setJobList] = useState([]);
	const [jobState, setJobState] = useState("");

	// Getting the jobs info
	const getJobs = () => {
		fetch("http://localhost:3001/jobs/", {
			method: "GET",
			headers: { "Content-type": "application/json" },
		})
			.then((res) => res.json())
			.then((data) => {
				setJobList(data);
				console.log("joblist inside", jobList);
			});
		console.log("joblist outside", jobList);
	};

	useEffect(() => {
		getJobs();

		// Getting the new jobs info
		const getNewJobs = () => {
			fetch("http://localhost:3001/jobs/", {
				method: "GET",
				headers: { "Content-type": "application/json" },
			})
				.then((res) => res.json())
				.then((data) => {
					setNewJobs(data);
					console.log("newJobs inside", newJobs);
				});
			console.log("newJobs outside", newJobs);
		};
		getNewJobs();
	}, []);

	// Get Current Jobs
	const indexOfLastJob = currentPage * jobsPerPage;
	const indexOfFirstJob = indexOfLastJob - jobsPerPage;
	const currentJobs = jobList.slice(indexOfFirstJob, indexOfLastJob);

	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<Header />
			<JobsFindHeader />

			<section
				className="position-relative bg-white rounded-xxl-4 zindex-5"
				style={{ marginTop: "-30px", borderRadius: "1.875rem !important" }}
			>
				<div className="container pt-4 pb-5 mb-md-4">
					<nav className="pb-4 my-2" aria-label="Breadcrumb">
						<ol className="breadcrumb m-0">
							<li className="breadcrumb-item">
								<Link to="/">Home</Link>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								Find jobs
							</li>
						</ol>
					</nav>
					<div className="row">
						<div
							className="col-lg-5 col-md-6 position-relative mb-4 mb-md-0"
							style={{ zIndex: "1025" }}
						>
							<div className="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
								<div className="d-flex align-items-center">
									<label
										className="fs-sm me-2 pe-1 text-nowrap"
										htmlFor="sorting"
									>
										<i className="fi-arrows-sort mt-n1 me-2"></i>Sort by:
									</label>
									<select
										className="form-select form-select-sm"
										id="sorting"
										value={jobState}
										onChange={(e) => {
											const select = e.target.value;
											setJobState(select);
											console.log("sort type, select:", jobState);
										}}
									>
										<option value="Oldest">Oldest</option>
										<option value="Newest">Newest</option>
										<option value="HighestSalary">Highest Salary</option>
									</select>
								</div>
								<div className="text-muted fs-sm text-nowrap">
									<i className="fi-briefcase fs-base mt-n1 me-2"></i>
									{jobList.length} jobs
								</div>
							</div>
							{currentJobs.map((job) => {
								if (jobState === "Newest") {
									jobList.sort((a, b) => (a.date < b.date ? 1 : -1));

									return (
										<div key={job._id}>
											<div>
												<JobCard data={job} id={job._id} getJobs={getJobs} />
											</div>
										</div>
									);
								} else if (jobState === "HighestSalary") {
									jobList.sort((a, b) =>
										a.remuneration < b.remuneration ? 1 : -1
									);
									return (
										<div key={job._id}>
											<div>
												<JobCard data={job} id={job._id} getJobs={getJobs} />
											</div>
										</div>
									);
								} else if (jobState === "Oldest") {
									jobList.sort((a, b) => (a.date > b.date ? 1 : -1));
									return (
										<div key={job._id}>
											<div>
												<JobCard data={job} id={job._id} getJobs={getJobs} />
											</div>
										</div>
									);
								} else if (!jobState) {
									return (
										<div key={job._id}>
											<div>
												<JobCard data={job} id={job._id} getJobs={getJobs} />
											</div>
										</div>
									);
								}
							})}

							<JobPagination
								jobsPerPage={jobsPerPage}
								totalJobs={jobList.length}
								paginate={paginate}
							/>
						</div>
						<aside className="col-lg-7 col-md-6" style={{ marginTop: "-6rem" }}>
							<div className="sticky-top" style={{ paddingTop: "6rem" }}>
								<div className="card shadow-sm p-lg-3 mb-3 mb-lg-0">
									<div className="card-body p-lg-4">
										<h2 className="h3">Subscribe to our newsletter</h2>
										<p>
											Don’t miss any job updates and relevant vacancies info!
										</p>
										<form className="form-group rounded-pill mb-3">
											<div className="input-group">
												<span className="input-group-text text-muted">
													<i className="fi-mail text-muted"></i>
												</span>
												<input
													className="form-control"
													type="text"
													placeholder="Your email"
												/>
											</div>
											<button
												className="btn btn-primary rounded-pill"
												type="button"
											>
												Subscribe
											</button>
										</form>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="agree"
											/>
											<label className="form-check-label" htmlFor="agree">
												I agree to receive communications from Finder.
											</label>
										</div>
										<hr className="my-4" />
										<div className="d-flex align-items-end">
											<div className="fs-lg fw-bold me-3">
												Like our jobs?
												<br />
												Receive vacancies in Telegram
											</div>
											<a
												className="btn btn-icon btn-translucent-primary btn-xs rounded-circle"
												href="#"
											>
												<i className="fi-telegram"></i>
											</a>
										</div>
									</div>
								</div>
								<div className="pt-4 pt-lg-5 ps-4 ps-lg-5">
									<h2 className="h3">My last search queries:</h2>
									<ul className="list-unstyled mb-0">
										<li className="mb-0">
											<a
												className="nav-link d-inline-block fw-normal px-0 py-1"
												href="#"
											>
												Accountant
											</a>
										</li>
										<li className="mb-0">
											<a
												className="nav-link d-inline-block fw-normal px-0 py-1"
												href="#"
											>
												Manager
											</a>
										</li>
										<li className="mb-0">
											<a
												className="nav-link d-inline-block fw-normal px-0 py-1"
												href="#"
											>
												Administrator
											</a>
										</li>
										<li className="mb-0">
											<a
												className="nav-link-muted d-inline-block fw-bold py-1"
												href="#"
											>
												Clear all<i className="fi-x fs-xs ms-2"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default JobList;
