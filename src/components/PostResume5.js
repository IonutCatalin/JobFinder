import React from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

function PostResume5({ formData, navigation }) {
	const { go } = navigation;
	const history = useHistory();

	const {
		firstName,
		secondName,
		email,
		phone,
		dateOfBirth,
		country,
		city,
		adress,
		facebook,
		linkedIn,
		twitter,
		positionToWork,
		levelOfEducation,
		fieldOfStudy,
		university,
		universityCountryCity,
		periodFromMonth,
		periodFromYear,
		periodToMonth,
		periodToYear,
		jobTitle,
		companyName,
		fieldOfActivity,
		jobCountry,
		jobCity,
		timePeriodFromMonth,
		timePeriodFromYear,
		timePeriodToMonth,
		timePeriodToYear,
		description,
		skills,
		userId,
	} = formData;

	console.log(formData);

	const resumeSubmit = async () => {
		console.log("my resume submit form pressed");

		// e.preventDefault();
		try {
			await axios.post("http://localhost:3001/myResumes", {
				adress: formData.adress,
				city: formData.city,
				companyName: formData.companyName,
				country: formData.country,
				dateOfBirth: formData.dateOfBirth,
				description: formData.description,
				email: formData.email,
				facebook: formData.facebook,
				fieldOfActivity: formData.fieldOfActivity,
				fieldOfStudy: formData.fieldOfStudy,
				firstName: formData.firstName,
				jobCity: formData.jobCity,
				jobCountry: formData.jobCountry,
				jobTitle: formData.jobTitle,
				levelOfEducation: formData.levelOfEducation,
				linkedIn: formData.linkedIn,
				periodFromMonth: formData.periodFromMonth,
				periodFromYear: formData.periodFromYear,
				periodToMonth: formData.periodToMonth,
				periodToYear: formData.periodToYear,
				phone: formData.phone,
				positionToWork: formData.positionToWork,
				secondName: formData.secondName,
				skills: formData.skills,
				timePeriodFromMonth: formData.timePeriodFromMonth,
				timePeriodFromYear: formData.timePeriodFromYear,
				timePeriodToMonth: formData.timePeriodToMonth,
				timePeriodToYear: formData.timePeriodToYear,
				twitter: formData.twitter,
				university: formData.university,
				universityCountryCity: formData.universityCountryCity,
				userId: formData.userId,
			});
		} catch (err) {
			console.log(err);
		}
		//history.push("/myresumes");
	};

	return (
		<>
			<Header />
			<div className="container mt-5 mb-md-4 py-5">
				<nav className="mb-3 mb-md-4 pt-md-3" aria-label="Breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link to="/">Home</Link>
						</li>
						<li className="breadcrumb-item active" aria-current="page">
							Post resume
						</li>
					</ol>
				</nav>
				<div className="row justify-content-center pb-sm-2">
					<div className="col-lg-11 col-xl-10">
						<h1 className="h2 text-center pb-4 mb-3">Create online resume</h1>
						<div className="bg-light rounded-3 py-4 px-md-4 mb-3">
							<div className="steps pt-4 pb-1">
								<div className="step active">
									<div className="step-progress">
										<span className="step-progress-start"></span>
										<span className="step-progress-end"></span>
										<span className="step-number">1</span>
									</div>
									<div className="step-label">Basic info</div>
								</div>
								<div className="step active">
									<div className="step-progress">
										<span className="step-progress-start"></span>
										<span className="step-progress-end"></span>
										<span className="step-number">2</span>
									</div>
									<div className="step-label">Education</div>
								</div>
								<div className="step active">
									<div className="step-progress">
										<span className="step-progress-start"></span>
										<span className="step-progress-end"></span>
										<span className="step-number">3</span>
									</div>
									<div className="step-label">Experience</div>
								</div>
								<div className="step active">
									<div className="step-progress">
										<span className="step-progress-start"></span>
										<span className="step-progress-end"></span>
										<span className="step-number">4</span>
									</div>
									<div className="step-label">Skills</div>
								</div>
								<div className="step active">
									<div className="step-progress">
										<span className="step-progress-start"></span>
										<span className="step-progress-end"></span>
										<span className="step-number">5</span>
									</div>
									<div className="step-label">Review</div>
								</div>
							</div>
						</div>
						<div className="bg-light rounded-3 pt-4 pb-0 px-4 p-md-5 mb-3">
							<div className="d-md-flex align-items-center mb-4 pb-md-2">
								<h2 className="h4 mb-md-0">
									<i className="fi-eye-on text-primary fs-5 mt-n1 me-2 pe-1"></i>
									Review your resume and save
								</h2>
								<div className="ms-md-auto">
									<div className="dropdown d-lg-none">
										<button
											className="btn btn-outline-secondary btn-sm dropdown-toggle"
											type="button"
											data-bs-toggle="dropdown"
										>
											<i className="fi-align-justify me-1"></i>Actions
										</button>
										<div className="dropdown-menu dropdown-menu-end my-1">
											<a className="dropdown-item" href="#">
												<i className="fi-trash me-2"></i>Delete
											</a>
											<a className="dropdown-item" href="#">
												<i className="fi-archive me-2"></i>Archive
											</a>
											<a className="dropdown-item" href="#">
												<i className="fi-download-file me-2"></i>Download as PDF
											</a>
										</div>
									</div>
									<ul className="list-unstyled d-none d-lg-flex flex-wrap fs-sm mb-0">
										<li className="border-end mb-0">
											<a className="nav-link text-nowrap" href="#">
												<i className="fi-trash me-1"></i>
												<span className="align-middle">Delete</span>
											</a>
										</li>
										<li className="border-end mb-0">
											<a className="nav-link text-nowrap" href="#">
												<i className="fi-archive me-1"></i>
												<span className="align-middle">Archive</span>
											</a>
										</li>
										<li className="mb-0">
											<a className="nav-link text-nowrap pe-0" href="#">
												<i className="fi-download-file me-1"></i>
												<span className="align-middle">Download as PDF</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="card shadow-sm p-md-2 mx-n4 mx-md-0">
								<div className="card-body p-4">
									<div className="d-sm-flex justify-content-between align-items-start pb-4">
										<div
											className="flex-shrink-0 order-sm-2 mb-4"
											style={{ width: "10rem", height: "10rem" }}
										>
											<div
												className="filepond--root file-uploader bg-secondary filepond--hopper"
												data-style-panel-layout="compact"
												data-style-button-remove-item-position="left"
												data-style-button-process-item-position="right"
												data-style-load-indicator-position="right"
												data-style-progress-indicator-position="right"
												data-style-button-remove-item-align="false"
												style={{ height: "160px" }}
											>
												<input
													className="filepond--browser"
													type="file"
													id="filepond--browser-mf7x72prj"
													name="filepond"
													aria-controls="filepond--assistant-mf7x72prj"
													aria-labelledby="filepond--drop-label-mf7x72prj"
													accept="image/png,image/jpeg"
												/>
												<a
													className="filepond--credits"
													aria-hidden="true"
													href="https://pqina.nl/"
													target="_blank"
													rel="noopener noreferrer"
													style={{ transform: "translateY(152px)" }}
												>
													Powered by PQINA
												</a>
												<div
													className="filepond--drop-label"
													style={{
														transform: "translate3d(0px, 0px, 0px)",
														opacity: "1",
													}}
												>
													<label
														htmlFor="filepond--browser-mf7x72prj"
														id="filepond--drop-label-mf7x72prj"
														aria-hidden="true"
													>
														<i className="d-inline-block fi-camera-plus fs-2 text-muted mb-2"></i>
														<br />
														<span className="fw-bold">Change picture</span>
													</label>
												</div>
												<div
													className="filepond--list-scroller"
													style={{ transform: "translate3d(0px, 0px, 0px)" }}
												>
													<ul className="filepond--list" role="list"></ul>
												</div>
												<div
													className="filepond--panel filepond--panel-root"
													data-scalable="true"
												>
													<div className="filepond--panel-top filepond--panel-root"></div>
													<div
														className="filepond--panel-center filepond--panel-root"
														style={{
															transform:
																"translate3d(0px, 8px, 0px) scale3d(1, 1.44, 1)",
														}}
													></div>
													<div
														className="filepond--panel-bottom filepond--panel-root"
														style={{
															transform: "translate3d(0px, 152px, 0px)",
														}}
													></div>
												</div>
												<span
													className="filepond--assistant"
													id="filepond--assistant-mf7x72prj"
													role="status"
													aria-live="polite"
													aria-relevant="additions"
												></span>
												<div className="filepond--drip"></div>
												<fieldset className="filepond--data"></fieldset>
											</div>
										</div>
										<div className="order-sm-1">
											<h3 className="h4 mb-sm-4">
												{firstName} {secondName}
											</h3>
											<h4 className="h5">Basic info</h4>
											<ul className="list-unstyled text-nav">
												<li>
													<span className="text-muted">Position:</span>{" "}
													{positionToWork}
												</li>
												{/* <li>
													<span className="text-muted">Job type:</span>{" "}
													Part-time
												</li> */}
												<li>
													<span className="text-muted">Location:</span>{" "}
													{country}
													{city ? "," : ""} {city}
												</li>
												{/* <li>
													<span className="text-muted">Salary:</span> $2000 ???
													$3000
												</li> */}
												{/* <li>
													<span className="text-muted">Categories:</span>{" "}
													Design, Internet Technology
												</li> */}
											</ul>
											<a
												className="d-inline-block fw-bold text-decoration-none py-1"
												onClick={() => go(`postresume`)}
												style={{ color: "#fd5631" }}
												type="button"
											>
												<i className="fi-edit mt-n1 me-2"></i>Edit
											</a>
										</div>
									</div>
									<div className="border-top py-4">
										<h4 className="h5">Personal info</h4>
										<ul className="list-unstyled text-nav">
											<li>
												<span className="text-muted">Full name:</span>{" "}
												{firstName} {secondName}
											</li>
											<li>
												<span className="text-muted">Date of birth:</span>{" "}
												{dateOfBirth}
											</li>
											<li>
												<span className="text-muted">Address:</span> {adress}
											</li>
											<li>
												<span className="text-muted">Phone:</span> {phone}
											</li>
											<li>
												<span className="text-muted">Email:</span> {email}
											</li>
											<li>
												<span className="text-muted">Socials: </span>
												<div className="d-inline-flex ms-1">
													<a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2 my-1">
														<i className="fi-facebook"></i>
													</a>
													<a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2 my-1">
														<i className="fi-twitter"></i>
													</a>
													<a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm my-1">
														<i className="fi-linkedin"></i>
													</a>
												</div>
											</li>
										</ul>
										<a
											className="d-inline-block fw-bold text-decoration-none py-1"
											onClick={() => go(`postresume`)}
											style={{ color: "#fd5631" }}
											type="button"
										>
											<i className="fi-edit mt-n1 me-2"></i>Edit
										</a>
									</div>
									<div className="border-top py-4">
										<h4 className="h5">Work experience</h4>
										<div className="mt-3">
											<h5 className="h6 mb-2">{jobTitle}</h5>
											<ul className="list-unstyled fs-sm mb-2">
												<li>{companyName}</li>
												<li>
													{timePeriodFromYear} - {timePeriodToYear}
												</li>
											</ul>
											<p>{description}</p>
											<div className="d-flex">
												<a
													className="d-inline-block fw-bold text-decoration-none py-1"
													onClick={() => go(`postresume3`)}
													style={{ color: "#fd5631" }}
													type="button"
												>
													<i className="fi-edit mt-n1 me-2"></i>Edit
												</a>
												<a className="d-inline-block fw-bold text-decoration-none py-1 ps-3">
													<i className="fi-trash mt-n1 me-2"></i>Delete
												</a>
											</div>
										</div>
									</div>
									<div className="border-top py-4">
										<h4 className="h5">Education</h4>
										<div className="mt-3">
											<h5 className="h6 mb-2">{levelOfEducation}</h5>
											<ul className="list-unstyled fs-sm">
												<li>{university}</li>
												<li>{universityCountryCity}</li>
												<li>
													{periodFromYear} - {periodToYear}
												</li>
											</ul>
											<div className="d-flex">
												<a
													className="d-inline-block fw-bold text-decoration-none py-1"
													onClick={() => go(`postresume2`)}
													style={{ color: "#fd5631" }}
													type="button"
												>
													<i className="fi-edit mt-n1 me-2"></i>Edit
												</a>
												<a className="d-inline-block fw-bold text-decoration-none py-1 ps-3">
													<i className="fi-trash mt-n1 me-2"></i>Delete
												</a>
											</div>
										</div>
									</div>
									<div className="border-top pt-4">
										<h4 className="h5">Skills</h4>
										<a
											className="d-inline-block fw-bold text-decoration-none py-1"
											onClick={() => go(`postresume4`)}
											style={{ color: "#fd5631" }}
											type="button"
										>
											<i className="fi-edit mt-n1 me-2"></i>Add skills
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex flex-column flex-sm-row bg-light rounded-3 p-4 px-md-5">
							<button
								onClick={() => navigation.previous()}
								className="btn btn-outline-primary btn-lg rounded-pill mb-3 mb-sm-0"
							>
								<i className="fi-chevron-left fs-sm me-2"></i>Previous step
							</button>
							<button
								className="btn btn-primary btn-lg rounded-pill ms-sm-auto"
								onClick={() => {
									resumeSubmit();
								}}
							>
								Save resume
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default PostResume5;
