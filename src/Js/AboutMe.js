import React from "react";
import Git from "./Git";
import "../styles/AboutMe.css";
import Stack from "../img/fullstack.png";

function AboutMe() {
	return (
		<div className="aboutMe">
			<img src={Stack} width="30%" />
			<div className="aboutMe__top">
				What can I say...I'm a nerd with an obsession for all things tech. As
				much as I consider myself a software engineer, I mostly assume the role
				of student on a regualr basis, constantly searching for new technology
				and ways to learn it, break it, & fix it. Then apply it to everything I
				do.
			</div>
			<Git />
			<div className="aboutMe__middle">
				JavaScript | React | Redux | Java | SpringBoot | PostgreSQL | MySQL |
				RESTful API | Python | HTML | CSS | Git | Agile
			</div>

			<div className="aboutMe__bottom">
				<div className="aboutMe__archive">
					<h4>Archived Portfolio(s)</h4>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://dev-ant.netlify.app/"
					>
						Site #1
					</a>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
