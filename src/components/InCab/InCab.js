/*** InCab.js  <InCab /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import {inCabStyles as s} from "./stylesInCab";
import React from "react";

const inCabData = require("./dataChecklist.json");

export function InCab() {
  let isMobile = window.matchMedia("screen and (max-width: 600px)");

  return (
    <div style={isMobile.matches ? s.listContainMobile : s.listContain}>
      <h1 style={s.h1}>In Cab Checklist:</h1>
      <ul>
        {inCabData.inCabChecklist.map((item) => (
          <li key={item} style={s.list}>
            <label style={s.checkItem} htmlFor={item}>
              <input type="checkbox" value={item} id={item} style={s.checkBox} />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
//style={isMobile.matches ? styles.mobile : styles}
