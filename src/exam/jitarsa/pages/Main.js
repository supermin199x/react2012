import React from 'react';
import ImgBg from "../asset/bg.png";
import ImgAbout from "../asset/about.png";

const Main = () => {
    return (
        <div>
            <div className="content">
                <section >
                    <img className="ImgBg" src={ImgBg}></img>
                </section>
                <section >
                    <img className="ImgAbout" src={ImgAbout}></img>
                </section>
            </div>
        </div>
    )
}

export default Main;