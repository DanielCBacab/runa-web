import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import BannerTop from "../components/BannerTop";
import NavRuna from "../components/NavRuna";
import Concept from "../components/Concept";
import Amenities from "../components/Amenities";
import Projects from "../components/Projects";
import FinantialPlans from "../components/FinantialPlans";
import Masterplan from "../components/Masterplan";
import Ubication from "../components/Ubication";
import Footer from "../components/Footer";

export default function App() {
  return (
    <Container fluid className="bg-dark g-0">
      <NavRuna />
      <BannerTop />
      <Concept />
      <Amenities />
      <Projects />
      <FinantialPlans />
      <Masterplan />
      {/*<Gallery />
        <Ubication />
        <Footer />*/}
    </Container>
  );
}
