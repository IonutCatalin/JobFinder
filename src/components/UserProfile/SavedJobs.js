import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import profileImage from "../../img/profile-image.png";

const SavedJobs = () => {
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
							Saved jobs
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
								<Link to="/myresumes" className="nav-link">
									<i className="fi-file mt-n1 me-2 fs-base"></i>My Resumes
								</Link>
							</li>
							<li className="nav-item mb-md-0 me-md-2 pe-md-1">
								<Link
									to="/savedjobs"
									className="nav-link active"
									aria-current="page"
								>
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
						<h1 className="h3 mb-0">Saved jobs</h1>
						<a className="fw-bold text-decoration-none" href="#">
							<i className="fi-x fs-xs me-2"></i>
							<span className="align-middle">Clear all</span>
						</a>
					</div>
					<div className="row g-2 g-md-4">
						<div className="col-md-6 col-lg-4">
							<div className="card bg-secondary card-hover h-100">
								<div className="card-body">
									<div className="d-flex align-items-center mb-3">
										<img
											className="me-2"
											src="img/job-board/company/it-pro.png"
											width="24"
											alt="IT Pro TV"
										/>
										<span className="fs-sm text-dark opacity-80 px-1">
											IT Pro TV
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
											Business Analyst
										</a>
									</h3>
									<p className="fs-sm mb-0">
										Blandit a tincidunt arcu nulla. Sem neque, rhoncus non odio
										nulla maecenas elit praesent. Orci tristique velit mauris
										cursus nibh...
									</p>
								</div>
								<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
									<div className="fs-sm">
										<span className="text-nowrap me-3">
											<i className="fi-map-pin text-muted me-1"> </i>New York
										</span>
										<span className="text-nowrap me-3">
											<i className="fi-cash fs-base text-muted me-1"></i>$7,500
										</span>
									</div>
									<button
										className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm content-overlay"
										type="button"
										data-bs-toggle="tooltip"
										title=""
										data-bs-original-title="Remove from saved jobs"
										aria-label="Remove from saved jobs"
									>
										<i className="fi-heart-filled"></i>
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card bg-secondary card-hover h-100">
								<div className="card-body">
									<div className="d-flex align-items-center mb-3">
										<img
											className="me-2"
											src="img/job-board/company/xbox.png"
											width="24"
											alt="Xbox"
										/>
										<span className="fs-sm text-dark opacity-80 px-1">
											Xbox Company
										</span>
										<span className="badge bg-faded-accent rounded-pill fs-sm ms-auto">
											Featured
										</span>
									</div>
									<h3 className="h6 card-title mb-2">
										<a
											className="text-nav stretched-link text-decoration-none"
											href="job-board-single.html"
										>
											Full-Stack Developer
										</a>
									</h3>
									<p className="fs-sm mb-0">
										Euismod nec sagittis sit arcu libero, metus. Aliquam nisl
										rhoncus porttitor volutpat, ante cras tincidunt. Nec sit
										nunc, ornare tincidunt enim neque...
									</p>
								</div>
								<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
									<div className="fs-sm">
										<span className="text-nowrap me-3">
											<i className="fi-map-pin text-muted me-1"> </i>Washington
										</span>
										<span className="text-nowrap me-3">
											<i className="fi-cash fs-base text-muted me-1"></i>$12,000
										</span>
									</div>
									<button
										className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm content-overlay"
										type="button"
										data-bs-toggle="tooltip"
										title=""
										data-bs-original-title="Remove from saved jobs"
										aria-label="Remove from saved jobs"
									>
										<i className="fi-heart-filled"></i>
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card bg-secondary card-hover h-100">
								<div className="card-body">
									<div className="d-flex align-items-center mb-3">
										<img
											className="me-2"
											src="img/job-board/company/xampp.png"
											width="24"
											alt="Xampp"
										/>
										<span className="fs-sm text-dark opacity-80 px-1">
											XAMPP Company
										</span>
									</div>
									<h3 className="h6 card-title mb-2">
										<a
											className="text-nav stretched-link text-decoration-none"
											href="job-board-single.html"
										>
											Account Manager
										</a>
									</h3>
									<p className="fs-sm mb-0">
										Auctor elit in aenean sodales mattis. Ultricies nec eu augue
										sit. Ornare pulvinar enim fames orci enim in libero. Eu,
										lorem leo netus velit egestas risus...
									</p>
								</div>
								<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
									<div className="fs-sm">
										<span className="text-nowrap me-3">
											<i className="fi-map-pin text-muted me-1"> </i>Chicago
										</span>
										<span className="text-nowrap me-3">
											<i className="fi-cash fs-base text-muted me-1"></i>$6,000
										</span>
									</div>
									<button
										className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm content-overlay"
										type="button"
										data-bs-toggle="tooltip"
										title=""
										data-bs-original-title="Remove from saved jobs"
										aria-label="Remove from saved jobs"
									>
										<i className="fi-heart-filled"></i>
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card bg-secondary card-hover h-100">
								<div className="card-body">
									<div className="d-flex align-items-center mb-3">
										<img
											className="me-2"
											src="img/job-board/company/zapier.png"
											width="24"
											alt="Zapier"
										/>
										<span className="fs-sm text-dark opacity-80 px-1">
											Zapier
										</span>
										<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
											Hot
										</span>
									</div>
									<h3 className="h6 card-title mb-2">
										<a
											className="text-nav stretched-link text-decoration-none"
											href="job-board-single.html"
										>
											Onboarding Specialist
										</a>
									</h3>
									<p className="fs-sm mb-0">
										Rhoncus magna odio turpis porttitor nulla fringilla quis.
										Consectetur sociis urna posuere consequat. Ut consectetur
										amet penatibus sociis feugiat...
									</p>
								</div>
								<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
									<div className="fs-sm">
										<span className="text-nowrap me-3">
											<i className="fi-map-pin text-muted me-1"> </i>Houston
										</span>
										<span className="text-nowrap me-3">
											<i className="fi-cash fs-base text-muted me-1"></i>$4,000
										</span>
									</div>
									<button
										className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm content-overlay"
										type="button"
										data-bs-toggle="tooltip"
										title=""
										data-bs-original-title="Remove from saved jobs"
										aria-label="Remove from saved jobs"
									>
										<i className="fi-heart-filled"></i>
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card bg-secondary card-hover h-100">
								<div className="card-body">
									<div className="d-flex align-items-center mb-3">
										<img
											className="me-2"
											src="img/job-board/company/kibana.png"
											width="24"
											alt="Elastic Kibana"
										/>
										<span className="fs-sm text-dark opacity-80 px-1">
											Elastic Kibana
										</span>
									</div>
									<h3 className="h6 card-title mb-2">
										<a
											className="text-nav stretched-link text-decoration-none"
											href="job-board-single.html"
										>
											Global Product Operations Specialist
										</a>
									</h3>
									<p className="fs-sm mb-0">
										A ultrices eu facilisis suspendisse scelerisque fringilla
										ultrices sit pellentesque. Consequat platea quam faucibus
										egestas arcu semper adipiscing...
									</p>
								</div>
								<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
									<div className="fs-sm">
										<span className="text-nowrap me-3">
											<i className="fi-map-pin text-muted me-1"> </i>New York
										</span>
										<span className="text-nowrap me-3">
											<i className="fi-cash fs-base text-muted me-1"></i>$8,300
										</span>
									</div>
									<button
										className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm content-overlay"
										type="button"
										data-bs-toggle="tooltip"
										title=""
										data-bs-original-title="Remove from saved jobs"
										aria-label="Remove from saved jobs"
									>
										<i className="fi-heart-filled"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default SavedJobs;
