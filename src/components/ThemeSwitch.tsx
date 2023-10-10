import "@styles/ThemeSwitch.scss";
import { useEffect, useRef } from "react";

export default function ThemeSwitch() {
	const svgRef = useRef<SVGSVGElement>(null);

	function switchTheme(theme: string) {
		const bodyElement = document.getElementsByTagName("body")[0];

		if (theme == "dark") {
			bodyElement.classList.add("theme-dark");
		} else {
			bodyElement.classList.remove("theme-dark");
			localStorage.setItem("theme", "light");
		}
	}

	function toggleTheme() {
		if (svgRef.current) {
			if (localStorage.getItem("theme") == "light") {
				svgRef.current.style.animationDirection = "normal";
				svgRef.current.style.animationName = "spinThemeSwitch";
			} else {
				svgRef.current.style.animationDirection = "reverse";
				svgRef.current.style.animationName = "spinThemeSwitch";
			}

			setTimeout(() => {
				if (localStorage.getItem("theme") == "light") {
					localStorage.setItem("theme", "dark");
					switchTheme("dark");
				} else {
					localStorage.setItem("theme", "light");
					switchTheme("light");
				}

				if (svgRef.current) {
					svgRef.current.style.animationName = "";
				}
			}, 150);
		}
	}

	useEffect(() => {
		if (localStorage.getItem("theme") == "dark") {
			switchTheme("dark");
		} else {
			switchTheme("light");
		}
	}, []);

	return (
		<div className="themeSwitch" onClick={toggleTheme}>
			<svg
				ref={svgRef}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z" />
			</svg>
		</div>
	);
}
