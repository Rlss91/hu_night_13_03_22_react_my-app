import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
// add bootstrap to react
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
//react-toastify
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

//axios config
axios.defaults.baseURL = "http://localhost:3003/api";

axios.interceptors.request.use((config) => {
  config.headers["x-user-token"] =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQwOThmMzczZTE4ODgyM2FlY2Q5NDEiLCJiaXoiOnRydWUsImlhdCI6MTY0ODQwMjIyNH0.EepyQ0AJZ-qlA3qs55kdJc8ia5JAYeFKdp27r_FHNa0";
  config.headers["Content-Type"] = "application/json";
  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
