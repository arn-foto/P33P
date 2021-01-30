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
						<h2>yo</h2>
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
