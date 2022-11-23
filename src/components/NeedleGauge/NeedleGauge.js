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
//styles
import {needleStyles as s} from "./stylesNeedleGauge";

export function NeedleGauge({id, src, label}) {
  /*const [needleDeg, setDegree] = useState(-30);
   function onDegreeChange() {
    document.getElementById(`needleID${id}`).style.transform = `rotate(${needleDeg + 5}deg)`;
    setDegree(needleDeg + 5);
  }*/
  const [isBig, setIsBig] = useState(false);
  function scaleClick() {
    if (!isBig) {
      document.getElementById(`needleGuageContainID${id}`).style.fontSize = "10px";
      document.getElementById(`needleGuageContainID${id}`).style.cursor = "auto";
      setIsBig(true);
    } else {
      document.getElementById(`needleGuageContainID${id}`).style.fontSize = "4px";
      document.getElementById(`needleGuageContainID${id}`).style.cursor = "pointer";
      setIsBig(false);
    }
  }

  return (
    <div id={`needleGuageContainID${id}`} onClick={scaleClick} style={s.allGaugeContain}>
      <img src={src} style={s.gaugeImg} />
      <Label label={label} />
    </div>
  );
}
