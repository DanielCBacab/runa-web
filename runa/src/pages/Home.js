import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import BannerTop from "../components/BannerTop";
import NavRuna from "../components/NavRuna";
import Nosotros from "../components/Nosotros";
import Amenities from "../components/Amenities";
import Conexion from "../components/Conexion";
import FinantialPlans from "../components/FinantialPlans";
import Masterplan from "../components/Masterplan";
import Footer from "../components/Footer";

export default function App() {
  return (
    <Container fluid className="degradado g-0">
      <NavRuna />
      <BannerTop />
      <Nosotros />
      <Amenities />
      <Conexion />
      <FinantialPlans />
      <Masterplan />
      <Footer />
    </Container>
  );
}
