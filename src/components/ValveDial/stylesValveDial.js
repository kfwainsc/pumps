/***  stylesValveDial.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for ValveDial Component
   Organized alphabetically
*/
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;
const f = masterStyles.fontList;

const allLightsContain = {
  display: "flex",
  alignItems: "flex-end",
};
const blackBox = {
  padding: "1em .5em",
  borderRadius: "3em",
  backgroundImage: `url(${require("../../images/blkMetal.jpg")})`,
  backgroundSize: "cover",
  backgroundColor: c.black,
};
const btnClose = {
  backgroundColor: c.red,
};
const btnContain = {
  margin: "0 0 1em 0",
  display: "flex",
  justifyContent: "space-evenly",
};
const btnOpen = {
  backgroundColor: c.green,
};
const btnPreset = {
  color: c.black,
  backgroundColor: c.yellow,
};
const digitalDisplay = {
  width: "5em",
  margin: ".1em",
  padding: "0 1em",
  fontSize: "2.5em",
  lineHeight: "1.2em",
  fonWeight: 500,
  textAlign: "right",
  borderRadius: ".3em",
  backgroundColor: c.redDark,
  color: c.red,
  fontFamily: "digital-7, arial, san-serif",
};
const halfBottom = {
  padding: "1em 1em",
  borderRadius: " 0 0 50% 50%",
  backgroundColor: c.black,
};
const halfTop = {
  padding: "1em 0",
  borderRadius: "50% 50% 0 0",
  backgroundColor: c.grayLight,
  color: c.black,
};
const minimize = {
  display: "none",
  margin: "0 0 0 1em",
  padding: ".5em .5em",
  fontSize: "1.75em",
  fontWeight: 900,
  lineHeight: "1rem",
  border: `${c.grayDark} ridge .4rem`,
  borderRadius: "1rem",
  backgroundColor: c.grayDark,
  color: c.red,
};
/*const position = {
  margin: 0,
  border: `${c.black} .1em solid`,
  backgroundColor: c.grayLight,
  color: c.white,
  fontSize: "1em",
};*/
const positionContain = {
  margin: "1em 0 0 0",
  fontWeight: 900,
};
const positionDot = {
  width: "1em",
  height: "1em",
  margin: ".25em .5em",
  borderRadius: "50%",
  textAlign: "center",
  backgroundColor: c.white,
};
const positionDotsContain = {
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  listStyleType: "none",
  backgroundColor: c.grayLight,
};
const positionGreenContain = {
  padding: ".4em 2em .4em 0",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  //borderRadius: "0 3em 0 0",
  backgroundColor: c.green,
};
const positionRedContain = {
  padding: "1.25em .5em .5em 2em",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  borderRadius: "0 1.25em 0 0",
  backgroundColor: c.red,
};
const positionRedLight = {
  height: "1.5em",
  width: "1.5em",
  borderRadius: "50%",
  border: `${c.black} .25em solid`,
  backgroundColor: c.redDark,
};
const screw = {
  width: "1.75em",
  margin: " 0 .5em",
};
const screwContain = {
  display: "flex",
  justifyContent: "space-between",
};
const valveContain = {
  fontSize: "4px",
  fontFamily: "Arial, Helvetica, sans-serif",
  textTransform: "uppercase",
  cursor: "pointer",
};
const valveLabel = {
  width: "15em",
  margin: 0,
  padding: "0 1em",
  textAlign: "center",
  border: `solid .2em ${c.whiteAbsolute}`,
  borderRadius: ".5em",
  backgroundColor: c.white,
  color: c.black,
};
export const valveDialStyles = {
  allLightsContain: allLightsContain,
  blackBox: blackBox,
  btnClose: btnClose,
  btnContain: btnContain,
  btnOpen: btnOpen,
  btnPreset: btnPreset,
  digitalDisplay: digitalDisplay,
  halfBottom: halfBottom,
  halfTop: halfTop,
  minimize: minimize,
  //  position: position,
  positionContain: positionContain,
  positionDot: positionDot,
  positionDotsContain: positionDotsContain,
  positionGreenContain: positionGreenContain,
  positionRedContain: positionRedContain,
  positionRedLight: positionRedLight,
  screw: screw,
  screwContain: screwContain,
  valveContain: valveContain,
  valveLabel: valveLabel,
};
