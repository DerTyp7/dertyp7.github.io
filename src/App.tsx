import "@styles/App.scss";
import Header from "@components/Header";
import About from "@components/About";
import ScrollToTop from "@components/ScrollToTop";

export default function App() {
	return (
		<div id="app">
			<div style={{ textAlign: "center" }}>
				<h4>Website under construction 🚧👷</h4>
			</div>
			<Header />
			<About />
			<div id="skills">
				<h2>
					<a href="#skills">Skills</a>
				</h2>
				{/* Add your skills content here */}
			</div>
			<ScrollToTop />
		</div>
	);
}
