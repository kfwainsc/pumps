/***  stylesLandingPage.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for LandingPage Page
   Organized by major section, then alphabetically
*/
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;
//const maltCross = require("../../images/maltCross1_OPACITY.png");
const maltCross = require("../../images/maltCross1.png");

const h1 = {
  margin: "3rem 0",
  textAlign: "center",
  fontSize: "3.5rem",
  fontFamily: "Arial, san-serif",
  fontWeight: 600,
  //letterSpacing: ".4rem",
  textShadow: `0 -1.5px 0 ${c.pinkLightFade}`,
  textTransform: "uppercase",
  color: c.grayDark,
};
const landingContain = {
  minHeight: "90vh",
  minwidth: "100%",
  maxWidth: 600,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "flex-start",
};
const startBtn = {
  padding: "2rem 3rem",
  border: `${c.grayDarkLight} outset 1rem`,
  boxShadow: `-1px -1px 0px 1px ${c.pinkLightFade}`,
  WebkitBoxShadow: `-1px -1px 0px 1px ${c.pinkLightFade}`,
  backgroundColor: c.grayDark,
  color: c.pinkLightFade,
};
const startBtnH2 = {
  padding: "1rem 0 0 0",
  fontSize: "2rem",
  backgroundColor: "transparent",
};
const startBtnImg = {
  width: "15rem",
  filter: "opacity(.7)",
  backgroundColor: "transparent",
};
export const landingPageStyles = {
  h1: h1,
  landingContain: landingContain,
  startBtn: startBtn,
  startBtnH2: startBtnH2,
  startBtnImg: startBtnImg,
};
