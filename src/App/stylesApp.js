/***  stylesApp.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for APP
   Organized alphabetically
*/
import {masterStyles} from "../masterStyles";
const c = masterStyles.colorPalette;

export const appStyles = {
  app: {
    minHeight: "100vh",
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: c.grayGreen,
    color: c.white,
  },
};
