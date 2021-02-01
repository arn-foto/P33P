import React from "react";
import "../styles/App.css";
import Header from "../Js/Header";
import Footer from "../Js/Footer";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Ball from "../Js/Ball";
function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<div className="app__body">
					<Switch>
						<Route path="/about">
							<AboutMe />
						</Route>
						<Route path="/projects">
							<Projects />
						</Route>
						<Route path="/contact">
							<h2>contact</h2>
						</Route>
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
