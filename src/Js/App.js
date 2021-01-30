import React from "react";
import "../styles/App.css";
import Header from "../Js/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<div className="app__body">
					<h2>app body</h2>
				</div>

				<h2>Dang ol, yo</h2>
			</div>
		</Router>
	);
}

export default App;
