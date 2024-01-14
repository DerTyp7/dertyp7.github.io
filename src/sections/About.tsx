import "@styles/About.scss";

export default function About() {
	return (
		<div className="about">
			<h2 className="greeting">Hey there, I'm</h2>
			<h1 className="name">Janis Meister</h1>
			<br />
			<h3 className="job">Software Developer.</h3>
			<h3 className="interest">With an interest for modern technologies.</h3>
			<div className="social-links">
				<a href="https://github.com/DerTyp7" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="github-icon"
					>
						<path
							fillRule="evenodd"
							d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.58 0-.29-.01-1.05-.015-2.06-3.338.72-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.74.083-.73.083-.73 1.205.085 1.838 1.235 1.838 1.235 1.07 1.83 2.805 1.305 3.495.995.108-.775.417-1.305.757-1.605-2.65-.3-5.44-1.325-5.44-5.89 0-1.3.465-2.365 1.235-3.195-.135-.302-.54-1.515.105-3.155 0 0 1.005-.32 3.3 1.225.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.545 3.285-1.225 3.285-1.225.645 1.64.24 2.855.12 3.155.765.83 1.23 1.895 1.23 3.195 0 4.575-2.795 5.585-5.455 5.875.42.365.81 1.095.81 2.22 0 1.605-.015 2.905-.015 3.305 0 .32.21.695.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"
						/>
					</svg>
					GitHub
				</a>
				<a href="https://www.linkedin.com/in/janis-meister02/" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="24"
						height="24"
						fill="currentColor"
						viewBox="0 0 50 50"
					>
						<path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
					</svg>
					LinkedIn
				</a>
				<a href="mailto:janis.meister@outlook.com">
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 512 512"
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
					</svg>
					Email
				</a>
			</div>
		</div>
	);
}
