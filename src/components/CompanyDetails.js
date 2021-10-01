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

const CompanyDetails = () => {
	const { _id } = useParams();
	const [jobDetails, setJobDetails] = useState([]);
	const [jobList, setJobList] = useState([]);
	const [show, setShow] = useState(false);

	const [jobState, setJobState] = useState("");

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

	useEffect(() => {
		getJobDetails();
		getJobs();
	}, []);

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

						<h2 className="h3 pt-4 pt-lg-5 my-4 pb-2">Company reviews (62)</h2>
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
								<select className="form-select" id="review-sorting">
									<option>Newest</option>
									<option>Oldest</option>
									<option>Popular</option>
									<option>High rating</option>
									<option>Low rating</option>
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
						{show && <ReviewModal setShow={setShow} />}
						<div className="mb-4 pb-4 border-bottom">
							<div className="d-flex justify-content-between mb-3">
								<div className="d-flex align-items-center pe-2">
									<img
										className="rounded-circle me-1"
										src={boyAvatar}
										width="48"
										alt="Avatar"
									/>
									<div className="ps-2">
										<h6 className="fs-base mb-0">Kristin Watson</h6>
										<span className="star-rating">
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
										</span>
									</div>
								</div>
								<span className="text-muted fs-sm">Jan 17, 2021</span>
							</div>
							<p>
								Elementum ut quam tincidunt egestas vitae elit, hendrerit.
								Ullamcorper nulla amet lobortis elit, nibh condimentum enim.
								Aliquam felis nisl tellus sodales lectus dictum tristique proin
								vitae. Odio fermentum viverra tortor quis.
							</p>
							<div className="d-flex align-items-center">
								<button className="btn-like" type="button">
									<i className="fi-like"></i>
									<span>(3)</span>
								</button>
								<div className="border-end me-1">&nbsp;</div>
								<button className="btn-dislike" type="button">
									<i className="fi-dislike"></i>
									<span>(0)</span>
								</button>
							</div>
						</div>
						<div className="mb-4 pb-4 border-bottom">
							<div className="d-flex justify-content-between mb-3">
								<div className="d-flex align-items-center pe-2">
									<img
										className="rounded-circle me-1"
										src={girlAvatar}
										width="48"
										alt="Avatar"
									/>
									<div className="ps-2">
										<h6 className="fs-base mb-0">Darrell Steward</h6>
										<span className="star-rating">
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star"></i>
											<i className="star-rating-icon fi-star"></i>
											<i className="star-rating-icon fi-star"></i>
										</span>
									</div>
								</div>
								<span className="text-muted fs-sm">Dec 1, 2020</span>
							</div>
							<p>
								Vel dictum nunc ut tristique. Egestas diam amet, ut proin
								hendrerit. Dui accumsan at phasellus tempus consequat dignissim.
							</p>
							<div className="d-flex align-items-center">
								<button className="btn-like" type="button">
									<i className="fi-like"></i>
									<span>(0)</span>
								</button>
								<div className="border-end me-1">&nbsp;</div>
								<button className="btn-dislike" type="button">
									<i className="fi-dislike"></i>
									<span>(1)</span>
								</button>
							</div>
						</div>
						<div className="mb-4 pb-4 border-bottom">
							<div className="d-flex justify-content-between mb-3">
								<div className="d-flex align-items-center pe-2">
									<img
										className="rounded-circle me-1"
										src={noImageAvatar}
										width="48"
										alt="Avatar"
									/>
									<div className="ps-2">
										<h6 className="fs-base mb-0">Cody Fisher</h6>
										<span className="star-rating">
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
										</span>
									</div>
								</div>
								<span className="text-muted fs-sm">Oct 28, 2020</span>
							</div>
							<p>
								Viverra nunc blandit sapien non imperdiet sit. Purus tempus
								elementum aliquam eu urna. A aenean duis non egestas at libero
								porttitor integer eget. Sed dictum lobortis laoreet gravida.
							</p>
							<div className="d-flex align-items-center">
								<button className="btn-like" type="button">
									<i className="fi-like"></i>
									<span>(2)</span>
								</button>
								<div className="border-end me-1">&nbsp;</div>
								<button className="btn-dislike" type="button">
									<i className="fi-dislike"></i>
									<span>(1)</span>
								</button>
							</div>
						</div>
						<div className="mb-4 pb-4 border-bottom">
							<div className="d-flex justify-content-between mb-3">
								<div className="d-flex align-items-center pe-2">
									<img
										className="rounded-circle me-1"
										src={boyAvatar}
										width="48"
										alt="Avatar"
									/>
									<div className="ps-2">
										<h6 className="fs-base mb-0">Ralph Edwards</h6>
										<span className="star-rating">
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star"></i>
										</span>
									</div>
								</div>
								<span className="text-muted fs-sm">Sep 14, 2020</span>
							</div>
							<p>
								Elementum nisl, egestas nam consectetur nisl, at pellentesque
								cras. Non sed ac vivamus dolor dignissim ut. Nisl sapien blandit
								pulvinar sagittis donec sociis ipsum arcu est. Tempus, rutrum
								morbi scelerisque tempor mi. Etiam urna, cras bibendum leo nec
								faucibus velit. Tempor lectus dignissim at auctor integer neque
								quam amet.
							</p>
							<div className="d-flex align-items-center">
								<button className="btn-like" type="button">
									<i className="fi-like"></i>
									<span>(0)</span>
								</button>
								<div className="border-end me-1">&nbsp;</div>
								<button className="btn-dislike" type="button">
									<i className="fi-dislike"></i>
									<span>(0)</span>
								</button>
							</div>
						</div>
						<div className="mb-4 pb-4 border-bottom">
							<div className="d-flex justify-content-between mb-3">
								<div className="d-flex align-items-center pe-2">
									<img
										className="rounded-circle me-1"
										src={girlAvatar}
										width="48"
										alt="Avatar"
									/>
									<div className="ps-2">
										<h6 className="fs-base mb-0">Guy Hawkins</h6>
										<span className="star-rating">
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
											<i className="star-rating-icon fi-star-filled active"></i>
										</span>
									</div>
								</div>
								<span className="text-muted fs-sm">Dec 1, 2020</span>
							</div>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium dolor laudantium, totam rem aperiam, eaque ipsa quae
								ab illo inventore veritatis morbi venenatis ut est.
							</p>
							<div className="d-flex align-items-center">
								<button className="btn-like" type="button">
									<i className="fi-like"></i>
									<span>(1)</span>
								</button>
								<div className="border-end me-1">&nbsp;</div>
								<button className="btn-dislike" type="button">
									<i className="fi-dislike"></i>
									<span>(3)</span>
								</button>
							</div>
						</div>
						<nav className="mt-2" aria-label="Reviews pagination">
							<ul className="pagination">
								<li className="page-item d-sm-none">
									<span className="page-link page-link-static">1 / 5</span>
								</li>
								<li
									className="page-item active d-none d-sm-block"
									aria-current="page"
								>
									<span className="page-link">
										1<span className="visually-hidden">(current)</span>
									</span>
								</li>
								<li className="page-item d-none d-sm-block">
									<a className="page-link" href="#">
										2
									</a>
								</li>
								<li className="page-item d-none d-sm-block">
									<a className="page-link" href="#">
										3
									</a>
								</li>
								<li className="page-item d-none d-sm-block">...</li>
								<li className="page-item d-none d-sm-block">
									<a className="page-link" href="#">
										8
									</a>
								</li>
								<li className="page-item">
									<a className="page-link" href="#" aria-label="Next">
										<i className="fi-chevron-right"></i>
									</a>
								</li>
							</ul>
						</nav>
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
