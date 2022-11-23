/*** OVERHEATLIGHT.js <OverHeatLight {id} /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//styles
import {overHeatLightStyles as s} from "./stylesOverHeatLight";

export function OverHeatLight({id}) {
  const [isBig, setIsBig] = useState(false);
  function scaleClick() {
    if (!isBig) {
      document.getElementById("overHeatContainID").style.fontSize = "10px";
      document.getElementById("overHeatContainID").style.cursor = "auto";
      setIsBig(true);
    } else {
      document.getElementById("overHeatContainID").style.fontSize = "4px";
      document.getElementById("overHeatContainID").style.cursor = "pointer";
      setIsBig(false);
    }
  }

  return (
    <div id="overHeatContainID" onClick={scaleClick} style={s.overHeatContain}>
      <h2 style={s.warning}>warning</h2>
      <div>
        <h3 style={s.h3}>pump overheating </h3>
        <div style={s.lightContain}>
          <div style={s.light}></div>
        </div>
        <h3 style={s.h3}>
          pump overheat <br></br>protection system
        </h3>
        <h3 style={s.darley}>darley</h3>
      </div>
    </div>
  );
}
