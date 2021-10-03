import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function ReviewPagination({ reviewsPerPage, totalReviews, paginate }) {
	const { _id } = useParams();

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav className="mt-2" aria-label="Reviews pagination">
			<ul className="pagination mb-0">
				{pageNumbers.map((number) => {
					<li key={number} className="page-item d-sm-block" aria-current="page">
						<Link
							to={`/companydetails/${_id}`}
							onClick={(e) => {
								e.preventDefault();
								paginate(number);
							}}
							className="page-link active"
						>
							{number}
						</Link>
					</li>;
				})}
			</ul>
		</nav>
	);
}

export default ReviewPagination;
