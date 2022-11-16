/*** Governor.js  <Governor /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//functional components
import {IncDecBtns} from "./IncDecBtns";
import {PumpDischarge} from "./PumpDischarge";
import {PumpIntake} from "./PumpIntake";
import {StatusLights} from "./StatusLights";

function CheckStopEngine() {
  return (
    <div className="flex-between">
      <figure className="light-contain-V">
        <span className="light-rnd light-checkStop"></span>
        <figcaption className="light-check-stop">CHECK ENGINE</figcaption>
      </figure>
      <figure className="light-contain-V">
        <span className="light-rnd light-checkStop"></span>
        <figcaption className="light-check-stop">STOP ENGINE</figcaption>
      </figure>
    </div>
  );
}
function IdlePreset() {
  return (
    <div className="flex-between">
      <div className="btn-border btn-border-white">
        <button className="btn-all btn-idle" onClick={doNothing}>
          IDLE
        </button>
      </div>
      <ThrottleLight />
      <div className="btn-border btn-border-white">
        <button className="btn-all btn-preset" onClick={doNothing}>
          PRESET
        </button>
      </div>
    </div>
  );
}
function Mode() {
  return (
    <div className="btn-border btn-border-white">
      <button className="btn-all btn-mode" onClick={doNothing}>
        MODE
      </button>
    </div>
  );
}
function PresssureRPMlights() {
  return (
    <div>
      <figure className="light-contain-H">
        <span className="light-rnd light-pressure"></span>
        <figcaption>PRESSURE</figcaption>
      </figure>
      <figure className="light-contain-H">
        <span className="light-rnd light-rpm"></span>
        <figcaption>RPM</figcaption>
      </figure>
    </div>
  );
}
function PSI() {
  let output = 150;
  return (
    <figure className="intake-discharge-box">
      <h2 className="intake-discharge intake-dis-override">PSI {output}</h2>
      <figcaption>RPM</figcaption>
    </figure>
  );
}

function RPM() {
  let output = 0;
  return (
    <figure className="intake-discharge-box">
      <h2 className="intake-discharge">{output}</h2>
      <figcaption className="rpm">RPM</figcaption>
    </figure>
  );
}
function SilenceMenu() {
  return (
    <div className="flex-between">
      <button className="btn-all btn-silence" onClick={doNothing}>
        SILENCE
      </button>
      <button className="btn-all btn-menu" onClick={doNothing}>
        MENU
      </button>
    </div>
  );
}
function SubRightL() {
  return (
    <div className="sub-right">
      <PresssureRPMlights />
      <Mode />
    </div>
  );
}
function SubRightR() {
  return (
    <div className="flex-col">
      <IncDecBtns doNothing={doNothing} />
    </div>
  );
}
function TotalControlLogo() {
  return (
    <div className="flex-between">
      <h2 className="total-control">TOTAL</h2>
      <h2 className="total-control-red"> CONTROL</h2>
    </div>
  );
}
function ThrottleLight() {
  return (
    <figure className="light-contain-V">
      <figcaption className="">THROTTLE</figcaption>
      <span className="light-rnd light-throttle"></span>
      <figcaption className="">READY</figcaption>
    </figure>
  );
}
function DigitalDisplay(caption, output) {
  return (
    <figure className="intake-discharge-box">
      <h2 className="intake-discharge">{output}</h2>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
function doNothing() {}
////////////////////////////////////////////////////////////

export function Governor() {
  return (
    <div className="governor">
      <div className="gov-top-contain">
        <div className="gov-left-contain">
          <TotalControlLogo />
          <PumpDischarge />
          <PumpIntake />
        </div>
        <div className="gov-right-contain">
          <IdlePreset />
          <div className="flex-between">
            <SubRightL />
            <SubRightR />
          </div>
        </div>
      </div>
      <div className="gov-bottom-contain">
        <div className="flex-col">
          <RPM />
          <CheckStopEngine />
        </div>
        <div className="flex-col">
          <PSI />
          <SilenceMenu />
        </div>
        <StatusLights />
      </div>
    </div>
  );
}
