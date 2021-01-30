import React from "react";
import "../styles/Header.css";

import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import HomeIcon from "@material-ui/icons/Home";
import ComputerIcon from "@material-ui/icons/Computer";
import ContactMailIcon from "@material-ui/icons/ContactMail";

function Header() {
	const history = useHistory();

	return (
		<div className="header">
			<div className="header__left">
				<h2>Anthony R. Navarro | Web Developer</h2>
			</div>
			<div className="header__middle"></div>
			<div className="header__right">
				<IconButton onClick={() => history.push("/")}>
					<HomeIcon />
				</IconButton>
				<IconButton onClick={() => history.push("/about")}>
					<FaceIcon />
				</IconButton>
				<IconButton onClick={() => history.push("/projects")}>
					<ComputerIcon />
				</IconButton>

				<IconButton>
					<ContactMailIcon />
				</IconButton>
			</div>{" "}
		</div>
	);
}

export default Header;
