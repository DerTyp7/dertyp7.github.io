import { useEffect, useRef } from "react";
import "@styles/App.scss";
import Header from "@components/Header";
import About from "@sections/About";
import SectionScroll from "@components/SectionScroll";
import Skills from "@sections/Skills";
import Projects from "@sections/Projects";
import SectionLine from "@components/SectionLine";
import Footer from "@components/Footer";
import JumpToTop from "@components/JumpToTop";

function isMobileDevice() {
	return (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		) || window.innerWidth < 768
	);
}

export default function App() {
	const aboutRef = useRef(null);
	const skillsRef = useRef(null);
	const projectsRef = useRef(null);
	const sections = ["", "skills", "projects"];
	const prevHash = useRef(window.location.hash);

	useEffect(() => {
		if (isMobileDevice()) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// console.log("====================================");
						// console.log(`Previous Hash: ${prevHash.current}`);
						// console.log(`Current Hash: ${window.location.hash}`);
						// console.log(`Target ID: ${entry.target.id}`);

						const difference = Math.abs(
							sections.indexOf(prevHash.current.replace("#", "")) -
								sections.indexOf(window.location.hash.replace("#", ""))
						);
						// console.log(`Difference: ${difference}`);
						if (difference > 1) {
							prevHash.current = entry.target.id;
							return;
						}
						prevHash.current = entry.target.id;
						window.location.hash = entry.target.id;
						entry.target.classList.add("active");

						Array.from(entry.target.children).forEach((child) => {
							child.classList.add("active");
						});
					} else {
						entry.target.classList.remove("active");

						Array.from(entry.target.children).forEach((child) => {
							child.classList.remove("active");
						});
					}
				});
			},
			{ threshold: 0.2 }
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
			<div className="section" ref={aboutRef}>
				<About />
			</div>

			<div id="skills" className="section" ref={skillsRef}>
				<SectionLine />
				<Skills />
			</div>

			<div id="projects" className="section" ref={projectsRef}>
				<SectionLine />
				<Projects />
			</div>

			<Footer />

			{isMobileDevice() ? <JumpToTop /> : <SectionScroll sections={sections} />}
		</div>
	);
}
