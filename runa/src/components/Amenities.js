import React from "react";
import { Row, Col } from "react-bootstrap";
import owl from "../img/owl.png";
import wood from "../img/wood.png";
import wood2 from "../img/wood2.png";
import leaf from "../img/leaf.png";
import leaf2 from "../img/leaf2.png";

export default function Amenities() {
  return (
    <Row
      className="justify-content-center align-items-center text-light position-relative py-5 g-0"
      id="amenidades"
    >
      <img src={wood} className="wood1" />
      <img src={wood2} className="wood2" />
      <img src={leaf} className="leaf1" />
      <img src={leaf2} className="leaf2" />
      <h2 className="runa-title-right">Amenidades</h2>
      <Col xs={11} md={8} className="amenities my-5">
        <Row>
          <Col md={12} className="mb-4 text-center">
            <img src={owl} className="my-5 img-fluid" />
          </Col>
          <Col md={12} className="mb-4">
            <p>
              El respeto hacia la naturaleza es la característica principal de
              nuestros terrenos ecológicos residenciales y comerciales que van
              de los 600 m2, los cuales puedes adquirir desde cualquier parte de
              Estados Unidos y México, con el mejor financiamiento y de forma
              muy fácil. Dale paz y tranquilidad a los tuyos en este rincón
              natural.
            </p>
          </Col>
          <Col md={12}>
            <Row className="justify-content-between">
              <Col md={5}>
                <p>
                  Invierte y construye tu hogar en terrenos que van desde los
                  600 m2 a los 1065m2.
                </p>
              </Col>
              <Col md={5}>
                <p>
                  Gaia Hábitat es un proyecto amigable con el medio ambiente,
                  para la construcción de las diversas áreas se utilizarán
                  materiales de la región; se cuidará la flora y fauna nativa.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-between">
              <Col md={5}>
                <p>
                  Cerca de Runa Residencial se encuentra el paso de la ruta del
                  Tren Maya, un proyecto de más de 1,500 kilómetros que
                  conectará los estados de Yucatán, Campeche, Chiapas, Tabasco y
                  Quintana Roo, desde comunidades rurales hasta centros
                  turístico, lo que incrementará el turismo en la zona y que sin
                  duda le dará alta plusvalía a tus terrenos.
                </p>
              </Col>
              <Col md={5}>
                <p>
                  Nuestros lotes ecológicos se localizan en el km 16 de la
                  carretera Cancún – Valladolid. A minutos de destinos
                  turísticos de talla mundial como lo son Cancún, Puerto
                  Morelos, Isla Mujeres y Playa del Carmen.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
