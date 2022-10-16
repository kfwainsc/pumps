/***  stylesNavBar.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for NavBar Component
   Organized by major section, then alphabetically
*/
const logo = {
  maxWidth: "5rem",
  filter: "opacity(.4)",
};
const navContainer = {
  margin: "1rem 0 0 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
};
const navLink = {
  margin: "1rem",
};
const navLinkHome = {
  margin: "0 1.5rem 0 0",
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
};
const ul = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
export const navBarStyles = {
  logo: logo,
  navContainer: navContainer,
  navLink: navLink,
  navLinkHome: navLinkHome,
  ul: ul,
};
