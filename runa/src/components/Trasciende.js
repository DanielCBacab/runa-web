import React from "react";

import { Row, Col } from "react-bootstrap";
import mpvertical from "../img/mpvertical.jpg";
import sec1 from "../img/sec1.svg";
import sec2 from "../img/sec2.svg";
import sec3 from "../img/sec3.svg";
import sec4 from "../img/sec4.svg";
import sec5 from "../img/sec5.svg";

export default function Trasciende() {
  return (
    <Row
      className="py-1 py-md-5 primary-bg-light justify-content-center g-0"
      id="trasciende"
    >
      <Col xs={11} md={10} className="my-4 py-4 my-md-5 py-md-5">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} xl={6}>
            <Row>
              <Col>
                <h3>
                  <strong>Trasciende</strong>
                </h3>
                <p>
                  <strong>Runa Residencial</strong> está establecido por{" "}
                  <strong>11 conjuntos dentro de 5 secciones,</strong> con
                  amplios lotes que ofrecen la oportunidad de crear un espacio
                  único donde la comodidad y tranquilidad es la base de un buen
                  hogar. <br />
                  <br />
                  El nombre de cada sección representa
                  <strong>Los Reinos de la Naturaleza.</strong>
                </p>
              </Col>
            </Row>
            <Row className="my-2 my-md-5 align-items-center">
              <Col xs={3} md={3} xl={3}>
                <img src={sec1} className="img-fluid w-100" alt="" />
              </Col>
              <Col xs={8} md={9} xl={7}>
                <p className="subtitle">
                  Dentro de la primer sección del reino mineral nos encontramos
                  con la sección uno: <strong>Thurisaz</strong> con 91 lotes,
                  siendo acompañado por
                  <strong>Fehu,</strong> conjunto 2 con 156 lotes.
                </p>
              </Col>
            </Row>
            <Row className="my-4 my-md-5 align-items-center">
              <Col xs={3} md={3} xl={3}>
                <img src={sec2} className="img-fluid w-100" alt="" />
              </Col>
              <Col xs={8} md={9} xl={7}>
                <p className="subtitle">
                  La siguiente sección representa al Reino Vegetal, con{" "}
                  <strong>Halagaz</strong> de 87 lotes y{" "}
                  <strong>Nauthiz</strong> con 78 lotes.
                </p>
              </Col>
            </Row>
            <Row className="my-4 my-md-5 align-items-center">
              <Col xs={3} md={3} xl={3}>
                <img src={sec3} className="img-fluid w-100" alt="" />
              </Col>
              <Col xs={8} md={9} xl={7}>
                <p className="subtitle">
                  Se continúa con la sección tres: del Reino Animal,{" "}
                  <strong>Algiz</strong> con 117 lotes y <strong>Laguz</strong>{" "}
                  con 131 lotes.
                </p>
              </Col>
            </Row>
            <Row className="my-4 my-md-5 align-items-center">
              <Col xs={3} md={3} xl={3}>
                <img src={sec4} className="img-fluid w-100" alt="" />
              </Col>
              <Col xs={8} md={9} xl={7}>
                <p className="subtitle">
                  El reino representado en el siguiente es el Reino Humano y es
                  la Seccion cuatro, con <strong>Kanaz</strong> de 60 lotes y{" "}
                  <strong>Mannaz</strong> con 137 lotes.
                </p>
              </Col>
            </Row>
            <Row className="my-4 my-md-5 align-items-center">
              <Col xs={3} md={3} xl={3}>
                <img src={sec5} className="img-fluid w-100" alt="" />
              </Col>
              <Col xs={8} md={9} xl={7}>
                <p className="subtitle">
                  Al final del camino hacia la trascendencia nos encontramos con
                  el Reino Divino la sección cinco, donde se encuentra el
                  conjunto de <strong>Perth</strong> con 89 lotes, el conjunto{" "}
                  <strong>Raidho</strong> que cuenta con 110 lotes y el conjunto{" "}
                  <strong>Dagaz</strong> con 78 lotes, formando asi los 11
                  conjuntos de estas 5 secciones divididos en Reinos.
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
          <Col xs={8} md={5} xl={4} className="text-center">
            <img src={mpvertical} className="img-fluid w-100" alt="" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
