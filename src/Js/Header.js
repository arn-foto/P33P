import React from "react";
import "../styles/Header.css";
import Contact from "../Js/Contact";
import { useHistory } from "react-router-dom";
import { Button, IconButton } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import HomeIcon from "@material-ui/icons/Home";
import ComputerIcon from "@material-ui/icons/Computer";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import Selection from "../Js/Selection";

function Header() {
	const history = useHistory();

	return (
		<div className="header">
			<div className="header__left">
				<h2>Anthony R. Navarro | Web Developer</h2>
			</div>
			<div className="header__middle"></div>
			<div className="header__right">
				<Button>
					{" "}
					<Selection
						Icon={HomeIcon}
						title="Home"
						color="cyan"
						onClick={() => history.push("/")}
					/>
				</Button>

				<Button>
					{" "}
					<Selection
						Icon={HomeIcon}
						title="About Me"
						color="cyan"
						onClick={() => history.push("/about")}
					/>
				</Button>

				<Button>
					{" "}
					<Selection
						Icon={HomeIcon}
						title="Projects"
						color="cyan"
						onClick={() => history.push("/projects")}
					/>
				</Button>

				<Button>
					{" "}
					<Selection
						Icon={HomeIcon}
						title="Contact"
						color="cyan"
						onClick={() => history.push("/contact")}
					/>
				</Button>
			</div>{" "}
		</div>
	);
}

export default Header;
