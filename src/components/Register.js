import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "./authContext/AuthContext";
import { login } from "./authContext/apiCalls";

const Register = () => {
	const [users, setUsers] = useState([]);

	const user = JSON.parse(localStorage.getItem("user"));

	const { dispatch } = useContext(AuthContext);
	const [credentials, setCredentials] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	//from youtube
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	const history = useHistory();

	// from youtube

	const emailRef = useRef();
	const passwordRef = useRef();
	const usernameRef = useRef();

	// from youtube

	if (user) {
		return <Redirect to="/" />;
	}

	function handleTyping(e) {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const { username, email, password, confirmPassword } = credentials;

		if (!username || !email || !password || !confirmPassword) {
			return;
		}

		if (password !== confirmPassword) {
			return;
		}

		//from youtube
		setEmail(emailRef.current.value);
		setPassword(passwordRef.current.value);
		setUsername(usernameRef.current.value);

		try {
			await axios.post("http://localhost:3001/auth/register", {
				username,
				email,
				password,
			});
			history.push("/");
		} catch (err) {
			console.log(err);
		}
		// const result = await fetch("http://localhost:3001/users", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({
		// 		email: credentials.email,
		// 		password: credentials.password,
		// 		username: credentials.username,
		// 	}),
		// });

		// const data = await result.json();

		// localStorage.setItem("token", data.token);
		// localStorage.setItem("user", JSON.stringify(data.user));

		// const newUsers = [...users, credentials];

		// setUsers(newUsers);
		login({ email, password }, dispatch);

		//history.push("/");
	}

	return (
		<>
			<div className="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto">
				<div className="modal-content">
					<div className="modal-body p-sm-5">
						<Link to="/" style={{ textDecoration: "none" }}>
							<button
								className="btn-close position-absolute top-0 end-0 mt-3 me-3"
								type="button"
							></button>
						</Link>
						<ul
							className="nav nav-pills flex-column flex-sm-row border-bottom pb-4 mt-sm-n2 my-4"
							role="tablist"
						>
							<li className="nav-item me-sm-3 mb-sm-0">
								<a
									className="nav-link active"
									href="#job-seeker"
									data-bs-toggle="tab"
									role="tab"
									aria-controls="job-seeker"
									aria-selected="true"
								>
									<i className="fi-user me-2"></i>I am job seeker
								</a>
							</li>
							<li className="nav-item mb-sm-0">
								<a
									className="nav-link"
									href="#employer"
									data-bs-toggle="tab"
									role="tab"
									aria-controls="employer"
									aria-selected="false"
								>
									<i className="fi-briefcase me-2"></i>I am employer
								</a>
							</li>
						</ul>
						<div className="tab-content">
							<div
								className="tab-pane fade active show"
								id="job-seeker"
								role="tabpanel"
							>
								<h3>Register to add a resume</h3>
								<p className="pb-3">
									Get access to all the functions of the site that will help you
									find a great job.
								</p>
								<div className="row gx-2 gx-md-4">
									<div className="col-sm-6 mb-3">
										<a
											className="btn btn-outline-info w-100 rounded-pill"
											href="#"
										>
											<i className="fi-google fs-lg me-1"></i>Sign in with
											Google
										</a>
									</div>
									<div className="col-sm-6 mb-3">
										<a
											className="btn btn-outline-info w-100 rounded-pill"
											href="#"
										>
											<i className="fi-facebook fs-lg me-1"></i>Sign in with
											Facebook
										</a>
									</div>
								</div>
								<div className="d-flex align-items-center py-2 mb-2">
									<hr className="w-100" />
									<div className="px-3">Or</div>
									<hr className="w-100" />
								</div>
								<form
									className="needs-validation"
									id="registerform"
									onSubmit={handleSubmit}
								>
									<div className="row gx-2 gx-md-4">
										<div className="col-sm-6 mb-4">
											<label className="form-label" htmlFor="js-fn">
												Full name
											</label>
											<input
												className="form-control"
												type="text"
												name="username"
												id="js-fn"
												placeholder="Enter your full name"
												required=""
												onChange={handleTyping}
												ref={usernameRef}
											/>
										</div>
										<div className="col-sm-6 mb-4">
											<label className="form-label" htmlFor="js-email">
												Emaill address
											</label>
											<input
												className="form-control"
												name="email"
												type="email"
												id="js-email"
												placeholder="Enter your email"
												required=""
												onChange={handleTyping}
												ref={emailRef}
											/>
										</div>
										<div className="col-sm-6 mb-4">
											<label className="form-label" htmlFor="js-password">
												Password{" "}
												<span className="text-muted">(min. 8 char)</span>
											</label>
											<div className="password-toggle">
												<input
													className="form-control"
													name="password"
													type="password"
													id="js-password"
													minLength="8"
													required=""
													onChange={handleTyping}
													ref={passwordRef}
												/>
												<label
													className="password-toggle-btn"
													aria-label="Show/hide password"
												>
													<input
														className="password-toggle-check"
														type="checkbox"
													/>
													<span className="password-toggle-indicator"></span>
												</label>
											</div>
										</div>
										<div className="col-sm-6 mb-4">
											<label
												className="form-label"
												htmlFor="js-password-confirm"
											>
												Confirm password
											</label>
											<div className="password-toggle">
												<input
													className="form-control"
													type="password"
													name="confirmPassword"
													id="js-password-confirm"
													minLength="8"
													required=""
													onChange={handleTyping}
												/>
												<label
													className="password-toggle-btn"
													aria-label="Show/hide password"
												>
													<input
														className="password-toggle-check"
														type="checkbox"
													/>
													<span className="password-toggle-indicator"></span>
												</label>
											</div>
										</div>
									</div>
									<div className="form-check mb-4">
										<input
											className="form-check-input"
											type="checkbox"
											id="agree-to-terms"
											required=""
										/>
										<label
											className="form-check-label"
											htmlFor="agree-to-terms"
										>
											By joining, I agree to the <a href="#">Terms of use</a>{" "}
											and <a href="#">Privacy policy</a>
										</label>
									</div>
									<button
										className="btn btn-primary btn-lg w-100 rounded-pill"
										type="submit"
									>
										Sign up
									</button>
								</form>
							</div>
							<div className="tab-pane fade" id="employer" role="tabpanel">
								<h3>Register to post a vacancy</h3>
								<p className="pb-3">
									Get access to all special services for employers on Finder.
								</p>
								<form className="needs-validation">
									<div className="row gx-2 gx-md-4">
										<div className="col-sm-6 mb-4">
											<label className="form-label" htmlFor="em-fn">
												Full name
											</label>
											<input
												className="form-control"
												type="text"
												id="em-fn"
												placeholder="Enter your full name"
												required=""
											/>
										</div>
										<div className="col-sm-6 mb-4">
											<label className="form-label" htmlFor="em-email">
												Emaill{" "}
												<span className="text-muted">(better corporate)</span>
											</label>
											<input
												className="form-control"
												type="email"
												id="em-email"
												placeholder="Enter email"
												required=""
											/>
										</div>
										<div className="col-sm-6 mb-4">
											<label className="form-label" htmlFor="em-company">
												Company name
											</label>
											<input
												className="form-control"
												type="text"
												id="em-company"
												placeholder="Enter company name"
												required=""
											/>
										</div>
										<div className="col-sm-6 mb-4">
											<label className="form-label" htmlFor="em-location">
												Main office location
											</label>
											<input
												className="form-control"
												type="text"
												id="em-location"
												placeholder="Country, City, Address"
												required=""
											/>
										</div>
										<div className="col-sm-6 mb-4">
											<label className="form-label" htmlFor="em-password">
												Password{" "}
												<span className="text-muted">(min. 8 char)</span>
											</label>
											<div className="password-toggle">
												<input
													className="form-control"
													type="password"
													id="em-password"
													minLength="8"
													required=""
												/>
												<label
													className="password-toggle-btn"
													aria-label="Show/hide password"
												>
													<input
														className="password-toggle-check"
														type="checkbox"
													/>
													<span className="password-toggle-indicator"></span>
												</label>
											</div>
										</div>
										<div className="col-sm-6 mb-4">
											<label
												className="form-label"
												htmlFor="em-password-confirm"
											>
												Confirm password
											</label>
											<div className="password-toggle">
												<input
													className="form-control"
													type="password"
													id="em-password-confirm"
													minLength="8"
													required=""
												/>
												<label
													className="password-toggle-btn"
													aria-label="Show/hide password"
												>
													<input
														className="password-toggle-check"
														type="checkbox"
													/>
													<span className="password-toggle-indicator"></span>
												</label>
											</div>
										</div>
									</div>
									<div className="form-check mb-4">
										<input
											className="form-check-input"
											type="checkbox"
											id="agree-to-terms2"
											required=""
										/>
										<label
											className="form-check-label"
											htmlFor="agree-to-terms2"
										>
											By joining, I agree to the <a href="#">Terms of use</a>{" "}
											and <a href="#">Privacy policy</a>
										</label>
									</div>
									<button
										className="btn btn-primary btn-lg w-100 rounded-pill"
										type="submit"
									>
										Sign up
									</button>
								</form>
							</div>
						</div>
						<div className="pt-4 pb-3 pb-sm-0 mt-2">
							Already have an account?{" "}
							<Link to="/login">
								<p>Sign in</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
