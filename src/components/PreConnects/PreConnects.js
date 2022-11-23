/*** PreConnects.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

*/
import React, {useState} from "react";
//components
//lists
import {preConnectsList} from "./preConnectsList";
//styles
import "./Preconnects.css";

export function PreConnects() {
  return (
    <div>
      {preConnectsList.map((item, i) => (
        <div className="area-contain" key={`preconnectContainKey_${item.name}`}>
          <h2 className="area-header">{item.name}</h2>
          <div className="line-contain">
            {preConnectsList[i].lines.map((line, i2) => (
              <div className="info-contain" key={`lineKey_${line.nozzle.name}${i2}`}>
                <div className="hose-header">
                  Length: <h4>{line.hose.length}ft </h4>
                  <br></br>
                  Diameter: <h4>{line.hose.diameter} </h4>
                  <br></br>
                  Nozzle: <br></br>
                  <h4> {line.nozzle.name} </h4>
                  <img src={line.nozzle.src} className="nozzle-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
