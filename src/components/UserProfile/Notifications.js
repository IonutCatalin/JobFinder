import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import profileImage from "../../img/profile-image.png";
import { AuthContext } from "../authContext/AuthContext";
import { logout } from "../authContext/AuthActions";
import { useContext } from "react";

const Notifications = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const { dispatch } = useContext(AuthContext);

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
							<a href="/">Home</a>
						</li>
						<li className="breadcrumb-item">
							<a href="/profilesettings">Account</a>
						</li>
						<li className="breadcrumb-item active" aria-current="page">
							Notifications
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
								<h3 className="h5">{user.username}</h3>
								<ul className="list-unstyled fs-sm mb-0">
									<li className="d-flex text-nav text-break">
										<i className="fi-mail opacity-60 mt-1 me-2"></i>
										<span>{user.email}</span>
									</li>
									<li className="d-flex text-nav text-break">
										<i className="fi-phone opacity-60 mt-1 me-2"></i>
										<span>{user.phone}</span>
									</li>
								</ul>
							</div>
						</div>
						<Link
							className="nav-link p-0 d-none d-md-block"
							to="/login"
							onClick={() => {
								dispatch(logout());
							}}
						>
							<i className="fi-logout mt-n1 me-2"></i>Sign out
						</Link>
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
								<Link to="/savedjobs" className="nav-link">
									<i className="fi-heart mt-n1 me-2 fs-base"></i>Saved Jobs
								</Link>
							</li>
							<li className="nav-item mb-md-0">
								<Link
									to="/notifications"
									className="nav-link active"
									aria-current="page"
								>
									<i className="fi-bell mt-n1 me-2 fs-base"></i>Notifications
								</Link>
							</li>
							<li className="nav-item d-md-none">
								<Link
									className="nav-link"
									to="/login"
									onClick={() => {
										dispatch(logout());
									}}
								>
									<i className="fi-logout mt-n1 me-2 fs-base"></i>Sign Out
								</Link>
							</li>
						</ul>
					</div>
					<h1 className="h3 py-4 mt-3 mb-2">Notifications</h1>
					<div className="border-bottom pb-4 mb-4">
						<div className="form-check form-switch">
							<input
								className="form-check-input"
								type="checkbox"
								id="all-notifications"
								data-master-checkbox-for="#notification-settings"
								checked=""
							/>
							<label
								className="form-check-label fw-bold text-nav"
								for="all-notifications"
							>
								Enable / disable all notifications
							</label>
						</div>
					</div>
					<div id="notification-settings">
						<div className="d-flex mb-4">
							<div className="form-check form-switch">
								<input
									className="form-check-input"
									type="checkbox"
									id="new-vacancy"
									checked=""
								/>
								<label className="form-check-label" for="new-vacancy"></label>
							</div>
							<div className="ps-2">
								<div className="text-nav fw-bold mb-1">
									New vacancies notifications
								</div>
								<p className="fs-sm mb-0">
									New vacancies alerts that match your{" "}
									<a href="job-board-account-saved-jobs.html">Saved Jobs</a>{" "}
									list
								</p>
							</div>
						</div>
						<div className="d-flex mb-4">
							<div className="form-check form-switch">
								<input
									className="form-check-input"
									type="checkbox"
									id="new-article"
									checked=""
								/>
								<label className="form-check-label" for="new-article"></label>
							</div>
							<div className="ps-2">
								<div className="text-nav fw-bold mb-1">
									New articles about job search and career development
								</div>
								<p className="fs-sm mb-0">
									Get the most useful materials from our blog weekly
								</p>
							</div>
						</div>
						<div className="d-flex mb-4">
							<div className="form-check form-switch">
								<input
									className="form-check-input"
									type="checkbox"
									id="partner-news"
								/>
								<label className="form-check-label" for="partner-news"></label>
							</div>
							<div className="ps-2">
								<div className="text-nav fw-bold mb-1">
									Info letters from our partners
								</div>
								<p className="fs-sm mb-0">
									Be the first to know about interesting career and development
									events, partner vacancies and new offers
								</p>
							</div>
						</div>
						<div className="d-flex mb-4">
							<div className="form-check form-switch">
								<input
									className="form-check-input"
									type="checkbox"
									id="resume-views"
									checked=""
								/>
								<label className="form-check-label" for="resume-views"></label>
							</div>
							<div className="ps-2">
								<div className="text-nav fw-bold mb-1">
									Weekly statistics of your resume views
								</div>
								<p className="fs-sm mb-0">
									Thanks to the statistics, you will be able to edit your resume
									and achieve higher results
								</p>
							</div>
						</div>
						<div className="d-flex">
							<div className="form-check form-switch">
								<input
									className="form-check-input"
									type="checkbox"
									id="recommendations"
								/>
								<label
									className="form-check-label"
									for="recommendations"
								></label>
							</div>
							<div className="ps-2">
								<div className="text-nav fw-bold mb-1">
									Recommended vacancies for your profile
								</div>
								<p className="fs-sm mb-0">
									You will receive recommended vacancies according to your
									interests
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Notifications;
