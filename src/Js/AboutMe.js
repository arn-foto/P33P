import React from "react";
import Git from "./Git";
import "../styles/AboutMe.css";
import Stack from "../img/fullstack.png";

function AboutMe() {
	return (

		<div className="aboutMe">
			<img src={Stack} width="30%" />
			<div className="aboutMe__top">
				I'm a nerd.
			</div>
			<br></br>
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
