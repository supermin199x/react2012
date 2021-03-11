import React, { useState } from "react";
import "../components/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [dataState, setDataState] = useState({
    home: "/",
    registerMember: "/registermember",
    registerOrg: "/registerorg",
    login: "/login",
    exam: "/listpageexam",
  });

  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to={dataState.home} className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to={dataState.registerMember} className="nav-item">
            สมัครสมาชิก
          </Link>
        </li>
        <li>
          <Link to={dataState.registerOrg} className="nav-item">
            องค์กร
          </Link>
        </li>
        <li>
          <Link to={dataState.exam} className="nav-item">
          exam
          </Link>
        </li>
        <li>
          <Link to={dataState.login} className="nav-item">
            เข้าสู่ระบบ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;