/*** HookUps.js  <HookUps /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//styles
import {hookUpsStyles as s} from "./stylesHookUps";

export function HookUps({isHooked}) {
  return (
    <div>
      {isHooked ? (
        <img src={require("../../images/hookupHose.png")} style={s.capImg} />
      ) : (
        <img src={require("../../images/hookupCap2.png")} style={s.capImg} />
      )}
    </div>
  );
}
