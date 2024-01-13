import { useState, useEffect } from "react";
import "@styles/ScrollToTop.scss";

export default function ScrollToTop() {
	const [isScrolledUp, setIsScrolledUp] = useState(false);

	const toggleVisibilityAndDirection = () => {
		if (window.scrollY < 100) {
			setIsScrolledUp(false);
		} else {
			setIsScrolledUp(window.scrollY === 0 ? false : true);
		}
	};

	const scrollTo = () => {
		if (isScrolledUp) {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		} else {
			const skillsElement = document.getElementById("skills");
			if (skillsElement) {
				skillsElement.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibilityAndDirection);
		return () =>
			window.removeEventListener("scroll", toggleVisibilityAndDirection);
	}, []);

	return (
		<div className="scrollToTop">
			<div onClick={scrollTo}>
				<svg
					className={`arrow ${isScrolledUp ? "up" : "down"}`}
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<line x1="12" y1="19" x2="12" y2="5"></line>
					<polyline points="5 12 12 5 19 12"></polyline>
				</svg>
			</div>
		</div>
	);
}
