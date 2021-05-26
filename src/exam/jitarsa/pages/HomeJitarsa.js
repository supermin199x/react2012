import React from 'react';
import "../pages/HomeJitarsa.css";
import Main from "../pages/Main";
import RegisOrg from "../pages/RegisOrg";
import Regis from "../pages/Regis";
import Login from "../pages/Login";

const HomeJitarsa = () => {

    function showPageMain() {
        var main = document.getElementById("main");
        var regis = document.getElementById("regis");
        var regisorg = document.getElementById("regisorg");
        var login = document.getElementById("login");

        main.style.display = "block";
        regis.style.display = "none";
        regisorg.style.display = "none";
        login.style.display = "none";
    }

    function showPageRegis() {
        var main = document.getElementById("main");
        var regis = document.getElementById("regis");
        var regisorg = document.getElementById("regisorg");
        var login = document.getElementById("login");

        main.style.display = "none";
        regis.style.display = "block";
        regisorg.style.display = "none";
        login.style.display = "none";
    }

    function showPageRegisOrg() {
        var main = document.getElementById("main");
        var regis = document.getElementById("regis");
        var regisorg = document.getElementById("regisorg");
        var login = document.getElementById("login");

        main.style.display = "none";
        regis.style.display = "none";
        regisorg.style.display = "block";
        login.style.display = "none";
    }

    function showPageLogin() {
        var main = document.getElementById("main");
        var regis = document.getElementById("regis");
        var regisorg = document.getElementById("regisorg");
        var login = document.getElementById("login");

        main.style.display = "none";
        regis.style.display = "none";
        regisorg.style.display = "none";
        login.style.display = "block";
    }
    
    return(
        <div className="homejitarsa">
            <div className="navbarJ">
                <ul className="navbarJ-items">
                    <li onClick={showPageMain} className="navbarJ-links">Home</li>
                    <li onClick={showPageRegis} className="navbarJ-links">สมัครสมาชิก</li>
                    <li onClick={showPageRegisOrg} className="navbarJ-links">องค์กร</li>
                    <li onClick={showPageLogin} className="navbarJ-links">เข้าสู่ระบบ</li>
                </ul>
            </div>

            <div className="main" id="main">
                <Main />
            </div>
            <div className="regis" id="regis">
                <Regis />
            </div>
            <div className="regisorg" id="regisorg">
                <RegisOrg />
            </div>
            <div className="login" id="login">
                <Login />
            </div>

        </div>
    );
}

export default HomeJitarsa;