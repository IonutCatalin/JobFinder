import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import profileImage from "../../img/profile-image.png";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../authContext/AuthContext";
import { logout } from "../authContext/AuthActions";
import axios from "axios";

function ProfileSettings() {
	const user = JSON.parse(localStorage.getItem("user"));
	console.log("user", user);
	// console.log("user id", user._id);
	const { dispatch } = useContext(AuthContext);

	// const [genderState, setGenderState] = useState("");
	const [noCredentialsUpdated, setNoCredentialsUpdated] = useState(false);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [updateUserDetails, setUpdateUserDetails] = useState({
		username: user.username ? user.username : "",
		email: user.email ? user.email : "",
		phone: user.phone ? user.phone : "",
		gender: user.gender ? user.gender : "male",
		adress: user.adress ? user.adress : "",
		facebook: user.facebook ? user.facebook : "",
		linkedIn: user.linkedIn ? user.linkedIn : "",
		twitter: user.twitter ? user.twitter : "",
	});

	const handleTyping = (e) => {
		const newData = { ...updateUserDetails };
		// const { username, email, phone, gender, adress } = updateUserDetails;
		newData[e.target.name] = e.target.value;
		console.log("e.target.name", e.target.name);
		// if (!newData[e.target.name]) {
		// 	newData[username] = user.username;
		// 	newData[email] = user.email;
		// 	newData[phone] = user.phone;
		// 	newData[gender] = user.gender;
		// 	newData[adress] = user.adress;
		// }
		setUpdateUserDetails(newData);

		console.log(newData);
	};

	async function handleSubmit(e) {
		e.preventDefault();

		console.log("submit form pressed");
		// const { username, email, phone, gender, adress } = updateUserDetails;
		if (
			!updateUserDetails.username &&
			!updateUserDetails.email &&
			!updateUserDetails.phone &&
			!updateUserDetails.gender &&
			!updateUserDetails.facebook &&
			!updateUserDetails.twitter &&
			!updateUserDetails.linkedIn &&
			updateUserDetails.adress
		) {
			updateUserDetails.username = user.username;
			updateUserDetails.email = user.email;
			updateUserDetails.phone = user.phone;
			updateUserDetails.gender = user.gender;
			updateUserDetails.facebook = user.facebook;
			updateUserDetails.twitter = user.twitter;
			updateUserDetails.linkedIn = user.linkedIn;
			setNoCredentialsUpdated(false);
		} else if (
			!updateUserDetails.username &&
			!updateUserDetails.email &&
			!updateUserDetails.phone &&
			!updateUserDetails.adress &&
			!updateUserDetails.facebook &&
			!updateUserDetails.twitter &&
			!updateUserDetails.linkedIn &&
			updateUserDetails.gender
		) {
			updateUserDetails.username = user.username;
			updateUserDetails.email = user.email;
			updateUserDetails.phone = user.phone;
			updateUserDetails.adress = user.adress;
			updateUserDetails.facebook = user.facebook;
			updateUserDetails.twitter = user.twitter;
			updateUserDetails.linkedIn = user.linkedIn;
			setNoCredentialsUpdated(false);
		} else if (
			!updateUserDetails.username &&
			!updateUserDetails.email &&
			!updateUserDetails.gender &&
			!updateUserDetails.adress &&
			!updateUserDetails.facebook &&
			!updateUserDetails.twitter &&
			!updateUserDetails.linkedIn &&
			updateUserDetails.phone
		) {
			updateUserDetails.username = user.username;
			updateUserDetails.email = user.email;
			updateUserDetails.gender = user.gender;
			updateUserDetails.adress = user.adress;
			updateUserDetails.facebook = user.facebook;
			updateUserDetails.twitter = user.twitter;
			updateUserDetails.linkedIn = user.linkedIn;
			setNoCredentialsUpdated(false);
		} else if (
			!updateUserDetails.username &&
			!updateUserDetails.phone &&
			!updateUserDetails.gender &&
			!updateUserDetails.adress &&
			!updateUserDetails.facebook &&
			!updateUserDetails.twitter &&
			!updateUserDetails.linkedIn &&
			updateUserDetails.email
		) {
			updateUserDetails.username = user.username;
			updateUserDetails.phone = user.phone;
			updateUserDetails.gender = user.gender;
			updateUserDetails.adress = user.adress;
			updateUserDetails.facebook = user.facebook;
			updateUserDetails.twitter = user.twitter;
			updateUserDetails.linkedIn = user.linkedIn;
			setNoCredentialsUpdated(false);
		} else if (
			!updateUserDetails.email &&
			!updateUserDetails.phone &&
			!updateUserDetails.gender &&
			!updateUserDetails.adress &&
			!updateUserDetails.facebook &&
			!updateUserDetails.twitter &&
			!updateUserDetails.linkedIn &&
			updateUserDetails.username
		) {
			updateUserDetails.email = user.email;
			updateUserDetails.phone = user.phone;
			updateUserDetails.gender = user.gender;
			updateUserDetails.adress = user.adress;
			updateUserDetails.facebook = user.facebook;
			updateUserDetails.twitter = user.twitter;
			updateUserDetails.linkedIn = user.linkedIn;
			setNoCredentialsUpdated(false);
		} else if (
			!updateUserDetails.email &&
			!updateUserDetails.phone &&
			!updateUserDetails.gender &&
			!updateUserDetails.adress &&
			!updateUserDetails.username &&
			!updateUserDetails.twitter &&
			!updateUserDetails.linkedIn &&
			updateUserDetails.facebook
		) {
			updateUserDetails.email = user.email;
			updateUserDetails.phone = user.phone;
			updateUserDetails.gender = user.gender;
			updateUserDetails.adress = user.adress;
			updateUserDetails.twitter = user.twitter;
			updateUserDetails.linkedIn = user.linkedIn;
			updateUserDetails.username = user.username;
			setNoCredentialsUpdated(false);
		} else if (
			!updateUserDetails.email &&
			!updateUserDetails.phone &&
			!updateUserDetails.gender &&
			!updateUserDetails.adress &&
			!updateUserDetails.username &&
			!updateUserDetails.facebook &&
			!updateUserDetails.linkedIn &&
			updateUserDetails.twitter
		) {
			////
			updateUserDetails.email = user.email;
			updateUserDetails.phone = user.phone;
			updateUserDetails.gender = user.gender;
			updateUserDetails.adress = user.adress;
			updateUserDetails.facebook = user.facebook;
			updateUserDetails.linkedIn = user.linkedIn;
			updateUserDetails.username = user.username;
			setNoCredentialsUpdated(false);
		} else if (
			!updateUserDetails.email &&
			!updateUserDetails.phone &&
			!updateUserDetails.gender &&
			!updateUserDetails.adress &&
			!updateUserDetails.username &&
			!updateUserDetails.facebook &&
			!updateUserDetails.twitter &&
			updateUserDetails.linkedIn
		) {
			////
			updateUserDetails.email = user.email;
			updateUserDetails.phone = user.phone;
			updateUserDetails.gender = user.gender;
			updateUserDetails.adress = user.adress;
			updateUserDetails.facebook = user.facebook;
			updateUserDetails.twitter = user.twitter;
			updateUserDetails.username = user.username;
			setNoCredentialsUpdated(false);
		} else if (
			!updateUserDetails.username &&
			!updateUserDetails.email &&
			!updateUserDetails.phone &&
			!updateUserDetails.gender &&
			!updateUserDetails.adress &&
			!updateUserDetails.facebook &&
			!updateUserDetails.twitter &&
			!updateUserDetails.linkedIn
		) {
			setNoCredentialsUpdated(true);
			return;
		}

		try {
			await axios.patch(`http://localhost:3001/users/${user._id}`, {
				username: updateUserDetails.username,
				email: updateUserDetails.email,
				phone: updateUserDetails.phone,
				gender: updateUserDetails.gender,
				adress: updateUserDetails.adress,
				facebook: updateUserDetails.facebook,
				twitter: updateUserDetails.twitter,
				linkedIn: updateUserDetails.linkedIn,
			});
		} catch (err) {
			console.log(err);
		}
		setIsFormSubmitted(true);
		setNoCredentialsUpdated(false);
	}

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
							Profile settings
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
								// localStorage.removeItem("user");
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
								<Link
									to="/profilesettings"
									className="nav-link active"
									aria-current="page"
								>
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
									className="nav-link"
									href="job-board-account-notifications.html"
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
					<div className="row pt-4 mt-3">
						<div className="col-lg-3">
							<h2 className="h4">Authorization info</h2>
						</div>
						<div className="col-lg-9">
							<div className="border rounded-3 p-3" id="auth-info">
								<div className="border-bottom pb-3 mb-3">
									<div className="d-flex align-items-center justify-content-between">
										<div className="pe-2">
											<label className="form-label fw-bold">Email</label>
											<div id="email-value">{user.email}</div>
										</div>
										<div
											className="me-n3"
											data-bs-toggle="tooltip"
											title=""
											data-bs-original-title="Edit"
											aria-label="Edit"
										>
											<a
												className="nav-link py-0"
												href="#email-collapse"
												data-bs-toggle="collapse"
											>
												<i className="fi-edit"></i>
											</a>
										</div>
									</div>
									<div
										className="collapse"
										id="email-collapse"
										data-bs-parent="#auth-info"
									>
										<input
											className="form-control mt-3"
											type="email"
											name="email"
											data-bs-binded-element="#email-value"
											data-bs-unset-value="Not specified"
											onChange={(e) => handleTyping(e)}
										/>
									</div>
								</div>
								<div>
									<div className="d-flex align-items-center justify-content-between">
										<div className="pe-2">
											<label className="form-label fw-bold">Password</label>
											<div>********</div>
										</div>
										<div
											className="me-n3"
											data-bs-toggle="tooltip"
											title=""
											data-bs-original-title="Edit"
											aria-label="Edit"
										>
											<a
												className="nav-link py-0"
												href="#password-collapse"
												data-bs-toggle="collapse"
											>
												<i className="fi-edit"></i>
											</a>
										</div>
									</div>
									<div
										className="collapse"
										id="password-collapse"
										data-bs-parent="#auth-info"
									>
										<div className="row gx-3 align-items-center my-3">
											<label
												className="col-sm-4 col-md-3 col-form-label"
												htmlFor="account-password-current"
											>
												Current password:
											</label>
											<div className="col-sm-8 col-md-9">
												<div className="password-toggle">
													<input
														className="form-control"
														type="password"
														id="account-password-current"
														placeholder="Enter current password"
													/>
													<label
														className="password-toggle-btn"
														aria-label="Show/hide password"
													>
														<input
															className="password-toggle-check"
															type="checkbox"
														/>
														<span className="password-toggle-indicator"></span>
													</label>
												</div>
											</div>
										</div>
										<div className="row gx-3 align-items-center my-3">
											<label
												className="col-sm-4 col-md-3 col-form-label"
												htmlFor="account-password-new"
											>
												New password:
											</label>
											<div className="col-sm-8 col-md-9">
												<div className="password-toggle">
													<input
														className="form-control"
														type="password"
														id="account-password-new"
														placeholder="Enter new password"
													/>
													<label
														className="password-toggle-btn"
														aria-label="Show/hide password"
													>
														<input
															className="password-toggle-check"
															type="checkbox"
														/>
														<span className="password-toggle-indicator"></span>
													</label>
												</div>
											</div>
										</div>
										<div className="row gx-3 align-items-center">
											<label
												className="col-sm-4 col-md-3 col-form-label"
												htmlFor="account-password-confirm"
											>
												Confirm new password:
											</label>
											<div className="col-sm-8 col-md-9">
												<div className="password-toggle">
													<input
														className="form-control"
														type="password"
														id="account-password-confirm"
														placeholder="Confirm new password"
													/>
													<label
														className="password-toggle-btn"
														aria-label="Show/hide password"
													>
														<input
															className="password-toggle-check"
															type="checkbox"
														/>
														<span className="password-toggle-indicator"></span>
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row pt-4 mt-2">
						<div className="col-lg-3">
							<h2 className="h4">Personal details</h2>
						</div>
						<div className="col-lg-9">
							<div className="border rounded-3 p-3" id="personal-details">
								<div className="border-bottom pb-3 mb-3">
									<div className="d-flex align-items-center justify-content-between">
										<div className="pe-2">
											<label className="form-label fw-bold">Full name</label>
											<div id="fn-value">{user.username}</div>
										</div>
										<div
											className="me-n3"
											data-bs-toggle="tooltip"
											title=""
											data-bs-original-title="Edit"
											aria-label="Edit"
										>
											<a
												className="nav-link py-0"
												href="#fn-collapse"
												data-bs-toggle="collapse"
											>
												<i className="fi-edit"></i>
											</a>
										</div>
									</div>
									<div
										className="collapse"
										id="fn-collapse"
										data-bs-parent="#personal-details"
									>
										<input
											className="form-control mt-3"
											type="email"
											name="username"
											data-bs-binded-element="#fn-value"
											data-bs-unset-value="Not specified"
											onChange={(e) => handleTyping(e)}
										/>
									</div>
								</div>
								<div className="border-bottom pb-3 mb-3">
									<div className="d-flex align-items-center justify-content-between">
										<div className="pe-2">
											<label className="form-label fw-bold">Gender</label>
											<div id="gender-value">{user.gender}</div>
										</div>
										<div
											className="me-n3"
											data-bs-toggle="tooltip"
											title=""
											data-bs-original-title="Edit"
											aria-label="Edit"
										>
											<a
												className="nav-link py-0"
												href="#gender-collapse"
												data-bs-toggle="collapse"
											>
												<i className="fi-edit"></i>
											</a>
										</div>
									</div>
									<div
										className="collapse"
										id="gender-collapse"
										data-bs-parent="#personal-details"
									>
										<select
											name="gender"
											className="form-select mt-3"
											data-bs-binded-element="#gender-value"
											onChange={(e) => {
												handleTyping(e);
											}}
										>
											<option value="male">Male</option>
											<option value="female">Female</option>
										</select>
									</div>
								</div>
								{/* <div className="border-bottom pb-3 mb-3">
									<div className="d-flex align-items-center justify-content-between">
										<div className="pe-2">
											<label className="form-label fw-bold">
												Date of birth
											</label>
											<div id="birth-value">Not specified</div>
										</div>
										<div
											className="me-n3"
											data-bs-toggle="tooltip"
											title=""
											data-bs-original-title="Edit"
											aria-label="Edit"
										>
											<a
												className="nav-link py-0"
												href="#birth-collapse"
												data-bs-toggle="collapse"
											>
												<i className="fi-edit"></i>
											</a>
										</div>
									</div>
									<div
										className="collapse"
										id="birth-collapse"
										data-bs-parent="#personal-details"
									>
										<div className="mt-3 pt-3 border-top">
											<div className="input-group">
												<input
													className="form-control date-picker rounded pe-5 flatpickr-input"
													type="hidden"
													data-bs-binded-element="#birth-value"
													data-datepicker-options='{"altInput": true, "altFormat": "F j, Y", "dateFormat": "F j, Y"}'
													placeholder="Choose date"
												/>
												<input
													className="form-control date-picker rounded pe-5 form-control input"
													placeholder="Choose date"
													tabIndex="0"
													type="text"
													readOnly="readonly"
												/>
												<i className="fi-calendar text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i>
											</div>
										</div>
									</div>
								</div> */}
								<div className="border-bottom pb-3 mb-3">
									<div className="d-flex align-items-center justify-content-between">
										<div className="pe-2">
											<label className="form-label fw-bold">Phone number</label>
											<div id="phone-value">{user.phone}</div>
										</div>
										<div
											className="me-n3"
											data-bs-toggle="tooltip"
											title=""
											data-bs-original-title="Edit"
											aria-label="Edit"
										>
											<a
												className="nav-link py-0"
												href="#phone-collapse"
												data-bs-toggle="collapse"
											>
												<i className="fi-edit"></i>
											</a>
										</div>
									</div>
									<div
										className="collapse"
										id="phone-collapse"
										data-bs-parent="#personal-details"
									>
										<input
											className="form-control mt-3"
											name="phone"
											type="text"
											data-bs-binded-element="#phone-value"
											data-bs-unset-value="Not specified"
											placeholder="Enter phone"
											onChange={(e) => handleTyping(e)}
										/>
									</div>
								</div>
								<div className="border-bottom pb-3 mb-3">
									<div className="d-flex align-items-center justify-content-between">
										<div className="pe-2">
											<label className="form-label fw-bold">Address</label>
											<div id="address-value">{user.adress}</div>
										</div>
										<div
											className="me-n3"
											data-bs-toggle="tooltip"
											title=""
											data-bs-original-title="Edit"
											aria-label="Edit"
										>
											<a
												className="nav-link py-0"
												href="#address-collapse"
												data-bs-toggle="collapse"
											>
												<i className="fi-edit"></i>
											</a>
										</div>
									</div>
									<div
										className="collapse"
										id="address-collapse"
										data-bs-parent="#personal-details"
									>
										<input
											className="form-control mt-3"
											type="text"
											name="adress"
											data-bs-binded-element="#address-value"
											data-bs-unset-value="Not specified"
											placeholder="Enter address"
											onChange={(e) => handleTyping(e)}
										/>
									</div>
								</div>
								<div>
									<div className="d-flex align-items-center justify-content-between">
										<div className="pe-2">
											<label className="form-label fw-bold">Socials</label>
											<ul className="list-unstyled mb-0">
												<li id="facebook-value"></li>
												<li id="linkedin-value"></li>
												<li id="twitter-value"></li>
												{/* <li id="instagram-value"></li>
												<li id="behance-value"></li> */}
											</ul>
										</div>
										<div
											className="me-n3"
											data-bs-toggle="tooltip"
											title=""
											data-bs-original-title="Edit"
											aria-label="Edit"
										>
											<a
												className="nav-link py-0"
												href="#socials-collapse"
												data-bs-toggle="collapse"
											>
												<i className="fi-edit"></i>
											</a>
										</div>
									</div>
									<div
										className="collapse mt-3"
										id="socials-collapse"
										data-bs-parent="#personal-details"
									>
										<div className="d-flex align-items-center mb-3">
											<div className="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
												<i className="fi-facebook text-body"></i>
											</div>
											<input
												className="form-control"
												type="text"
												name="facebook"
												data-bs-binded-element="#facebook-value"
												placeholder="Enter facebook adress"
												onChange={(e) => handleTyping(e)}
											/>
										</div>
										<div className="d-flex align-items-center mb-3">
											<div className="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
												<i className="fi-linkedin text-body"></i>
											</div>
											<input
												className="form-control"
												type="text"
												name="linkedIn"
												data-bs-binded-element="#linkedin-value"
												placeholder="Enter linkedIn adress"
												onChange={(e) => handleTyping(e)}
											/>
										</div>
										<div className="d-flex align-items-center mb-3">
											<div className="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
												<i className="fi-twitter text-body"></i>
											</div>
											<input
												className="form-control"
												type="text"
												name="twitter"
												data-bs-binded-element="#twitter-value"
												placeholder="Enter twitter adress"
												onChange={(e) => handleTyping(e)}
											/>
										</div>
										{/* <div className="collapse" id="showMoreSocials">
											<div className="d-flex align-items-center mb-3">
												<div className="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
													<i className="fi-instagram text-body"></i>
												</div>
												<input
													className="form-control"
													type="text"
													data-bs-binded-element="#instagram-value"
													placeholder="Your Instagram account"
												/>
											</div>
											<div className="d-flex align-items-center mb-3">
												<div className="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
													<i className="fi-behance text-body"></i>
												</div>
												<input
													className="form-control"
													type="text"
													data-bs-binded-element="#behance-value"
													placeholder="Your Behance account"
												/>
											</div>
										</div>
										<a
											className="collapse-label collapsed d-inline-block fs-sm fw-bold text-decoration-none pt-2 pb-3"
											href="#showMoreSocials"
											data-bs-toggle="collapse"
											data-bs-label-collapsed="Show more"
											data-bs-label-expanded="Show less"
											role="button"
											aria-expanded="false"
											aria-controls="showMoreSocials"
										>
											<i className="fi-arrow-down me-2"></i>
										</a> */}
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="row pt-4 mt-2">
						<div className="col-lg-3">
							<h2 className="h4">Account settings</h2>
						</div>
						<div className="col-lg-9">
							<div className="border rounded-3 p-3" id="account-settings">
								<div className="border-bottom pb-3 mb-3">
									<div className="d-flex align-items-center justify-content-between">
										<div className="pe-2">
											<label className="form-label fw-bold">Account type</label>
											<div id="type-value">Job seeker (looking for a job)</div>
										</div>
										<div
											className="me-n3"
											data-bs-toggle="tooltip"
											title=""
											data-bs-original-title="Edit"
											aria-label="Edit"
										>
											<a
												className="nav-link py-0"
												href="#type-collapse"
												data-bs-toggle="collapse"
											>
												<i className="fi-edit"></i>
											</a>
										</div>
									</div>
									<div
										className="collapse"
										id="type-collapse"
										data-bs-parent="#account-settings"
									>
										<select
											className="form-select mt-3"
											data-bs-binded-element="#type-value"
										>
											<option value="" disabled="">
												Select account type
											</option>
											<option value="Employer (looking for an employee)">
												Employer (looking for an employee)
											</option>
											<option
												value="Job seeker (looking for a job)"
												selected=""
											>
												Job seeker (looking for a job)
											</option>
										</select>
									</div>
								</div>
								<div>
									<div className="d-flex align-items-center justify-content-between">
										<div className="pe-2">
											<label className="form-label fw-bold">
												Two-factor authentication
											</label>
											<div id="auth-value">Inactive</div>
										</div>
										<div
											className="me-n3"
											data-bs-toggle="tooltip"
											title=""
											data-bs-original-title="Edit"
											aria-label="Edit"
										>
											<a
												className="nav-link py-0"
												href="#auth-collapse"
												data-bs-toggle="collapse"
											>
												<i className="fi-edit"></i>
											</a>
										</div>
									</div>
									<div
										className="collapse"
										id="auth-collapse"
										data-bs-parent="#account-settings"
									>
										<select
											className="form-select mt-3"
											data-bs-binded-element="#auth-value"
										>
											<option value="" disabled="">
												Enable / disbale two-factor authentication
											</option>
											<option value="Active">Enable</option>
											<option value="Inactive" selected="">
												Disable
											</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					{noCredentialsUpdated ? (
						<div>No credentials updated, you have nothing to submit!</div>
					) : (
						<div></div>
					)}
					{isFormSubmitted && (
						<div>
							Account details changed <br /> please log in back to update them!
						</div>
					)}
					<div className="row pt-4 mt-2">
						<div className="col-lg-9 offset-lg-3">
							<div className="d-flex align-items-center justify-content-between">
								<button
									className="btn btn-primary rounded-pill px-3 px-sm-4"
									type="button"
									onClick={(e) => handleSubmit(e)}
								>
									Save changes
								</button>
								<button className="btn btn-link btn-sm px-0" type="button">
									<i className="fi-trash me-2"></i>Delete account
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default ProfileSettings;
