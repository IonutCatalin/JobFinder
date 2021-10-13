import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function PostResume2() {
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
								<i className="fi-education text-primary fs-4 mt-n1 me-2 pe-1"></i>
								Education
							</h2>
							<div className="row">
								<div className="col-sm-6 mb-4">
									<label className="form-label" htmlFor="pr-education-level">
										Level of education <span className="text-danger">*</span>
									</label>
									<select
										className="form-select form-select-lg"
										id="pr-education-level"
										required=""
									>
										<option value="" disabled="" selected="">
											Choose your level of education
										</option>
										<option value="Associate Degree">Associate Degree</option>
										<option value="Bachelor's Degree">Bachelor's Degree</option>
										<option value="Graduate Degree">Graduate Degree</option>
										<option value="Professional Degree">
											Professional Degree
										</option>
										<option value="Master Degree">Master Degree</option>
										<option value="PhD">PhD</option>
									</select>
								</div>
								<div className="col-sm-6 mb-4">
									<label className="form-label" htmlFor="pr-study-field">
										Field of study <span className="text-danger">*</span>
									</label>
									<input
										className="form-control form-control-lg"
										type="text"
										id="pr-study-field"
										placeholder="Enter field of study"
										required=""
									/>
								</div>
								<div className="col-sm-6 mb-4">
									<label className="form-label" htmlFor="pr-college">
										College / University <span className="text-danger">*</span>
									</label>
									<input
										className="form-control form-control-lg"
										type="text"
										id="pr-college"
										placeholder="Enter your college name"
										required=""
									/>
								</div>
								<div className="col-sm-6 mb-4">
									<label className="form-label" htmlFor="pr-country">
										Country &amp; city <span className="text-danger">*</span>
									</label>
									<input
										className="form-control form-control-lg"
										type="text"
										id="pr-country"
										placeholder="Enter country, city of your college"
										required=""
									/>
								</div>
								<div className="col-lg-6 mb-4">
									<label className="form-label" htmlFor="pr-period-from">
										Study period from <span className="text-danger">*</span>
									</label>
									<div className="row gx-2 gx-sm-3">
										<div className="col-7 col-sm-8">
											<select
												className="form-select form-select-lg"
												id="pr-period-from"
												required=""
											>
												<option value="" disabled="" selected="">
													Month
												</option>
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
											>
												<option value="" disabled="" selected="">
													Year
												</option>
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
											>
												<option value="" disabled="" selected="">
													Month
												</option>
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
											>
												<option value="" disabled="" selected="">
													Year
												</option>
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
						</div>
						<div className="d-flex flex-column flex-sm-row bg-light rounded-3 p-4 px-md-5">
							<Link
								to="/postresume"
								className="btn btn-outline-primary btn-lg rounded-pill mb-3 mb-sm-0"
							>
								<i className="fi-chevron-left fs-sm me-2"></i>Previous step
							</Link>
							<Link
								to="/postresume3"
								className="btn btn-primary btn-lg rounded-pill ms-sm-auto"
							>
								Next step<i className="fi-chevron-right fs-sm ms-2"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default PostResume2;
