import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";

export default function Concept() {
  return (
    <Row className="justify-content-center vh-100 align-items-center">
      <Col md={3}>
        <h4 className="mb-3">
          Un patrimonio con la mejor plusvalía en México.
        </h4>
        <p>
          Nuestra Propuesta Invierte en un patrimonio para tu familia en México,
          construye un hogar de forma ecológica y vive cómodamente en el Caribe
          Mexicano, a pocos minutos de Cancún, un paraíso turístico considerado
          el destino número uno para los visitantes de todo el mundo.
          <br />
          Gracias a la plusvalía inmediata que ofrece el estado de Quintana Roo
          por ser una zona 100% turística, al adquirir terrenos ecológicos
          residenciales o comerciales en Gaia Hábitat, obtendrás el mejor
          retorno de inversión.
        </p>
      </Col>
      <Col md={2}>
        <h4 className="mb-3">Nuestra especialidad</h4>
      </Col>
      <Col md={3} className="text-center">
        <Image src="" />

        <Button>Ver masterplan</Button>
      </Col>
    </Row>
  );
}
