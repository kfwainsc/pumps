/*** IntakeValveDial.js  <IntakeValveDial {id, label{color, line1, line2} } /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//functional components
import {ControlBtns} from "../ValveDial/ControlBtns";
import {FlowRead} from "../ValveDial/FlowRead";
import {Label} from "../Label/Label";
import {Position} from "../ValveDial/Position";
import {PressureRead} from "../ValveDial/PressureRead";
//decorative components
import {Screws} from "../ValveDial/Screws";
//styles
import {valveDialStyles as s} from "./stylesValveDial";
import "../ValveDial/ValveDial.css";

// SCALE UP & DOWN //
export function IntakeValveDial({id, label}) {
  const [isBig, setIsBig] = useState(false);
  function scaleUpClick() {
    if (!isBig) {
      document.getElementById(`contain${id}`).style.fontSize = "10px";
      document.getElementById(`contain${id}`).style.cursor = "auto";
      document.getElementById(`minimize${id}`).style.display = "inline-block";
      setIsBig(true);
    }
  }
  function scaleDownClick({target}) {
    if (isBig) {
      target.style.display = "none";
      document.getElementById(`contain${id}`).style.fontSize = "4px";
      document.getElementById(`contain${id}`).style.cursor = "pointer";
      setIsBig(false);
    }
  }

  //  CONTROL BUTTON ONCLICKS  //
  const [flow, setFlow] = useState("_");
  function openValve() {
    isBig && setFlow("random");
  }
  function closeValve() {
    isBig && setFlow(0);
  }

  return (
    <div id={`contain${id}`} onClick={scaleUpClick} style={s.valveContain} className="flex-column">
      <div className="flex">
        <Label label={label} />
        <button id={`minimize${id}`} style={s.minimize} onClick={scaleDownClick}>
          X
        </button>
      </div>

      <div style={s.blackBox}>
        <Screws />
        <div style={s.halfTop}>
          <PressureRead pressure={pressure} />
          <Position />
        </div>
        <div style={s.halfBottom}>
          <ControlBtns closeValve={closeValve} openValve={openValve} doPreset={doPreset} />
          <FlowRead flow={flow} />
        </div>
        <Screws />
      </div>
    </div>
  );
}
