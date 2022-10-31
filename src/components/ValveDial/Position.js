/*** Position.js  <Position{preset}/> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//styles
import {valveDialStyles as s} from "./stylesValveDial";
import "./ValveDial.css";

export function Position({preset}) {
  const dots = ["", "", "", "", "", "", "", "", "", ""];
  return (
    <div style={s.positionContain} className="flex-column">
      <figcaption>valve position</figcaption>
      <div style={s.allLightsContain}>
        <div style={s.positionRedContain}>
          <div style={s.positionRedLight}></div>
        </div>
        <div style={s.positionGreenContain}>
          <ul style={s.positionDotsContain}>
            {dots.map((dot, index) => (
              <li id={`positionDot${index}`} key={index} style={s.positionDot}>
                {dot}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
