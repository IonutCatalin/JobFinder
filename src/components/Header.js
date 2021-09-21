import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "./../img/logo-light.svg";
import LoggedIn from "./UserProfile/LoggedIn";
import { AuthContext, useAuthContext } from "./Auth/AuthContext";
import { useEffect, useState } from "react";
function Header() {
	const loggedIn = false;

	const { userProfile, logout } = useAuthContext();
	const [users, setUsers] = useState({});
	useEffect(() => {
		getUsers();
	}, []);
	console.log("userprofile outside fetch", userProfile);
	function getUsers() {
		fetch(`http://localhost:3001/users/`)
			.then((res) => res.json())
			.then((data) => {
				console.log("users", data);
				console.log("userprofile inside fetch", userProfile);
				setUsers(data.find((item) => item.email === userProfile.email));
			});
	}
	const { firstName } = users;

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
				{!userProfile ? (
					<a
						className="btn btn-link btn-light btn-sm d-none d-lg-block order-lg-3"
						href="/login"
					>
						<i className="fi-user me-2"></i>Sign in
					</a>
				) : (
					<LoggedIn />
				)}
				{!userProfile && (
					<Link
						onClick={(e) => {
							e.preventDefault();
							logout();
						}}
						to={`/login`}
						className="btn btn-primary btn-sm rounded-pill ms-2 order-lg-3"
					>
						<i className="fi-plus me-2"></i>Log Out
					</Link>
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
											<a className="dropdown-item" href="/profilesettings">
												Profile Settings
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="/myresumes">
												My Resumes
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="savedjobs">
												Saved Jobs
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="notifications">
												Notifications
											</a>
										</li>
									</ul>
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
