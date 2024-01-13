import "@styles/Header.scss";

export default function Header() {
	return (
		<div className="header">
			<a href="/" className="logo">
				<span>&#123;</span>J<span>&#125;</span>
			</a>

			<nav>
				<a className="current" href="#">
					About
				</a>
				<a href="#skills">Skills</a>
				<a href="#projects">Projects</a>
			</nav>
		</div>
	);
}
