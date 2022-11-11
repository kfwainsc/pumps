/***  stylesLabel.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for Label Component
   Organized alphabetically
*/
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;
const f = masterStyles.fontList;

const innerLabel = {
  width: "15em",
  margin: 0,
  padding: "0 1em",
  textAlign: "center",
  border: `solid .2em ${c.whiteAbsolute}`,
  borderRadius: ".5em",
  backgroundColor: c.white,
  color: c.black,
};

export const labelStyles = {
  innerLabel: innerLabel,
};
