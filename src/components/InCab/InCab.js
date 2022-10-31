/*** InCab.js  <InCab /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
//styles
import {inCabStyles as s} from "./stylesInCab";

const checkListData = require("./dataChecklist.json");
const checkLists = checkListData.lists;

export function InCab() {
  //let isMobile = window.matchMedia("screen and (max-width: 600px)");

  const [checklist, setChecklist] = useState(checkLists[0].listItems);
  const [listHeader, setListHeader] = useState(checkLists[0].listHeader);
  const [listIndex, setListIndex] = useState(0);
  const [canGoNext, setGoNext] = useState(true);
  const [canGoBack, setGoBack] = useState(false);
  const [toStart, setToStart] = useState(false);

  /*let initBoxes = [];
  checklist.map((box) => {
    initBoxes.push({id: box, checked: false});
  });
  const [checkBoxes, setCheckBoxes] = useState(initBoxes);
  console.log(checkBoxes);
*/
  function handleCheck({target}) {}

  function handleNext() {
    //    if (checkLists[listIndex + 1].listItems.length) {
    if (checkLists.length > listIndex + 1) {
      setChecklist(checkLists[listIndex + 1].listItems);
      setListHeader(checkLists[listIndex + 1].listHeader);
      setGoBack(true);
      setListIndex(listIndex + 1);
      if (checkLists.length === listIndex + 2) {
        setGoNext(false);
        setToStart(true);
      }
    }
  }
  function handleBack() {
    if (listIndex > 0) {
      setChecklist(checkLists[listIndex - 1].listItems);
      setListHeader(checkLists[listIndex - 1].listHeader);
      setListIndex(listIndex - 1);
      setGoNext(true);
      setToStart(false);
      if (listIndex - 1 === 0) {
        setGoBack(false);
      }
    }
  }

  return (
    <div style={s.inCabContain}>
      <img
        src={require("../../images/notePadRingsCOLOR.png")}
        alt="top of notepad"
        style={s.notepadTop}
      />
      <div style={s.listContain}>
        <h1 style={s.h1}>{listHeader}:</h1>
        {toStart ? (
          <NavLink to="/panel_page">
            <button style={s.startBtn}>Load Pump Panel</button>
          </NavLink>
        ) : (
          <ul style={s.list}>
            {checklist.map((item) => (
              <li key={item} style={s.listItem}>
                <label style={s.checkItem} htmlFor={item}>
                  <input
                    onChange={handleCheck}
                    value={item}
                    id={item}
                    style={s.checkBox}
                    type="checkbox"
                  />
                  {item}
                </label>
              </li>
            ))}
          </ul>
        )}
        <div style={s.navBtnsContain}>
          <button
            onClick={handleBack}
            disabled={!canGoBack}
            style={canGoBack ? s.navBtnActive : s.navBtnDisabled}
          >
            <h2 style={s.nextArrow}>&larr;</h2>
            BACK
          </button>
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            style={canGoNext ? s.navBtnActive : s.navBtnDisabled}
          >
            <h2 style={s.nextArrow}>&rarr;</h2>
            NEXT
          </button>
        </div>
      </div>
      <img
        src={require("../../images/notepadBottom.png")}
        alt="bottom of notepad"
        style={s.notepadBottom}
      />
    </div>
  );
}
//style={isMobile.matches ? styles.mobile : styles}
