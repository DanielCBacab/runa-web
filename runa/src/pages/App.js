import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css"
import Home from "./Home";
import Privacy from "./Privacy";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="politicas-privacidad" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}
