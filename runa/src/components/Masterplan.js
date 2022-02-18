import React from "react";
import { Row, Col, Ratio } from "react-bootstrap";

import disponible from "../img/mp-diamante-oro.svg";
import nodisponible from "../img/mp-diamante-cobalto.svg";
import vendido from "../img/mp-diamante.svg";

export default function Masterplan() {
  return (
    <Row
      className="justify-content-center align-items-center g-0 position-relative py-2 my-2 py-md-5 my-md-5"
      id="masterplan"
    >
      <Col xs={11} md={12} lg={5} className="py-5">
        <h2 className="text-center secondary-txt">
          <strong>Masterplan</strong>
        </h2>
      </Col>
      <Col xs={10} md={3} className="align-items-center">
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
      <Col xs={12} md={12} lg={8} xl={7} className="text-center">
        <Ratio aspectRatio={80}>
          <iframe
            src="https://admin.runaresidencial.com/planmaestroactualizado/1"
            scrolling="no"
            title="masterplan Runa Residencial"
          ></iframe>
        </Ratio>
        <div className="my-2 d-block d-md-none">
          <p>
            <strong>¿Tienes problemas para ver el masterplan completo?</strong>
          </p>
          <a className="btn btn-lg btn-warning" href="/masterplan">
            Ver masterplan completo
          </a>
        </div>
      </Col>
    </Row>
  );
}
