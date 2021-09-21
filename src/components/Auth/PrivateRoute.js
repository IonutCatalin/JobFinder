import { useContext } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export function PrivateRoute({ children, component, ...rest }) {
	const { userProfile } = useContext(AuthContext);
	const location = useLocation();

	if (!userProfile?.email) {
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
