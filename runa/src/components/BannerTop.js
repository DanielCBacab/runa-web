import React from "react";
import FormLeads from "./FormLeads";
import { Row, Col } from "react-bootstrap";

export default function BannerTop() {
  return (
    <Row className="justify-content-center align-items-end banner-top g-0 py-lg-5">
      <Col xs={0} md={0} lg={1} xd={0} className="zprincipal"></Col>
      <Col
        xs={11}
        md={5}
        lg={5}
        xl={7}
        className="mt-5 py-5 zprincipal d-none d-md-block"
      >
        <h1 className="primary-txt">
          Un patrimonio con la mejor plusvalía de Telchac, Yucatán.
        </h1>
        <p className="text-light ">
          Un espacio en donde la magia y el lujo convergen para crear un
          concepto único <br />
          en esta pequeña ciudad de gran impacto económico.
        </p>
        <a className="btn btn-md btn-warning" href="/brochure">
          Ver brochure
        </a>{" "}
        <a className="btn btn-md btn-primary" href="/#masterplan">
          Ver masterplan
        </a>
      </Col>
      <Col xs={11} md={6} lg={5} xl={3} className="zprincipal">
        <FormLeads />
      </Col>
      <Col md={0} lg={1}></Col>
      <Col className="degradadobottom"></Col>
    </Row>
  );
}
