/*** NAVBAR <NavBar /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
//styles
import {navBarStyles as styles} from "./stylesNavBar";
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
    <div style={styles.navContainer}>
      <ul style={styles.ul}>
        <NavLink to="/" style={styles.navLink}>
          Home
        </NavLink>
        <NavDropdown title="Menu" id="basic-nav-dropdown" style={styles.navLink}>
          <NavDropdown.Item key={"dropdown_checklist"} href="/check_list" style={styles.navLink}>
            Pre-Pump Checklist
          </NavDropdown.Item>
          <NavDropdown.Item key={"dropdown_panelpage"} href="/panel_page" style={styles.navLink}>
            Full Pump Panel
          </NavDropdown.Item>
          <NavDropdown.Item
            key={"dropdown_governor"}
            href="https://govenor0proto.netlify.app/"
            style={styles.navLink}
          >
            Prototype Governor
          </NavDropdown.Item>
        </NavDropdown>
      </ul>
    </div>
  );
}
