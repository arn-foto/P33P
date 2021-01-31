import React from "react";
import "antd/dist/antd.css";
import "../styles/Projects.css";
import { Card } from "antd";
import { GithubOutlined, DesktopOutlined } from "@ant-design/icons";
import Snap from "../img/snapchat-eviltwin.png";
import Link from "../img/linkedin-eviltwin.png";
import Gmail from "../img/gmail-eviltwin.png";
import Citrics from "../img/Citrics.png";
import Village from "../img/VillageBook.png";
import MicroFund from "../img/Microfund.png";
import { Divider } from "@material-ui/core";

const { Meta } = Card;

const gridStyle = {
	display: "flex",
	flexDirection: "column",
	textAlign: "center",
	width: 450,
	height: 650,
	margin: 15,
	padding: 15,
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
				actions={[
					<DesktopOutlined key="Deployed site" />,
					<GithubOutlined key="GitHub" />,
				]}
			>
				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
			</Card>
			<Card
				title="Snapchat (clone)"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="Snapchat-clone" src={Snap} />}
				actions={[
					<DesktopOutlined key="Deployed site" />,
					<GithubOutlined key="GitHub" />,
				]}
			>
				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
			</Card>

			<Card
				title="Gmail (clone)"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="Snapchat-clone" src={Gmail} />}
				actions={[
					<DesktopOutlined key="Deployed site" />,
					<GithubOutlined key="GitHub" />,
				]}
			>
				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
			</Card>

			<Card
				title="Citrics"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="citrics" src={Citrics} />}
				actions={[
					<DesktopOutlined key="Deployed site" />,
					<GithubOutlined key="GitHub" />,
				]}
			>
				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
			</Card>

			<Card
				title="Village Book Builders"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="Vbb" src={Village} />}
				actions={[
					<DesktopOutlined key="Deployed site" />,
					<GithubOutlined key="GitHub" />,
				]}
			>
				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
			</Card>

			<Card
				title="MicroFund"
				hoverable={true}
				style={gridStyle}
				cover={<img alt="microfund" src={MicroFund} />}
				actions={[
					<DesktopOutlined key="Deployed site" />,
					<GithubOutlined key="GitHub" />,
				]}
			>
				<Meta description="JavaScript | React | React-Router | Redux | Css | Firebase" />
			</Card>
		</div>
	);
}

export default Projects;
