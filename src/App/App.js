/*** APP.js  <APP /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import {Routes, Route} from "react-router-dom";
//components
import {NavBar} from "../components/NavBar/NavBar";
import {InCab} from "../components/InCab/InCab";
//pages
import {LandingPage} from "../pages/LandingPage/LandingPage";
//styles
import {appStyles as styles} from "./stylesApp.js";
function App() {
  return (
    <div style={styles.app}>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inCabCheckList" element={<InCab />} />
      </Routes>
    </div>
  );
}

export default App;
