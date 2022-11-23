/***  stylesNeedleGauge.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Styles for NeedleGauge Component
   Organized alphabetically
*/
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;

const allGaugeContain = {
  fontSize: "4px",
  margin: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
};

const gaugeImg = {
  width: "20em",
  height: "20em",
  margin: "0 0 3em 0",
  border: `outset 1em ${c.grayDark}`,
  backgroundColor: c.grayDark,
  borderRadius: "50%",
};

export const needleStyles = {
  allGaugeContain: allGaugeContain,
  gaugeImg: gaugeImg,
};

/*
const needle = {
  color: yellow);
  transform: rotate(-30deg);
}
.needle-contain {
  width: 6em;
  margin: 0 0 2em 0;
  padding: 0;
  border: solid 1em var(--grayDark);
  border-radius: 50%;
  background-image: "cover";
}
.needle-gauge-contain {
  font-size: 4px;
  margin: 0 4em 3em 4em;
}
*/
