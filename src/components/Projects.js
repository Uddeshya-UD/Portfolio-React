import React from "react";
import "../css/Skills.css";
import "../css/Projects.css";

import Card from "../util/card"
const Projects = () => {
  return (
    <div className="skills-container">
      <div className="skills-heading">
        <h4 className="heading-one">MY PROJECTS</h4>
        <h2 className="heading-two">PERSONAL PROJECTS</h2>
      </div>
      <div className="projects-container">
      <div class="card">
      <div class="card-content">
        <h3>Portfolio Website</h3>
        <p>Portfolio website created using HTML, CSS, MaterializeCSS.</p>
        <a target="_blank" href="https://uddeshya-ud.github.io/">Access</a>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3>Gym Website</h3>
        <p>Gym website created using ReactJs, Javascript, HTML, CSS.</p>
        <a target="_blank" href="https://uddeshya-gym.netlify.app/">Access</a>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3>Game Website</h3>
        <p>Game website created using HTML, CSS, MaterializeCSS.</p>
        <a target="_blank" href="https://uddeshya-ud.github.io/Game/">Access</a>
      </div>
    </div>
    </div>
    <div className="skills-heading">
        <h2 className="heading-two">TCS PROJECTS</h2>
      </div>
      <div className="projects-container">
      {/* <div className="card"  id="card1">
      <div className="card-content">
        <h3>Load Testing Platform</h3>
        <p className="short-description">Java - SpringBoot - MySQL - REDIS</p>
        <p className="full-description">Additional details about the project. You can provide information about the technologies used, your role, challenges faced, etc.</p>

        <button className="know-more-btn"onClick={toggleDescription("card1")}>Toggle Description</button>

      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <h3>Automated Alert System</h3>
        <p className="short-description">AWS - Python</p>
        <p className="full-description">Additional details about the project. You can provide information about the technologies used, your role, challenges faced, etc.</p>

        <button className="know-more-btn"onClick={toggleDescription("card2")}>Toggle Description</button>

      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <h3>Secrets Management CLI</h3>
        <p className="short-description">Golang</p>
        <p className="full-description">Additional details about the project. You can provide information about the technologies used, your role, challenges faced, etc.</p>

        <button className="know-more-btn"onClick={toggleDescription("card3")}>Toggle Description</button>

      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <h3>Secrets Management CLI</h3>
        <p className="short-description">Golang</p>
        <p className="full-description">Additional details about the project. You can provide information about the technologies used, your role, challenges faced, etc.</p>

        <button className="know-more-btn"onClick={toggleDescription}>Toggle Description</button>

      </div>
    </div> */}
  <Card cardId="card1" heading={"Load Testing Platform"} short="Java - SpringBoot - MySQL - REDIS" full="More details"></Card>
  <Card cardId="card2" heading={"Automated Alert System"} short="AWS - Python" full="More details"></Card>
  <Card cardId="card3" heading={"Secrets Management CLI"} short="Golang" full="More details"></Card>


    </div>
    </div>
  );
};

export default Projects;
