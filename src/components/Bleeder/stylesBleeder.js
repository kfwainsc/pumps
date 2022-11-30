/***  stylesBleeder.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for BLEEDER component
   Organized alphabetically
*/
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;

export const bleederStyles = {
  bleederBox: {
    margin: "1em",
    padding: "1em 0 0 .3em ",
    background: c.grayLight,
    borderRadius: "1em",
    /*backgroundImage: `url(${require("../../images/bleeder3D.png")})`,
    backgroundSize: "cover",*/
  },
  bleederCircle: {
    padding: "1em 0",
    backgroundImage: `url(${require("../../images/bleeder3D.png")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  bleederContain: {
    fontSize: "5px",
    margin: ".5rem 2rem",
    display: "flex",
    alignItems: "flex-start",
  },
  minimize: {
    display: "none",
    //margin: "0 0 0 1em",
    padding: ".3em .3em",
    fontSize: "1.5em",
    fontWeight: 900,
    lineHeight: "1rem",
    border: `${c.grayDark} ridge .4rem`,
    borderRadius: "1rem",
    backgroundColor: c.grayDark,
    color: c.red,
  },
};
