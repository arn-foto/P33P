import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.css";
import App from "../src/Js/App";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
