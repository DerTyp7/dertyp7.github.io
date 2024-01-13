import "@styles/App.scss";
import Header from "@components/Header";
import About from "@components/About";
import ScrollToTop from "@components/ScrollToTop";

export default function App() {
	return (
		<div id="app">
			<Header />
			<About />
			<div id="skills">
				<h4>
					<a href="#skills">Skills</a>
				</h4>
				<h4>
					<a href="#projects">Projects</a>
				</h4>
			</div>
			<div style={{ textAlign: "center" }}>
				<h4>Website under construction 🚧👷</h4>
			</div>
			<ScrollToTop />
		</div>
	);
}
