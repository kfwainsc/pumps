/*** preConnectsList.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   list of preconnected lines wt nozzels for PreConnects component
*/
import {allNozzles} from "../../images/nozzle_imgs/allNozzles";

export const preConnectsList = [
  {
    name: "front cross lays",
    lines: [
      {
        hose: {
          length: 200,
          diameter: '1 3/4"',
        },
        nozzle: allNozzles.TSM_20F_autoFog,
      },
      {
        hose: {
          length: 200,
          diameter: '1 3/4"',
        },
        nozzle: allNozzles.TSM_20F_autoFog,
      },
    ],
  },
  {
    name: "rear",
    lines: [
      {
        hose: {
          length: 200,
          diameter: '1 3/4"',
        },
        nozzle: allNozzles.smoothBore_15_16,
      },
      {
        hose: {
          length: 200,
          diameter: "2 1/2",
        },
        nozzle: allNozzles.chief_50_250,
      },
    ],
  },
  {
    name: "booster reels",
    lines: [
      {
        hose: {
          length: 300,
          diameter: '1" Rubber',
        },
        nozzle: allNozzles.TSM_3F,
      },
      {
        hose: {
          length: 300,
          diameter: '1" Rubber',
        },
        nozzle: allNozzles.TSM_3F,
      },
    ],
  },
];
