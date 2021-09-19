import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import profileImage from "../../img/profile-image.png";
import { Link } from "react-router-dom";

function MyResumes() {
	return (
		<>
			<Header />
			<div
				className="position-absolute top-0 start-0 w-100 bg-dark"
				style={{ height: "398px" }}
			></div>
			<div className="container content-overlay mt-5 mb-md-4 py-5">
				<nav className="mb-3 mb-md-4 pt-md-3" aria-label="Breadcrumb">
					<ol className="breadcrumb breadcrumb-light">
						<li className="breadcrumb-item">
							<a href="job-board-home-v1.html">Home</a>
						</li>
						<li className="breadcrumb-item">
							<a href="job-board-account-profile.html">Account</a>
						</li>
						<li className="breadcrumb-item active" aria-current="page">
							My resumes
						</li>
					</ol>
				</nav>
				<div className="bg-light shadow-sm rounded-3 p-4 p-md-5 mb-2">
					<div className="d-flex align-items-start justify-content-between pb-4 mb-2">
						<div className="d-flex align-items-start">
							<div className="position-relative flex-shrink-0">
								<img
									className="rounded-circle"
									src={profileImage}
									width="100"
									alt="Annette Black"
								/>
								<button
									className="btn btn-icon btn-light btn-xs rounded-circle shadow-sm position-absolute end-0 bottom-0"
									type="button"
									data-bs-toggle="tooltip"
									title=""
									data-bs-original-title="Change image"
									aria-label="Change image"
								>
									<i className="fi-pencil fs-xs"></i>
								</button>
							</div>
							<div className="ps-3 ps-sm-4">
								<h3 className="h5">Annette Black</h3>
								<ul className="list-unstyled fs-sm mb-0">
									<li className="d-flex text-nav text-break">
										<i className="fi-mail opacity-60 mt-1 me-2"></i>
										<span>annette_black@email.com</span>
									</li>
									<li className="d-flex text-nav text-break">
										<i className="fi-phone opacity-60 mt-1 me-2"></i>
										<span>(302) 555-0107</span>
									</li>
								</ul>
							</div>
						</div>
						<a className="nav-link p-0 d-none d-md-block" href="#">
							<i className="fi-logout mt-n1 me-2"></i>Sign out
						</a>
					</div>
					<a
						className="btn btn-outline-primary btn-lg rounded-pill w-100 d-md-none"
						href="#account-nav"
						data-bs-toggle="collapse"
					>
						<i className="fi-align-justify me-2"></i>Account Menu
					</a>
					<div className="collapse d-md-block" id="account-nav">
						<ul className="nav nav-pills flex-column flex-md-row pt-3 pt-md-0 pb-md-4 border-bottom-md">
							<li className="nav-item mb-md-0 me-md-2 pe-md-1">
								<Link to="/profilesettings" className="nav-link">
									<i className="fi-settings mt-n1 me-2 fs-base"></i>Profile
									Settings
								</Link>
							</li>
							<li className="nav-item mb-md-0 me-md-2 pe-md-1">
								<Link
									to="/myresumes"
									className="nav-link active"
									aria-current="page"
								>
									<i className="fi-file mt-n1 me-2 fs-base"></i>My Resumes
								</Link>
							</li>
							<li className="nav-item mb-md-0 me-md-2 pe-md-1">
								<Link to="/savedjobs" className="nav-link">
									<i className="fi-heart mt-n1 me-2 fs-base"></i>Saved Jobs
								</Link>
							</li>
							<li className="nav-item mb-md-0">
								<Link to="/notifications" className="nav-link">
									<i className="fi-bell mt-n1 me-2 fs-base"></i>Notifications
								</Link>
							</li>
							<li className="nav-item d-md-none">
								<a className="nav-link" href="#">
									<i className="fi-logout mt-n1 me-2 fs-base"></i>Sign Out
								</a>
							</li>
						</ul>
					</div>
					<div className="d-flex align-items-center justify-content-between py-4 mt-3 mb-2">
						<h1 className="h3 mb-0">My resumes</h1>
						<a className="fw-bold text-decoration-none" href="#">
							<i className="fi-trash me-2"></i>
							<span className="align-middle">Delete all</span>
						</a>
					</div>
					<div className="row">
						<div className="col-md-3 mb-4 pb-3 pb-md-0">
							<div style={{ maxWidth: "13rem" }}>
								<ul className="list-unstyled fs-sm pb-1 pb-md-3">
									<li>
										<a
											className="nav-link fw-normal d-flex align-items-center px-0 py-1"
											href="#"
										>
											<i className="fi-file opacity-70 me-2"></i>
											<span>Publihed</span>
											<span className="text-muted ms-auto">(3)</span>
										</a>
									</li>
									<li>
										<a
											className="nav-link fw-normal d-flex align-items-center px-0 py-1"
											href="#"
										>
											<i className="fi-file-clean opacity-70 me-2"></i>
											<span>Drafts</span>
											<span className="text-muted ms-auto">(0)</span>
										</a>
									</li>
									<li>
										<a
											className="nav-link fw-normal d-flex align-items-center px-0 py-1"
											href="#"
										>
											<i className="fi-archive opacity-70 me-2"></i>
											<span>Archived</span>
											<span className="text-muted ms-auto">(0)</span>
										</a>
									</li>
								</ul>
								<a
									className="btn btn-primary rounded-pill w-100"
									href="job-board-post-resume-1.html"
								>
									<i className="fi-plus fs-sm me-2"></i>Post resume
								</a>
							</div>
						</div>
						<div className="col-md-9">
							<div className="card bg-secondary card-hover mb-2">
								<div className="card-body">
									<div className="d-flex justify-content-between">
										<div className="d-flex align-items-start">
											<img
												className="d-none d-sm-block"
												src="img/avatars/38.png"
												width="100"
												alt="Resume picture"
											/>
											<div className="ps-sm-3">
												<h3 className="h6 card-title pb-1 mb-2">
													<a
														className="stretched-link text-nav text-decoration-none"
														href="#"
													>
														Lead Web Designer
													</a>
												</h3>
												<div className="fs-sm">
													<div className="text-nowrap mb-2">
														<i className="fi-map-pin text-muted me-1"> </i>New
														York
													</div>
													<div className="text-nowrap">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$4,000
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex flex-column align-items-end justify-content-between">
											<div className="dropdown position-relative zindex-10 mb-3">
												<button
													className="btn btn-icon btn-light btn-xs rounded-circle shadow-sm"
													type="button"
													id="contextMenu1"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<i className="fi-dots-vertical"></i>
												</button>
												<ul
													className="dropdown-menu my-1"
													aria-labelledby="contextMenu1"
												>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-edit opacity-60 me-2"></i>Edit
														</button>
													</li>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-flame opacity-60 me-2"></i>
															Promote
														</button>
													</li>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-download-file opacity-60 me-2"></i>
															Download as PDF
														</button>
													</li>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-power opacity-60 me-2"></i>
															Deactivate
														</button>
													</li>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-trash opacity-60 me-2"></i>Delete
														</button>
													</li>
												</ul>
											</div>
											<strong className="fs-sm">80 views</strong>
										</div>
									</div>
								</div>
							</div>
							<div className="card bg-secondary card-hover mb-2">
								<div className="card-body">
									<div className="d-flex justify-content-between">
										<div className="d-flex align-items-start">
											<img
												className="d-none d-sm-block"
												src="img/avatars/37.png"
												width="100"
												alt="Resume picture"
											/>
											<div className="ps-sm-3">
												<h3 className="h6 card-title pb-1 mb-2">
													<a
														className="stretched-link text-nav text-decoration-none"
														href="#"
													>
														<span className="me-3">Graphic Designer</span>
														<span className="badge bg-faded-accent fs-sm rounded-pill">
															Featured
														</span>
													</a>
												</h3>
												<div className="fs-sm">
													<div className="text-nowrap mb-2">
														<i className="fi-map-pin text-muted me-1"> </i>New
														York
													</div>
													<div className="text-nowrap">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$2,000 - $2,500
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex flex-column align-items-end justify-content-between">
											<div className="dropdown position-relative zindex-5 mb-3">
												<button
													className="btn btn-icon btn-light btn-xs rounded-circle shadow-sm"
													type="button"
													id="contextMenu2"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<i className="fi-dots-vertical"></i>
												</button>
												<ul
													className="dropdown-menu my-1"
													aria-labelledby="contextMenu2"
												>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-edit opacity-60 me-2"></i>Edit
														</button>
													</li>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-flame opacity-60 me-2"></i>
															Promote
														</button>
													</li>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-download-file opacity-60 me-2"></i>
															Download as PDF
														</button>
													</li>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-power opacity-60 me-2"></i>
															Deactivate
														</button>
													</li>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-trash opacity-60 me-2"></i>Delete
														</button>
													</li>
												</ul>
											</div>
											<strong className="fs-sm">203 views</strong>
										</div>
									</div>
								</div>
							</div>
							<div className="card bg-secondary card-hover">
								<div className="card-body">
									<div className="d-flex justify-content-between">
										<div className="d-flex align-items-start">
											<img
												className="d-none d-sm-block"
												src="img/avatars/37.png"
												width="100"
												alt="Resume picture"
											/>
											<div className="ps-sm-3">
												<h3 className="h6 card-title pb-1 mb-2">
													<a
														className="stretched-link text-nav text-decoration-none"
														href="#"
													>
														Identity Designer / Illustrator
													</a>
												</h3>
												<div className="fs-sm">
													<div className="text-nowrap mb-2">
														<i className="fi-map-pin text-muted me-1"> </i>New
														York
													</div>
													<div className="text-nowrap">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$2,500
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex flex-column align-items-end justify-content-between">
											<div className="dropdown position-relative zindex-1 mb-3">
												<button
													className="btn btn-icon btn-light btn-xs rounded-circle shadow-sm"
													type="button"
													id="contextMenu3"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<i className="fi-dots-vertical"></i>
												</button>
												<ul
													className="dropdown-menu my-1"
													aria-labelledby="contextMenu3"
												>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-edit opacity-60 me-2"></i>Edit
														</button>
													</li>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-flame opacity-60 me-2"></i>
															Promote
														</button>
													</li>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-download-file opacity-60 me-2"></i>
															Download as PDF
														</button>
													</li>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-power opacity-60 me-2"></i>
															Deactivate
														</button>
													</li>
													<li>
														<button className="dropdown-item" type="button">
															<i className="fi-trash opacity-60 me-2"></i>Delete
														</button>
													</li>
												</ul>
											</div>
											<strong className="fs-sm">92 views</strong>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default MyResumes;
