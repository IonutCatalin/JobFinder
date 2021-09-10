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

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomeBanner} />
					<Route path="/joblist" component={JobList} />
					<Route path="/specificjob" component={SpecificJob} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
