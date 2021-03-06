import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import profileImage from "../../img/profile-image.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../authContext/AuthContext";
import { logout } from "../authContext/AuthActions";
import { useContext } from "react";
import { useEffect, useState } from "react";

import MyResumesCard from "./MyResumesCard";

function MyResumes() {
	const user = JSON.parse(localStorage.getItem("user"));
	const { dispatch } = useContext(AuthContext);

	const [myResumes, setMyResumes] = useState([]);

	async function getUserResumes() {
		fetch(`http://localhost:3001/myResumes?userId=${user._id}`, {
			method: "GET",
			headers: { "Content-type": "application/json" },
		})
			.then((res) => res.json())
			.then((data) => {
				setMyResumes(data);
			});
		console.log("aici", myResumes);
	}

	useEffect(() => {
		getUserResumes();
	}, []);

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
								<Link
									to={`/postresume`}
									className="btn btn-primary rounded-pill w-100"
								>
									<i className="fi-plus fs-sm me-2"></i>Post resume
								</Link>
							</div>
						</div>
						<div className="col-md-9">
							{myResumes.length > 0 ? (
								myResumes
									.filter((resume) => resume.userId === user._id)
									.map((resume) => {
										return (
											<MyResumesCard
												getUserResumes={getUserResumes}
												resume={resume}
												id={resume._id}
											/>
										);
									})
							) : (
								<p>Nothing here !</p>
							)}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default MyResumes;
