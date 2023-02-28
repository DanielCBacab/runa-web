import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import BannerTop from "../components/BannerTop";

import Nosotros from "../components/Nosotros";
import Trasciende from "../components/Trasciende";
import Amenities from "../components/Amenities";
import Ubicacion from "../components/Ubicacion";
import NavRuna from "../components/NavRuna";

import FinantialPlans from "../components/FinantialPlans";
import Masterplan from "../components/Masterplan";
// import Asesores from "../components/Asesores";
import Footer from "../components/Footer";

export default function App() {
  return (
    <Container fluid className="g-0">
      <NavRuna />
      <BannerTop />
      <Nosotros />
      <Trasciende />
      <Amenities />
      <Ubicacion />
      <FinantialPlans />
      {/*<Masterplan />
     <Asesores /> */}
      <Footer />
    </Container>
  );
}
