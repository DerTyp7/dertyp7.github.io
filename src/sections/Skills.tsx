import "@styles/Skills.scss";
import dockerLogo from "@assets/docker.svg";
import typeScriptLogo from "@assets/typescript.svg";
import expressLogo from "@assets/express.svg";
import gitLogo from "@assets/git.svg";
import javascriptLogo from "@assets/javascript.svg";
import typeormLogo from "@assets/typeorm.svg";
import firebaseLogo from "@assets/firebase.svg";
import htmlLogo from "@assets/html.svg";
import reactLogo from "@assets/react.svg";
import nodejsLogo from "@assets/nodejs.svg";
import cssLogo from "@assets/css.svg";
import nextjsLogo from "@assets/nextjs-light.svg";
import postgresqlLogo from "@assets/postgresql.svg";
import sassLogo from "@assets/sass.svg";
import angularjsLogo from "@assets/angular.svg";
import mysqlLogo from "@assets/mysql.svg";
import javaLogo from "@assets/java.svg";
import unityLogo from "@assets/unity.svg";
import cSharpLogo from "@assets/csharp.svg";
import cppLogo from "@assets/cpp.svg";
import pythonLogo from "@assets/python.svg";

function Skill({
	logo,
	alt,
	name,
}: {
	logo: string;
	alt: string;
	name: string;
}) {
	return (
		<div className="skill">
			<img src={logo} alt={alt} />
			<p>{name}</p>
		</div>
	);
}

export default function Skills() {
	return (
		<div className="skills">
			<div className="title">
				<h3>Skills</h3>
				<h4>Technologies & Tools</h4>
			</div>
			<div className="grid">
				<Skill logo={dockerLogo} alt="Docker" name="Docker" />
				<Skill logo={typeScriptLogo} alt="TypeScript" name="TypeScript" />
				<Skill logo={expressLogo} alt="Express" name="ExpressJS" />
				<Skill logo={gitLogo} alt="Git" name="Git" />
				<Skill logo={javascriptLogo} alt="JavaScript" name="JavaScript" />
				<Skill logo={typeormLogo} alt="TypeORM" name="TypeORM" />
				<Skill logo={firebaseLogo} alt="Firebase" name="Firebase" />
				<Skill logo={htmlLogo} alt="HTML" name="HTML" />
				<Skill logo={reactLogo} alt="ReactJS" name="ReactJS" />
				<Skill logo={nodejsLogo} alt="NodeJS" name="NodeJS" />
				<Skill logo={cssLogo} alt="CSS" name="CSS" />
				<Skill logo={nextjsLogo} alt="NextJS" name="NextJS" />
				<Skill logo={postgresqlLogo} alt="PostgreSQL" name="PostgreSQL" />
				<Skill logo={sassLogo} alt="SASS" name="SASS" />
				<Skill logo={angularjsLogo} alt="AngularJS" name="AngularJS" />
				<Skill logo={mysqlLogo} alt="MySQL" name="MySQL" />
				<Skill logo={javaLogo} alt="Java" name="Java" />
				<Skill logo={unityLogo} alt="Unity" name="Unity" />

				<div></div>
				<Skill logo={cSharpLogo} alt="C#" name="C#" />
				<div></div>
				<div></div>
				<Skill logo={cppLogo} alt="C++" name="C++" />
				<div></div>
				<div></div>
				<Skill logo={pythonLogo} alt="Python" name="Python" />
				<div></div>
			</div>
		</div>
	);
}
