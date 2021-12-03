import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const icons = [
  {
    iconName: <FaFacebook />,
    link: "#facebook",
  },

  {
    iconName: <FaYoutube />,
    link: "#youtube",
  },

  {
    iconName: <FaInstagram />,
    link: "#instagram",
  },
];

export default function Footer() {
  return (
    <Row className="justify-content-center alignt-items-center py-5 gap-1">
      <Col md={12}>
        <h2 className="text-center">Comunícate con nosotros</h2>
      </Col>
      <Col md={2}>
        <h5 className="mb-3">Runa Residencial</h5>
        <p>
          Un patrimonio para tu familia y el mejor lugar de inversión en México.
          (O ALGUN sLOGAN)
        </p>
      </Col>
      <Col md={2}>
        <h5 className="mb-3">Síguenos</h5>
        {icons.map((icons) => (
          <IconContext.Provider
            value={{
              color: "blue",
              className: "my-3 col-4",
              size: "2.688rem",
            }}
          >
            <a href={icons.link}>{icons.iconName}</a>
          </IconContext.Provider>
        ))}
      </Col>
      <Col md={2}>
        <h5 className="mb-3">Contáctanos</h5>
        <p>
          Whatsapp: <a href="tel:9982770954">998 277 0954</a>
        </p>
        <p>
          Oficina: <a href="tel:9982770954">998 885 6186</a>
        </p>
        <p>
          <a href="mailto:conexion@runaresidencial.com">
            conexion@runaresidencial.com
          </a>
        </p>
        <p>
          <a href="mailto:teayudo@runaresidencial.com">
            teayudo@runaresidencial.com
          </a>
        </p>
        <p>
          <a href="mailto:inversiones@runaresidencial.com">
            inversiones@runaresidencial.com
          </a>
        </p>
      </Col>
      <Col md={2}>
        <h5 className="mb-3">Menú</h5>
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/">Nosotros</Nav.Link>
          <Nav.Link href="/">Amenidades</Nav.Link>
          <Nav.Link href="/">Financiamiento</Nav.Link>
          <Nav.Link href="/">Masterplan</Nav.Link>
          <Nav.Link href="/">Galería</Nav.Link>
        </Nav>
      </Col>
      <Col md={2}>
        <h5 className="mb-3">Misión</h5>
        <p>
          Gaia Hábitat es un desarrollo diseñado de manera sustentable,
          respetamos la conservación de la fauna y flora nativa, utilizamos los
          recursos naturales de la zona de manera consciente para vivir
          cómodamente y en armonía con la naturaleza.
        </p>
      </Col>
    </Row>
  );
}
