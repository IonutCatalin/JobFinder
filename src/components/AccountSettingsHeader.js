import React from "react";

const AccountSettingsHeader = () => {
	return (
		<>
			<header
				className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
				data-scroll-header=""
			>
				<div className="container">
					<a
						className="navbar-brand me-0 me-xl-4"
						href="job-board-home-v1.html"
					>
						<img
							className="d-block"
							src="img/logo/logo-light.svg"
							width="116"
							alt="Finder"
						/>
					</a>
					<button
						className="navbar-toggler ms-auto"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="dropdown d-none d-lg-block order-lg-3 my-n2 me-3">
						<a className="d-block py-2" href="job-board-account-profile.html">
							<img
								className="rounded-circle"
								src="img/avatars/35.png"
								width="40"
								alt="Annette Black"
							/>
						</a>
						<div className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
							<div
								className="d-flex align-items-start border-bottom border-light px-3 py-1 mb-2"
								style="width: 16rem;"
							>
								<img
									className="rounded-circle"
									src="img/avatars/25.png"
									width="48"
									alt="Annette Black"
								/>
								<div className="ps-2">
									<h6 className="fs-base text-light mb-0">Annette Black</h6>
									<div className="fs-xs py-2">
										(302) 555-0107
										<br />
										annette_black@email.com
									</div>
								</div>
							</div>
							<a
								className="dropdown-item"
								href="job-board-account-profile.html"
							>
								<i className="fi-settings me-2"></i>Profile Settings
							</a>
							<a
								className="dropdown-item"
								href="job-board-account-my-resumes.html"
							>
								<i className="fi-file me-2"></i>My Resumes
							</a>
							<a
								className="dropdown-item"
								href="job-board-account-saved-jobs.html"
							>
								<i className="fi-heart me-2"></i>Saved Jobs
							</a>
							<a
								className="dropdown-item"
								href="job-board-account-notifications.html"
							>
								<i className="fi-bell me-2"></i>Notifications
							</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">
								<i className="fi-logout me-2"></i>Sign Out
							</a>
						</div>
					</div>
					<a
						className="btn btn-primary btn-sm rounded-pill ms-2 order-lg-3"
						href="job-board-post-resume-1.html"
					>
						<i className="fi-plus me-2"></i>Post resume
					</a>
					<a
						className="btn btn-link btn-light btn-sm d-none d-lg-block order-lg-3 pe-0 ms-2"
						href="job-board-home-v2.html"
					>
						For employers<i className="fi-arrow-long-right ms-2"></i>
					</a>
					<div className="collapse navbar-collapse order-lg-2" id="navbarNav">
						<ul
							className="navbar-nav navbar-nav-scroll"
							style="max-height: 35rem;"
						>
							<li className="nav-item dropdown py-2 me-lg-2">
								<a
									className="nav-link dropdown-toggle align-items-center border-end-lg border-light py-1 pe-lg-4"
									href="#"
									data-bs-toggle="dropdown"
									role="button"
									aria-expanded="false"
								>
									<i className="fi-layers me-2"></i>Demos
								</a>
								<ul className="dropdown-menu dropdown-menu-dark">
									<li>
										<a className="dropdown-item" href="real-estate-home.html">
											<i className="fi-building fs-base me-2"></i>Real Estate
											Demo
										</a>
									</li>
									<li className="dropdown-divider"></li>
									<li>
										<a className="dropdown-item" href="car-finder-home.html">
											<i className="fi-car fs-base me-2"></i>Car Finder Demo
										</a>
									</li>
									<li className="dropdown-divider"></li>
									<li>
										<a className="dropdown-item" href="job-board-home-v1.html">
											<i className="fi-briefcase fs-base me-2"></i>Job Board
											Demo
										</a>
									</li>
									<li className="dropdown-divider"></li>
									<li>
										<a className="dropdown-item" href="city-guide-home-v1.html">
											<i className="fi-map-pin fs-base me-2"></i>City Guide Demo
										</a>
									</li>
									<li className="dropdown-divider"></li>
									<li>
										<a className="dropdown-item" href="index.html">
											<i className="fi-home fs-base me-2"></i>Main Page
										</a>
									</li>
									<li>
										<a
											className="dropdown-item"
											href="components/typography.html"
										>
											<i className="fi-list fs-base me-2"></i>Components
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="docs/dev-setup.html">
											<i className="fi-file fs-base me-2"></i>Documentation
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Home
								</a>
								<ul className="dropdown-menu dropdown-menu-dark">
									<li>
										<a className="dropdown-item" href="job-board-home-v1.html">
											For Job Seekers
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="job-board-home-v2.html">
											For Employers
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Catalog
								</a>
								<ul className="dropdown-menu dropdown-menu-dark">
									<li>
										<a className="dropdown-item" href="job-board-catalog.html">
											List of Jobs
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="job-board-single.html">
											Single Job Page
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown active">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Account
								</a>
								<ul className="dropdown-menu dropdown-menu-dark">
									<li className="dropdown">
										<a className="dropdown-item dropdown-toggle" href="#">
											Account Pages
										</a>
										<ul className="dropdown-menu dropdown-menu-dark">
											<li>
												<a
													className="dropdown-item"
													href="job-board-account-profile.html"
												>
													Profile Settings
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="job-board-account-my-resumes.html"
												>
													My Resumes
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="job-board-account-saved-jobs.html"
												>
													Saved Jobs
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="job-board-account-notifications.html"
												>
													Notifications
												</a>
											</li>
										</ul>
									</li>
									<li className="dropdown">
										<a className="dropdown-item dropdown-toggle" href="#">
											Post Resume
										</a>
										<ul className="dropdown-menu dropdown-menu-dark">
											<li>
												<a
													className="dropdown-item"
													href="job-board-post-resume-1.html"
												>
													Step 1: Basic Info
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="job-board-post-resume-2.html"
												>
													Step 2: Education
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="job-board-post-resume-3.html"
												>
													Step 3: Work Experience
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="job-board-post-resume-4.html"
												>
													Step 4: Skills
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="job-board-post-resume-5.html"
												>
													Step 5: Review
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a
											className="dropdown-item"
											href="job-board-promotion.html"
										>
											Ad Promotion Page
										</a>
									</li>
									<li>
										<a
											className="dropdown-item"
											href="job-board-employer-single.html"
										>
											Employer / Company Page
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Blog
								</a>
								<ul className="dropdown-menu dropdown-menu-dark">
									<li>
										<a className="dropdown-item" href="job-board-blog.html">
											Blog List
										</a>
									</li>
									<li>
										<a
											className="dropdown-item"
											href="job-board-blog-single.html"
										>
											Single Post
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown d-lg-none">
								<a
									className="nav-link dropdown-toggle d-flex align-items-center"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img
										className="rounded-circle me-2"
										src="img/avatars/35.png"
										width="30"
										alt="Annette Black"
									/>
									Annette Black
								</a>
								<div className="dropdown-menu dropdown-menu-dark">
									<div className="ps-3">
										<div className="fs-xs py-2">
											(302) 555-0107
											<br />
											annette_black@email.com
										</div>
									</div>
									<a
										className="dropdown-item"
										href="job-board-account-profile.html"
									>
										<i className="fi-settings me-2"></i>Profile Settings
									</a>
									<a
										className="dropdown-item"
										href="job-board-account-my-resumes.html"
									>
										<i className="fi-file me-2"></i>My Resumes
									</a>
									<a
										className="dropdown-item"
										href="job-board-account-saved-jobs.html"
									>
										<i className="fi-heart me-2"></i>Saved Jobs
									</a>
									<a
										className="dropdown-item"
										href="job-board-account-notifications.html"
									>
										<i className="fi-bell me-2"></i>Notifications
									</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#">
										<i className="fi-logout me-2"></i>Sign Out
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</header>
		</>
	);
};

export default AccountSettingsHeader;
