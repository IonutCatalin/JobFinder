import jwtDecode from "jwt-decode";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { AuthContext, useAuthContext } from "./Auth/AuthContext";

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "./../img/signin.svg";

const Login = () => {
	// const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
	// const [isFormSubmitting, setIsFormSubmitting] = useState(true);
	// const [incorrectPasswords, setIncorrectPasswords] = useState(false);
	// const [passwordValidation, setPasswordValidation] = useState(false);
	// const [areCredentialsCorrect, setCredentialsCorrect] = useState(true);

	// const [users, setUsers] = useState([]);

	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const { login, userProfile } = useAuthContext();
	// const location = useLocation();
	const history = useHistory();

	if (userProfile?.email) {
		return <Redirect to="/" />;
	}

	let isLogin = true;
	// if (location.pathname === "/auth/register") {
	// 	isLogin = false;
	// }

	function handleTyping(e) {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const { email, password } = credentials;

		// setIsFormSubmitting(true);
		// setCredentialsCorrect(true);
		// setPasswordValidation(false);
		// setIncorrectPasswords(false);

		//LOGIN branch
		if (!email || !password) {
			// return setIsFormSubmitting(false);
			return;
		}

		const { accessToken } = await fetch("http://localhost:3001/auth", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: email, password: password }),
		}).then((res) => {
			return res.json();
		});

		if (accessToken) {
			login(accessToken);
			// setCredentialsCorrect(true);
		}

		history.push("/");
	}

	return (
		<>
			<div className="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto">
				<div className="modal-content">
					<div className="modal-body px-0 py-2 py-sm-0">
						<Link to="/" style={{ textDecoration: "none" }}>
							<button
								className="btn-close position-absolute top-0 end-0 mt-3 me-3"
								type="button"
							></button>
						</Link>
						<div className="row mx-0 align-items-center">
							<div className="col-md-6 border-end-md p-4 p-sm-5">
								<h2 className="h3 mb-4 mb-sm-5">
									Hey there!
									<br />
									Welcome back.
								</h2>
								<img
									className="d-block mx-auto"
									src={logo}
									width="344"
									alt="Illustartion"
								/>
								<div className="mt-4 mt-sm-5">
									Don't have an account?{" "}
									<Link to="/register">
										<p>Sign up here</p>
									</Link>
								</div>
							</div>
							<div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
								<a
									className="btn btn-outline-info w-100 rounded-pill mb-3"
									href="#"
								>
									<i className="fi-google fs-lg me-1"></i>Sign in with Google
								</a>
								<a
									className="btn btn-outline-info w-100 rounded-pill mb-3"
									href="#"
								>
									<i className="fi-facebook fs-lg me-1"></i>Sign in with
									Facebook
								</a>
								<div className="d-flex align-items-center py-3 mb-3">
									<hr className="w-100" />
									<div className="px-3">Or</div>
									<hr className="w-100" />
								</div>
								<form
									id="loginform"
									onSubmit={handleSubmit}
									className="needs-validation"
								>
									<div className="mb-4">
										<label className="form-label mb-2" htmlFor="signin-email">
											Email address
										</label>
										<input
											className="form-control"
											type="email"
											id="signin-email"
											placeholder="Enter your email"
											name="email"
											required=""
											onChange={handleTyping}
										/>
									</div>
									<div className="mb-4">
										<div className="d-flex align-items-center justify-content-between mb-2">
											<label
												className="form-label mb-0"
												htmlFor="signin-password"
											>
												Password
											</label>
											<a className="fs-sm" href="#">
												Forgot password?
											</a>
										</div>
										<div className="password-toggle">
											<input
												className="form-control"
												type="password"
												name="password"
												id="signin-password"
												placeholder="Enter password"
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
									<button
										className="btn btn-primary btn-lg w-100 rounded-pill"
										type="submit"
									>
										Sign in
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
