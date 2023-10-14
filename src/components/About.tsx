import "@styles/About.scss";

export default function About() {
	return (
		<div className="about">
			<div className="text">
				<div className="badge">Hey There! I'm Janis Meister</div>
				<h1>
					A software <span>developer</span>. I develop and plan&nbsp;
					<span>software</span> solutions.
				</h1>
				<p>
					Over 3 years of experience in software development. I have worked on a
					variety of projects, from small to large scale. I have experience in
					both frontend and backend development.
				</p>
			</div>
			<div className="image">
				<img
					src="https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg"
					loading="lazy"
				/>
			</div>
		</div>
	);
}
