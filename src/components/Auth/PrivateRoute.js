import { useContext } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export function PrivateRoute({ children, component, ...rest }) {
	const location = useLocation();
	const user = JSON.parse(localStorage.getItem("user"));
	if (!user) {
		return (
			<Redirect
				to={{
					pathname: "/login",
					state: { from: location },
				}}
			/>
		);
	}

	return (
		<Route {...rest} component={component}>
			{children}
		</Route>
	);
}
