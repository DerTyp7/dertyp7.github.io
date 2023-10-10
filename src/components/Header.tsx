import "@styles/Header.scss";
import ThemeSwitch from "@components/ThemeSwitch";

function Logo() {
	return (
		<div className="logo">
			<p>Janis</p>
			<p>Meister</p>
		</div>
	);
}

function Control() {
	return (
		<div className="control">
			<ThemeSwitch />
			<div>Language</div>
		</div>
	);
}

export default function Header() {
	return (
		<header className="header">
			{/* Mobile Top Row Header */}
			<div className="header-mobile">
				<Logo />
				<Control />
			</div>
			{/* END: Mobile Top Row Header */}

			<Logo />

			<div className="links">
				<a href="">About</a>
				<a href="">Skills</a>
				<a href="">Projects</a>
				<a href="">Contact</a>
			</div>
			<Control />
		</header>
	);
}
