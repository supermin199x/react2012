import React, { useState } from "react";
import "../components/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [dataState, setDataState] = useState({
    home: "/",
    contact: "/contact",
    Projects: "/projects",
  });

  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to={dataState.home} className="nav-item">
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
    </nav>
  );
};

export default Navbar;