import React from "react";
import Git from "./Git";
import "../styles/AboutMe.css";

function AboutMe() {
	return (
		<div className="aboutMe">
			<Git />
			<h2>
				My interest in becoming a software engineer started when I was much
				younger. I witnessed a friend of mine do some magic with C++ and an I.P.
				Address. I was hooked. I have always modeled my life around technology
				while staying current with its growth. With that being said there is no
				way to fully measure my passion for software development, it's off the
				chart though. I have been fortunate enough to intern & contribute as a
				frontend developer for some great projects with teams across the country
				with some very talented developers. With each project I would be tasked
				with anything from constructing a project plan, form validation,
				creating reusable components, learning a new JavaScript library or
				framework on the spot, testing, debugging, ect... Needless to say I
				don't mind getting out of my comfort zone. Although I consider myself a
				software developer, I assume the role as student on a daily basis,
				constantly searching and learning new technologies and ways to apply
				them to everything I do.{" "}
			</h2>
		</div>
	);
}

export default AboutMe;
