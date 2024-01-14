import { useState, useEffect } from "react";
import "@styles/JumpToTop.scss"; // Assuming you have a CSS file for styling

export default function JumpToTop() {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when page is scrolled upto given distance
	const toggleVisibility = () => {
		if (window.scrollY > 50) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Set the top coordinate to 0
	// make scrolling smooth
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<div className="jumpToTop">
			{isVisible && (
				<div onClick={scrollToTop}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="feather feather-arrow-up-circle"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<polyline points="16 12 12 8 8 12"></polyline>
						<line x1="12" y1="16" x2="12" y2="8"></line>
					</svg>
				</div>
			)}
		</div>
	);
}
