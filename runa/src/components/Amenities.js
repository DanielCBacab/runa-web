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
                5 secciones dentro de 11 conjuntos
              </strong>
              , con amplios lotes que ofrecen la oportunidad de crear un espacio
              único donde la comodidad y tranquilidad es la base de un buen
              hogar.
            </p>
          </Col>
          <Col md={12}>
            <Row className="justify-content-between">
              <Col md={5}>
                <p>
                  El nombre de cada sección representa{" "}
                  <strong className="primary-txt">
                    Los reinos de la naturaleza
                  </strong>
                  . Dentro del primer conjunto del reino mineral nos encontramos
                  a la sección Thurisaz con 91 lotes, siendo acompañado por
                  Fehu, sección con 156 lotes.
                </p>
              </Col>
              <Col md={5}>
                <p>
                  El reino representado en el siguiente es el Reino Humano, con
                  Kanaz de 60 lotes y Mannaz con 137 lotes.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-between">
              <Col md={5}>
                <p>
                  El siguiente conjunto representa al Reino Vegetal, con Halagaz
                  de 87 lotes y Nauthiz con 78 lotes.
                </p>
                <p>
                  Se continúa con el conjunto del Reino Animal, Algiz con 117
                  lotes y Laguz con 131 lotes.
                </p>
              </Col>
              <Col md={5}>
                <p>
                  Al final del camino hacia la trascendencia nos encontramos con
                  el Reino Divino, con las secciones de Perth con 89 lotes,
                  Raidho que cuenta con 110 lotes y Dagaz con 78 lotes.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
