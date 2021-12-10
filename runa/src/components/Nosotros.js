import React from "react";
import { Row, Col } from "react-bootstrap";
import nosotrosCircle from "../img/nosotroscircle.png";
import nosotros from "../img/nosotros.png";

export default function Nosotros() {
  return (
    <Row
      className="justify-content-center py-5 align-items-center aboutus position-relative g-0 "
      id="nosotros"
    >
      <img src={nosotros} className="nosotros img-fluid" alt="" />
      <h2 className="runa-title-left">Nosotros</h2>
      <Col xs={10} md={5} className="my-md-5 my-4 py-md-5 py-4">
        <h3 className="mb-3 primary-txt">
          Un patrimonio con la mejor plusvalía en México.
        </h3>
        <p className="subtitle text-white">Nuestra Propuesta</p>
        <p className="text-white">
          <strong className="primary-txt"> Runa Residencial</strong>, es un
          desarrollo sustentable en donde no solo la plusvalía es altamente
          rentable sino toda la magia y mística que constituye este complejo
          dentro de la tranquilidad de la selva maya y la pasividad de la
          naturaleza ancestral
          <br /> <br />
          Un espacio en donde{" "}
          <strong className="primary-txt"> la magia y el lujo </strong>convergen
          para crear un concepto único en esta pequeña ciudad de gran impacto
          económico.
        </p>
        <p className="text-white">
          Un entorno que va más allá de un espacio de relajación y calma lejos
          de la ciudad, es un santuario de conexión contigo mismo y los tuyos en
          donde la vida cotidiana y tú inversión a futuro serán una experiencia
          sublime lleno de confort, afabilidad y riqueza de alta vibración.
        </p>
      </Col>
      <Col
        xs={10}
        md={5}
        className="text-center justify-content-center text-center  nosotros-circle"
      >
        <Col xs={12}>
          <img src={nosotrosCircle} className="img-fluid" alt="" />
        </Col>
        <Col xs={12}>
          <a className="btn btn-warning" href="/#masterplan">
            Ver masterplan
          </a>
        </Col>
      </Col>
    </Row>
  );
}
