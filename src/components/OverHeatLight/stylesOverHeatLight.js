/***  stylesOverHeatLight.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for OverHeatLight Component
   Organized alphabetically
*/
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;

export const overHeatLightStyles = {
  darley: {
    margin: ".5em 0 .25em 0",
    fontSize: "1.5em",
    fontWeight: 800,
  },
  h3: {
    margin: 0,
    fontSize: "1em",
    fontWeight: 800,
  },
  light: {
    width: "5em",
    height: "5em",
    border: `.5em solid ${c.black}`,
    borderRadius: "50%",
    backgroundColor: c.redDark,
    background: `radial-gradient(circle, ${c.redMid} 0%, ${c.redDark} 58%)`,
  },
  lightContain: {
    display: "flex",
    justifyContent: "center",
  },
  overHeatContain: {
    fontSize: "4px",
    width: "15em",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    textTransform: "uppercase",
    textAlign: "center",
    border: `outset 1em ${c.black}`,
    borderRadius: "1em",
    backgroundColor: c.white,
    color: c.black,
  },
  warning: {
    fontSize: "2em",
    fontWeight: 800,
    backgroundColor: c.orangeWarning,
    color: c.black,
  },
};
