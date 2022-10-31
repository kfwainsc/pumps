/*** PressureRead.js  <PressureRead {preset, pressureChange}/> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//styles
import {valveDialStyles as s} from "./stylesValveDial";
import "./ValveDial.css";

export function PressureRead({pressure}) {
  //const [pressure, setPressure] = useState("_");

  return (
    <div className="flex-column">
      <figcaption>pressure</figcaption>
      <figure style={s.digitalDisplay}>{pressure}</figure>
    </div>
  );
}
