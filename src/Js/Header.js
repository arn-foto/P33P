import React from "react";
import "../styles/Header.css";
import Contact from "../Js/Contact";
import Selection from "../Js/Selection";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
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

			<div className="header__right">
				<Button onClick={() => history.push("/")}>
					<Selection Icon={HomeIcon} title="Home" color="cyan" />
				</Button>

				<Button onClick={() => history.push("/about")}>
					<Selection Icon={FaceIcon} title="About Me" color="cyan" />
				</Button>

				<Button onClick={() => history.push("/projects")}>
					<Selection Icon={ComputerIcon} title="Projects" color="cyan" />
				</Button>

				<Button onClick={() => history.push("/contact")}>
					<Selection Icon={ContactMailIcon} title="Contact" color="cyan" />
				</Button>
			</div>
		</div>
	);
}

export default Header;
