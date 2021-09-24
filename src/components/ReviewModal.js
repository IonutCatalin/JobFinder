import React from "react";

const ReviewModal = (props) => {
	const setShow = props.setShow;
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
					<form className="needs-validation" novalidate="">
						<div className="mb-3">
							<label className="form-label" for="review-name">
								Name <span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								type="text"
								id="review-name"
								placeholder="Your name"
								required=""
							/>
							<div className="invalid-feedback">
								Please let us know your name.
							</div>
						</div>
						<div className="mb-3">
							<label className="form-label" for="review-email">
								Email <span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								type="email"
								id="review-email"
								placeholder="Your email address"
								required=""
							/>
							<div className="invalid-feedback">
								Please provide a valid email address.
							</div>
						</div>
						<div className="mb-3">
							<label className="form-label" for="review-rating">
								Rating <span className="text-danger">*</span>
							</label>
							<select className="form-select" id="review-rating" required="">
								<option value="" selected="" disabled="">
									Choose rating
								</option>
								<option value="5 stars">5 stars</option>
								<option value="4 stars">4 stars</option>
								<option value="3 stars">3 stars</option>
								<option value="2 stars">2 stars</option>
								<option value="1 star">1 star</option>
							</select>
							<div className="invalid-feedback">Please rate the property.</div>
						</div>
						<div className="mb-4">
							<label className="form-label" for="review-text">
								Review <span className="text-danger">*</span>
							</label>
							<textarea
								className="form-control"
								id="review-text"
								rows="5"
								placeholder="Your review message"
								required=""
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
