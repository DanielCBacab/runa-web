import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../img/simple-logo.svg";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const nav = [
  { link: "/", content: "Inicio" },
  { link: "/#nosotros", content: "Nosotros" },
  { link: "/#trasciende", content: "Trasciende" },
  { link: "/#amenidades", content: "Amenidades" },
  { link: "/#ubicacion", content: "Ubicación" },
  { link: "/#financiamiento", content: "Financiamiento" },
  { link: "/#masterplan", content: "Masterplan" },
  // { link: "/#equipo", content: "Equipo" },
  { link: "/brochure", content: "Brochure" },
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

export default function NavRuna() {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      className="nav-runa"
      expand="xl"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/" className="mx-4 mx-md-3 text-light me-auto ">
          <img
            src={logo}
            width="46"
            height="46"
            className="d-inline-block align-top"
            alt="Runa Residencial"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {nav.map((nav) => (
              <Nav.Link
                className="text-light mx-4 mx-md-3 my-1 m-md-0 text-light"
                href={nav.link}
                key={nav.content}
              >
                {nav.content}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            {icons.map((icons) => (
              <IconContext.Provider
                value={{
                  className: "m-2 text-light",
                  size: "1.5rem",
                }}
              >
                <a href={icons.link} target="_blank" rel="noreferrer">
                  {icons.iconName}
                </a>
              </IconContext.Provider>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
