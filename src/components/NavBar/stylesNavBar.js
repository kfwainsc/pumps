/***  stylesNavBar.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for NavBar Component
   Organized by major section, then alphabetically
*/
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;
const f = masterStyles.fontList;

/*const logo = {
  maxWidth: "5rem",
  filter: "opacity(.4)",
};*/
const navContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: `.5rem solid ${c.grayDark}`,
  fontSize: "2rem",
};
const navDropdown = {
  border: `${c.grayDark} .5rem solid`,
  backgroundColor: c.grayGreen,
  margin: "1rem",
  textDecoration: "none",
  textShadow: `0 -1px 0 ${c.pinkLightFade}`,
  color: c.grayDark,
};
const navDropdownItem = {
  fontSize: "1.5rem",
  textShadow: "none",
};
const navLink = {
  margin: "1rem",
  fontSize: "2.25rem",
  fontWeight: 600,
  textDecoration: "none",
  textShadow: `0 -1px 0 ${c.pinkLightFade}`,
  color: c.grayDark,
};
const ul = {
  margin: 0,
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
export const navBarStyles = {
  //logo: logo,
  navContainer: navContainer,
  navDropdown: navDropdown,
  navDropdownItem: navDropdownItem,
  navLink: navLink,
  ul: ul,
};
