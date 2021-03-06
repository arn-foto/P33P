import React from "react";
import "antd/dist/antd.css";
import "../styles/Projects.css";
import { Card, Divider } from "antd";
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
	height: 800,
	margin: 7,
	paddingTop: 10,
	paddingBottom: 10,
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

				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
				<br />

				<h4>
					This clone is created to replicate Linkedin & demonstrate the
					functionality of the technologies listed above.
				</h4>
				<Divider />

				<div className="projects__list">
					<h3>In this demo a user can:</h3>
					<li>- Create an account</li>
					<li>- Log in with created account</li>
					<li>- Add an avatar(must be valid link).</li>
					<li>- Submit & view messages from other users.</li>
					<li>- user data is saved and displayed.</li>
					<li>- Log out by clicking avatar.</li>
				</div>
			</Card>

			<Card
				title="Snapchat (clone)"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="Snapchat-clone" src={Snap} />}
			>
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

				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
				<br />

				<h4>
					This clone is created to mimic Snapchat & demonstrate the
					functionality of the technologies listed above.
				</h4>
				<Divider />

				<div className="projects__list">
					<h3>In this demo a user can:</h3>
					<li>- Sign in with Google authorization.</li>
					<li>- Take & Post photographs.</li>
					<li>- Photo delete after 10seconds.</li>
					<li>- Photo delete if clicked on during 10seconds.</li>
					<li>- Log out by clicking your avatar</li>
				</div>
			</Card>

			<Card
				title="Gmail (clone)"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="Snapchat-clone" src={Gmail} />}
			>
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

				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
				<br />

				<h4>
					This clone is created to replicate Gmail & demonstrate the
					functionality of the technologies listed above.
				</h4>

				<Divider />
				<div className="projects__list">
					<h3>In this demo a user can:</h3>
					<li>- Google authorization</li>
					<li>(disabled auth feature for all users)</li>
					<li>- Compose an email and send it</li>
					<li>- Check each individual email</li>
					<li>- User photo is populated by google account</li>
					<li>- Log out by clicking your photo</li>
				</div>
			</Card>

			<Card
				title="Citrics"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="citrics" src={Citrics} />}
			>
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

				<Meta description="JavaScript | React | React-Router | Redux | Css | Java | PostgreSQL" />
				<br />

				<h4>
					An informational web application constructed to compare comprehensive
					city data within the United States.
				</h4>

				<Divider />

				<div className="projects__list">
					<h3>In this demo a user can:</h3>
					<li>- Search comprehensive city data within the U.S.</li>
					<li>- Compare data side by side between cities</li>
				</div>
			</Card>

			<Card
				title="Village Book Builders"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="Vbb" src={Village} />}
			>
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
				<Meta description="JavaScript | React | React-Router | Redux | Css | AWS" />

				<br />

				<h4>
					A a non-profit organization empowering villages around the world to
					end the cycle of poverty through education.
				</h4>

				<Divider />

				<div className="projects__list">
					<h3>In this demo a user can:</h3>
					<li>- Submit application to become a village mentor.</li>
					<li>- Donate to villages in need.</li>
				</div>
			</Card>

			<Card
				title="MicroFund"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="microfund" src={MicroFund} />}
			>
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
				<Meta description="JavaScript | React | React-Query | Css | Java | SpringBoot | AWS" />
				<br />

				<h4>
					A web application created to connect organizations to entrepreneurs
					who seek funding for their business ventures.
				</h4>

				<Divider />
				<div className="projects__list">
					<h3>In this demo a user can:</h3>
					<li>- Register an organization to provide funding to applicants.</li>
					<li>- Submit an application to apply for funding.</li>
					<li>- View current orangizations that provide funding.</li>
				</div>
			</Card>
		</div>
	);
}

export default Projects;
