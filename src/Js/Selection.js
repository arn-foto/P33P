import React from "react";
import "../styles/Selection.css";

//  If selected then it applies the css atribute to it
function Selection({ Icon, title, color, selected }) {
	return (
		<div
			className={`selection ${selected && "selection--selected"}`}
			style={{
				borderBottom: `1px solid ${color}`,
				color: `${selected && color}`,
			}}
		>
			<Icon />
			<h4>{title}</h4>
		</div>
	);
}

export default Selection;
