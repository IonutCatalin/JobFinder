import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import companyImage from "./../img/company.png";
import postResume from "./../img/post-resume.svg";
import boyAvatar from "./../img/boy-avatar.jpg";
import girlAvatar from "./../img/girl-avatar.jpg";
import noImageAvatar from "./../img/no-image-avatar.png";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JobList from "./JobList";
import JobCard from "./JobCard";
import ReviewModal from "./ReviewModal";
import ReviewDisplay from "./ReviewDisplay";
import ReviewPagination from "./ReviewPagination";
import JobPagination from "./JobPagination";

const CompanyDetails = () => {
	const { _id } = useParams();
	const [jobDetails, setJobDetails] = useState([]);
	const [jobList, setJobList] = useState([]);
	const [show, setShow] = useState(false);

	const [jobState, setJobState] = useState("");

	// Paginate Reviews
	const [currentPage, setCurrentPage] = useState(1);
	const [reviewsPerPage] = useState(4);

	const [reviewList, setReviewList] = useState([]);
	const [newReviewList, setNewReviewList] = useState([]);
	const [reviewState, setReviewState] = useState("");

	const getJobDetails = () => {
		fetch(`http://localhost:3001/jobs/${_id}`, {
			method: "GET",
			headers: { "Content-type": "application/json" },
		})
			.then((res) => res.json())
			.then((data) => {
				setJobDetails(data);
				console.log("data", data);
			});
	};

	const getJobs = () => {
		fetch("http://localhost:3001/jobs/", {
			method: "GET",
			headers: { "Content-type": "application/json" },
		})
			.then((res) => res.json())
			.then((data) => {
				setJobList(data);
			});
	};

	const getReviewList = () => {
		fetch(`http://localhost:3001/reviews/`, {
			method: "GET",
			headers: { "Content-type": "application/json" },
		})
			.then((res) => res.json())
			.then((data) => {
				setReviewList(data);
				console.log("data", data);
			});
	};

	const getNewReviewList = () => {
		fetch(`http://localhost:3001/reviews/`, {
			method: "GET",
			headers: { "Content-type": "application/json" },
		})
			.then((res) => res.json())
			.then((data) => {
				setNewReviewList(data);
				console.log("data", data);
			});
	};

	useEffect(() => {
		getJobDetails();
		getJobs();
	}, []);

	useEffect(() => {
		getReviewList();
		getNewReviewList();
	}, [_id]);

	// Get Current Jobs
	const indexOfLastReview = currentPage * reviewsPerPage;
	const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
	const currentReviews = reviewList.slice(
		indexOfFirstReview,
		indexOfLastReview
	);

	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	let ratingStars5 = 0;
	let ratingStars4 = 0;
	let ratingStars3 = 0;
	let ratingStars2 = 0;
	let ratingStars1 = 0;

	return (
		<>
			<Header />
			<div className="container mt-5 mb-md-2 pt-5 pb-3">
				<nav className="mb-4 pt-md-3" aria-label="Breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="/">Home</a>
						</li>
						<li className="breadcrumb-item">
							<a href="/joblist">Companies</a>
						</li>
						<li className="breadcrumb-item active" aria-current="page">
							{jobDetails.companyName}
						</li>
					</ol>
				</nav>
				<div className="row">
					<div className="col-lg-8 order-lg-2 mb-5">
						<div className="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
							<h1 className="h3 mb-sm-0 me-sm-3">Job openings</h1>
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
						</div>

						{jobList.map((job) => {
							if (
								job.companyName === jobDetails.companyName &&
								job._id != jobDetails._id
							) {
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
								return (
									<div key={job._id}>
										<div>
											<JobCard data={job} id={job._id} getJobs={getJobs} />
										</div>
									</div>
								);
							}
						})}

						<h2 className="h3 pt-4 pt-lg-5 my-4 pb-2">
							Company reviews ({reviewList.length})
						</h2>
						<div className="d-flex align-items-center mb-2">
							<div className="text-nowrap fs-sm me-3">
								5<i className="fi-star text-muted ms-1 mt-n1"></i>
							</div>
							<div className="progress w-100">
								<div
									className="progress-bar bg-warning"
									role="progressbar"
									style={{ width: "70%" }}
									aria-valuenow="70"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
							<div
								className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
								style={{ width: "3rem" }}
							>
								70%
								{ratingStars5}
							</div>
						</div>
						<div className="d-flex align-items-center mb-2">
							<div className="text-nowrap fs-sm me-3">
								4<i className="fi-star text-muted ms-1 mt-n1"></i>
							</div>
							<div className="progress w-100">
								<div
									className="progress-bar bg-warning"
									role="progressbar"
									style={{ width: "15%" }}
									aria-valuenow="15"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
							<div
								className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
								style={{ width: "3rem" }}
							>
								15%
								{ratingStars4}
							</div>
						</div>
						<div className="d-flex align-items-center mb-2">
							<div className="text-nowrap fs-sm me-3">
								3<i className="fi-star text-muted ms-1 mt-n1"></i>
							</div>
							<div className="progress w-100">
								<div
									className="progress-bar bg-warning"
									role="progressbar"
									style={{ width: "0" }}
									aria-valuenow="0"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
							<div
								className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
								style={{ width: "3rem" }}
							>
								0%
								{ratingStars3}
							</div>
						</div>
						<div className="d-flex align-items-center mb-2">
							<div className="text-nowrap fs-sm me-3">
								2<i className="fi-star text-muted ms-1 mt-n1"></i>
							</div>
							<div className="progress w-100">
								<div
									className="progress-bar bg-warning"
									role="progressbar"
									style={{ width: "10%" }}
									aria-valuenow="10"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
							<div
								className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
								style={{ width: "3rem" }}
							>
								10%
								{ratingStars2}
							</div>
						</div>
						<div className="d-flex align-items-center mb-2">
							<div className="text-nowrap fs-sm me-3">
								1<i className="fi-star text-muted ms-1 mt-n1"></i>
							</div>
							<div className="progress w-100">
								<div
									className="progress-bar bg-warning"
									role="progressbar"
									style={{ width: "5%" }}
									aria-valuenow="5"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
							<div
								className="flex-shrink-0 flex-grow-1 fs-sm text-end ps-2"
								style={{ width: "3rem" }}
							>
								5%
								{ratingStars1}
							</div>
						</div>
						<div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between border-bottom py-4 mt-3 mb-4">
							<div className="d-flex align-items-center me-sm-4 mb-sm-0 mb-3">
								<label
									className="me-2 pe-1 text-nowrap"
									htmlFor="review-sorting"
								>
									<i className="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort
									by:
								</label>
								<select
									value={reviewState}
									onChange={(e) => {
										const select = e.target.value;
										setReviewState(select);
										console.log("review sort type:", reviewState);
									}}
									className="form-select"
									id="review-sorting"
								>
									<option value="Oldest">Oldest</option>
									<option value="Newest">Newest</option>
									<option value="HighestRating">High rating</option>
									<option value="LowestRating">Low rating</option>
								</select>
							</div>
							<button
								className="btn btn-outline-primary rounded-pill"
								data-bs-toggle="modal"
								onClick={() => setShow(true)}
							>
								<i className="fi-edit me-1"></i>Add review
							</button>
						</div>
						{show && (
							<ReviewModal getReviewList={getReviewList} setShow={setShow} />
						)}
						{reviewList.map((rev) => {
							if (rev.rating === "5 stars") ratingStars5 = ratingStars5 + 1;
							if (rev.rating === "4 stars") ratingStars4 = ratingStars4 + 1;
							if (rev.rating === "3 stars") ratingStars3 = ratingStars3 + 1;
							if (rev.rating === "2 stars") ratingStars2 = ratingStars2 + 1;
							if (rev.rating === "1 stars") ratingStars1 = ratingStars1 + 1;
						})}
						{currentReviews.map((review) => {
							if (reviewState === "Newest") {
								reviewList.sort((a, b) => (a.date < b.date ? 1 : -1));
								return (
									<div key={review._id}>
										<ReviewDisplay
											data={review}
											id={review._id}
											getReviewList={getReviewList}
										/>
									</div>
								);
							} else if (reviewState === "Oldest") {
								reviewList.sort((a, b) => (a.date > b.date ? 1 : -1));
								return (
									<div key={review._id}>
										<ReviewDisplay
											data={review}
											id={review._id}
											getReviewList={getReviewList}
										/>
									</div>
								);
							} else if (reviewState === "HighestRating") {
								reviewList.sort((a, b) => (a.rating < b.rating ? 1 : -1));
								return (
									<div key={review._id}>
										<ReviewDisplay
											data={review}
											id={review._id}
											getReviewList={getReviewList}
										/>
									</div>
								);
							} else if (reviewState === "LowestRating") {
								reviewList.sort((a, b) => (a.rating > b.rating ? 1 : -1));
								return (
									<div key={review._id}>
										<ReviewDisplay
											data={review}
											id={review._id}
											getReviewList={getReviewList}
										/>
									</div>
								);
							} else if (!reviewState) {
								return (
									<div key={review._id}>
										<ReviewDisplay
											data={review}
											id={review._id}
											getReviewList={getReviewList}
										/>
									</div>
								);
							}
						})}

						<JobPagination
							jobsPerPage={reviewsPerPage}
							totalJobs={reviewList.length}
							paginate={paginate}
						/>
					</div>
					<aside className="col-lg-4 order-lg-1 pe-xl-4 mb-5">
						<div className="d-flex align-items-start mb-4">
							<img src={companyImage} width="56" alt="Zalo Logo" />
							<div className="ps-3">
								<h2 className="h4 mb-1">{jobDetails.description}</h2>
								<p className="d-flex align-items-center fs-sm mb-2">
									<i className="fi-map-pin me-1"></i>
									<span>{jobDetails.location}</span>
								</p>
								<p className="fs-sm">
									<a href="#">
										<i className="fi-external-link me-2"></i>Visit wesite
									</a>
								</p>
								<div className="d-flex">
									<a
										className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2"
										href="#"
									>
										<i className="fi-facebook"></i>
									</a>
									<a
										className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2"
										href="#"
									>
										<i className="fi-twitter"></i>
									</a>
									<a
										className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2"
										href="#"
									>
										<i className="fi-youtube"></i>
									</a>
									<a
										className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm"
										href="#"
									>
										<i className="fi-linkedin"></i>
									</a>
								</div>
							</div>
						</div>
						<ul className="list-unstyled py-2">
							<li>
								<strong>Category: </strong>Information Technology
							</li>
							<li>
								<strong>Company size: </strong>more than 5000 employees
							</li>
							<li>
								<strong>Job openings: </strong>4
							</li>
						</ul>
						<div className="pb-4 mb-2 mb-sm-3">
							<p className="mb-1">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure.
							</p>
							<div className="collapse" id="showMore">
								<p className="mb-1">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium dolor laudantium, totam rem aperiam, eaque ipsa
									quae inventore veritatis. Nemo enim ipsam voluptatem quia
									voluptas.
								</p>
							</div>
							<a
								className="collapse-label collapsed"
								href="#showMore"
								data-bs-toggle="collapse"
								data-bs-label-collapsed="Show more"
								data-bs-label-expanded="Show less"
								role="button"
								aria-expanded="false"
								aria-controls="showMore"
							></a>
						</div>
						<div className="card card-body shadow-sm mb-4">
							<h3 className="h4">
								Don’t miss new job openings by this company!
							</h3>
							<p className="mb-4">
								We will send you jobs as soon as they are posted in any
								category, in any city.
							</p>
							<form className="form-group rounded-pill">
								<div className="input-group input-group-sm">
									<span className="input-group-text text-muted">
										<i className="fi-mail"></i>
									</span>
									<input
										className="form-control"
										type="text"
										placeholder="Your email"
										required=""
									/>
								</div>
								<button
									className="btn btn-primary btn-sm rounded-pill"
									type="submit"
								>
									Subscribe
								</button>
							</form>
							<div className="form-check mt-3">
								<input
									className="form-check-input"
									type="checkbox"
									id="agree-check"
								/>
								<label className="form-check-label fs-sm" htmlFor="agree-check">
									I agree to receive communications.
								</label>
							</div>
						</div>
						<div className="pt-sm-3">
							<div className="card bg-secondary border-0">
								<div className="card-body">
									<h3 className="h4">
										Professional CV is your ticket to dream job
									</h3>
									<p className="mb-4">
										Create a&nbsp;great resume on&nbsp;Finder and take
										a&nbsp;step toward finding your dream&nbsp;job!
									</p>
									<Link
										to={`/postresume`}
										className="btn btn-primary rounded-pill mb-4"
									>
										Post resume<i className="fi-chevron-right fs-sm ms-2"></i>
									</Link>
									<div className="pt-3">
										<img
											className="d-block mx-auto"
											src={postResume}
											width="288"
											alt="Illustration"
										/>
									</div>
								</div>
							</div>
						</div>
					</aside>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CompanyDetails;
