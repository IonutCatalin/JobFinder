import React from "react";
import avatar from "./../../img/girl-avatar.jpg";
// import companyImage from "./../img/company.png";

const MyResumesCard = ({ resume, id, getUserResumes }) => {
	const user = JSON.parse(localStorage.getItem("user"));

	const removeResumefromMyResumes = () => {
		fetch("http://localhost:3001/myResumes/" + id, {
			method: "DELETE",
		})
			.then((res) => {
				return res.json();
			})
			.then(() => {
				console.log("Resume deleted");
				getUserResumes();
			});
	};

	return (
		<div key={id} className="card bg-secondary card-hover">
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<div className="d-flex align-items-start">
						<img
							className="d-none d-sm-block"
							src={avatar}
							width="100"
							alt="Resume picture"
						/>
						<div className="ps-sm-3">
							<h3 className="h6 card-title pb-1 mb-2">
								<a className="stretched-link text-nav text-decoration-none">
									{resume.positionToWork}
								</a>
							</h3>
							<div className="fs-sm">
								<div className="text-nowrap mb-2">
									<i className="fi-map-pin text-muted me-1"> </i>
									{resume.jobCountry}, {resume.jobCity}
								</div>
								<div className="text-nowrap">
									<i className="fi-cash fs-base text-muted me-1"></i>
									$2,500
								</div>
							</div>
						</div>
					</div>
					<div className="d-flex flex-column align-items-end justify-content-between">
						<div className="dropdown position-relative zindex-1 mb-3">
							<button
								className="btn btn-icon btn-light btn-xs rounded-circle shadow-sm"
								type="button"
								id="contextMenu3"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<i className="fi-dots-vertical"></i>
							</button>
							<ul className="dropdown-menu my-1" aria-labelledby="contextMenu3">
								<li>
									<button className="dropdown-item" type="button">
										<i className="fi-edit opacity-60 me-2"></i>Edit
									</button>
								</li>
								<li>
									<button className="dropdown-item" type="button">
										<i className="fi-flame opacity-60 me-2"></i>
										Promote
									</button>
								</li>
								<li>
									<button className="dropdown-item" type="button">
										<i className="fi-download-file opacity-60 me-2"></i>
										Download as PDF
									</button>
								</li>
								<li>
									<button className="dropdown-item" type="button">
										<i className="fi-power opacity-60 me-2"></i>
										Deactivate
									</button>
								</li>
								<li>
									<button
										className="dropdown-item"
										type="button"
										onClick={() => {
											removeResumefromMyResumes(resume._id);
										}}
									>
										<i className="fi-trash opacity-60 me-2"></i>Delete
									</button>
								</li>
							</ul>
						</div>
						<strong className="fs-sm">92 views</strong>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyResumesCard;
