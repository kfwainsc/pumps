/*** LANDING PAGE  <LandingPage /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/

import React from "react";
//components
//styles
import {landingPageStyles as s} from "./stylesLandingPage";

export function LandingPage() {
  return (
    <div style={s.landingContain}>
      <h1 style={s.h1}>pump panel simulator</h1>
      <button>start</button>
    </div>
  );
}
