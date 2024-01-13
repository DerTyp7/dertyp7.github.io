import "@styles/Header.scss";
import { useState, useEffect } from "react";
import Burger from "@components/Burger";
import Sidebar from "@components/Sidebar";

export default function Header() {
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => setIsOpen(!isOpen);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth <= 768);
		};

		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return (
		<div className="header">
			<a href="/" className="logo">
				<span>&#123;</span>J<span>&#125;</span>
			</a>

			{isSmallScreen ? (
				<>
					<Burger onClick={toggleSidebar} />
					<Sidebar isOpen={isOpen} toggle={toggleSidebar} />
				</>
			) : (
				<nav>
					<a className="current" href="#">
						About
					</a>
					<a href="#skills">Skills</a>
					<a href="#projects">Projects</a>
				</nav>
			)}
		</div>
	);
}
