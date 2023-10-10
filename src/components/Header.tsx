import "@styles/Header.scss";
import ThemeSwitch from "@components/ThemeSwitch";

export default function Header() {
	return (
		<header className="header">
			<div className="logo">
				<h1>Meister</h1>
			</div>
			<div className="links">
				<a href="">Link1</a>
				<a href="">Link2</a>
				<a href="">Link3</a>
				<a href="">Link4</a>
			</div>
			<div className="control">
				<ThemeSwitch />
				<div>Language</div>
			</div>
		</header>
	);
}
