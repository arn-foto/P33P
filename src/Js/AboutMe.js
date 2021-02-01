import React from "react";
import Git from "./Git";
import "../styles/AboutMe.css";
import Stack from "../img/fullstack.png";

function AboutMe() {
	return (
		<div className="aboutMe">
			<img src={Stack} width="30%" />
			<div className="aboutMe__top">
				I am a Front-end developer with an obsession for all things tech. As
				much as I consider myself a software engineer, I mostly assume the role
				of student on a daily basis, constantly searching and learning new
				technologies and ways to apply them to everything I do.
			</div>

			<br />
			<div className="aboutMe__git">
				<Git />
			</div>
			<div className="aboutMe__archive">
				<h4>Archived Websites</h4>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://dev-ant.netlify.app/"
				>
					First site
				</a>
			</div>

			<div className="aboutMe__bottom"></div>
		</div>
	);
}

export default AboutMe;
