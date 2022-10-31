/*** PanelPage.js  <PanelPage /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//components
import {ValveDial} from "../../components/ValveDial/ValveDial";
//styles
import {panelPageStyles as s} from "./stylesPanelPage";
import "./panelPage.css";
//data lists
const valveListData = require("../../components/ValveDial/valveList.json");
const valveList = valveListData.valveList;

export function PanelPage() {
  //console.log(valveList);

  return (
    <div style={s.stainlessContain}>
      <div className="valve-grid">
        {valveList.map((valve, index) => (
          <ValveDial
            key={`${valve.label1}${index}`}
            vID={`${valve.label1}${index}`}
            label1={valve.label1}
            label2={valve.label2}
            color={valve.color}
            initPressure={valve.preset}
          />
        ))}
      </div>
    </div>
  );
}
/*
        <ValveDial vID={valve.label} label={"hafjk f fs "} colors={"white"} initPressure={100} />;

      <img
        src={require("../../images/panelPhoto.jpg")}
        alt="pump panel"
        style={{maxWidth: "10rem", margin: "1rem"}}
      />
*/
/*
        console.log(typeof valve.color);
        console.log(typeof valve.label);
        console.log(typeof valve.preset);
*/
