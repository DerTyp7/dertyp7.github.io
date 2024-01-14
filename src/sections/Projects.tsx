import "@styles/Projects.scss";
import Badge from "@components/Badge";
import { BadgeType } from "@components/BadgeType";

function Project({
	name,
	description,
	image,
	link,
}: {
	name: string;
	description: string;
	image?: string;
	link: string;
}) {
	const imageUrl =
		image ||
		"https://source.unsplash.com/random/500x400?javascript&sig=" +
			Math.random() * 1000;

	return (
		<div
			className="project"
			onClick={() => {
				window.open(link, "_blank");
			}}
		>
			<img src={imageUrl} alt={name} className={!image ? "blur" : ""} />
			{!image ? <small>Placeholder image</small> : null}
			<div className="info">
				<h3>{name}</h3>
				<div className="badges">
					<Badge type={BadgeType.DOCKER} />
					<Badge type={BadgeType.JAVASCRIPT} />
				</div>
				<div className="description">
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default function Projects() {
	return (
		<div className="projects">
			<div className="title">
				<h3>Projects</h3>
				<h4>Public Projects</h4>
			</div>

			<div className="grid">
				<Project
					name="Website"
					description="This website"
					link="https://github.com/DerTyp7?tab=repositories"
				/>{" "}
				<Project
					name="Website"
					description="This website"
					link="https://github.com/DerTyp7?tab=repositories"
				/>{" "}
				<Project
					name="Website"
					description="This website"
					link="https://github.com/DerTyp7?tab=repositories"
				/>{" "}
				<Project
					name="Website"
					description="This website"
					link="https://github.com/DerTyp7?tab=repositories"
				/>
			</div>
		</div>
	);
}
