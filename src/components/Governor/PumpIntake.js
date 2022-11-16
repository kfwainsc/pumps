/*** PumpIntake.js  <PumpIntake /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";

export function PumpIntake() {
  let output = 0;
  return (
    <figure className="intake-discharge-box">
      <h2 className="intake-discharge">{output}</h2>
      <figcaption className="intake-dis-figcap">PUMP INTAKE</figcaption>
    </figure>
  );
}
