import React from "react";
import { Row, Col } from "react-bootstrap";
import mapa from "../img/mapa.jpg";
import ubi1 from "../img/ubi1.jpg";
import ubi2 from "../img/ubi2.jpg";
import ubi3 from "../img/ubi3.jpg";
import ubi4 from "../img/ubi4.jpg";

import render1 from "../img/render1.jpg";
import render2 from "../img/render2.jpg";

export default function Ubicacion() {
  return (
    <Row
      className="justify-content-center align-items-center gradiente-gris g-0 "
      id="ubicacion"
    >
      <Col xs={11} md={10} className="my-5 py-2 my-md-5 py-md-5">
        <Row className="my-2 my-md-5 justify-content-center">
          <Col xs={12} md={11} lg={6} xl={6}>
            <h3 className="secondary-txt">
              <strong>Ubicación</strong>
            </h3>
            <p className="secondary-txt">
              <strong>
                El atractivo de <strong>Runa Residencial</strong> radica en su
                majestuoso paisaje natural donde la armonía florece y la magia
                se transmite, por eso brindamos un místico lugar lejos del
                estrés, caos y problemas de la ciudad, pero solo minutos del
                Aeropuerto Internacional y la Zona Hotelera de Cancún, con sus
                hermosas playas y clubes nocturnos.
              </strong>
            </p>
            <p className="secondary-txt">
              Vive la experiencia de la asombrosa{" "}
              <strong>Ruta de los Cenotes en Puerto Morelos,</strong> al mismo
              tiempo explora la emocionante ciudad de{" "}
              <strong>Playa del Carmen </strong> a menos de 50 minutos del
              residencial, garantizando una alta plusvalía para tu inversión
              inmobiliaria.
            </p>
            <p className="secondary-txt">
              Disfruta una nueva vida en la que podrás recargarte de la buena
              vibra que transmite la flora y fauna de la región, viviendo un
              momento de calma por senderos, cenotes y los impresionantes
              parques temáticos de la zona.
            </p>
          </Col>
          <Col xs={12} md={11} lg={6} xl={6}>
            <img src={mapa} alt="" className="img-fluid rounded-6 shadow" />
          </Col>
        </Row>
        <Row className="justify-items-center my-2 my-md-5 text-center">
          <Col xs={12} md={3}>
            <img
              src={ubi1}
              alt=""
              className="img-fluid w-100 rounded-6 shadow d-none d-md-block"
            />
          </Col>
          <Col xs={12} md={3}>
            <img
              src={ubi2}
              alt=""
              className="img-fluid w-100 rounded-6 shadow mt-5 d-none d-md-block"
            />
          </Col>
          <Col xs={12} md={3}>
            <img
              src={ubi3}
              alt=""
              className="img-fluid w-100 rounded-6 shadow mt-4 "
            />
          </Col>
          <Col xs={12} md={3}>
            <img
              src={ubi4}
              alt=""
              className="img-fluid w-100 rounded-6 shadow d-none d-md-block"
            />
          </Col>
        </Row>
        <Row className="my-5 py-5 d-none d-md-flex justify-content-center text-center">
          <Col xs={12} md={6}>
            <img
              src={render1}
              alt=""
              className="img-fluid w-100 rounded-3 shadow"
            />
          </Col>
          <Col xs={12} md={6}>
            <img
              src={render2}
              alt=""
              className="img-fluid w-100 rounded-3 shadow"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
