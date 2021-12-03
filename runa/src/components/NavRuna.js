import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const nav = [
  {
    link: "/",
    content: "Inicio",
  },
  {
    link: "#nosotros",
    content: "Nosotros",
  },
  {
    link: "#amenidades",
    content: "Amenidades",
  },
  {
    link: "#financiamiento",
    content: "Financiamiento",
  },
  {
    link: "#masterplan",
    content: "Masterplan",
  },
  {
    link: "#galeria",
    content: "Galería",
  },

  {
    link: "#contacto",
    content: "Contacto",
  },
];

export default function NavRuna() {
  return (
    <Navbar bg="dark" className="w-100">
      <Container fluid>
        <Navbar.Brand href="/" className="text-light me-auto">
          Runa Residencial
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {nav.map((nav) => (
              <Nav.Link className="text-light mx-md-3" to={nav.link}>
                {nav.content}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
