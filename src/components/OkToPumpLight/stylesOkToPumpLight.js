/***  stylesOkToPump.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for OkToPump Component
   Organized alphabetically
*/
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;

export const okayToPumpLightStyles = {
  light: {
    width: "5em",
    height: "5em",
    border: `.5em outset ${c.grayDark}`,
    borderRadius: "50%",
    background: `radial-gradient(circle, ${c.white} 0%, ${c.green} 58%)`,
    //backgroundColor: c.green,
  },
  lightContain: {
    margin: "12px 0",
    border: `.5em outset ${c.black}`,
    borderRadius: "50%",
    backgroundColor: c.grayDarkLight,
  },
  okayContain: {
    fontSize: "4px",
    margin: "0 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },
};
