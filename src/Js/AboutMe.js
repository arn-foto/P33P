import React from "react";
import Git from "./Git";
import "../styles/AboutMe.css";
import Stack from "../img/fullstack-row.png";

function AboutMe() {
	return (
		<div className="aboutMe">
			<img src={Stack} width="30%" />
			<h2>
				I am a Front-end developer with an obsession for all things tech. As
				much as I consider myself a software engineer, I mostly assume the role
				of student on a daily basis, constantly searching and learning new
				technologies and ways to apply them to everything I do.
			</h2>
			<Git />
			𝙅𝙖𝙫𝙖𝙎𝙘𝙧𝙞𝙥𝙩 | 𝙍𝙚𝙖𝙘𝙩 | 𝙍𝙚𝙙𝙪𝙭 | 𝙅𝙖𝙫𝙖 | 𝙎𝙥𝙧𝙞𝙣𝙜𝘽𝙤𝙤𝙩 | 𝙋𝙤𝙨𝙩𝙜𝙧𝙚𝙎𝙌𝙇 | 𝙈𝙮𝙎𝙌𝙇 |
			𝙍𝙀𝙎𝙏𝙛𝙪𝙡 𝘼𝙋𝙄 | 𝙋𝙮𝙩𝙝𝙤𝙣 | 𝙃𝙏𝙈𝙇 | 𝘾𝙎𝙎 | 𝙂𝙞𝙩 | 𝘼𝙜𝙞𝙡𝙚
		</div>
	);
}

export default AboutMe;
