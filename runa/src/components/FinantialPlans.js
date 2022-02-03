import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Projects() {
  return (
    <Row
      className="justify-content-center align-items-center g-0 position-relative gradiente-gris-down"
      id="financiamiento"
    >
      <Col xs={10} lg={8}>
        <Row className="runas-financiamiento py-5 py-md-5 justify-content-center align-items-center">
          <Col xs={12} md={6}>
            {" "}
            <h3 className="primary-txt">
              <strong>Financiamiento</strong>
            </h3>
            <p className="secondary-txt">
              <strong>
                ¡Tu mejor coincidencia comienza con ésta oportunidad!
              </strong>
            </p>
            <p className="secondary-txt">
              Aprovecha nuestras <strong>excelentes facilidades</strong> y obtén
              tu lote en el mejor lugar para disfrutar de la calma y armonía que
              la mística selva maya te comparte. Con financiamiento directo con
              mensualidades de{" "}
              <strong>12 y 24 meses y un enganche del 30%.</strong>
            </p>
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <Col xs={12} className="text-center">
                <h4 className="primary-txt text-center">
                  <strong>30%</strong>
                </h4>
                <h5 className="secondary-txt">Enganche</h5>
              </Col>
              <Col xs={12} className="text-center">
                <h3 className="primary-txt text-center">
                  <strong>12 a 24</strong>
                </h3>
                <h5 className="secondary-txt">
                  Meses
                  <br />
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
