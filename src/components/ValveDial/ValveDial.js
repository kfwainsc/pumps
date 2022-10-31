/*** ValveDial.js  <ValveDial {label, colors{border background}} /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//functional components
import {ControlBtns} from "./ControlBtns";
import {FlowRead} from "./FlowRead";
import {Position} from "./Position";
import {PressureRead} from "./PressureRead";
//decorative components
import {Screws} from "./Screws";
//styles
import {valveDialStyles as s} from "./stylesValveDial";
import "./ValveDial.css";

// SCALE UP & DOWN //
export function ValveDial({vID, label1, label2, color, initPressure}) {
  const [isBig, setIsBig] = useState(false);
  function scaleUpClick() {
    if (!isBig) {
      document.getElementById(vID).style.fontSize = "10px";
      document.getElementById(vID).style.cursor = "auto";
      document.getElementById(`${vID}minimize`).style.display = "inline-block";
      setIsBig(true);
    }
  }
  function scaleDownClick({target}) {
    if (isBig) {
      target.style.display = "none";
      document.getElementById(vID).style.fontSize = "4px";
      document.getElementById(vID).style.cursor = "pointer";
      setIsBig(false);
    }
  }

  //  CONTROL BUTTON ONCLICKS  //
  const [pressure, setPressure] = useState("_");
  function doPreset() {
    isBig && setPressure(initPressure);
  }
  const [flow, setFlow] = useState("_");
  function openValve() {
    isBig && setFlow("random");
  }
  function closeValve() {
    isBig && setFlow(0);
  }

  return (
    <div id={vID} onClick={scaleUpClick} style={s.valveContain} className="flex-column">
      <div className="flex">
        <div
          style={{borderColor: `${color}`, backgroundColor: "white"}}
          className="valve-label-contain"
        >
          <label style={s.valveLabel}>
            {label1}
            <br></br>
            {label2}
          </label>
        </div>
        <button id={`${vID}minimize`} style={s.minimize} onClick={scaleDownClick}>
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
