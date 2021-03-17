import React from "react";
import "../components/Content.css";
import Video from "../components/video.mp4"

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
				<h1 className="hello">Hello, Min</h1>
			</section>
		</div>
	);
};

export default Content;