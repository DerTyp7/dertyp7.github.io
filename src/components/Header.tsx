import "@styles/Header.scss";
export default function Header() {
	return (
		<header className="header">
			<div className="logo">brandname</div>
			<div className="links">
				<a href="">Link1</a>
				<a href="">Link2</a>
				<a href="">Link3</a>
				<a href="">Link4</a>
			</div>
			<div className="control">
				<div>Theme</div>
				<div>Language</div>
			</div>
		</header>
	);
}
