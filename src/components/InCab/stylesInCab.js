/***  stylesInCab.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for NavBar Component
   Organized by major section, then alphabetically
*/
import {colorPaletteMaster as c} from "../../colorPaletteMaster";
const notePad = require("../../images/notePadPageFlip.png");
const notePadMobile = require("../../images/notePadPageFlipMobile.png");

const checkBox = {
  transform: "scale(2)",
  margin: "0 2rem 0 0",
  accentColor: c.green,
};
const checkItem = {
  margin: "1rem 0",
  fontSize: "1.75rem",
  fontFamily: c.handWritten,
  fontWeight: 400,
  fontStyle: "normal",
  textTransform: "capitalize",
  color: c.black,
};
const list = {
  listStyleType: "none",
};
const listContain = {
  minHeight: "100vh",
  minwidth: "100%",
  padding: "4rem 1rem 1rem 1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "flex-start",
  backgroundImage: `url(${notePad})`,
  backgroundPosition: "top",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};
const listContainMobile = {
  minHeight: "100vh",
  minwidth: "100%",
  padding: "4.5rem 1rem 1rem 1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "flex-start",
  backgroundImage: `url(${notePadMobile})`,
  backgroundPosition: "top",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};
const h1 = {
  margin: "1rem 0",
  fontSize: "2.75rem",
  fontFamily: c.handWritten,
  textAlign: "center",
  textTransform: "uppercase",
  color: c.black,
};
export const inCabStyles = {
  checkBox: checkBox,
  checkItem: checkItem,
  list: list,
  listContain: listContain,
  listContainMobile: listContainMobile,
  h1: h1,
};
