import React, { useEffect, useState } from "react";
import boyAvatar from "./../img/boy-avatar.jpg";

function ReviewDisplay(props) {
	const { _id, name, email, rating, message, date } = props.data;
	return (
		<>
			<div className="mb-4 pb-4 border-bottom">
				<div className="d-flex justify-content-between mb-3">
					<div className="d-flex align-items-center pe-2">
						<img
							className="rounded-circle me-1"
							src={boyAvatar}
							width="48"
							alt="Avatar"
						/>
						<div className="ps-2">
							<h6 className="fs-base mb-0">{name}</h6>
							<span className="star-rating">
								{rating === "5 stars" ? (
									<div>
										<i className="star-rating-icon fi-star-filled active"></i>
										<i className="star-rating-icon fi-star-filled active"></i>
										<i className="star-rating-icon fi-star-filled active"></i>
										<i className="star-rating-icon fi-star-filled active"></i>
										<i className="star-rating-icon fi-star-filled active"></i>
									</div>
								) : (
									<div></div>
								)}
								{rating === "4 stars" ? (
									<div>
										<i className="star-rating-icon fi-star-filled active"></i>
										<i className="star-rating-icon fi-star-filled active"></i>
										<i className="star-rating-icon fi-star-filled active"></i>
										<i className="star-rating-icon fi-star-filled active"></i>
										<i className="star-rating-icon fi-star"></i>
									</div>
								) : (
									<div></div>
								)}
								{rating === "3 stars" ? (
									<div>
										<i className="star-rating-icon fi-star-filled active"></i>
										<i className="star-rating-icon fi-star-filled active"></i>
										<i className="star-rating-icon fi-star-filled active"></i>
										<i className="star-rating-icon fi-star"></i>
										<i className="star-rating-icon fi-star"></i>
									</div>
								) : (
									<div></div>
								)}
								{rating === "2 stars" ? (
									<div>
										<i className="star-rating-icon fi-star-filled active"></i>
										<i className="star-rating-icon fi-star-filled active"></i>
										<i className="star-rating-icon fi-star"></i>
										<i className="star-rating-icon fi-star"></i>
										<i className="star-rating-icon fi-star"></i>
									</div>
								) : (
									<div></div>
								)}
								{rating === "1 star" ? (
									<div>
										<i className="star-rating-icon fi-star-filled active"></i>
										<i className="star-rating-icon fi-star"></i>
										<i className="star-rating-icon fi-star"></i>
										<i className="star-rating-icon fi-star"></i>
										<i className="star-rating-icon fi-star"></i>
									</div>
								) : (
									<div></div>
								)}
							</span>
						</div>
					</div>
					<span className="text-muted fs-sm">{date.slice(0, 10)}</span>
				</div>
				<p>{message}</p>
				<div className="d-flex align-items-center">
					<button className="btn-like" type="button">
						<i className="fi-like"></i>
						<span>(3)</span>
					</button>
					<div className="border-end me-1">&nbsp;</div>
					<button className="btn-dislike" type="button">
						<i className="fi-dislike"></i>
						<span>(0)</span>
					</button>
				</div>
			</div>
		</>
	);
}

export default ReviewDisplay;
