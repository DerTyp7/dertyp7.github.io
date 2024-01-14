import { useState, useEffect } from "react";
import "@styles/SectionScroll.scss";

export default function SectionScroll({ sections }: { sections: string[] }) {
	const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

	useEffect(() => {
		const hash = window.location.hash.substring(1);
		const index = sections.indexOf(hash);
		if (index !== -1) {
			setCurrentSectionIndex(index);
		}
	}, []);

	window.onhashchange = () => {
		const hash = window.location.hash.substring(1);
		const index = sections.indexOf(hash);
		if (index !== -1) {
			setCurrentSectionIndex(index);
		}
	};

	function scrollTo(direction: number) {
		let newIndex = currentSectionIndex + direction;
		if (newIndex < 0) newIndex = sections.length - 1;
		if (newIndex >= sections.length) newIndex = 0;

		const sectionElement = document.getElementById(sections[newIndex]);
		if (sectionElement) {
			sectionElement.scrollIntoView({ behavior: "smooth" });
		}

		setCurrentSectionIndex(newIndex);
	}

	return (
		<div className="sectionScroll">
			{currentSectionIndex > 0 && (
				<div onClick={() => scrollTo(-1)}>
					<svg
						className="arrow up"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
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
			)}
			{currentSectionIndex < sections.length - 1 && (
				<div onClick={() => scrollTo(1)}>
					<svg
						className="arrow down"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<line x1="12" y1="5" x2="12" y2="19"></line>
						<polyline points="19 12 12 19 5 12"></polyline>
					</svg>
				</div>
			)}
		</div>
	);
}
