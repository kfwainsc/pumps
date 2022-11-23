/*** APP.js  <APP /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
//components
import {HookUps} from "../components/HookUps/HookUps";
import {InCab} from "../components/InCab/InCab";
import {NavBar} from "../components/NavBar/NavBar";
import {PreConnects} from "../components/PreConnects/PreConnects";
//pages
import {LandingPage} from "../pages/LandingPage/LandingPage";
import {PanelPage} from "../pages/PanelPage/PanelPage";
//styles
import {appStyles as styles} from "./stylesApp.js";

function App() {
  return (
    <div style={styles.app}>
      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/check_list" element={<InCab />} />
        <Route path="/preconnects" element={<PreConnects />} />
        <Route path="/panel_page" element={<PanelPage />} />
      </Routes>
    </div>
  );
}

export default App;

/*
  const [test, setTest] = useState(0);
  function plusPlus() {
    setTest(test + 1);
  }
  function larger() {
    plusPlus();
    console.log(test);
  }


      <button onClick={larger} style={{backgroundColor: "black"}}>
        <HookUps test={test} />
      </button>


*/
