import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import start from "../img/runa-estrella.png";
import woodBrush from "../img/woodBrush.png";

const nav = [
  { link: "/", content: "Inicio" },
  { link: "/#nosotros", content: "Nosotros" },
  { link: "/#amenidades", content: "Amenidades" },
  { link: "/#financiamiento", content: "Financiamiento" },
  { link: "/#masterplan", content: "Masterplan" },
  { link: "/#contacto", content: "Contacto" },
];

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
      className="justify-content-center align-items-center py-5 g-0  position-relative"
      id="contacto"
    >
      <img src={woodBrush} className="woodBrush" alt="" />
      <Col md={1} className="d-none d-md-block"></Col>
      <Col xs={10} md={4} className="map">
        <h4 className="primary-txt text-center mb-5 d-block d-md-none">
          Ubicación y <br />
          contacto
        </h4>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.823376506533!2d-87.03149868494712!3d20.99971599414475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5087d045c77dac17!2zMjDCsDU5JzU5LjAiTiA4N8KwMDEnNDUuNSJX!5e0!3m2!1ses-419!2smx!4v1638913447117!5m2!1ses-419!2smx"
          className="w-100 text-center"
          allowFullScreen="yes"
          loading="lazy"
          title="Maps"
        ></iframe>
        <Col md={12} className="justify-content-end d-flex">
          <a
            className="align-self-end btn btn-link text-decoration-none text-light"
            href="#"
          >
            <img src={start} width="25px" alt="" /> Volver al inicio
          </a>
        </Col>
      </Col>
      <Col md={1} className="d-none d-md-block"></Col>
      <Col xs={11} md={5}>
        <h4 className="primary-txt mb-5 d-none d-md-block">
          Ubicación y <br />
          contacto
        </h4>

        <div className="primary-bg w-100 p-4 my-5">
          <h5 className="mb-3">Runa Residencial</h5>
          <p>
            Un entorno que va más allá de un espacio de relajación y calma lejos
            de la ciudad, es un santuario de conexión contigo mismo y los tuyos
            en donde la vida cotidiana y tú inversión a futuro serán una
            experiencia sublime lleno de confort, afabilidad y riqueza de alta
            vibración.
          </p>
        </div>
        <div className="text-light mb-5">
          <p className="m-0">
            Whatsapp:
            <a
              href="tel:9981172398"
              className="text-light text-decoration-none"
            >
              998 117 2398
            </a>
          </p>
          <p className="m-0">
            Oficina:
            <a
              href="tel:9982770954"
              className="text-light text-decoration-none"
            >
              998 885 6186
            </a>
          </p>
          <p className="m-0">
            <a
              href="mailto:conexion@runaresidencial.com"
              className="text-light text-decoration-none"
            >
              conexion@runaresidencial.com
            </a>
          </p>
          <p className="m-0">
            <a
              href="mailto:teayudo@runaresidencial.com"
              className="text-light text-decoration-none"
            >
              teayudo@runaresidencial.com
            </a>
          </p>
          <p className="m-0">
            <a
              href="mailto:inversiones@runaresidencial.com"
              className="text-light text-decoration-none"
            >
              inversiones@runaresidencial.com
            </a>
          </p>
        </div>
        <div className="mb-5">
          <h5 className="mb-3 primary-txt">Síguenos</h5>
          {icons.map((icons) => (
            <IconContext.Provider
              value={{
                className: "m-2 primary-txt",
                size: "2.688rem",
              }}
            >
              <a href={icons.link} target="_blank" rel="noreferrer">
                {icons.iconName}
              </a>
            </IconContext.Provider>
          ))}
        </div>

        <div className="primary-txt d-none d-md-block">
          <h5 className="mb-3">Menú</h5>
          <Nav defaultActiveKey="/">
            {nav.map((nav) => (
              <Nav.Link className="text-light primary-txt" href={nav.link}>
                {nav.content}
              </Nav.Link>
            ))}
          </Nav>
        </div>
      </Col>
      <Col md={1}></Col>

      <Col md={12} className="text-center align-items-center mt-2 text-light">
        <span>
          <p>
            Revisa nuestras:
            <a
              href="/politicas-privacidad"
              className="primary-txt text-decoration-none mx-1"
            >
              Políticas de pivacidad
            </a>
          </p>
        </span>
      </Col>
    </Row>
  );
}
