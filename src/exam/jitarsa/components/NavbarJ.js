import React, {useState} from 'react';
import "../components/NavbarJ.css";
import Login from "../pages/Login";

const NavbarJ = () => {

    return (
        <div className="navbarJ">
            <ul className="navbarJ-items">
                <li className="navbarJ-links">Home</li>
                <li className="navbarJ-links">สมัครสมาชิก</li>
                <li className="navbarJ-links">องค์กร</li>
                <li className="navbarJ-links">เข้าสู่ระบบ</li>
            </ul>
        </div>
    );
}

export default NavbarJ;