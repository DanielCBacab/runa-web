import React from "react";
import { Row, Col } from "react-bootstrap";
import owl from "../img/owl.png";
import wood from "../img/wood.png";
import wood2 from "../img/wood2.png";
import leaf from "../img/leaf.png";
import leaf2 from "../img/leaf2.png";

export default function Amenities() {
  return (
    <Row
      className="justify-content-center align-items-center text-light position-relative py-5 g-0"
      id="amenidades"
    >
      <img src={wood} className="wood1" alt="" />
      <img src={wood2} className="wood2" alt="" />
      <img src={leaf} className="leaf1" alt="" />
      <img src={leaf2} className="leaf2" alt="" />
      <h2 className="runa-title-right">Trasciende</h2>
      <Col xs={11} md={8} className="amenities my-5">
        <Row>
          <Col md={12} className="mb-4 text-center">
            <img src={owl} className="my-5 img-fluid" alt="" />
          </Col>
          <Col md={12} className="mb-4">
            <h3 className="primary-txt text-center mb-4">
              Inicia tu trascendencia
            </h3>
            <p>
              <strong className="primary-txt">Runa Residencial</strong> está
              establecido por{" "}
              <strong className="primary-txt">
                11 conjuntos dentro de 5 secciones
              </strong>
              , con amplios lotes que ofrecen la oportunidad de crear un espacio
              único donde la comodidad y tranquilidad es la base de un buen
              hogar.
            </p>
          </Col>
          <Col md={6}>
            <Row className="justify-content-between">
              <Col md={11}>
                <p>
                  El nombre de cada sección representa{" "}
                  <strong className="primary-txt">
                    Los reinos de la naturaleza.
                  </strong>
                  Dentro de la primer sección del reino mineral nos encontramos
                  con la sección uno: Thurisaz con 91 lotes, siendo acompañado
                  por Fehu, conjunto 2 con 156 lotes.
                </p>
              </Col>
              <Col md={11}>
                <p>
                  La siguiente sección representa al Reino Vegetal, con Halagaz
                  de 87 lotes y Nauthiz con 78 lotes.
                </p>
              </Col>
              <Col md={11}>
                <p>
                  Se continúa con la sección tres: del Reino Animal, Algiz con
                  117 lotes y Laguz con 131 lotes
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row className="justify-content-between">
              <Col md={11}>
                <p>
                  El reino representado en el siguiente es el Reino Humano y es
                  la Seccion cuatro, con Kanaz de 60 lotes y Mannaz con 137
                  lotes.
                </p>
              </Col>
              <Col md={11}>
                <p>
                  Al final del camino hacia la trascendencia nos encontramos con
                  el Reino Divino la sección cinco , donde se encuentra el
                  conjunto de Perth con 89 lotes,el conjunto Raidho que cuenta
                  con 110 lotes y el conjunto Dagaz con 78 lotes, formando asi
                  los 11 conjuntos de estos 5 secciones divididos en Reinos.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
