import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function PostResume({ formData, setForm, navigation }) {
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
	} = formData;

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
						<div className="text-center pb-4 mb-3">
							<h1 className="h2 mb-4">Create online resume</h1>
							<p className="mb-4">
								Save time by uploading a resume to prefill some of the fields
								below. Please, use PDF format.
							</p>
							<button
								className="btn btn-primary btn-lg rounded-pill"
								type="button"
							>
								<i className="fi-upload me-2"></i>Upload existing resume
							</button>
						</div>
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
								<div className="step">
									<div className="step-progress">
										<span className="step-progress-start"></span>
										<span className="step-progress-end"></span>
										<span className="step-number">2</span>
									</div>
									<div className="step-label">Education</div>
								</div>
								<div className="step">
									<div className="step-progress">
										<span className="step-progress-start"></span>
										<span className="step-progress-end"></span>
										<span className="step-number">3</span>
									</div>
									<div className="step-label">Experience</div>
								</div>
								<div className="step">
									<div className="step-progress">
										<span className="step-progress-start"></span>
										<span className="step-progress-end"></span>
										<span className="step-number">4</span>
									</div>
									<div className="step-label">Skills</div>
								</div>
								<div className="step">
									<div className="step-progress">
										<span className="step-progress-start"></span>
										<span className="step-progress-end"></span>
										<span className="step-number">5</span>
									</div>
									<div className="step-label">Review</div>
								</div>
							</div>
						</div>
						<div className="bg-light rounded-3 p-4 p-md-5 mb-3">
							<h2 className="h4 mb-4">
								<i className="fi-info-circle text-primary fs-5 mt-n1 me-2"></i>
								Basic info
							</h2>
							<div className="row">
								<div className="col-sm-6 mb-4">
									<label className="form-label" htmlFor="pr-fn">
										First name <span className="text-danger">*</span>
									</label>
									<input
										className="form-control form-control-lg"
										type="text"
										name="firstName"
										id="pr-fn"
										value={firstName}
										onChange={setForm}
										placeholder="Enter your first name"
										required=""
									/>
								</div>
								<div className="col-sm-6 mb-4">
									<label className="form-label" htmlFor="pr-sn">
										Second name <span className="text-danger">*</span>
									</label>
									<input
										className="form-control form-control-lg"
										type="text"
										id="pr-sn"
										name="secondName"
										value={secondName}
										onChange={setForm}
										placeholder="Enter your second name"
										required=""
									/>
								</div>
								<div className="col-sm-6 mb-4">
									<label className="form-label" htmlFor="pr-email">
										Email address <span className="text-danger">*</span>
									</label>
									<input
										className="form-control form-control-lg"
										type="email"
										id="pr-email"
										name="email"
										value={email}
										onChange={setForm}
										placeholder="Enter your email address"
										required=""
									/>
								</div>
								<div className="col-sm-6 mb-4">
									<label className="form-label" htmlFor="pr-phone">
										Phone <span className="text-danger">*</span>
									</label>
									<input
										className="form-control form-control-lg"
										type="text"
										id="pr-phone"
										name="phone"
										value={phone}
										onChange={setForm}
										placeholder="Enter your phone number"
										required=""
									/>
								</div>
								<div className="col-sm-6 mb-4">
									<label className="form-label" htmlFor="pr-birth-date">
										Date of birth <span className="text-danger">*</span>
									</label>
									<div className="input-group input-group-lg">
										<input
											className="form-control date-picker rounded pe-5 flatpickr-input"
											type="date"
											id="pr-birth-date"
											placeholder="Choose date"
											name="dateOfBirth"
											value={dateOfBirth}
											onChange={setForm}
											data-datepicker-options='{"altInput": true, "altFormat": "F j, Y", "dateFormat": "Y-m-d"}'
											// value="2021-09-23"
										/>
										{/* <input
											className="form-control date-picker rounded pe-5 input"
											placeholder="Choose date"
											tabindex="0"
											type="text"
											readonly="readonly"
										/>
										<i className="fi-calendar text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i> */}
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-6 mb-4">
									<label className="form-label" htmlFor="pr-country">
										Country where you want to work{" "}
										<span className="text-danger">*</span>
									</label>
									<select
										className="form-select form-select-lg"
										id="pr-country"
										required=""
										name="country"
										value={country}
										onChange={setForm}
									>
										<option defaultValue="Choose country" disabled="">
											Choose country
										</option>
										<option value="Australia">Australia</option>
										<option value="Belgium">Belgium</option>
										<option value="Canada">Canada</option>
										<option value="China">China</option>
										<option value="Denmark">Denmark</option>
										<option value="France">France</option>
										<option value="Germany">Germany</option>
										<option value="Japan">Japan</option>
										<option value="UK">UK</option>
										<option value="USA">USA</option>
									</select>
								</div>
								<div className="col-sm-6 mb-4">
									<label className="form-label" htmlFor="pr-city">
										City where you want to work{" "}
										<span className="text-danger">*</span>
									</label>
									<select
										className="form-select form-select-lg"
										id="pr-city"
										required=""
										name="city"
										value={city}
										onChange={setForm}
									>
										<option>Choose city</option>
										<option value="Beijing">Beijing</option>
										<option value="Berlin">Berlin</option>
										<option value="Brussels">Brussels</option>
										<option value="Copenhagen">Copenhagen</option>
										<option value="London">London</option>
										<option value="Ottawa">Ottawa</option>
										<option value="Paris">Paris</option>
										<option value="Sydney">Sydney</option>
										<option value="Tokyo">Tokyo</option>
										<option value="Washington">Washington</option>
									</select>
								</div>
								<div className="col-12 mb-4">
									<label className="form-label" htmlFor="pr-address">
										Your address <span className="text-danger">*</span>
									</label>
									<input
										className="form-control form-control-lg"
										type="text"
										id="pr-address"
										placeholder="Enter the address"
										name="adress"
										value={adress}
										onChange={setForm}
									/>
								</div>
							</div>
							<div className="pb-4 mb-2">
								<label className="form-label fw-bold mb-3">Socials</label>
								<div className="d-flex align-items-center mb-3">
									<div className="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
										<i className="fi-facebook text-body"></i>
									</div>
									<input
										className="form-control"
										type="text"
										placeholder="Your Facebook account"
										name="facebook"
										value={facebook}
										onChange={setForm}
									/>
								</div>
								<div className="d-flex align-items-center mb-3">
									<div className="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
										<i className="fi-linkedin text-body"></i>
									</div>
									<input
										className="form-control"
										type="text"
										placeholder="Your LinkedIn account"
										name="linkedIn"
										value={linkedIn}
										onChange={setForm}
									/>
								</div>
								<div className="d-flex align-items-center mb-3">
									<div className="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
										<i className="fi-twitter text-body"></i>
									</div>
									<input
										className="form-control"
										type="text"
										placeholder="Your Twitter account"
										name="twitter"
										value={twitter}
										onChange={setForm}
									/>
								</div>
							</div>
							<div className="border-top pt-4">
								<label
									className="form-label fw-bold py-2 mb-1"
									htmlFor="pr-position"
								>
									Position you want to work on{" "}
									<span className="text-danger">*</span>
								</label>
								<input
									className="form-control form-control-lg mb-4"
									type="text"
									id="pr-position"
									placeholder="Indicate the position"
									required=""
									name="positionToWork"
									value={positionToWork}
									onChange={setForm}
								/>
							</div>
							{/*
								<label className="form-label fw-bold pb-1 mb-2">
									Choose categories for posting resume
								</label>
								<div className="row row-cols-sm-2 row-cols-md-4 gx-3 gx-lg-4 mb-4">
									<div className="col">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="accounting"
											/>
											<label className="form-check-label" htmlFor="accounting">
												Accounting
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="marketing"
												checked=""
											/>
											<label className="form-check-label" htmlFor="marketing">
												Marketing &amp; PR
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="medicine"
											/>
											<label className="form-check-label" htmlFor="medicine">
												Medicine
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="agriculture"
											/>
											<label className="form-check-label" htmlFor="agriculture">
												Agriculture
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="it"
												checked=""
											/>
											<label className="form-check-label" htmlFor="it">
												Internet technology
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="security"
											/>
											<label className="form-check-label" htmlFor="security">
												Security
											</label>
										</div>
									</div>
									<div className="col">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="management"
											/>
											<label className="form-check-label" htmlFor="management">
												Management
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="horeca"
											/>
											<label className="form-check-label" htmlFor="horeca">
												HoReCa
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="design"
												checked=""
											/>
											<label className="form-check-label" htmlFor="design">
												Design, creativity
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="sport"
											/>
											<label className="form-check-label" htmlFor="sport">
												Fitness &amp; sports
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="beauty"
											/>
											<label className="form-check-label" htmlFor="beauty">
												Beauty
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="culture"
											/>
											<label className="form-check-label" htmlFor="culture">
												Culture
											</label>
										</div>
									</div>
									<div className="col">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="music"
											/>
											<label className="form-check-label" htmlFor="music">
												Music
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="logistics"
											/>
											<label className="form-check-label" htmlFor="logistics">
												Logistics
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="education"
											/>
											<label className="form-check-label" htmlFor="education">
												Education &amp; science
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="sales"
											/>
											<label className="form-check-label" htmlFor="sales">
												Sales &amp; purchases
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="industry"
											/>
											<label className="form-check-label" htmlFor="industry">
												Industry
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="transportation"
											/>
											<label
												className="form-check-label"
												htmlFor="transportation"
											>
												Transportation
											</label>
										</div>
									</div>
									<div className="col">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="media"
											/>
											<label className="form-check-label" htmlFor="media">
												Mass media &amp; publishing
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="insurance"
											/>
											<label className="form-check-label" htmlFor="insurance">
												Insurance
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="construction"
											/>
											<label
												className="form-check-label"
												htmlFor="construction"
											>
												Construction
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="architecture"
											/>
											<label
												className="form-check-label"
												htmlFor="architecture"
											>
												Architecture
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="hr"
											/>
											<label className="form-check-label" htmlFor="hr">
												HR management
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="law"
											/>
											<label className="form-check-label" htmlFor="law">
												Law
											</label>
										</div>
									</div>
								</div>
								<label className="form-label fw-bold pb-1 mb-2">Job type</label>
								<div className="row row-cols-sm-2 row-cols-md-4 gx-3 gx-lg-4 mb-4">
									<div className="col">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="full-time"
											/>
											<label className="form-check-label" htmlFor="full-time">
												Full-time
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="part-time"
												checked=""
											/>
											<label className="form-check-label" htmlFor="part-time">
												Part-time
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="remote"
											/>
											<label className="form-check-label" htmlFor="remote">
												Remote
											</label>
										</div>
									</div>
									<div className="col">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="temporary"
												checked=""
											/>
											<label className="form-check-label" htmlFor="temporary">
												Temporary
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="contract"
											/>
											<label className="form-check-label" htmlFor="contract">
												Contract
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="internship"
											/>
											<label className="form-check-label" htmlFor="internship">
												Internship
											</label>
										</div>
									</div>
								</div>
								<label className="form-label fw-bold pb-1 mb-2">
									Salary range
								</label>
								<div className="row gx-2 gx-lg-3 gx-xl-4">
									<div className="col-md-2 mb-3 mb-md-0">
										<select className="form-select form-select-lg">
											<option value="usd">$</option>
											<option value="eur">€</option>
											<option value="gbp">£</option>
											<option value="jpy">¥</option>
										</select>
									</div>
									<div className="col-md-7 mb-3 mb-md-0">
										<div className="d-flex align-items-center">
											<input
												className="form-control form-control-lg"
												type="number"
												step="100"
												min="300"
												placeholder="From"
											/>
											<div className="mx-2">—</div>
											<input
												className="form-control form-control-lg"
												type="number"
												step="100"
												min="500"
												placeholder="To"
											/>
										</div>
									</div>
									<div className="col-md-3">
										<select className="form-select form-select-lg">
											<option value="monthly">monthly</option>
											<option value="per hour">per hour</option>
											<option value="weekly">weekly</option>
											<option value="annually">annually</option>
										</select>
									</div>
								</div>
							</div> */}
						</div>
						<div className="d-flex flex-column flex-sm-row bg-light rounded-3 p-4 px-md-5">
							<button
								// to="/postresume2"
								className="btn btn-primary btn-lg rounded-pill ms-sm-auto"
								onClick={() => navigation.next()}
							>
								Next step<i className="fi-chevron-right fs-sm ms-2"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default PostResume;
