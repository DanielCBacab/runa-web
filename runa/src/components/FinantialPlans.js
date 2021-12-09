import React from "react";
import { Row, Col } from "react-bootstrap";
import wood1 from "../img/financiamiento-izq.png";
import wood2 from "../img/financiamiento-der.png";

export default function Projects() {
  return (
    <Row
      className="justify-content-center align-items-center my-5 py-5 g-0  position-relative"
      id="financiamiento"
    >
      <img src={wood1} className="wood3" alt="" />
      <img src={wood2} className="wood4" alt="" />
      <Col xs={12} className="my-1 py-1 mt-md-5 pt-md-5">
        <h3 className="primary-txt text-center">Planes de financiamiento</h3>
      </Col>
      <Col xs={11} md={4} className="my-5 text-light text-center circle">
        <div>
          <h3>12 a 24</h3>
          <h6>
            Mensualdiades
            <br /> sin intereses
          </h6>
        </div>
      </Col>
      <Col md={1}></Col>
      <Col xs={11} md={4} className="my-5 text-light text-center circle">
        <div>
          <h3>30%</h3>
          <h6>de Enganche</h6>
        </div>
      </Col>
      <Col md={12} className="my-5 text-light text-center">
        <p className="m-0">
          <strong className="primary-txt">De contado: </strong>Verifica cuales
          son los beneficios extras al pagar en una sola exhibición.
        </p>
        <p className="m-0">
          <strong className="primary-txt">Financiado: </strong>Contamos con
          financiamiento propio
        </p>
      </Col>
    </Row>
  );
}
