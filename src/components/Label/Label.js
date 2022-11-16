/*** Label.js <Lable {label: color, line1, line2}/> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import {labelStyles as s} from "./stylesLabel.js";
import "./Label.css";

export function Label({label}) {
  return (
    <div style={{borderColor: `${label.color}`}} className="label-contain">
      <label style={s.innerLabel}>
        {label.line1}
        <br></br>
        {label.line2}
      </label>
    </div>
  );
}
