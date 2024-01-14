import { useEffect, useRef } from "react";
import "@styles/App.scss";
import Header from "@components/Header";
import About from "@components/About";
import ScrollToTop from "@components/ScrollToTop";
import Skills from "@components/Skills";
import SectionLine from "@components/SectionLine";

export default function App() {
	const aboutRef = useRef(null);
	const skillsRef = useRef(null);
	const projectsRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.id === "about") {
							window.location.hash = "";
						} else {
							window.location.hash = entry.target.id;
						}
					}
				});
			},
			{ threshold: 0.7 }
		);

		if (aboutRef.current) {
			observer.observe(aboutRef.current);
		}

		if (skillsRef.current) {
			observer.observe(skillsRef.current);
		}

		if (projectsRef.current) {
			observer.observe(projectsRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div id="app">
			<Header />
			<div id="about" className="section" ref={aboutRef}>
				<About />
			</div>

			<div id="skills" className="section" ref={skillsRef}>
				<SectionLine />
				<Skills />
			</div>

			<div
				id="projects"
				className="section"
				ref={projectsRef}
				style={{ textAlign: "center" }}
			>
				<SectionLine />

				<h4>Projects</h4>
			</div>

			<h4>Website under construction 🚧👷</h4>
			<ScrollToTop />
		</div>
	);
}
