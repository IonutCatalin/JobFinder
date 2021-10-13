import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function PostResume4() {
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
								<i className="fi-star text-primary fs-5 mt-n1 me-2 pe-1"></i>
								Skills
							</h2>
							<div className="mb-4">
								<label className="form-label" htmlFor="pr-add-skill">
									Add skill
								</label>
								<div className="d-flex flex-column flex-sm-row">
									<input
										className="form-control form-control-lg w-100 me-sm-3 me-md-4 mb-3 mb-sm-0"
										type="text"
										id="pr-add-skill"
										placeholder="Enter skill here"
									/>
									<button
										className="btn btn-primary btn-lg rounded-pill"
										type="button"
									>
										Add
									</button>
								</div>
								<div className="form-text pt-1">You can add 26 more skills</div>
							</div>
							<div className="d-flex flex-wrap mb-4">
								<span className="bg-success text-light fs-sm btn btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">
									User Interface<i className="fi-check fs-xs ms-2"></i>
								</span>
								<span className="bg-success text-light fs-sm btn btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">
									Typography<i className="fi-check fs-xs ms-2"></i>
								</span>
								<span className="bg-success text-light fs-sm btn btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">
									User Experience<i className="fi-check fs-xs ms-2"></i>
								</span>
								<span className="bg-success text-light fs-sm btn btn-xs disabled opacity-100 rounded-pill me-2 mb-2 ms-1 mt-1">
									Illustration<i className="fi-check fs-xs ms-2"></i>
								</span>
							</div>
						</div>
						<div className="d-flex flex-column flex-sm-row bg-light rounded-3 p-4 px-md-5">
							<Link
								to="/postresume3"
								className="btn btn-outline-primary btn-lg rounded-pill mb-3 mb-sm-0"
							>
								<i className="fi-chevron-left fs-sm me-2"></i>Previous step
							</Link>
							<Link
								to="/postresume5"
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

export default PostResume4;
