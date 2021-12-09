import React from "react";
import { Row, Col, Ratio } from "react-bootstrap";
import start from "../img/runa-estrella.png";
import disponible from "../img/mp-diamante-oro.svg";
import nodisponible from "../img/mp-diamante-cobalto.svg";
import vendido from "../img/mp-diamante.svg";

export default function Masterplan() {
  return (
    <Row
      className="justify-content-center align-items-center  g-0 position-relative p-5 my-5 masterplan"
      id="masterplan"
    >
      <h2 className="runa-title-right">Planes</h2>

      <Col md={3}></Col>
      <Col md={4}>
        <h2 className="text-center primary-txt">Masterplan</h2>
      </Col>
      <Col md={3} className="text-light align-items-center">
        <Row className="g-0">
          <Col>
            <p>
              <img src={disponible} width="15px" alt="" /> Disponible
            </p>
          </Col>
          <Col>
            <p>
              <img src={nodisponible} width="15px" alt="" /> Apartado
            </p>
          </Col>
          <Col>
            <p>
              <img src={vendido} width="15px" alt="" /> Vendido
            </p>
          </Col>
        </Row>
      </Col>
      <Col md={10} className="p-5 ">
        <Ratio aspectRatio="16x9">
          <iframe
            src="https://admin.runaresidencial.com/planmaestroactualizado/1"
            scrolling="no"
            title="masterplan Runa Residencial"
          ></iframe>
        </Ratio>
      </Col>
      <Col md={10} className="justify-content-end d-flex">
        <a
          className="align-self-end btn btn-link text-decoration-none text-light"
          href="#"
        >
          <img src={start} width="25px" alt="" /> Volver al inicio
        </a>
      </Col>
    </Row>
  );
}
