/***  stylesReliefValve.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for ReliefValve component
   Organized alphabetically
*/
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;

export const reliefStyles = {
  reliefContain: {
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
