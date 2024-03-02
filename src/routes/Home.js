import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
      <Hero />
      <div id="section1"><About /></div>
      <section id="section2"><Skills /></section>
      <section id="section3"><Projects /></section>
      </div>
    </>
  );
};

export default Home;
