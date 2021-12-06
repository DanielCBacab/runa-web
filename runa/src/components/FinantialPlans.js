import React from "react";
import { Row, Col, Image } from "react-bootstrap";

export default function Projects() {
  return (
    <Row className="justify-content-center align-items-center py-5 g-0 secondary-bg">
      <Col md={12}>
        <h3 className="primary-txt text-center">Planes de financiamiento</h3>
      </Col>
      <Col md={6} className="my-5 text-light text-center">
        <h3>12 a 24</h3>
        <h6>
          Mensualdiades
          <br /> sin intereses
        </h6>
      </Col>
      <Col md={6} className="my-5 text-light text-center">
        <h3>30%</h3>
        <h6>de Enganche</h6>
      </Col>
      <Col md={12} className="text-light text-center">
        <p>
          <strong>De contado: </strong>Verifica cuales son los beneficios extras
          al pagar en una sola exhibición.
        </p>
        <p>
          <strong>Financiado:</strong>Contamos con financiamiento propio
        </p>
      </Col>
    </Row>
  );
}
