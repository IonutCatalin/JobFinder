import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import JobList from "./components/JobList";
import SpecificJob from "./components/SpecificJob";
import "./styles/theme.min.css";
//import "./styles/_global.scss";

function App() {
	return (
		<>
			<Header />
			<HomeBanner />
			<JobList />
			<SpecificJob />
			<Footer />
		</>
	);
}

export default App;
