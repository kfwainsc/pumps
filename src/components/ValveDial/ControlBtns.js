/*** ControlBtns.js  <ControlBtns {closeClick, presetClick, openClick }/> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//styles
import {valveDialStyles as s} from "./stylesValveDial";
import "./ValveDial.css";
export function ControlBtns({closeValve, doPreset, openValve}) {
  return (
    <div style={s.btnContain}>
      <button style={s.btnClose} onClick={closeValve} className="btn-valve-control">
        close
      </button>
      <button style={s.btnPreset} onClick={doPreset} className="btn-valve-control">
        preset
      </button>
      <button style={s.btnOpen} onClick={openValve} className="btn-valve-control">
        open
      </button>
    </div>
  );
}
