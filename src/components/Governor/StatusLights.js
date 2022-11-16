/*** StatusLights.js  <StatusLights /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//lists
import {statusLightsList} from "./statusLightsList";
//styles
import "./Governor.css";

export function StatusLights() {
  return (
    <div className="flex-between status-lights-contain">
      {statusLightsList.map((item) => (
        <figure key={item.caption} className="flex-col">
          <div className="TEMP-status"></div>
          <figcaption className="status-lights-label">{item.caption}</figcaption>
          <img className="status-icons" src={item.src} alt={item.alt} />
        </figure>
      ))}
    </div>
  );
}
