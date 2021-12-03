import React from "react";
import FormLeads from "./FormLeads";
import { Row, Col } from "react-bootstrap";
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

export default function BannerTop() {
  return (
    <Row className="justify-content-center align-items-center vh-100">
      <Col md={1} className="align-self-end pb-5 mb-5">
        {icons.map((icons) => (
          <IconContext.Provider
            value={{
              color: "blue",
              className: "my-3 col-12",
              size: "2.688rem",
            }}
          >
            <a href={icons.link}>{icons.iconName}</a>
          </IconContext.Provider>
        ))}
      </Col>
      <Col md={6}>
        <h1>
          Residenciales <br /> Místicas
        </h1>
      </Col>
      <Col md={4}>
        <FormLeads />
      </Col>
      <Col md={1}></Col>
    </Row>
  );
}
