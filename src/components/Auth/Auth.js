import jwtDecode from "jwt-decode";
import { useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

export function Auth() {
	const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
	const [isFormSubmitting, setIsFormSubmitting] = useState(true);
	const [incorrectPasswords, setIncorrectPasswords] = useState(false);
	const [passwordValidation, setPasswordValidation] = useState(false);
	const [areCredentialsCorrect, setCredentialsCorrect] = useState(true);

	const [users, setUsers] = useState([]);

	const [credentials, setCredentials] = useState({
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { login, userProfile } = useAuthContext();
	const location = useLocation();
	const history = useHistory();

	if (userProfile?.email) {
		return <Redirect to="/" />;
	}

	let isLogin = true;
	if (location.pathname === "/auth/register") {
		isLogin = false;
	}

	function handleTyping(e) {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const { fullName, email, password, confirmPassword } = credentials;

		const urlApi =
			"http://localhost:3001" + ((isLogin && "/login") || "/register");

		setIsFormSubmitting(true);
		setCredentialsCorrect(true);
		setPasswordValidation(false);
		setIncorrectPasswords(false);

		if (isLogin === true) {
			//LOGIN branch
			if (!email || !password) {
				return setIsFormSubmitting(false);
			}

			const { accessToken } = await fetch(urlApi, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: email, password: password }),
			}).then((res) => {
				return res.json();
			});

			if (accessToken) {
				login(accessToken, {
					email: jwtDecode(accessToken).email,
				});
				setCredentialsCorrect(true);
			} else {
				setCredentialsCorrect(false);
				return;
			}
		} else {
			//REGISTER branch
			if (!fullName || !email || !password || !confirmPassword) {
				return setIsFormSubmitting(false);
			}
			if (!passwordValidator.test(password)) {
				return setPasswordValidation(true);
			}
			if (password !== confirmPassword) {
				return setIncorrectPasswords(true);
			}

			const result = await fetch(urlApi, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: credentials.email,
					password: credentials.password,
					fullName: credentials.fullName,
				}),
			}).then((res) => {
				if (res.ok) {
					return res.json();
				}
				return res.text();
			});

			const newUsers = [...users, credentials];

			setUsers(newUsers);

			let deleteCredentials = document.getElementsByClassName("form")[0];
			deleteCredentials.reset();

			setIsFormSubmitting(true);
			setPasswordValidation(false);
			setIncorrectPasswords(false);
		}
		history.push("/");
	}

	return isLogin === true ? (
		//Display LOGIN component
		<div className="container">
			<div className="register-header-phone-version">
				<div className="navbar-content">
					<div className="back-button">
						<i className="fas fa-chevron-left"></i>
						<span className="back">Back</span>
					</div>
					<div className="burger-menu">
						<i className="fas fa-bars"></i>
					</div>
				</div>
			</div>
			<div className="logo-form-object">
				<div className="logo-margins">{/* <Logo /> */}</div>
				<div className="form-inputs">
					<form id="loginForm" onSubmit={handleSubmit}>
						{/* <InputField
							className="form-control"
							inputClassName="on-focus-form-control"
							label="Email"
							name="email"
							type="email"
							placeholder="Enter Email"
							onChange={handleTyping}
						/>

						<InputField
							className="form-control"
							inputClassName="on-focus-form-control"
							label="Password"
							name="password"
							type="password"
							placeholder="Enter Password"
							onChange={handleTyping}
						/> */}

						{isFormSubmitting === true ? (
							<p></p>
						) : (
							<p className="input-error-messages">
								Please fill all required fields.
							</p>
						)}
						{areCredentialsCorrect === true ? (
							<p></p>
						) : (
							<p className="input-error-messages">
								Entered credentials are incorrect.
							</p>
						)}

						<button className="submit-button" type="submit">
							LOG IN
						</button>
					</form>
				</div>
			</div>
		</div>
	) : (
		//Display REGISTER component
		<div className="Rectangle">
			<div className="logo">{/* <Logo /> */}</div>
			<div className="logo-bottom-line"></div>
			<div className="register-text">Register</div>
			<div className="register-header-phone-version">
				<div className="navbar-content">
					<div className="back-button">
						<i className="fas fa-chevron-left"></i>
						<span className="back-button-register">Back</span>
					</div>
					<div className="burger-menu">
						<i className="fas fa-bars"></i>
					</div>
				</div>

				<div className="register-content">
					<div className="vertical-line">
						<div className="register-text-phone-version">Register</div>
						<div className="description-text-phone-version">
							Fill in the blanks with your informations.
						</div>
					</div>
				</div>
			</div>
			<div className="form-inputs">
				<form className="form" id="form" onSubmit={handleSubmit}>
					{/* <InputField
						className="form-control"
						inputClassName="on-focus-form-control"
						label="First Name"
						name="fullName"
						type="text"
						placeholder="Enter first name"
						onChange={handleTyping}
					/>

					<InputField
						className="form-control"
						inputClassName="on-focus-form-control"
						label="Email Adress"
						name="email"
						type="email"
						placeholder="Enter Email"
						onChange={handleTyping}
					/>

					<InputField
						className="form-control"
						inputClassName="on-focus-form-control"
						label="Password"
						name="password"
						type="password"
						placeholder="Enter Password"
						onChange={handleTyping}
					/>

					<InputField
						className="form-control"
						inputClassName="on-focus-form-control"
						label="Confirm Password"
						name="confirmPassword"
						type="password"
						placeholder="Reenter Password"
						onChange={handleTyping}
					/> */}

					{isFormSubmitting === true ? (
						<p></p>
					) : (
						<p className="input-error-messages">
							Please fill all required fields.
						</p>
					)}

					{passwordValidation === false ? (
						<p></p>
					) : (
						<p className="input-error-messages">
							{" "}
							Password must contain at least 8 characters,<br></br> 1 number, 1
							upper and 1 lowercase.
						</p>
					)}

					{incorrectPasswords === false ? (
						<p></p>
					) : (
						<p className="input-error-messages">Passwords do not match.</p>
					)}

					<button className="join-button" type="submit" id="myBtn">
						JOIN NOW
					</button>
				</form>
			</div>
		</div>
	);
}
