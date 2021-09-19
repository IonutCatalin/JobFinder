import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import profileImage from "../../img/profile-image.png";
import { Link } from "react-router-dom";

function ProfileSettings() {
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
								<a className="nav-link" href="#">
									<i className="fi-logout mt-n1 me-2 fs-base"></i>Sign Out
								</a>
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
											<div id="email-value">annette_black@email.com</div>
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
											data-bs-binded-element="#email-value"
											data-bs-unset-value="Not specified"
											value="annette_black@email.com"
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
											<div id="fn-value">Annette Black</div>
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
											data-bs-binded-element="#fn-value"
											data-bs-unset-value="Not specified"
											value="Annette Black"
										/>
									</div>
								</div>
								<div className="border-bottom pb-3 mb-3">
									<div className="d-flex align-items-center justify-content-between">
										<div className="pe-2">
											<label className="form-label fw-bold">Gender</label>
											<div id="gender-value">Female</div>
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
											className="form-select mt-3"
											data-bs-binded-element="#gender-value"
										>
											<option value="" disabled="">
												Select your gender
											</option>
											<option value="Male">Male</option>
											<option value="Female" selected="">
												Female
											</option>
										</select>
									</div>
								</div>
								<div className="border-bottom pb-3 mb-3">
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
													tabindex="0"
													type="text"
													readonly="readonly"
												/>
												<i className="fi-calendar text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i>
											</div>
										</div>
									</div>
								</div>
								<div className="border-bottom pb-3 mb-3">
									<div className="d-flex align-items-center justify-content-between">
										<div className="pe-2">
											<label className="form-label fw-bold">Phone number</label>
											<div id="phone-value">(302) 555-0107</div>
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
											type="text"
											data-bs-binded-element="#phone-value"
											data-bs-unset-value="Not specified"
											value="(302) 555-0107"
										/>
									</div>
								</div>
								<div className="border-bottom pb-3 mb-3">
									<div className="d-flex align-items-center justify-content-between">
										<div className="pe-2">
											<label className="form-label fw-bold">Address</label>
											<div id="address-value">Not specified</div>
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
											data-bs-binded-element="#address-value"
											data-bs-unset-value="Not specified"
											placeholder="Enter address"
										/>
									</div>
								</div>
								<div>
									<div className="d-flex align-items-center justify-content-between">
										<div className="pe-2">
											<label className="form-label fw-bold">Socials</label>
											<ul className="list-unstyled mb-0">
												<li id="facebook-value">Not specified</li>
												<li id="linkedin-value"></li>
												<li id="twitter-value"></li>
												<li id="instagram-value"></li>
												<li id="behance-value"></li>
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
												data-bs-binded-element="#facebook-value"
												placeholder="Your Facebook account"
											/>
										</div>
										<div className="d-flex align-items-center mb-3">
											<div className="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
												<i className="fi-linkedin text-body"></i>
											</div>
											<input
												className="form-control"
												type="text"
												data-bs-binded-element="#linkedin-value"
												placeholder="Your LinkedIn account"
											/>
										</div>
										<div className="d-flex align-items-center mb-3">
											<div className="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
												<i className="fi-twitter text-body"></i>
											</div>
											<input
												className="form-control"
												type="text"
												data-bs-binded-element="#twitter-value"
												placeholder="Your Twitter account"
											/>
										</div>
										<div className="collapse" id="showMoreSocials">
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
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row pt-4 mt-2">
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
					</div>
					<div className="row pt-4 mt-2">
						<div className="col-lg-9 offset-lg-3">
							<div className="d-flex align-items-center justify-content-between">
								<button
									className="btn btn-primary rounded-pill px-3 px-sm-4"
									type="button"
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
