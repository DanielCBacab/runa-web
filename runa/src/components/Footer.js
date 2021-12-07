import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import start from "../img/runa-estrella.png";
import woodBrush from "../img/woodBrush.png";

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
      className="justify-content-between align-items-center py-5 g-0 secondary-bg position-relative"
      id="contacto"
    >
      <img src={woodBrush} className="woodBrush" />
      <Col md={1}></Col>
      <Col md={4} className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.823376506533!2d-87.03149868494712!3d20.99971599414475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5087d045c77dac17!2zMjDCsDU5JzU5LjAiTiA4N8KwMDEnNDUuNSJX!5e0!3m2!1ses-419!2smx!4v1638913447117!5m2!1ses-419!2smx"
          width="100%"
          height="800"
          allowfullscreen="yes"
          loading="lazy"
        ></iframe>
        <Col md={12} className="justify-content-end d-flex">
          <a
            className="align-self-end btn btn-link text-decoration-none text-light"
            href="#"
          >
            <img src={start} width="25px" /> Volver al inicio
          </a>
        </Col>
      </Col>
      <Col md={1}></Col>
      <Col md={5}>
        <h4 className="primary-txt mb-5">
          Ubicación y <br />
          contacto
        </h4>

        <div className="primary-bg w-75 p-4 mb-5">
          <h5 className="mb-3">Runa Residencial</h5>
          <p>
            Es un desarrollo diseñado de manera sustentable, respetamos la
            conservación de la fauna y flora nativa, utilizamos los recursos
            naturales de la zona de manera consciente para vivir cómodamente y
            en armonía con la naturaleza.
          </p>
        </div>
        <div className="text-light mb-5">
          <p className="m-0">
            Whatsapp:
            <a
              href="tel:9982770954"
              className="text-light text-decoration-none"
            >
              998 277 0954
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
              <a href={icons.link} target="_blank">
                {icons.iconName}
              </a>
            </IconContext.Provider>
          ))}
        </div>

        <div className="primary-txt">
          <h5 className="mb-3">Menú</h5>
          <Nav defaultActiveKey="/">
            <Nav.Link href="/" className="primary-txt">
              Inicio
            </Nav.Link>
            <Nav.Link href="/" className="primary-txt">
              Nosotros
            </Nav.Link>
            <Nav.Link href="/" className="primary-txt">
              Amenidades
            </Nav.Link>
            <Nav.Link href="/" className="primary-txt">
              Financiamiento
            </Nav.Link>
            <Nav.Link href="/" className="primary-txt">
              Masterplan
            </Nav.Link>
            <Nav.Link href="/" className="primary-txt">
              Contacto
            </Nav.Link>
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
              className="primary-txt text-decoration-none"
            >
              Políticas de pivacidad
            </a>
          </p>
        </span>
      </Col>
    </Row>
  );
}
