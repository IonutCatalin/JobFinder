import "./App.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import JobList from "./components/JobList";
import Login from "./components/Login";
import Register from "./components/Register";
import SpecificJob from "./components/SpecificJob";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/global.scss";
import "./styles/styles.css";
import CompanyDetails from "./components/CompanyDetails";
import PostResume from "./components/PostResume";
import PostResume2 from "./components/PostResume2";
import PostResume3 from "./components/PostResume3";
import PostResume4 from "./components/PostResume4";
import PostResume5 from "./components/PostResume5";
import ProfileSettings from "./components/UserProfile/ProfileSettings";
import MyResumes from "./components/UserProfile/MyResumes";
import SavedJobs from "./components/UserProfile/SavedJobs";
import Notifications from "./components/UserProfile/Notifications";
import LoggedIn from "./components/UserProfile/LoggedIn";
import { AuthContextProvider } from "./components/Auth/AuthContext";
import { Auth } from "./components/Auth/Auth";
import { PrivateRoute } from "./components/Auth/PrivateRoute";

function App() {
	return (
		<>
			<BrowserRouter>
				<AuthContextProvider>
					<Switch>
						{/* <Route path="/auth/login" component={Auth} />
					<Route path="/auth/register" component={Auth} /> */}
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<PrivateRoute exact path="/" component={HomeBanner} />
						<PrivateRoute path="/joblist" component={JobList} />
						<PrivateRoute path="/postresume" component={PostResume} />
						<PrivateRoute path="/postresume2" component={PostResume2} />
						<PrivateRoute path="/postresume3" component={PostResume3} />
						<PrivateRoute path="/postresume4" component={PostResume4} />
						<PrivateRoute path="/postresume5" component={PostResume5} />
						<PrivateRoute path="/profilesettings" component={ProfileSettings} />
						<PrivateRoute path="/myresumes" component={MyResumes} />
						<PrivateRoute path="/savedjobs" component={SavedJobs} />
						<PrivateRoute path="/notifications" component={Notifications} />
						<PrivateRoute path="/loggedin" component={LoggedIn} />
						<PrivateRoute path="/specificjob/:_id" component={SpecificJob} />
						<PrivateRoute
							path="/companydetails/:_id"
							component={CompanyDetails}
						/>
					</Switch>
				</AuthContextProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
