import React from "react";
import Content from "../components/Content";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import "..//pages/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Content />
      <Dashboard />
    </div>

    
  );
};

export default Home;
