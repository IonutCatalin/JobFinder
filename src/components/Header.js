import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "./../img/logo-light.svg";
import LoggedIn from "./UserProfile/LoggedIn";

function Header() {
	const loggedIn = true;
	return (
		<header
			className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
			data-scroll-header=""
		>
			<div className="container">
				<Link to="/" className="navbar-brand me-0 me-xl-4">
					<img className="d-block" src={logo} width="116" alt="Finder" />
				</Link>
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
				{!loggedIn ? (
					<a
						className="btn btn-link btn-light btn-sm d-none d-lg-block order-lg-3"
						href="/login"
					>
						<i className="fi-user me-2"></i>Sign in
					</a>
				) : (
					<LoggedIn />
				)}
				<Link
					to={`/postresume`}
					className="btn btn-primary btn-sm rounded-pill ms-2 order-lg-3"
				>
					<i className="fi-plus me-2"></i>Post resume
				</Link>
				<a
					className="btn btn-link btn-light btn-sm d-none d-lg-block order-lg-3 pe-0 ms-2"
					href="job-board-home-v2.html"
				>
					For employers<i className="fi-arrow-long-right ms-2"></i>
				</a>
				<div className="collapse navbar-collapse order-lg-2" id="navbarNav">
					<ul
						className="navbar-nav navbar-nav-scroll"
						style={{ maxHeight: "35rem" }}
					>
						<li className="nav-item dropdown active">
							<a
								className="nav-link dropdown-toggle border-start-lg border-light"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Home
							</a>
							<ul className="dropdown-menu dropdown-menu-dark">
								<li>
									<Link to="/" style={{ textDecoration: "none" }}>
										<p className="dropdown-item">For Job Seekers</p>
									</Link>
								</li>
								<li>
									<Link to="/" style={{ textDecoration: "none" }}>
										<p className="dropdown-item">For Employers</p>
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item dropdown">
							<Link
								to="/joblist"
								style={{ textDecoration: "none" }}
								className="nav-link dropdown-toggle"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Catalog
							</Link>
							<ul className="dropdown-menu dropdown-menu-dark">
								<li>
									<Link to="/joblist" style={{ textDecoration: "none" }}>
										<p className="dropdown-item">List of Jobs</p>
									</Link>
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
									<a className="dropdown-item" href="job-board-promotion.html">
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

						<li className="nav-item d-lg-none">
							<Link to="/login" style={{ textDecoration: "none" }}>
								<p className="nav-link" data-bs-toggle="modal">
									<i className="fi-user me-2"></i>Sign in
								</p>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
