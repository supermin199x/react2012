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

  const [num, setNum] = useState({
    count: 0,
  });

  function openSearch() {
	  var modalSearch = document.getElementById('modal-search');

	  if(num.count === 0) {
		modalSearch.style.display = "block";
		setNum({
			count: num.count = 1
		});
	  } else if(num.count === 1) {
		modalSearch.style.display = "none";
		setNum({
			count: num.count = 0
		});
	  }
  }

  function onClose() {
	var modalSearch = document.getElementById('modal-search');
	modalSearch.style.display = "none";
	setNum({
		count: num.count = 0
	});
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
			<li>
			<Link to={dataState.login} className="nav-item">
				Login
			</Link>
			</li>
			<li id="search" onClick={openSearch}>
				Search
			</li>
		</ul>
		<div id="modal-search" className="search">
			<p className="form">
				<input type="text" placeholder="Search"/><button onClick={onClose}>Close</button>
			</p>
			<p className="form-footer">
				Search by Min
			</p>
		</div>
		<div onClick={openMenu} className="hamberger">
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
    </nav>
  );
};

export default Navbar;