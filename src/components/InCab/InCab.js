/*** InCab.js  <InCab /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React from "react";
export function InCab() {
  let isMobile = window.matchMedia("screen and (max-width: 600px)");
  return (
    <header>
      <h1>In Cab Checklist</h1>
      <h2>Stuff & things</h2>
    </header>
  );
}
//style={isMobile.matches ? styles.mobile : styles}
