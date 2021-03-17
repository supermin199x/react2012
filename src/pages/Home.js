import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import "..//pages/Home.css";

const Home = () => {
	let h1 = "<h1></h1>"
	return (
		<div className="home">
			<Navbar />
			<Content />
			
		</div>
	);
};

export default Home;
