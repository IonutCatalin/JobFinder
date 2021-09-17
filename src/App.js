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

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomeBanner} />
					<Route path="/joblist" component={JobList} />
					<Route path="/postresume" component={PostResume} />
					<Route path="/postresume2" component={PostResume2} />
					<Route path="/postresume3" component={PostResume3} />
					<Route path="/postresume4" component={PostResume4} />
					<Route path="/postresume5" component={PostResume5} />
					<Route path="/profilesettings" component={ProfileSettings} />
					<Route path="/myresumes" component={MyResumes} />
					<Route path="/specificjob/:_id" component={SpecificJob} />
					<Route path="/companydetails/:_id" component={CompanyDetails} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
