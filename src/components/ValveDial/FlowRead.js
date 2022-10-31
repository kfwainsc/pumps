/*** FlowRead.js  <FlowRead {preset}/> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//styles
import {valveDialStyles as s} from "./stylesValveDial";
import "./ValveDial.css";

export function FlowRead({flow}) {
  return (
    <div className="flex-column">
      <figure style={s.digitalDisplay}>{flow}</figure>
      <figcaption>flow</figcaption>
    </div>
  );
}
