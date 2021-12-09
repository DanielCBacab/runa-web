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
          Invierte en un patrimonio para tu familia en México, construye un
          hogar de forma ecológica y vive cómodamente en el
          <strong className="primary-txt"> Caribe Mexicano </strong>, a pocos
          minutos de Cancún, un paraíso turístico considerado el destino número
          uno para los visitantes de todo el mundo.
          <br /> <br />
          Gracias a la plusvalía inmediata que ofrece el estado de
          <strong className="primary-txt"> Quintana Roo </strong>
          por ser una zona 100% turística, al adquirir terrenos ecológicos
          residenciales o comerciales en{" "}
          <strong className="primary-txt">Runa Residencial</strong>, obtendrás
          el mejor retorno de inversión.
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
