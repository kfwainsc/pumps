/*** Label.js <Lable /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import {labelStyles as s} from "./stylesLabel.js";

export function Label({line1, line2, color}) {
  return (
    <div
      style={{borderColor: `${color}`, backgroundColor: "white"}}
      className="valve-label-contain"
    >
      <label style={s.innerLabel}>
        {line1}
        <br></br>
        {line2}
      </label>
    </div>
  );
}
