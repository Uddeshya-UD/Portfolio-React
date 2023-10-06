import React from "react";
import "../css/NavBar.css";
import Mypic from "../assets/mypic.jpg"
import MyResume from "../assets/UddeshyaVerma_Resume.pdf"

const NavBar = () => {
  return (
  <>
      <div className="sidebar">
          <img id="my-pic" src={Mypic} alt=""/>
           <h1>Uddeshya verma</h1>
           <p>Systems Engineer<span> IN TCS</span></p>
           <a className="resume" href={MyResume} download>DOWNLOAD CV</a>
          <ul className="sidebar-ul">
            <li><a href="/#">Home</a></li>
            <li><a href="/#">Projects</a></li>
            <li><a href="/#">Skills</a></li>
            <li><a href="/#">Contacts</a></li>
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
