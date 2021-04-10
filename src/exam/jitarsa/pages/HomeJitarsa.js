import React from 'react';
import "../pages/HomeJitarsa.css";
import NavbarJ from "../components/NavbarJ";
import ImgBg from "../asset/bg.png";
import ImgAbout from "../asset/about.png";


const HomeJitarsa = () => {
    
    return(
        <div className="homejitarsa">
            <NavbarJ />
            <div className="content">
                <section >
                    <img className="ImgBg" src={ImgBg}></img>
                </section>
                <section >
                    <img className="ImgAbout" src={ImgAbout}></img>
                </section>
            </div>
        </div>
    );
}

export default HomeJitarsa;