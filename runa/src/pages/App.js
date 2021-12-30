import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import Home from "./Home";
import Privacy from "./Privacy";
import Brochure from "./Brochure";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/politicas-privacidad" element={<Privacy />} />
      <Route exact path="/Brochure" element={<Brochure />} />
    </Routes>
  );
}
