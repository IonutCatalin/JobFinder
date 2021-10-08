import "./App.css";
import HomeBanner from "./components/HomeBanner";
import JobList from "./components/JobList";
import Login from "./components/Login";
import Register from "./components/Register";
import SpecificJob from "./components/SpecificJob";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
import { PrivateRoute } from "./components/Auth/PrivateRoute";
import { GlobalProvider } from "./components/context/GlobalState";
//from youtube
import { useContext } from "react";
import { AuthContext } from "./components/authContext/AuthContext";

function App() {
	const { user } = useContext(AuthContext);
	return (
		<>
			<GlobalProvider>
				<BrowserRouter>
					<Switch>
						<Route exact path="/">
							{user ? <HomeBanner /> : <Redirect to="/register" />}
						</Route>
						<Route path="/register">
							{!user ? <Register /> : <Redirect to="/" />}
						</Route>
						<Route path="/login">
							{!user ? <Login /> : <Redirect to="/" />}
						</Route>
						{user && (
							<>
								<Route path="/joblist">
									<JobList />
								</Route>
								<Route path="/postresume">
									<PostResume />
								</Route>
								<Route path="/postresume2">
									<PostResume2 />
								</Route>
								<Route path="/postresume3">
									<PostResume3 />
								</Route>
								<Route path="/postresume4">
									<PostResume4 />
								</Route>
								<Route path="/postresume5">
									<PostResume5 />
								</Route>
								<Route path="/profilesettings">
									<ProfileSettings />
								</Route>
								<Route path="/myresumes">
									<MyResumes />
								</Route>
								<Route path="/savedjobs">
									<SavedJobs />
								</Route>
								<Route path="/notifications">
									<Notifications />
								</Route>
								<Route path="/loggedin">
									<LoggedIn />
								</Route>
								<Route path="/specificjob/:_id">
									<SpecificJob />
								</Route>
								<Route path="/companydetails/:_id">
									<CompanyDetails />
								</Route>
							</>
						)}
						{/* <Route path="/login" component={Login} />
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
					/> */}
					</Switch>
				</BrowserRouter>
			</GlobalProvider>
		</>
	);
}

export default App;
