import React from "react";
import { Row, Col } from "react-bootstrap";
import conection1 from "../img/runa1.jpg";
import conection2 from "../img/runa2.jpg";
import conection3 from "../img/runa3.jpg";
import conection4 from "../img/runa4.jpg";

export default function Conexion() {
  return (
    <Row className="justify-content-center position-relative g-0">
      <Col md={12}>
        <h2 className="runa-title-left">Conexión</h2>
      </Col>
      <Col xs={6} md={3} className="text-center g-0">
        <img src={conection1} className="img-fluid w-100" alt="" />
      </Col>
      <Col xs={6} md={3} className="text-center g-0">
        <img src={conection2} className="img-fluid w-100" alt="" />
      </Col>
      <Col xs={6} md={3} className="text-center g-0">
        <img src={conection3} className="img-fluid w-100" alt="" />
      </Col>
      <Col xs={6} md={3} className="text-center g-0">
        <img src={conection4} className="img-fluid w-100" alt="" />
      </Col>
    </Row>
  );
}
