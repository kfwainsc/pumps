/*** APP.js  <APP /> ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import {Routes, Route} from "react-router-dom";
//components
import {NavBar} from "../components/NavBar/NavBar.js";
import {InCab} from "../components/InCab/InCab.js";
//styles
//import {appStyles as styles} from "./stylesApp.js";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<landingPage />} />
        <Route path="/inCabCheckList" element={<InCab />} />
      </Routes>
    </div>
  );
}

export default App;
