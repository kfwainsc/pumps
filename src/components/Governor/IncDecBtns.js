/*** IncDecBtns.js  <IncDecBtns /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//styles
import {governorStyles as s} from "./stylesGovernor";

export function IncDecBtns({doNothing}) {
  return (
    <div className="flex-col">
      <div className="btn-border btn-border-orange">
        <button className="btn-all btn-inc" onClick={doNothing}>
          <h2 style={s.incDecBtnsH2}>
            + <br></br>inc
          </h2>
        </button>
      </div>
      <div className="btn-border btn-border-orange">
        <button className="btn-all btn-dec" onClick={doNothing}>
          <h2 style={s.incDecBtnsH2}>
            dec<br></br>-
          </h2>
        </button>
      </div>
    </div>
  );
}
