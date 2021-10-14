import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function PostResume3({ formData, setForm, navigation }) {
	const {
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
								<i className="fi-briefcase text-primary fs-5 mt-n1 me-2 pe-1"></i>
								Work experience
							</h2>
							<div className="alert alert-info mb-4" role="alert">
								<div className="d-flex">
									<i className="fi-alert-circle me-2 me-sm-3"></i>
									<p className="fs-sm mb-1">
										Filling out 2 or more work experiences will double your
										chances of being contacted by an employer.
									</p>
								</div>
							</div>
							<label className="form-label" htmlFor="pr-title">
								Job title <span className="text-danger">*</span>
							</label>
							<input
								className="form-control form-control-lg mb-4"
								type="text"
								id="pr-title"
								placeholder="Enter job title"
								required=""
								name="jobTitle"
								value={jobTitle}
								onChange={setForm}
							/>
							<div className="row">
								<div className="col-sm-6 mb-4">
									<label className="form-label" htmlFor="pr-company">
										Company name <span className="text-danger">*</span>
									</label>
									<input
										className="form-control form-control-lg"
										type="text"
										id="pr-company"
										placeholder="Enter company name"
										required=""
										name="companyName"
										value={companyName}
										onChange={setForm}
									/>
								</div>
								<div className="col-sm-6 mb-4">
									<label className="form-label" htmlFor="pr-activity">
										Field of activity <span className="text-danger">*</span>
									</label>
									<select
										className="form-select form-select-lg"
										id="pr-activity"
										required=""
										name="fieldOfActivity"
										value={fieldOfActivity}
										onChange={setForm}
									>
										<option>Choose field</option>
										<option value="Accounting">Accounting</option>
										<option value="Marketing &amp; PR">
											Marketing &amp; PR
										</option>
										<option value="Medicine">Medicine</option>
										<option value="Agriculture">Agriculture</option>
										<option value="Internet technology">
											Internet technology
										</option>
										<option value="Security">Security</option>
										<option value="Management">Management</option>
										<option value="HoReCa">HoReCa</option>
										<option value="Insurance">Insurance</option>
									</select>
								</div>
								<div className="col-sm-6 mb-4">
									<label className="form-label" htmlFor="pr-country">
										Country
									</label>
									<select
										className="form-select form-select-lg"
										id="pr-country"
										name="jobCountry"
										value={jobCountry}
										onChange={setForm}
									>
										<option>Choose country</option>
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
										City
									</label>
									<select
										className="form-select form-select-lg"
										id="pr-city"
										name="jobCity"
										value={jobCity}
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
								<div className="col-lg-6 mb-4">
									<label className="form-label" htmlFor="pr-period-from">
										Time period from <span className="text-danger">*</span>
									</label>
									<div className="row gx-2 gx-sm-3">
										<div className="col-7 col-sm-8">
											<select
												className="form-select form-select-lg"
												id="pr-period-from"
												required=""
												name="timePeriodFromMonth"
												value={timePeriodFromMonth}
												onChange={setForm}
											>
												<option>Month</option>
												<option value="January">January</option>
												<option value="February">February</option>
												<option value="March">March</option>
												<option value="April">April</option>
												<option value="May">May</option>
												<option value="June">June</option>
												<option value="July">July</option>
												<option value="August">August</option>
												<option value="September">September</option>
												<option value="October">October</option>
												<option value="November">November</option>
												<option value="December">December</option>
											</select>
										</div>
										<div className="col-5 col-sm-4">
											<select
												className="form-select form-select-lg"
												required=""
												name="timePeriodFromYear"
												value={timePeriodFromYear}
												onChange={setForm}
											>
												<option>Year</option>
												<option value="2021">2021</option>
												<option value="2020">2020</option>
												<option value="2019">2019</option>
												<option value="2018">2018</option>
												<option value="2017">2017</option>
												<option value="2016">2016</option>
												<option value="2015">2015</option>
												<option value="2014">2014</option>
												<option value="2013">2013</option>
												<option value="2012">2012</option>
												<option value="2011">2011</option>
												<option value="2010">2010</option>
											</select>
										</div>
									</div>
								</div>
								<div className="col-lg-6 mb-4">
									<label className="form-label" htmlFor="pr-period-to">
										To <span className="text-danger">*</span>
									</label>
									<div className="row gx-2 gx-sm-3">
										<div className="col-7 col-sm-8">
											<select
												className="form-select form-select-lg"
												id="pr-period-to"
												required=""
												name="timePeriodToMonth"
												value={timePeriodToMonth}
												onChange={setForm}
											>
												<option>Month</option>
												<option value="January">January</option>
												<option value="February">February</option>
												<option value="March">March</option>
												<option value="April">April</option>
												<option value="May">May</option>
												<option value="June">June</option>
												<option value="July">July</option>
												<option value="August">August</option>
												<option value="September">September</option>
												<option value="October">October</option>
												<option value="November">November</option>
												<option value="December">December</option>
											</select>
										</div>
										<div className="col-5 col-sm-4">
											<select
												className="form-select form-select-lg"
												required=""
												name="timePeriodToYear"
												value={timePeriodToYear}
												onChange={setForm}
											>
												<option>Year</option>
												<option value="2021">2021</option>
												<option value="2020">2020</option>
												<option value="2019">2019</option>
												<option value="2018">2018</option>
												<option value="2017">2017</option>
												<option value="2016">2016</option>
												<option value="2015">2015</option>
												<option value="2014">2014</option>
												<option value="2013">2013</option>
												<option value="2012">2012</option>
												<option value="2011">2011</option>
												<option value="2010">2010</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div className="mb-4">
								<label className="form-label" htmlFor="pr-description">
									Description
								</label>
								<textarea
									className="form-control"
									rows="5"
									id="pr-description"
									name="description"
									value={description}
									onChange={setForm}
									placeholder="Describe your position and any significant accomplishments"
								></textarea>
								<div className="form-text pt-1">8,000 characters left</div>
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
								onClick={() => navigation.next()}
								className="btn btn-primary btn-lg rounded-pill ms-sm-auto"
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

export default PostResume3;
