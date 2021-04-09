import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import RandomColor from "../components/RandomColor";
import "..//pages/Home.css";

const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<Content />
		</div>
	);
};

export default Home;
