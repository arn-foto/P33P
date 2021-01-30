import React from "react";
import "../styles/Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__left">
				<h2>Dev Ant</h2>
			</div>
			<div className="footer__middle">
				<IconButton>
					<InstagramIcon />
				</IconButton>
				<IconButton>
					<GitHubIcon />
				</IconButton>
				<IconButton>
					<LinkedInIcon />
				</IconButton>
			</div>
			<div className="footer__right">
				<h2>2021</h2>
			</div>
		</div>
	);
}

export default Footer;