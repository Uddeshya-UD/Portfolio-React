import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <Hero />
        <About />
        <Skills />
      </div>
    </>
  );
};

export default Home;
