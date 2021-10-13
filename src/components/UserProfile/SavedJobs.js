import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import profileImage from "../../img/profile-image.png";
import { AuthContext } from "../authContext/AuthContext";
import { logout } from "../authContext/AuthActions";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import SavedJobCard from "./SavedJobCard";
import { useEffect, useState } from "react";

const SavedJobs = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const { dispatch } = useContext(AuthContext);

	//const { savedJobs } = useContext(GlobalContext);
	// savedJobs.map((job) => {
	// 	console.log(job._id);
	// });
	// console.log(savedJobs);

	const [savedJobs, setSavedJobs] = useState([]);

	async function getUserSavedJobs() {
		fetch(`http://localhost:3001/savedJobs?userId=${user._id}`, {
			method: "GET",
			headers: { "Content-type": "application/json" },
		})
			.then((res) => res.json())
			.then((data) => {
				setSavedJobs(data);
			});
		console.log("aici", savedJobs);
	}

	useEffect(() => {
		getUserSavedJobs();
	}, []);

	savedJobs.filter((job) => {
		if (job.userId === user._id) console.log(job);
	});

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
					<div className="d-flex align-items-center justify-content-between py-4 mt-3 mb-2">
						<h1 className="h3 mb-0">Saved jobs</h1>
						<a className="fw-bold text-decoration-none" href="#">
							<i className="fi-x fs-xs me-2"></i>
							<span className="align-middle">Clear all</span>
						</a>
					</div>
					<div className="row g-2 g-md-4">
						{savedJobs.length > 0 ? (
							savedJobs
								.filter((jobb) => jobb.userId === user._id)
								.map((job) => {
									return (
										<SavedJobCard job={job} id={job._id} type="savedJobs" />
									);
								})
						) : (
							<p>Nothing here</p>
						)}
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default SavedJobs;
