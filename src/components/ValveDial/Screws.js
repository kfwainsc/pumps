/*** Screws.js  <Screws/> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

   Decorative element
*/
import React, {useState} from "react";
//styles
import {valveDialStyles as s} from "./stylesValveDial";
import "./ValveDial.css";
export function Screws() {
  return (
    <div style={s.screwContain}>
      <img src={require("../../images/screw.png")} alt="philips screw head" style={s.screw} />
      <img src={require("../../images/screw.png")} alt="philips screw head" style={s.screw} />
    </div>
  );
}
