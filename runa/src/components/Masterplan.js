import React from "react";
import { Row, Col, Button, Ratio } from "react-bootstrap";

export default function Masterplan() {
  return (
    <Row className="justify-content-center align-items-center secondary-bg g-0 position-relative p-5">
      <Col md={12} className="my-5">
        <h2 className="runa-title-right">Planes</h2>
      </Col>
      <Col md={3}></Col>
      <Col md={4}>
        <h2 className="text-center primary-txt">Masterplan</h2>
      </Col>
      <Col md={3} className="text-light">
        <Row className="g-0">
          <Col>
            <p>Disponible</p>
          </Col>
          <Col>
            <p>Apartado</p>
          </Col>
          <Col>
            <p>Vendido</p>
          </Col>
        </Row>
      </Col>
      <Col md={10} className="my-5">
        <Ratio aspectRatio="16x9">
          <iframe src="https://admin.gaiahabitat.com/planmaestroactualizado/1"></iframe>
        </Ratio>
      </Col>
      <Col md={10} className="justify-content-end d-flex">
        <Button className="align-self-end">Volver al inicio</Button>
      </Col>
    </Row>
  );
}
