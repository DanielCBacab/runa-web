import React from "react";
import { Row, Col } from "react-bootstrap";
import magia from "../img/magia.png";
import gold from "../img/gold.png";
import yucatan from "../img/yucatan.png";
import runas from "../img/runas.png";

export default function Nosotros() {
  return (
    <Row
      className="justify-content-center py-5 align-items-center aboutus position-relative g-0 "
      id="nosotros"
    >
      <img src={runas} className="img-fluid runas d-none d-md-block" alt="" />
      <Col xs={12} className="degradadotop"></Col>
      <Col xs={10} className="zprincipal">
        <Row className="my-0 py-0 my-md-5 py-md-5 align-items-center ">
          <Col
            xs={12}
            md={8}
            lg={8}
            xl={6}
            className="my-0 py-0 py-md-5 my-md-5"
          >
            <h3 className="mb-0 mb-md-3 primary-txt">
              <strong>Un concepto único y exclusivo</strong>
            </h3>
            <p className="text-white">
              <strong className="primary-txt">Runa Yucatán,</strong> es un
              desarrollo en donde no solo la plusvalía es altamente rentable,
              sino toda la magia y mística que constituye este complejo dentro
              de la tranquilidad de la Selva Maya y la pasividad de la
              naturaleza ancestral.
            </p>
          </Col>
        </Row>
        <Row className="my-2 py-2 my-md-5 py-md-5 align-items-center g-0 justify-content-between">
          <Col xs={12} md={12} lg={6} xl={6} className="text-center">
            <img src={magia} className="img-fluid w-100 spacialglow" alt="" />
          </Col>
          <Col xs={12} md={12} lg={5} xl={4} className="my-4 my-md-5">
            <h3 className="primary-txt">Magia y lujo</h3>
            <p className="text-light">
              Un entorno que va más allá de un espacio de{" "}
              <strong className="primary-txt">relajación y calma </strong>
              lejos de la ciudad. Es un santuario de conexión contigo mismo y
              los tuyos en donde la vida cotidiana y tú{" "}
              <strong className="primary-txt">inversión a futuro</strong> serán
              una experiencia sublime lleno de confort, afabilidad y riqueza de
              alta vibración.
              <br />
              <br />
              Un espacio en donde la magia y el lujo convergen para crear un
              concepto único en esta pequeña ciudad de gran impacto económico.
            </p>
          </Col>
        </Row>
        <img
          src={gold}
          className="img-fluid gold1 text-center d-none d-md-block img-responsive "
          alt=""
        />
        <Row className="my-2 py-2 my-md-5 py-md-5 align-items-center position-relative g-0">
          <Col md={6} lg={6} xl={5}>
            <strong>
              <h3 className="primary-txt">Yucatán</h3>
            </strong>
            <p className="text-light">
              La exclusiva ubicación de Telchac, Yucatán asegura la plusvalía de
              tu inversión al estar cerca del Club de Yates, Telchac Pueblo, Las
              Coloradas e increíbles sitios llenos de cultura.
            </p>
          </Col>
          <Col md={6}></Col>
        </Row>
        <Row className="my-2 py-2 my-md-5 py-md-5 align-items-center g-0 justify-content-between">
          <Col xs={12} md={12} lg={5} xl={4} className="my-4 my-md-5">
            <p className="text-light">
              Encuentra la paz y armonía que estabas buscando en la profundidad
              de la Selva Maya. Además, tendrás a tu alcance los mejores parques
              naturales y de aventuras de México.
              <br />
              <br /> Con <strong className="primary-txt">Runa Yucatán, </strong>
              eres parte de una comunidad ecológica que vive en armonía con la
              mágica Selva Maya. Relájate o sal a la aventura en áreas de
              playas, ecoturismo, senderos, cenotes y áreas arqueológicas y
              culturales ancestrales.
            </p>
          </Col>
          <Col xs={12} md={12} lg={6} xl={6} className="text-center">
            <img src={yucatan} className="img-fluid w-100 spacialglow" alt="" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
