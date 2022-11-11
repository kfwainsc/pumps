/*** INDICATIONLIGHT.js <IndicationLight /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
import {Label} from "../Label/Label";
import {indicationLightStyles as s} from "./stylesIndicationLight";

export function IndicationLight({label}) {
  return (
    <div>
      <div>
        light border
        <div>Light</div>
      </div>
      <Label line1={"stuff"} line2={"more"} color={"black"} />
    </div>
  );
}
