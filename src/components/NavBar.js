import React from "react";
import "../css/NavBar.css";
import Mypic from "../assets/mypic.jpg"
const NavBar = () => {
  return (
  <>
      <div className="sidebar">
          <img id="my-pic" src={Mypic} alt=""/>
           <h1>Uddeshya verma</h1>
           <p>Systems Engineer<span> IN TCS</span></p>
          <ul className="sidebar-ul">
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
               
          <ul>
            <li><a href="#">Fb</a></li>
            <li><a href="#">instagram</a></li>
            <li><a href="#">linkedin</a></li>
          </ul>

          {/* <p>&copy; {new Date().getFullYear()} Uddeshya verma Portfolio. All rights reserved.</p> */}
          </div>
    </>
  );
};

export default NavBar;
