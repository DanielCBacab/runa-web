import React from "react";
import { Row, Col } from "react-bootstrap";
import wood1 from "../img/financiamiento-izq.png";
import wood2 from "../img/financiamiento-der.png";

export default function Projects() {
  return (
    <Row
      className="justify-content-center align-items-center py-5 g-0 secondary-bg position-relative"
      id="financiamiento"
    >
      <img src={wood1} className="wood3" />
      <img src={wood2} className="wood4" />
      <Col md={12} className="mt-5">
        <h3 className="primary-txt text-center">Planes de financiamiento</h3>
      </Col>
      <Col md={4} className="my-5 text-light text-center circle">
        <div>
          <h3>12 a 24</h3>
          <h6>
            Mensualdiades
            <br /> sin intereses
          </h6>
        </div>
      </Col>
      <Col md={1}></Col>
      <Col md={4} className="my-5 text-light text-center circle">
        <div>
          <h3>30%</h3>
          <h6>de Enganche</h6>
        </div>
      </Col>
      <Col md={12} className="text-light text-center">
        <p className="m-0">
          <strong>De contado: </strong>Verifica cuales son los beneficios extras
          al pagar en una sola exhibición.
        </p>
        <p className="m-0">
          <strong>Financiado:</strong>Contamos con financiamiento propio
        </p>
      </Col>
    </Row>
  );
}
