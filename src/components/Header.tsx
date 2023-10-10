import "@styles/Header.scss";
import ThemeSwitch from "@components/ThemeSwitch";

export default function Header() {
	return (
		<header className="header">
			{/* Mobile Top Row Header */}
			<div className="header-mobile">
				<div className="logo">
					<h1>Meister</h1>
				</div>
				<div className="control">
					<ThemeSwitch />
					<div>Language</div>
				</div>
			</div>
			{/* END: Mobile Top Row Header */}

			<div className="logo">
				<h1>Meister</h1>
			</div>

			<div className="links">
				<a href="">About</a>
				<a href="">Skills</a>
				<a href="">Projects</a>
				<a href="">Contact</a>
			</div>
			<div className="control">
				<ThemeSwitch />
				<div>Language</div>
			</div>
		</header>
	);
}
