/*** PanelPage.js  <PanelPage /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
import {Link} from "react-router-dom";

//components
import {BlackBtn} from "../../components/BlackBtn/BlackBtn";
import {Governor} from "../../components/Governor/Governor";
import {HookUps} from "../../components/HookUps/HookUps";
import {OkayToPumpLight} from "../../components/OkToPumpLight/OkToPumpLight";
import {OverHeatLight} from "../../components/OverHeatLight/OverHeatLight";
import {NeedleGauge} from "../../components/NeedleGauge/NeedleGauge";
import {ValveDial} from "../../components/ValveDial/ValveDial";

//styles
import {panelPageStyles as s} from "./stylesPanelPage";
import "./panelPage.css";

//data lists
import {needleGaugeList} from "../../components/NeedleGauge/needleGaugeList";
const blackBtnData = require("../../components/BlackBtn/blackBtnList.json");
const blackBtnList = blackBtnData.btnList;
const valveListData = require("../../components/ValveDial/valveList.json");
const valveList = valveListData.valveList;

export function PanelPage() {
  return (
    // BOOSTER REEL COMPONENT /////////////
    <div style={s.stainlessContain}>
      <div className="flex" style={s.okWarnLightsContain}>
        <OkayToPumpLight id="okToPumpLightID" />
        <OverHeatLight id="overHeatLightID" />
      </div>
      <div className="temp-top-row">
        <BlackBtn
          id={`btnID${blackBtnList.booster.label.line1}`}
          label={blackBtnList.booster.label}
        />
        <a className="temp-gov" target="_blank" href="https://govenor0proto.netlify.app/">
          <img src={require("../../images/governor_imgs/govPreview.png")} />
        </a>
        <div>
          <div style={s.needleDialContain}>
            {needleGaugeList.map((gauge, index) => (
              <NeedleGauge
                id={`needleGaugeID${gauge.label.line1}${index}`}
                key={`needleGaugeKEY${gauge.label.line1}${index}`}
                src={gauge.src}
                label={gauge.label}
              />
            ))}
          </div>

          <div style={s.blackBtnsContain}>
            {blackBtnList.rowOf3.map((btn, index) => (
              <BlackBtn
                id={`btnID${btn.label.line1}${index}`}
                key={`${btn.label.line1}${index}`}
                label={btn.label}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="valve-grid">
        {valveList.row1.map((valve, index) => (
          <ValveDial
            key={`${valve.label.line1}${index}`}
            id={`vID${valve.label.line1}${index}`}
            label={valve.label}
            initPressure={valve.preset}
          />
        ))}
      </div>
      <div className="temp">
        <div className="valve-grid">
          {valveList.row2A.map((valve, index) => (
            <ValveDial
              key={`${valve.label.line1}${index}`}
              id={`${valve.label.line1}${index}`}
              label={valve.label}
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
              key={`${valve.label.line1}${index}`}
              id={`${valve.label.line1}${index}`}
              label={valve.label}
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
