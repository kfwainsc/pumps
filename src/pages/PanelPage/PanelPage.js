/*** PanelPage.js  <PanelPage /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//components
import {HookUps} from "../../components/HookUps/HookUps";
import {IndicationLight} from "../../components/IndicationLight/IndicationLight";
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
      <div className="flex">
        <IndicationLight label={"stuff"} />
        <IndicationLight label={"stuff"} />
        <IndicationLight label={"stuff"} />
      </div>
      <div className="valve-grid">
        {valveList.row1.map((valve, index) => (
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
      <div className="flex temp">
        <div className="valve-grid">
          {valveList.row2A.map((valve, index) => (
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
        <div className="flex">
          <HookUps isHooked={false} />
          <HookUps isHooked={false} />
        </div>
        <div className="valve-grid">
          {valveList.row2B.map((valve, index) => (
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
