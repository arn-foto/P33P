import React from "react";
import "../styles/App.css";
import Header from "../Js/Header";
import Footer from "../Js/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="app">
				<Header />

				<div className="app__body">
					<Switch>
						<Route path="/about">
							<h2>about me</h2>
						</Route>
						<Route path="/projects">
							<h2>projects</h2>
						</Route>
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
