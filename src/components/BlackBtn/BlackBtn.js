/*** BlackBtn.js <BlackBtn /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
//functional components
import {Label} from "../Label/Label";
//styles
import {blackBtnStyles as s} from "./stylesBlackBtn.js";
import {masterStyles} from "../../masterStyles";
const c = masterStyles.colorPalette;

export function BlackBtn({label, id}) {
  const [isBig, setIsBig] = useState(false);
  function scaleUpClick() {
    if (!isBig) {
      document.getElementById(`btnContain${id}`).style.fontSize = "10px";
      document.getElementById(`btnContain${id}`).style.cursor = "auto";
      document.getElementById(`minimize${id}`).style.display = "inline-block";

      setIsBig(true);
    }
  }
  function scaleDownClick({target}) {
    if (isBig) {
      target.style.display = "none";
      document.getElementById(`btnContain${id}`).style.fontSize = "4px";
      document.getElementById(`btnContain${id}`).style.cursor = "pointer";
      setIsBig(false);
    }
  }

  const [isPushed, setPushed] = useState(false);
  function pushBtn({target}) {
    if (isBig) {
      if (isPushed) {
        target.style.background = `radial-gradient(circle, ${c.grayHighlight} 0%, ${c.grayDark} 58%)`;
        target.style.borderColor = c.blackLight;
        setPushed(false);
      } else {
        target.style.background = `radial-gradient(circle, ${c.black} 0%, ${c.grayDarkLight} 58%)`;
        target.style.borderColor = c.grayDark;
        setPushed(true);
      }
    }
  }
  return (
    <div id={`btnContain${id}`} onClick={scaleUpClick} style={s.btnContain}>
      <div className="flex">
        <div style={s.btnBorder}>
          <button onClick={pushBtn} style={s.btn} />
        </div>
        <button id={`minimize${id}`} style={s.minimize} onClick={scaleDownClick}>
          X
        </button>
      </div>
      <Label label={label} />
    </div>
  );
}
