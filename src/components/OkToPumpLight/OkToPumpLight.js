/*** OkayToPumpLight.js <OkayToPumpLight{id} /> ***/

/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//components
import {Label} from "../Label/Label";
//styles
import {okayToPumpLightStyles as s} from "./stylesOkToPumpLight";
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;

export function OkayToPumpLight({id}) {
  const [isBig, setIsBig] = useState(false);
  function scaleClick() {
    if (!isBig) {
      document.getElementById("okPumpContainID").style.fontSize = "10px";
      document.getElementById("okPumpContainID").style.cursor = "auto";
      setIsBig(true);
    } else {
      document.getElementById("okPumpContainID").style.fontSize = "4px";
      document.getElementById("okPumpContainID").style.cursor = "pointer";
      setIsBig(false);
    }
  }
  return (
    <div id="okPumpContainID" onClick={scaleClick} style={s.okayContain}>
      <div style={s.lightContain}>
        <div style={s.light}> </div>
      </div>
      <Label label={{color: c.black, line1: "ok to pump", line2: ""}} />
    </div>
  );
}
