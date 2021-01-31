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

const { Meta } = Card;

const gridStyle = {
	textAlign: "center",
	width: 275,
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
					title="Inner Card title"
					extra={<a href="#">More</a>}
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

			<Card
				hoverable={true}
				style={gridStyle}
				cover={<img alt="citrics" src={Citrics} />}
				actions={[
					<DesktopOutlined key="Deployed site" />,
					<GithubOutlined key="GitHub" />,
				]}
			>
				<Meta
					title="Citrics"
					description="JavaScript | React | React-Router | Redux | Css | Firebase"
				/>
			</Card>

			<Card
				hoverable={true}
				style={gridStyle}
				cover={<img alt="Vbb" src={Village} />}
				actions={[
					<DesktopOutlined key="Deployed site" />,
					<GithubOutlined key="GitHub" />,
				]}
			>
				<Meta
					title="Village Book Builders"
					description="JavaScript | React | React-Router | Redux | Css | Firebase"
				/>
			</Card>

			<Card
				hoverable={true}
				style={gridStyle}
				cover={<img alt="microfund" src={MicroFund} />}
				actions={[
					<DesktopOutlined key="Deployed site" />,
					<GithubOutlined key="GitHub" />,
				]}
			>
				<Meta
					title="MicroFund"
					description="JavaScript | React | React-Router | Redux | Css | Firebase"
				/>
			</Card>
		</div>
	);
}

export default Projects;
