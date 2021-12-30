import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../img/simple-logo.svg";

const nav = [
  { link: "/", content: "Inicio" },
  { link: "/#nosotros", content: "Nosotros" },
  { link: "/#amenidades", content: "Amenidades" },
  { link: "/#financiamiento", content: "Financiamiento" },
  { link: "/#masterplan", content: "Masterplan" },
  { link: "/#contacto", content: "Contacto" },
  { link: "/brochure", content: "Brochure" },
];

export default function NavRuna() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
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
                className="text-light mx-4 mx-md-3 my-1 m-md-0 primary-txt"
                href={nav.link}
                key={nav.content}
              >
                {nav.content}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
