/***  stylesPanelPage.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for Panel Page page 
   Organized alphabetically
*/
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;
const f = masterStyles.fontList;

const stainlessContain = {
  padding: "2rem",
  backgroundImage: `url(${require("../../images/stainlessSteel.jpg")})`,
  //backgroundSize: "cover",
};

export const panelPageStyles = {
  stainlessContain: stainlessContain,
};
