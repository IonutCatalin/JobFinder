import React from "react";
import { useState, useRef } from "react";
import axios from "axios";

const ReviewModal = (props) => {
	const setShow = props.setShow;
	const getReviewList = props.getReviewList;
	const jobDetails = props.jobDetails;

	const [reviewInfos, setReviewInfos] = useState({
		name: "",
		email: "",
		rating: "5 stars",
		message: "",
		jobId: jobDetails._id,
	});

	const handleTyping = (e) => {
		const newData = { ...reviewInfos };
		newData[e.target.name] = e.target.value;
		setReviewInfos(newData);

		console.log(newData);
	};

	async function handleSubmit(e) {
		console.log("submit form pressed");
		const { name, email, rating, message } = reviewInfos;

		e.preventDefault();
		if (!name || !email || !rating || !message) {
			return;
		}

		try {
			await axios.post("http://localhost:3001/reviews", {
				name: reviewInfos.name,
				email: reviewInfos.email,
				rating: reviewInfos.rating,
				message: reviewInfos.message,
				jobId: reviewInfos.jobId,
			});
		} catch (err) {
			console.log(err);
		}

		getReviewList();

		reviewInfos.name = "";
		reviewInfos.email = "";
		reviewInfos.message = "";
	}

	return (
		<>
			<div className="modal-content">
				<div className="modal-header d-block position-relative border-0 pb-0 px-sm-5 px-4">
					<h3 className="modal-title mt-4 text-center">Leave a review</h3>
					<button
						className="btn-close position-absolute top-0 end-0 mt-3 me-3"
						type="button"
						data-bs-dismiss="modal"
						aria-label="Close"
						onClick={() => setShow(false)}
					></button>
				</div>
				<div className="modal-body px-sm-5 px-4">
					<form className="needs-validation" onSubmit={(e) => handleSubmit(e)}>
						<div className="mb-3">
							<label className="form-label" htmlFor="review-name">
								Name <span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								type="text"
								id="review-name"
								name="name"
								placeholder="Your name"
								required=""
								onChange={(e) => handleTyping(e)}
								value={reviewInfos.name}
							/>
							<div className="invalid-feedback">
								Please let us know your name.
							</div>
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="review-email">
								Email <span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								type="email"
								name="email"
								id="review-email"
								placeholder="Your email address"
								required=""
								onChange={(e) => handleTyping(e)}
								value={reviewInfos.email}
							/>
							<div className="invalid-feedback">
								Please provide a valid email address.
							</div>
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="review-rating">
								Rating <span className="text-danger">*</span>
							</label>
							<select
								onChange={(e) => {
									handleTyping(e);
								}}
								className="form-select"
								id="review-rating"
								name="rating"
								required=""
								value={reviewInfos.rating}
							>
								<option value="5 stars">5 stars</option>
								<option value="4 stars">4 stars</option>
								<option value="3 stars">3 stars</option>
								<option value="2 stars">2 stars</option>
								<option value="1 star">1 star</option>
							</select>
							<div className="invalid-feedback">Please rate the property.</div>
						</div>
						<div className="mb-4">
							<label className="form-label" htmlFor="review-text">
								Review <span className="text-danger">*</span>
							</label>
							<textarea
								className="form-control"
								id="review-text"
								rows="5"
								name="message"
								placeholder="Your review message"
								required=""
								onChange={(e) => handleTyping(e)}
								value={reviewInfos.message}
							></textarea>
							<div className="invalid-feedback">Please write your review.</div>
						</div>
						<button
							className="btn btn-primary btn-lg d-block w-100 rounded-pill mb-4"
							type="submit"
						>
							Submit a review
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default ReviewModal;
