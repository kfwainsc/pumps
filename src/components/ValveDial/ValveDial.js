/*** ValveDial.js  <ValveDial /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";

export function ValveDial({label}) {
  return (
    <div>
      <label>{label}</label>
      <div>
        <button>close</button>
        <button>preset</button>
        <button>open</button>
      </div>
    </div>
  );
}
