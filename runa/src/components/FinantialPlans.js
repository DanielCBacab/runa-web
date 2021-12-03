import React from "react";
import { Row, Col, Image } from "react-bootstrap";

export default function Projects() {
  return (
    <Row className="justify-content-center align-items-center bg-light py-5">
      <Col md={12} className="my-5">
        <Row className="justify-content-center">
          <Col>
            <h3 className="text-center">Planes de financiamiento</h3>
          </Col>
        </Row>
        <Row className="justify-content-center ">
          <Col md={8}>
            <Row className="justify-content-center align-items-center">
              <Col md={4} className="text-center bg-light ">
                <Row className="justify-content-center align-items-center h-50">
                  <Col>
                    <h2>12 a 24</h2>
                    <h3>
                      Mensualdiades
                      <br /> sin intereses
                    </h3>
                    <Image />
                  </Col>
                </Row>
              </Col>
              <Col md={4} className="text-center bg-light ">
                <Row className="justify-content-center align-items-center h-50">
                  <Col>
                    <h2>30%</h2>
                    <h3>de Enganche</h3>
                    <Image />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <p>
              <strong>De contado: </strong>Verifica cuales son los beneficios
              extras al pagar en una sola exhibición.
            </p>
            <p>
              <strong>Financiado:</strong>Contamos con financiamiento propio
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
