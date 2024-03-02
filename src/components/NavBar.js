import React from "react";
import "../css/NavBar.css";
import Mypic from "../assets/mypic.jpg"
import MyResume from "../assets/UddeshyaVerma_Resume.pdf"
import { Link } from 'react-scroll';
const NavBar = () => {
  return (
  <>
      <div className="sidebar">
          <img id="my-pic" src={Mypic} alt=""/>
           <h1>Uddeshya verma</h1>
           <p>Systems Engineer<span> IN TCS</span></p>
           <a className="resume" href={MyResume} download>DOWNLOAD CV</a>
          <ul className="sidebar-ul">
            <li><Link to="section1" smooth={true} duration={500}>About</Link></li>
            <li><Link to="section2" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="section3" smooth={true} duration={500}>Projects</Link></li>

          </ul>
               
          <ul>
            <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100011671078350">Fb</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/uddeshya.music/">instagram</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/uddeshya-verma-185a49200/">linkedin</a></li>
          </ul>

          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
    </>
  );
};

export default NavBar;
