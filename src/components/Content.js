import React from "react";
import "../components/Content.css";

const Content = () => {
  const slideImg = "https://i.ibb.co/HBJRYvp/slide.png";
  const aboutmeImg = "https://i.ibb.co/wrgJ972/aboutme.png";
  return (
    <div className="landing">
      <section>
        <img src={slideImg} alt="slide" />
      </section>
      <section>
        <img src={aboutmeImg} alt="aboutme" />
      </section>
    </div>
  );
};

export default Content;
