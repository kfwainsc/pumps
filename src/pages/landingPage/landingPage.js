/*** LANDING PAGE  <LandingPage /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/

import React from "react";
import {NavLink} from "react-router-dom";
//components
//styles
import {landingPageStyles as s} from "./stylesLandingPage";
import "./LandingPage.css";
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;

export function LandingPage() {
  function mouseEnter(e) {
    //e.target.style.backgroundColor = c.grayDarkLight;
    //document.getElementById("startBtnH2").style.backgroundColor = "transparent";
    document.getElementById("startBtnH2").style.color = c.yellow;
  }
  function mouseOut(e) {
    //e.target.style.backgroundColor = c.grayDark;
    document.getElementById("startBtnH2").style.color = c.pinkLightFade;
  }

  return (
    <div style={s.landingContain}>
      <h1 style={s.h1}>pump panel simulator</h1>
      <NavLink to="/check_list" onMouseEnter={mouseEnter} onMouseOut={mouseOut} id="startBtn">
        <button style={s.startBtn} id="startBtn">
          <img
            src={require("../../images/maltCross1.png")}
            style={s.startBtnImg}
            onMouseEnter={mouseEnter}
            onMouseOut={mouseOut}
          />
          <h2 id="startBtnH2" style={s.startBtnH2} onMouseEnter={mouseEnter} onMouseOut={mouseOut}>
            click to start
          </h2>
        </button>
      </NavLink>
    </div>
  );
}
