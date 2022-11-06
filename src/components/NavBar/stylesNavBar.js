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
const navLink = {
  margin: "1rem",
  textDecoration: "none",
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
  navLink: navLink,
  ul: ul,
};
