import "@styles/Burger.scss";

export default function Burger({
	isOpen,
	onClick,
}: {
	isOpen: boolean;
	onClick: () => void;
}) {
	return (
		<div
			className={`burger ${isOpen ? "open" : ""}`}
			onClick={() => {
				onClick();
			}}
		>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
