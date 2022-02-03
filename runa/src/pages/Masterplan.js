import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavRuna from "../components/NavRuna";
export default function Brochure() {
  return (
    <Container fluid className="g-0 vh-100 degradado">
      <NavRuna />
      <Row className="p-0 m-0 g-0 justify-content-center align-items-center">
        <Col xs={12} md={12} className="mt-5 pt-5 vh-100">
          <iframe
            src="https://admin.runaresidencial.com/planmaestroactualizado/1"
            width="100%"
            height="100%"
            seamless="seamless"
            scrolling="no"
            frameBorder="0"
            title="masterplan"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}
