import React from "react";

const JobPagination = ({ jobsPerPage, totalJobs, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className="pt-4 pb-2" aria-label="Blog pagination">
			<ul className="pagination mb-0">
				{pageNumbers.map((number) => (
					<li key={number} className="page-item d-sm-block" aria-current="page">
						<a
							onClick={(e) => {
								e.preventDefault();
								paginate(number);
							}}
							href="joblist"
							className="page-link active"
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default JobPagination;
