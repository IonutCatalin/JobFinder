import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../img/rounded-profile-image.png";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../authContext/AuthContext";
import { logout } from "../authContext/AuthActions";

const LoggedIn = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const { dispatch } = useContext(AuthContext);

	return (
		<>
			<div className="dropdown d-none d-lg-block order-lg-3 my-n2 me-3">
				<Link to="/profilesettings" className="d-block py-2">
					<img
						className="rounded-circle"
						src={profileImage}
						width="40"
						alt="Annette Black"
					/>
				</Link>
				<div className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
					<div
						className="d-flex align-items-start border-bottom border-light px-3 py-1 mb-2"
						style={{ width: "16rem" }}
					>
						<img
							className="rounded-circle"
							src={profileImage}
							width="48"
							alt="Annette Black"
						/>
						<div className="ps-2">
							<h6 className="fs-base text-light mb-0">{user.username}</h6>
							<div className="fs-xs py-2">
								{user.phone}
								<br />
								{user.email}
							</div>
						</div>
					</div>
					<Link to="/profilesettings" className="dropdown-item">
						<i className="fi-settings me-2"></i>Profile Settings
					</Link>
					<Link to="/myresumes" className="dropdown-item">
						<i className="fi-file me-2"></i>My Resumes
					</Link>
					<Link to="/savedjobs" className="dropdown-item">
						<i className="fi-heart me-2"></i>Saved Jobs
					</Link>
					<Link to="/notifications" className="dropdown-item">
						<i className="fi-bell me-2"></i>Notifications
					</Link>
					<div className="dropdown-divider"></div>
					<Link
						className="dropdown-item"
						to="/login"
						onClick={() => {
							dispatch(logout());
						}}
					>
						<i className="fi-logout me-2"></i>Sign Out
					</Link>
				</div>
			</div>
		</>
	);
};

export default LoggedIn;
