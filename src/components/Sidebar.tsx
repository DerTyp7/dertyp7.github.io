import "@styles/Sidebar.scss";

export default function Sidebar({
	isOpen,
	toggle,
}: {
	isOpen: boolean;
	toggle: () => void;
}) {
	return (
		<div className={`sidebar ${isOpen ? "open" : ""}`}>
			<a href="#" onClick={toggle}>
				About
			</a>
			<a href="#skills" onClick={toggle}>
				Skills
			</a>
			<a href="#projects" onClick={toggle}>
				Projects
			</a>
		</div>
	);
}
