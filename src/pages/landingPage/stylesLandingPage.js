/***  stylesLandingPage.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for LandingPage Page
   Organized by major section, then alphabetically
*/
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;
const maltCross = require("../../images/maltCross1_OPACITY.png");

const h1 = {
  margin: "3rem 0",
  textAlign: "center",
  fontSize: "4rem",
  fontWeight: 600,
  letterSpacing: ".5rem",
  textTransform: "uppercase",
  color: c.pinkLight,
};
const landingContain = {
  minHeight: "90vh",
  minwidth: "100%",
  maxWidth: 600,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "flex-start",
  backgroundImage: `url(${maltCross})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

export const landingPageStyles = {
  h1: h1,
  landingContain: landingContain,
};
