import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import conection1 from "../img/runa1.jpg";
import conection2 from "../img/runa2.jpg";
import conection3 from "../img/runa3.jpg";
import conection4 from "../img/runa4.jpg";

export default function Projects() {
  return (
    <Row className="justify-content-center secondary-bg position-relative g-0">
      <Col md={12}>
        <h2 className="runa-title-left">Conexión</h2>
      </Col>
      <Col md={12} className="text-center">
        <Image src={conection1} fluid />
        <Image src={conection2} fluid />
        <Image src={conection3} fluid />
        <Image src={conection4} fluid />
      </Col>
    </Row>
  );
}
