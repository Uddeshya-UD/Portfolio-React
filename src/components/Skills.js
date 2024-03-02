import React from "react";
import "../css/Skills.css";
import { BiLogoJava , BiLogoGoLang , BiLogoJavascript , BiLogoKubernetes,BiLogoNodejs , BiLogoAws  } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoPython } from "react-icons/io";
import { DiRedis } from "react-icons/di"
import { SiSpringboot } from "react-icons/si"
import { GrReactjs } from "react-icons/gr"
const Skills = () => {
  return (
    
    <div className="skills-container">
      <div className="skills-heading">
        <h4 className="heading-one">MY SPECIALTY</h4>
        <h2 className="heading-two">MY SKILLS</h2>
      </div>
      <div className="skills-images">
        <h3> What I Do</h3>
        <h2 className="skill-head">Programming Languages</h2>
        <div className="grid-container">
          <div className="grid-item icon"><BiLogoJava/><br/><p>Java</p></div>
          <div className="grid-item icon"><IoLogoPython/><br/><p>Python</p></div>
          <div className="grid-item icon"><BiLogoGoLang/><br/><p>Golang</p></div>
          <div className="grid-item icon"><BiLogoJavascript/><br/><p>Javascript</p></div>
        </div> <br></br>

        <h2 className="skill-head">Frameworks</h2>
        <div className="grid-container off">
          <div className="grid-item icon"><SiSpringboot/><br/><p>SpringBoot</p></div>
          <div className="grid-item icon"><GrReactjs/><br/><p>ReactJs</p></div>
          <div className="grid-item icon"><BiLogoNodejs/><br/><p>NodeJs</p></div>

         </div> <br></br>
        
        <h2 className="skill-head">Technologies</h2>

        <div className="grid-container">
          <div className="grid-item icon"><BiLogoAws/><br/><p>AWS</p></div>
          <div className="grid-item icon"><BiLogoKubernetes/><br/><p>KUBERNETES</p></div>
          <div className="grid-item icon"><AiFillGithub/><br/><p>GIT</p></div>
          <div className="grid-item icon"><DiRedis/><br/><p>REDIS</p></div>
        </div>
      </div>
      <div className="skills-percentage"></div>
    </div>
  );
};

export default Skills;
