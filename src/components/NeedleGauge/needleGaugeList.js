/*** needleGaugeList.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   list of needle gauges for NeedleGauge component
*/
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;

export const needleGaugeList = [
  {
    src: require("../../images/gauge_0-600_PSI.png"),
    label: {
      color: c.black,
      line1: "pump",
      line2: "intake",
    },
  },
  {
    src: require("../../images/gauge_0-600_PSI.png"),
    label: {
      color: c.black,
      line1: "pump",
      line2: "discharge",
    },
  },
];
