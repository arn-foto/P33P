import React from "react";
import "antd/dist/antd.css";
import "../styles/Projects.css";
import { Card } from "antd";
import Snap from "../img/snapchat-eviltwin.png";
import Link from "../img/linkedin-eviltwin.png";
import Gmail from "../img/gmail-eviltwin.png";
import Citrics from "../img/Citrics.png";
import Village from "../img/VillageBook.png";
import MicroFund from "../img/Microfund.png";
import { IconButton } from "@material-ui/core";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import GitHubIcon from "@material-ui/icons/GitHub";

const { Meta } = Card;

const gridStyle = {
	display: "flex",
	flexDirection: "column",
	textAlign: "center",
	width: 400,
	height: 700,
	margin: 10,
	paddingTop: 20,
	backgroundColor: "whitesmoke",
};

function Projects() {
	return (
		<div className="projects">
			<Card
				title="Linkedin (clone)"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="linkedin-clone" src={Link} />}
			>
				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
				<br />
				<IconButton
					href="https://linkedin-aa465.web.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ImportantDevicesIcon />
				</IconButton>

				<IconButton
					href="https://github.com/arn-foto/linkedin"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GitHubIcon />
				</IconButton>
				<div className="projects__list">
					<li>- Create an email and send it</li>
					<li>- Check each individual email</li>
					<li>- Authorization is handled by Google</li>
					<li>- User photo is populated by one on their google account</li>
					<li>- Log out by clicking your avatar</li>
				</div>
			</Card>

			<Card
				title="Snapchat (clone)"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="Snapchat-clone" src={Snap} />}
			>
				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
				<br />
				<IconButton
					href="https://snapchat-clone-6c035.web.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ImportantDevicesIcon />
				</IconButton>

				<IconButton
					href="https://github.com/arn-foto/snapchat-clone"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GitHubIcon />
				</IconButton>
				<div className="projects__list">
					<li>- Create an email and send it</li>
					<li>- Check each individual email</li>
					<li>- Authorization is handled by Google</li>
					<li>- User photo is populated by one on their google account</li>
					<li>- Log out by clicking your avatar</li>
				</div>
			</Card>

			<Card
				title="Gmail (clone)"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="Snapchat-clone" src={Gmail} />}
			>
				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
				<br />
				<IconButton
					href="https://clone-e991e.web.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ImportantDevicesIcon />
				</IconButton>

				<IconButton
					href="https://github.com/arn-foto/gmail"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GitHubIcon />
				</IconButton>
				<div className="projects__list">
					<li>- Create an email and send it</li>
					<li>- Check each individual email</li>
					<li>- Authorization is handled by Google</li>
					<li>- User photo is populated by one on their google account</li>
					<li>- Log out by clicking your avatar</li>
				</div>
			</Card>

			<Card
				title="Citrics"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="citrics" src={Citrics} />}
			>
				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
				<br />
				<IconButton
					href="https://main.d2vgut56c5mq8l.amplifyapp.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ImportantDevicesIcon />
				</IconButton>

				<IconButton
					href="https://github.com/arn-foto/citrics-fe-d"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GitHubIcon />
				</IconButton>
				<div className="projects__list">
					<li>- Create an email and send it</li>
					<li>- Check each individual email</li>
					<li>- Authorization is handled by Google</li>
					<li>- User photo is populated by one on their google account</li>
					<li>- Log out by clicking your avatar</li>
				</div>
			</Card>

			<Card
				title="Village Book Builders"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="Vbb" src={Village} />}
			>
				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
				<br />
				<IconButton
					href="https://www.villagebookbuilders.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ImportantDevicesIcon />
				</IconButton>
				<IconButton
					href="https://github.com/Lambda-School-Labs/village-book-builders-fe-a"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GitHubIcon />
				</IconButton>
				<div className="projects__list">
					<li>- Create an email and send it</li>
					<li>- Check each individual email</li>
					<li>- Authorization is handled by Google</li>
					<li>- User photo is populated by one on their google account</li>
					<li>- Log out by clicking your avatar</li>
				</div>
			</Card>

			<Card
				title="MicroFund"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="microfund" src={MicroFund} />}
			>
				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
				<br />
				<IconButton href="#" target="_blank" rel="noopener noreferrer">
					<ImportantDevicesIcon />
				</IconButton>

				<IconButton
					href="https://github.com/Lambda-School-Labs/micro-fund-be-b"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GitHubIcon />
				</IconButton>
				<div className="projects__list">
					<li>- Create an email and send it</li>
					<li>- Check each individual email</li>
					<li>- Authorization is handled by Google</li>
					<li>- User photo is populated by one on their google account</li>
					<li>- Log out by clicking your avatar</li>
				</div>
			</Card>
		</div>
	);
}

export default Projects;
