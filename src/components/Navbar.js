import React, { useState } from "react";
import "../components/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {

	const [dataState, setDataState] = useState({
		home: "/",
		contact: "/contact",
		Projects: "/projects",
		login: "/login",
	});

	function openMenu() {
		var navlinks = document.getElementById('nav-links');
		navlinks.classList.toggle("open");
	}

	return (
		<nav id="nav">
			<div className="logoMenu">
				<Link to={dataState.home} className="nav-menu">
					Min199x
				</Link>
			</div>
			<ul id="nav-links" className="nav-links">
				<li>
				<Link to={dataState.home} className="nav-home">
					Min199x
				</Link>
				</li>
				<li>
				<Link to={dataState.Projects} className="nav-item">
					My Project
				</Link>
				</li>
				<li>
				<Link to={dataState.contact} className="nav-item">
					Contact
				</Link>
				</li>
			</ul>
			<div onClick={openMenu} className="hamberger">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</nav>
	);
};

export default Navbar;