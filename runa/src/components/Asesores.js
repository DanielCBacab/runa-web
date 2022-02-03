import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import eder from "../img/eder.jpg";
import karla from "../img/karla.jpg";
import pamela from "../img/pamela.jpg";
import jerameel from "../img/jerameel.jpg";
import mary from "../img/mary.jpg";
import josue from "../img/josue.jpg";

const asesores = [
  {
    name: "Dr. Eder Campos",
    puesto: "Dirección de proyecto",
    foto: eder,
  },
  {
    name: "Karla Padilla",
    puesto: "Asesor de inversiones inmobiliarias",
    foto: karla,
  },
  {
    name: "Pamela Valenzuela",
    puesto: "Asesor de inversiones inmobiliarias",
    foto: pamela,
  },
  {
    name: "Jerameel Lopez ",
    puesto: "Asesor de inversiones inmobiliarias",
    foto: jerameel,
  },
  {
    name: "Mary Palomares",
    puesto: "Administración ",
    foto: mary,
  },
  {
    name: "Josué Escalante",
    puesto: "Supervisor de Atención al cliente ",
    foto: josue,
  },
];

export default function Asesores() {
  return (
    <Row className="justify-content-center g-0 pb-5" id="equipo">
      <Col xs={11} md={10}>
        <Row className="justify-content-center my-2 my-md-5 ">
          <Col xs={12} md={12} className="my-4 my-md-5">
            <h2 className="secondary-txt text-center">
              <strong>Asesores</strong>
            </h2>
          </Col>
          {asesores.map((items) => (
            <Col xs={6} md={4} lg={3} xl={2} className="p-2">
              <Card className="text-white text-center rounded-6 d-flex align-items-center shadow">
                <Card.Img
                  src={items.foto}
                  alt={items.name}
                  className="img-fluid rounded-6"
                />
                <Card.ImgOverlay className="degradado-asesores rounded-6 d-flex align-items-end justify-content-center">
                  <div>
                    <p className="subtitle">{items.name}</p>
                    <small>{items.puesto}</small>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
