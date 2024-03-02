import React from "react";
import "../css/Skills.css";
import "../css/Projects.css";

import Card from "../util/card"
const Projects = () => {
  return (
    <div className="skills-container">
      <div className="personal-project">
      <div className="skills-heading">
        <h4 className="heading-one">MY PROJECTS</h4>
        <h2 className="heading-two">PERSONAL PROJECTS</h2>
      </div>
      <div className="projects-container">
      <div class="card">
      <div class="card-content">
        <h3>Portfolio Website</h3>
        <p>Portfolio website created using HTML, CSS, MaterializeCSS.</p>
        <a target="_blank" rel="noreferrer" href="https://uddeshya-ud.github.io/">Access</a>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3>Gym Website</h3>
        <p>Gym website created using ReactJs, Javascript, HTML, CSS.</p>
        <a target="_blank" rel="noreferrer" href="https://uddeshya-gym.netlify.app/">Access</a>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3>Game Website</h3>
        <p>Game website created using HTML, CSS, MaterializeCSS.</p>
        <a target="_blank" rel="noreferrer" href="https://uddeshya-ud.github.io/Game/">Access</a>
      </div>
    </div>
    </div>
    </div>
    <div className="tcs-project">
    <div className="skills-heading">
        <h2 className="heading-two">TCS PROJECTS</h2>
      
      <div className="projects-container">

      <Card cardId="card1" heading={"Load Testing Platform"} short="Java - SpringBoot - MySQL - REDIS" full="More details"></Card>
      <Card cardId="card2" heading={"Automated Alert System"} short="AWS - Python" full="More details"></Card>
      <Card cardId="card3" heading={"Secrets Management CLI"} short="Golang" full="More details"></Card>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
