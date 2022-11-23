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

export const panelPageStyles = {
  blackBtnsContain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  needleDialContain: {
    display: "flex",
  },
  okWarnLightsContain: {
    alignItems: "flex-end",
  },
  stainlessContain: {
    padding: "3rem",
    backgroundImage: `url(${require("../../images/stainlessSteel.jpg")})`,
    border: `.5rem solid ${c.grayDark}`,
    borderTop: "none",
  },
};
