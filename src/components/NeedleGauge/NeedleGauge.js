/*** NeedleGauge.js  <NeedleGauge {id, src, label} /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//components
import {Label} from "../Label/Label";
//lists
import "./NeedleGauge.css";

export function NeedleGauge({id, src, label}) {
  const [needleDeg, setDegree] = useState(-30);
  function onDegreeChange() {
    document.getElementById(`needleID${id}`).style.transform = `rotate(${needleDeg + 5}deg)`;
    setDegree(needleDeg + 5);
  }

  return (
    <div className="needle-gauge-contain">
      <div className="needle-contain" onClick={onDegreeChange}>
        <img src={src} className="gauge-img" />
        <div id={`needleID${id}`} className="needle"></div>
      </div>
      <Label label={label} />
    </div>
  );
}
