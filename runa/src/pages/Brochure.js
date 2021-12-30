import React from "react";
import { Container, Row, Col, Ratio } from "react-bootstrap";
import NavRuna from "../components/NavRuna";
export default function Brochure() {
  return (
    <Container fluid className="degradado g-0">
      <NavRuna />
      <Row className="p-0 m-0">
        <Col className="vh-100" md={12}>
          <iframe
            src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=zji2j3nd1j"
            width="100%"
            height="100%"
            seamless="seamless"
            scrolling="no"
            frameBorder="0"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}
