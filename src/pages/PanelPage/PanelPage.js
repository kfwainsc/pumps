/*** PanelPage.js  <PanelPage /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
import {ValveDial} from "../../components/valveDial/ValveDial";

export function PanelPage() {
  return (
    <div>
      <ValveDial label="font cross lay" />
      <ValveDial label="rear cross lay" />
    </div>
  );
}
/*
      <img
        src={require("../../images/panelPhoto.jpg")}
        alt="pump panel"
        style={{maxWidth: "10rem", margin: "1rem"}}
      />
*/
