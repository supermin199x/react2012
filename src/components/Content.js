import React from "react";
import "../components/Content.css";

const Content = () => {


	const state = {
		htmlopen: "<html>",
		htmlclose: "</html>",
		htmlopen: "<html>",
		htmlclose: "</html>",
		htmlopen: "<html>",
		htmlclose: "</html>",
		htmlopen: "<html>",
		htmlclose: "</html>",
	}

	return (
		<div className="landing">
			<section className="h-box">
				<h1>{state.htmlopen}</h1>

				<h1>{state.htmlclose}</h1>
			</section>
		</div>
	);
};

export default Content;