/*** INDEX.js ***/
/* Project: Pump Panel Simulator
   Descript: Training tool to assist in learing 
   Created: Kendra Wainscott  2022
*/
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
//components
import App from "./App/App";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//styles
//import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
