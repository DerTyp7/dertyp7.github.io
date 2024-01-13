import "@styles/App.scss";
import Header from "@components/Header";
import About from "@components/About";

export default function App() {
	return (
		<div id="app">
			<Header />
			<About />
			<div style={{ textAlign: "center" }}>
				<h4>Website under construction 🚧👷</h4>
			</div>
		</div>
	);
}
