import React from "react";
import "antd/dist/antd.css";
import "../styles/Projects.css";
import { Card } from "antd";
import { GithubOutlined, DesktopOutlined } from "@ant-design/icons";
import Snap from "../img/snapchat-eviltwin.png";
import Link from "../img/linkedin-eviltwin.png";
import Gmail from "../img/gmail-eviltwin.png";

const { Meta } = Card;

const gridStyle = {
	textAlign: "center",
	width: 250,
	margin: 14,
	padding: 15,

	backgroundColor: "whitesmoke",
};

function Projects() {
	return (
		<div className="projects">
			<Card
				hoverable={true}
				style={gridStyle}
				cover={<img alt="linkedin-clone" src={Link} />}
				actions={[
					<DesktopOutlined key="Deployed site" />,
					<GithubOutlined key="GitHub" />,
				]}
			>
				<Meta
					title="Linkedin (clone)"
					description="JavaScript | React | React-Router | Redux | Css | Firebase"
				/>
			</Card>

			<Card
				hoverable={true}
				style={gridStyle}
				cover={<img alt="Snapchat-clone" src={Snap} />}
				actions={[
					<DesktopOutlined key="Deployed site" />,
					<GithubOutlined key="GitHub" />,
				]}
			>
				<Meta
					title="Snapchat (clone)"
					description="JavaScript | React | React-Router | Redux | Css | Firebase"
				/>
			</Card>

			<Card
				hoverable={true}
				style={gridStyle}
				cover={<img alt="Snapchat-clone" src={Gmail} />}
				actions={[
					<DesktopOutlined key="Deployed site" />,
					<GithubOutlined key="GitHub" />,
				]}
			>
				<Meta
					title="Gmail (clone)"
					description="JavaScript | React | React-Router | Redux | Css | Firebase"
				/>
			</Card>
		</div>
	);
}

export default Projects;
