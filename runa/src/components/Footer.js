import React from "react";
import { Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../img/simple-logo.svg";
import gold from "../img/gold.png";

const icons = [
  {
    iconName: <FaFacebook />,
    link: "https://www.facebook.com/Runa-Residencial-111632624638551",
  },

  {
    iconName: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCmVPuCoiuVtN_I-gLQ2dW8g",
  },

  {
    iconName: <FaInstagram />,
    link: "https://www.instagram.com/runaresidencial/",
  },
];

export default function Footer() {
  return (
    <Row
      className="justify-content-center align-items-center g-0  position-relative gris pt-5 mt-5 "
      id="contacto"
    >
      <img src={gold} className="gold-middle" alt="Runa residencial" />
      <Col xs={11}>
        <Row className="justify-content-center align-items-center my-5 py-5">
          <Col xs={12} md={6} lg={2} xl={2} className="my-4 my-md-0">
            <Row className="justify-content-center text-center g-0">
              <Col xs={12}>
                <img
                  src={logo}
                  width="120"
                  height="120"
                  className="d-inline-block align-top"
                  alt="Runa Residencial"
                />
              </Col>
              {icons.map((icons) => (
                <Col xs={4} md={4}>
                  <IconContext.Provider
                    value={{
                      className: "m-2 primary-txt",
                      size: "2.5rem",
                    }}
                  >
                    <a href={icons.link} target="_blank" rel="noreferrer">
                      {icons.iconName}
                    </a>
                  </IconContext.Provider>
                </Col>
              ))}
            </Row>
          </Col>

          <Col xs={12} md={6} lg={3} xl={3}>
            <h4 className="secondary-txt">Teléfonos</h4>
            <h6>
              <a
                href="whatsapp:9981172398"
                className="secondary-txt text-decoration-none"
              >
                Whatsapp: 998 117 2398
              </a>
            </h6>
            <h6>
              <a
                href="tel:9988856186"
                className="secondary-txt text-decoration-none"
              >
                Oficina: 998 885 6186
              </a>
            </h6>
          </Col>
          <Col xs={12} md={6} lg={5} xl={4} className="my-5 my-md-0">
            <h4 className="secondary-txt">Correos:</h4>
            <h6>
              <a
                href="mailto:conexion@runaresidencial.com"
                className="secondary-txt text-decoration-none"
              >
                conexion@runaresidencial.com
              </a>
            </h6>
            <h6>
              <a
                href="mailto:teayudo@runaresidencial.com"
                className="secondary-txt text-decoration-none"
              >
                teayudo@runaresidencial.com
              </a>
            </h6>
            <h6>
              <a
                href="mailto:inversiones@runaresidencial.com"
                className="secondary-txt text-decoration-none"
              >
                inversiones@runaresidencial.com
              </a>
            </h6>
          </Col>
          <Col md={3} md={6} lg={2} xl={3}>
            <h4 className="secondary-txt">Oficina</h4>
            <h6 className="secondary-txt">
              Av Colegios, Cancún, Q. Roo Número 123, 2do Piso.
            </h6>
          </Col>
        </Row>
      </Col>
      <Col md={12}>
        <Row className="g-0">
          <Col
            md={12}
            className="text-center align-items-center mt-2 text-light primary-bg g-0 pt-1"
          >
            <span>
              <p>
                Todos los Derechos Reservados Runa Residencial
                <a
                  href="/politicas-privacidad"
                  className="text-light text-decoration-none mx-1"
                >
                  Políticas de pivacidad
                </a>
              </p>
            </span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
