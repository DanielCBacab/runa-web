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
                  <strong>Runa Yucatán</strong> está conformada por{" "}
                  <strong>
                    5 secciones con 171 amplios lotes y 12 áreas verdes comunes
                  </strong>{" "}
                  que te ofrecen la oportunidad de crear un espacio único donde
                  la comodidad y la tranquilidad son la base para que construyas
                  tu nuevo hogar.
                  <br />
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
                  Dentro de la primera sección, se encuentra el reino mineral
                  con el conjunto <strong>Thurisaz</strong> de 10 lotes,
                  acompañado por el conjunto <strong>Fehu,</strong> de 10 lotes
                  también.
                </p>
              </Col>
            </Row>
            <Row className="my-4 my-md-5 align-items-center">
              <Col xs={3} md={3} xl={3}>
                <img src={sec2} className="img-fluid w-100" alt="" />
              </Col>
              <Col xs={8} md={9} xl={7}>
                <p className="subtitle">
                  La siguiente sección es el <strong>Reino Vegetal,</strong> con{" "}
                  <strong>42 lotes.</strong>
                </p>
              </Col>
            </Row>
            <Row className="my-4 my-md-5 align-items-center">
              <Col xs={3} md={3} xl={3}>
                <img src={sec3} className="img-fluid w-100" alt="" />
              </Col>
              <Col xs={8} md={9} xl={7}>
                <p className="subtitle">
                  Continuamos con los <strong>42 lotes</strong> de la sección
                  tres, <strong>el Reino Animal.</strong>
                </p>
              </Col>
            </Row>
            <Row className="my-4 my-md-5 align-items-center">
              <Col xs={3} md={3} xl={3}>
                <img src={sec4} className="img-fluid w-100" alt="" />
              </Col>
              <Col xs={8} md={9} xl={7}>
                <p className="subtitle">
                  El <strong>Reino Humano</strong> está presente en la sección
                  cuatro con <strong>34 lotes.</strong>
                </p>
              </Col>
            </Row>
            <Row className="my-4 my-md-5 align-items-center">
              <Col xs={3} md={3} xl={3}>
                <img src={sec5} className="img-fluid w-100" alt="" />
              </Col>
              <Col xs={8} md={9} xl={7}>
                <p className="subtitle">
                  Al final del camino, rumbo a la trascendencia, nos encontramos
                  con el <strong>Reino Divino,</strong> la sección cinco,{" "}
                  <strong>con 33 lotes.</strong>
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
