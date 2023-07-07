import React from "react";
import "../css/Skills.css";
import { BiLogoJava , BiLogoGoLang  } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { IoLogoPython } from "react-icons/io";

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
          <div className="grid-item icon"><TbSql/><br/><p>SQL</p></div>
        </div> <br></br>

        <h2 className="skill-head">Frameworks</h2>
        <div className="grid-container">
          <div className="grid-item icon"><BiLogoJava/><br/><p>Java</p></div>
          <div className="grid-item icon"><IoLogoPython/><br/><p>Python</p></div>
         </div> <br></br>
        
        <h2 className="skill-head">Technologies</h2>

        <div className="grid-container">
          <div className="grid-item icon"><BiLogoJava/><br/><p>Java</p></div>
          <div className="grid-item icon"><IoLogoPython/><br/><p>Python</p></div>
          <div className="grid-item icon"><BiLogoGoLang/><br/><p>Golang</p></div>
          <div className="grid-item icon"><TbSql/><br/><p>SQL</p></div>
        </div>
      </div>
      <div className="skills-percentage"></div>
    </div>
  );
};

export default Skills;
