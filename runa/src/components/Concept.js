import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";

export default function Concept() {
  return (
    <Row className="justify-content-center vh-100 align-items-center aboutus position-relative g-0">
      <h2 className="runa-title-left">Nosotros</h2>
      <Col md={5}>
        <h3 className="mb-3 primary-txt">
          Un patrimonio con la mejor plusvalía en México.
        </h3>
        <p className="subtitle text-white">Nuestra Propuesta</p>
        <p className="text-white">
          Invierte en un patrimonio para tu familia en México, construye un
          hogar de forma ecológica y vive cómodamente en el Caribe Mexicano, a
          pocos minutos de Cancún, un paraíso turístico considerado el destino
          número uno para los visitantes de todo el mundo.
          <br /> <br />
          Gracias a la plusvalía inmediata que ofrece el estado de Quintana Roo
          por ser una zona 100% turística, al adquirir terrenos ecológicos
          residenciales o comerciales en Gaia Hábitat, obtendrás el mejor
          retorno de inversión.
        </p>
      </Col>
      <Col md={5} className="text-center">
        <Image src="" />
        <Button className="btn btn-warning">Ver masterplan</Button>
      </Col>
    </Row>
  );
}
