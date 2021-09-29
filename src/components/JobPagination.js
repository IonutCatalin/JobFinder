import React from "react";

const JobPagination = ({ jobsPerPage, totalJobs, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul>
				{pageNumbers.map((number) => {
					<li key={number}>
						<a onClick={() => paginate(number)} href="/joblist">
							{number}
						</a>
					</li>;
				})}
			</ul>
		</nav>
	);
};

export default JobPagination;
