import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./pages/App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
const Header: React.Fc = (): JSX.Element => {
  useEffect(() => {
    ReactGA.initialize("G-FR6G3DDXQ4");
    ReactGA.pageview("/");
  }, []);
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
