import { Button } from "@material-ui/core";
import React from "react";
import "../styles/Header.css";
import FaceIcon from "@material-ui/icons/Face";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<h2>Anthony R. Navarro | Web Developer</h2>
			</div>
			<div className="header__middle"></div>
			<div className="header__right">
				<Button>
					<FaceIcon />
				</Button>
				<Button></Button>

				<Button></Button>
			</div>{" "}
		</div>
	);
}

export default Header;
