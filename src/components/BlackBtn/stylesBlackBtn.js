/***  stylesBlackBtn.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for BlackBtn Component
   Organized alphabetically
*/
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;
const f = masterStyles.fontList;

const btn = {
  width: "5em",
  height: "5em",
  margin: 0,
  borderRadius: "50%",
  border: `.3em solid ${c.blackLight}`,
  borderBottom: `.5em solid ${c.blackLight}`,
  backgroundColor: "rgb(156,156,156)",
  background: `radial-gradient(circle, ${c.grayHighlight} 0%, ${c.grayDark} 58%)`,
};
const btnBorder = {
  margin: "0 0 .5em 0",
  padding: 0,
  borderRadius: "50%",
  border: `.5em solid ${c.black}`,
  backgroundColor: c.blackLight,
};
const btnContain = {
  margin: "0 2em",
  fontSize: "4px",
  cursor: "pointer",
};
const minimize = {
  display: "none",
  margin: "0 0 0 1em",
  padding: ".5em .5em",
  fontSize: "1.25em",
  fontWeight: 900,
  lineHeight: "1rem",
  border: `${c.grayDark} ridge .4rem`,
  borderRadius: "1rem",
  backgroundColor: c.grayDark,
  color: c.red,
};

export const blackBtnStyles = {
  btn: btn,
  btnBorder: btnBorder,
  btnContain: btnContain,
  minimize: minimize,
};
