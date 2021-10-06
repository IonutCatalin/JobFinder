import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
// import JobsFindHeader from "./JobsFindHeader";

const SpecificJob = () => {
	const { _id } = useParams();
	const [jobDetails, setJobDetails] = useState([]);

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

	useEffect(() => {
		getJobDetails();
	}, []);

	return (
		<>
			<Header />
			{/* <JobsFindHeader /> */}
			<section className="bg-dark pt-5">
				<div className="container py-5">
					<h1 className="text-light pt-1 pt-md-3 mb-4">Find jobs</h1>
					<form className="form-group form-group-light d-block rounded-lg-pill mb-4">
						<div className="row align-items-center g-0 ms-n2">
							<div className="col-lg-3 col-xl-4">
								<div className="input-group input-group-lg border-end-lg border-light">
									<span className="input-group-text text-light rounded-pill opacity-50 ps-3">
										<i className="fi-search"></i>
									</span>
									<input
										className="form-control"
										type="text"
										placeholder="Search site..."
									/>
								</div>
							</div>
							<hr className="hr-light d-lg-none my-2" />
							<div className="col-lg-5 d-sm-flex">
								<div
									className="dropdown w-sm-50 border-end-sm border-light"
									data-bs-toggle="select"
								>
									<button
										className="btn btn-link dropdown-toggle"
										type="button"
										data-bs-toggle="dropdown"
									>
										<i className="fi-list me-2"></i>
										<span className="dropdown-toggle-label">Category</span>
									</button>
									<input type="hidden" />
									<ul className="dropdown-menu dropdown-menu-dark my-3">
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">Accounting</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">
													Marketing &amp; PR
												</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">Medicine</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">
													Internet technology
												</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">HoReCa</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">
													Design, creativity
												</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">
													Fitness &amp; sports
												</span>
											</a>
										</li>
									</ul>
								</div>
								<hr className="hr-light d-sm-none my-2" />
								<div
									className="dropdown w-sm-50 border-end-lg border-light"
									data-bs-toggle="select"
								>
									<button
										className="btn btn-link dropdown-toggle"
										type="button"
										data-bs-toggle="dropdown"
									>
										<i className="fi-map-pin me-2"></i>
										<span className="dropdown-toggle-label">Location</span>
									</button>
									<input type="hidden" />
									<ul className="dropdown-menu dropdown-menu-dark my-3">
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">Dallas</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">Chicago</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">Houston</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">Las Vegas</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">Los Angeles</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">New York</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">
													San Francisco
												</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<hr className="hr-light d-lg-none my-2" />
							<div className="col-lg-4 col-xl-3 d-flex align-items-center">
								<div className="dropdown w-50 w-lg-100" data-bs-toggle="select">
									<button
										className="btn btn-link dropdown-toggle"
										type="button"
										data-bs-toggle="dropdown"
									>
										<i className="fi-geo me-2"></i>
										<span className="dropdown-toggle-label">Distance</span>
									</button>
									<input type="hidden" />
									<ul className="dropdown-menu dropdown-menu-dark my-3">
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">10 miles</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">20 miles</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">30 miles</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">40 miles</span>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<span className="dropdown-item-label">50 miles</span>
											</a>
										</li>
									</ul>
								</div>
								<button
									className="btn btn-primary btn-lg w-50 w-lg-auto rounded-pill"
									type="button"
								>
									Find jobs
								</button>
							</div>
						</div>
					</form>
					<div className="d-sm-flex justify-content-between pt-2 pb-1 pb-md-3 pb-lg-4">
						<div className="d-flex flex-column flex-sm-row flex-wrap">
							<div
								className="dropdown me-sm-3 mb-2 mb-sm-3"
								data-bs-toggle="select"
							>
								<button
									className="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start"
									type="button"
									data-bs-toggle="dropdown"
								>
									<span className="dropdown-toggle-label">
										Publication date
									</span>
								</button>
								<ul className="dropdown-menu my-1">
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">Most recent</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">5 days</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">15 days</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">1 week</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">1 month</span>
										</a>
									</li>
								</ul>
							</div>
							<div
								className="dropdown me-sm-3 mb-2 mb-sm-3"
								data-bs-toggle="select"
							>
								<button
									className="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start"
									type="button"
									data-bs-toggle="dropdown"
								>
									<span className="dropdown-toggle-label">Job type</span>
								</button>
								<ul className="dropdown-menu my-1">
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">Full-time</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">Part-time</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">Remote</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">Temporary</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">Contract</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">Internship</span>
										</a>
									</li>
								</ul>
							</div>
							<div
								className="dropdown me-sm-3 mb-2 mb-sm-3"
								data-bs-toggle="select"
							>
								<button
									className="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start"
									type="button"
									data-bs-toggle="dropdown"
								>
									<span className="dropdown-toggle-label">Company</span>
								</button>
								<ul className="dropdown-menu my-1">
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">IT Pro TV</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">
												Zalo Tech Company
											</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">Elastic Inc.</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">Lift Web</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">Xbox Company</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">Zapier</span>
										</a>
									</li>
								</ul>
							</div>
							<div
								className="dropdown me-sm-3 mb-2 mb-sm-3"
								data-bs-toggle="select"
							>
								<button
									className="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start"
									type="button"
									data-bs-toggle="dropdown"
								>
									<span className="dropdown-toggle-label">Salary range</span>
								</button>
								<ul className="dropdown-menu my-1">
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">$500 - $1,000</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">
												$1,000 - $2,000
											</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">
												$2,000 - $5,000
											</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">
												$5,000 - $10,000
											</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">
												$10,000 - $20,000
											</span>
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											<span className="dropdown-item-label">
												$20,000 - $50,000
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<a className="d-inline-block text-light text-nowrap py-3" href="#">
							Advanced search
						</a>
					</div>
				</div>
			</section>
			<section
				className="position-relative bg-white rounded-xxl-4 zindex-5"
				style={{ marginTop: "70px" }}
			>
				<div className="container pt-4 pb-5 mb-md-4">
					<nav className="pb-4 my-2" aria-label="Breadcrumb">
						<ol className="breadcrumb m-0">
							<li className="breadcrumb-item">
								<Link to="/">Home</Link>
							</li>
							<li className="breadcrumb-item">
								<Link to="/joblist">Find jobs</Link>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								{jobDetails.description}
							</li>
						</ol>
					</nav>
					<div className="row">
						<div
							className="col-lg-7 position-relative pe-lg-5 mb-5 mb-lg-0"
							style={{ zIndex: "1025" }}
						>
							<div className="d-flex justify-content-between mb-2">
								<h2 className="h3 mb-0">{jobDetails.description}</h2>
								<div className="text-end">
									<span className="badge bg-faded-accent rounded-pill fs-sm mb-2">
										Featured
									</span>
									<div className="fs-sm text-muted">{jobDetails.date}</div>
								</div>
							</div>
							<ul className="list-unstyled fs-sm mb-4">
								<li className="mb-2">
									<Link
										to={`/companydetails/${_id}`}
										style={{ textDecoration: "none" }}
										className="d-flex align-items-center text-decoration-none"
									>
										<i className="fi-external-link me-2"></i>
										<span className="text-decoration-underline">
											{jobDetails.companyName}
										</span>
									</Link>
								</li>
								<li className="d-flex align-items-center mb-2">
									<i className="fi-map-pin text-muted me-2"></i>
									<span>{jobDetails.location}</span>
								</li>
								<li className="d-flex align-items-center mb-2">
									<i className="fi-cash fs-base text-muted me-2"></i>
									<span>${jobDetails.remuneration}</span>
								</li>
								<li className="d-flex align-items-center mb-2">
									<i className="fi-phone text-muted me-2"></i>
									<span className="me-2">Bessie Cooper, HR Manager</span>
									<span>Phone: {jobDetails.contact}</span>
								</li>
								<li className="d-flex align-items-center mb-2">
									<i className="fi-clock text-muted me-2"></i>
									<span className="me-2">{jobDetails.period}</span>
								</li>
							</ul>
							<hr className="mb-4" />
							<h3 className="h6">Description:</h3>
							<p>{jobDetails.description}</p>
							<h3 className="h6 pt-2">Requirements:</h3>
							<ul className="list-unstyled">
								<li className="d-flex">
									<span className="text-primary fs-lg me-2">•</span>
									{jobDetails.requirements}
								</li>
							</ul>
							<h3 className="h6 pt-2">Company offers:</h3>
							<ul className="list-unstyled">
								<li className="d-flex">
									<span className="text-primary fs-lg me-2">•</span>
									{jobDetails.companyOffers}
								</li>
							</ul>
							<p className="pt-2 mb-1">
								Please, send your CV marked “Partnership Manager” in the subject
								via e-mail:
							</p>
							<a
								className="nav-link-muted fw-bold"
								href="mailto:contact@example.com"
							>
								contact@example.com
							</a>
							<hr className="my-4" />
							<div className="btn-group btn-group-lg">
								<Link
									to={`/postresume`}
									className="btn btn-primary rounded-pill rounded-end-0 ps-4 pe-3"
									type="button"
								>
									Apply for this position
								</Link>
								<button
									className="btn btn-primary border-end-0 border-top-0 border-bottom-0 border-light rounded-pill rounded-start-0 px-3"
									type="button"
								>
									<i className="fi-heart me-1"></i>
								</button>
							</div>
						</div>
						<aside className="col-lg-5" style={{ marginTop: "-6rem" }}>
							<div className="sticky-top" style={{ paddingTop: "6rem" }}>
								<div className="card shadow-sm mb-3 mb-lg-0">
									<div className="card-body">
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
								<div className="pt-4 pt-lg-5 ps-4">
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
			<section className="container pt-md-2 pb-5 mb-md-4">
				<div className="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
					<h2 className="h3 mb-sm-0">You may be interested in</h2>
					<a
						className="btn btn-link fw-normal p-0"
						href="job-board-catalog.html"
					>
						View all<i className="fi-arrow-long-right ms-2"></i>
					</a>
				</div>
				<div className="tns-carousel-wrapper tns-controls-outside-xxl tns-nav-outside tns-nav-outside-flush">
					<div className="tns-outer" id="tns1-ow">
						<div
							className="tns-controls"
							aria-label="Carousel Navigation"
							tabIndex="0"
						>
							<button
								type="button"
								data-controls="prev"
								tabIndex="-1"
								aria-controls="tns1"
							>
								<i className="fi-chevron-left"></i>
							</button>
							<button
								type="button"
								data-controls="next"
								tabIndex="-1"
								aria-controls="tns1"
							>
								<i className="fi-chevron-right"></i>
							</button>
						</div>
						<div
							className="tns-liveregion tns-visually-hidden"
							aria-live="polite"
							aria-atomic="true"
						>
							slide <span className="current">7 to 9</span> of 4
						</div>
						<div id="tns1-mw" className="tns-ovh">
							<div className="tns-inner" id="tns1-iw">
								<div
									className="tns-carousel-inner  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
									data-carousel-options='{"responsive": {"0":{"items":1, "gutter": 16},"600":{"items":2, "gutter": 16},"768":{"items":2, "gutter": 24},"992":{"items":3, "gutter": 24}}}'
									id="tns1"
									style={{
										transitionDuration: "0s",
										transform: "translate3d(-37.5%, 0px, 0px)",
									}}
								>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xampp.png"
														width="24"
														alt="XAMPP Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														XAMPP Company
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Auctor elit in aenean sodales mattis. Ultricies nec eu
													augue sit. Ornare pulvinar enim fames orci enim in
													libero. Eu, lorem leo netus velit egestas risus...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>New
														Jersey
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$6,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/zapier.png"
														width="24"
														alt="Zapier Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Zapier
													</span>
													<span className="badge bg-faded-info rounded-pill fs-sm ms-auto">
														New
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Onboarding Specialist
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Houston
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$4,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/it-pro.png"
														width="24"
														alt="IT Pro Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														IT Pro TV
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													{" "}
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Chicago
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$7,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xbox.png"
														width="24"
														alt="Xbox Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Xbox Company
													</span>
													<span className="badge bg-faded-accent rounded-pill fs-sm ms-auto">
														Featured
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Full-Stack Developer
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Euismod nec sagittis sit arcu libero, metus. Aliquam
													nisl rhoncus porttitor volutpat, ante cras tincidunt.
													Nec sit nunc, ornare tincidunt enim, neque...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Washington
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$13,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xampp.png"
														width="24"
														alt="XAMPP Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														XAMPP Company
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Auctor elit in aenean sodales mattis. Ultricies nec eu
													augue sit. Ornare pulvinar enim fames orci enim in
													libero. Eu, lorem leo netus velit egestas risus...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>New
														Jersey
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$6,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/zapier.png"
														width="24"
														alt="Zapier Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Zapier
													</span>
													<span className="badge bg-faded-info rounded-pill fs-sm ms-auto">
														New
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Onboarding Specialist
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Houston
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$4,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-active"
										id="tns1-item0"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/it-pro.png"
														width="24"
														alt="IT Pro Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														IT Pro TV
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													{" "}
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Chicago
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$7,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-active"
										id="tns1-item1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xbox.png"
														width="24"
														alt="Xbox Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Xbox Company
													</span>
													<span className="badge bg-faded-accent rounded-pill fs-sm ms-auto">
														Featured
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Full-Stack Developer
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Euismod nec sagittis sit arcu libero, metus. Aliquam
													nisl rhoncus porttitor volutpat, ante cras tincidunt.
													Nec sit nunc, ornare tincidunt enim, neque...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Washington
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$13,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-active"
										id="tns1-item2"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xampp.png"
														width="24"
														alt="XAMPP Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														XAMPP Company
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Auctor elit in aenean sodales mattis. Ultricies nec eu
													augue sit. Ornare pulvinar enim fames orci enim in
													libero. Eu, lorem leo netus velit egestas risus...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>New
														Jersey
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$6,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item"
										id="tns1-item3"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/zapier.png"
														width="24"
														alt="Zapier Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Zapier
													</span>
													<span className="badge bg-faded-info rounded-pill fs-sm ms-auto">
														New
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Onboarding Specialist
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Houston
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$4,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/it-pro.png"
														width="24"
														alt="IT Pro Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														IT Pro TV
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													{" "}
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Chicago
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$7,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xbox.png"
														width="24"
														alt="Xbox Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Xbox Company
													</span>
													<span className="badge bg-faded-accent rounded-pill fs-sm ms-auto">
														Featured
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Full-Stack Developer
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Euismod nec sagittis sit arcu libero, metus. Aliquam
													nisl rhoncus porttitor volutpat, ante cras tincidunt.
													Nec sit nunc, ornare tincidunt enim, neque...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Washington
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$13,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xampp.png"
														width="24"
														alt="XAMPP Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														XAMPP Company
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Auctor elit in aenean sodales mattis. Ultricies nec eu
													augue sit. Ornare pulvinar enim fames orci enim in
													libero. Eu, lorem leo netus velit egestas risus...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>New
														Jersey
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$6,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/zapier.png"
														width="24"
														alt="Zapier Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Zapier
													</span>
													<span className="badge bg-faded-info rounded-pill fs-sm ms-auto">
														New
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Onboarding Specialist
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Houston
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$4,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/it-pro.png"
														width="24"
														alt="IT Pro Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														IT Pro TV
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													{" "}
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Chicago
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$7,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xbox.png"
														width="24"
														alt="Xbox Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Xbox Company
													</span>
													<span className="badge bg-faded-accent rounded-pill fs-sm ms-auto">
														Featured
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Full-Stack Developer
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Euismod nec sagittis sit arcu libero, metus. Aliquam
													nisl rhoncus porttitor volutpat, ante cras tincidunt.
													Nec sit nunc, ornare tincidunt enim, neque...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Washington
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$13,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="tns-nav" aria-label="Carousel Pagination">
							<button
								type="button"
								data-nav="0"
								aria-controls="tns1"
								aria-label="Carousel Page 1 (Current Slide)"
								className="tns-nav-active"
							></button>
							<button
								type="button"
								data-nav="1"
								tabIndex="-1"
								aria-controls="tns1"
								aria-label="Carousel Page 2"
							></button>
							<button
								type="button"
								data-nav="2"
								tabIndex="-1"
								aria-controls="tns1"
								style={{ display: "none" }}
								aria-label="Carousel Page 3"
							></button>
							<button
								type="button"
								data-nav="3"
								tabIndex="-1"
								aria-controls="tns1"
								style={{ display: "none" }}
								aria-label="Carousel Page 4"
							></button>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default SpecificJob;
