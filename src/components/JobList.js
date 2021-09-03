import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import JobCard from "./JobCard";

const JobList = () => {
	return (
		<>
			<Header />
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
				style={{ marginTop: "-30px", borderRadius: "1.875rem !important" }}
			>
				<div className="container pt-4 pb-5 mb-md-4">
					<nav className="pb-4 my-2" aria-label="Breadcrumb">
						<ol className="breadcrumb m-0">
							<li className="breadcrumb-item">
								<a href="job-board-home-v1.html">Home</a>
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
									<select className="form-select form-select-sm" id="sorting">
										<option>Newest</option>
										<option>Popular</option>
										<option>Highest Salary</option>
									</select>
								</div>
								<div className="text-muted fs-sm text-nowrap">
									<i className="fi-briefcase fs-base mt-n1 me-2"></i>2948 jobs
								</div>
							</div>
							<JobCard />
							<JobCard />
							<JobCard />

							<nav className="pt-4 pb-2" aria-label="Blog pagination">
								<ul className="pagination mb-0">
									<li className="page-item d-sm-none">
										<span className="page-link page-link-static">1 / 8</span>
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
