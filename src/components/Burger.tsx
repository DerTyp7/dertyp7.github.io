import { useState } from "react";
import "@styles/Burger.scss";

export default function Burger({ onClick }: { onClick: () => void }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={`burger ${isOpen ? "open" : ""}`}
			onClick={() => {
				toggleMenu();
				onClick();
			}}
		>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
