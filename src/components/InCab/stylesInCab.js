/***  stylesInCab.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for InCab Component
   Organized by major section, then alphabetically
*/
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;
const f = masterStyles.fontList;

const checkBox = {
  transform: "scale(2)",
  margin: "0 2rem 0 0",
  accentColor: c.yellow,
};
const checkItem = {
  margin: "1rem 0",
  fontSize: "1.75rem",
  fontFamily: f.handWritten,
  fontWeight: 400,
  fontStyle: "normal",
  textTransform: "capitalize",
  color: c.grayDark,
};
const h1 = {
  margin: "4rem 0 1rem 0",
  fontSize: "2.75rem",
  fontFamily: f.handWritten,
  textAlign: "center",
  textTransform: "uppercase",
  color: c.grayDark,
};
const inCabContain = {
  minHeight: "100vh",
  maxWidth: 500,
  margin: "4rem .25rem 0 .25rem",
};
const list = {
  margin: "1rem 3rem 0 3rem",
  listStyleType: "none",
};
const listContain = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  border: `${c.grayDark} .5rem solid`,
  borderTop: 0,
  borderBottom: 0,
  //borderRadius: " 0 0 1rem 1rem",
  backgroundColor: c.pinkLight,
  backgroundImage: `url(${require("../../images/graphPaper.png")})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
//const listItem = {};
const navBtnActive = {
  padding: ".25rem",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "1rem",
  backgroundColor: "transparent",
  color: c.grayDark,
  filter: "opacity(1)",
};
const navBtnDisabled = {
  padding: navBtnActive.padding,
  borderRadius: navBtnActive.borderRadius,
  display: navBtnActive.borderRadius,
  flexDirection: navBtnActive.flexDirection,
  alignItems: navBtnActive.alignItems,
  fontSize: navBtnActive.fontSize,
  color: navBtnActive.color,
  filter: "opacity(.4)",
};
const navBtnsContain = {
  width: "100%",
  padding: "0 1rem .25rem 1rem",
  display: "flex",
  justifyContent: "space-between",
};
const nextArrow = {
  margin: 0,
  lineHeight: "2rem",
  fontSize: "3rem",
};
const notepadBottom = {
  width: "100%",
  borderRadius: "0 0 1.5rem 1.5rem",
  backgroundColor: c.pinkLight,
  backgroundImage: `url(${require("../../images/graphPaper.png")})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const notepadTop = {
  width: "100%",
};
const startBtn = {
  margin: "7rem 0 9rem 0",
  padding: "1rem",
  fontSize: "3rem",
  borderRadius: "1rem",
  color: c.white,
  backgroundColor: c.red,
};
export const inCabStyles = {
  checkBox: checkBox,
  checkItem: checkItem,
  h1: h1,
  inCabContain: inCabContain,
  list: list,
  listContain: listContain,
  //listItem: listItem,
  navBtnActive: navBtnActive,
  navBtnDisabled: navBtnDisabled,
  navBtnsContain: navBtnsContain,
  nextArrow: nextArrow,
  notepadBottom: notepadBottom,
  notepadTop: notepadTop,
  startBtn: startBtn,
};
