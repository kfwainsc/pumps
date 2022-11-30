/*** ReliefValve.js  <ReliefValve /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022

*/
import React, {useState} from "react";

//components
//styles

export function ReliefValve({id}) {
  const [isBig, setIsBig] = useState(false);

  function scaleUpClick() {
    if (!isBig) {
      document.getElementById(`contain${id}`).style.fontSize = "10px";
      document.getElementById(`contain${id}`).style.cursor = "auto";
      document.getElementById(`minimize${id}`).style.display = "inline-block";
      setIsBig(true);
    }
  }
  function scaleDownClick({target}) {
    if (isBig) {
      target.style.display = "none";
      document.getElementById(`contain${id}`).style.fontSize = "5px";
      document.getElementById(`contain${id}`).style.cursor = "pointer";
      setIsBig(false);
    }
  }

  return (
    <div id={`contain${id}`} onClick={scaleUpClick}>
      <div></div>

      <button id={`minimize${id}`} style={s.minimize} onClick={scaleDownClick}>
        X
      </button>
    </div>
  );
}
