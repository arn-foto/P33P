import React from "react";
import "../styles/Header.css";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<h2>left side of header</h2>
			</div>
			<div className="header__middle">
				<h2>middle of the header</h2>
			</div>
			<div className="header__right">
				<h2>right side of header</h2>
			</div>{" "}
		</div>
	);
}

export default Header;
