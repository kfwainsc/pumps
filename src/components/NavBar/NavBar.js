/*** NAVBAR <NavBar /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
//styles
import {navBarStyles as styles} from "./stylesNavBar";
import NavDropdown from "react-bootstrap/NavDropdown";
//const logo = require("./tempLogo.jpg");

export function NavBar() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Governor Prototype</NavLink>
        <NavLink to="/">In Cab Checklist</NavLink>
      </ul>
    </div>
  );
}
