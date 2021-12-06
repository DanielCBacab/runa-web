import React from "react";
import FormLeads from "./FormLeads";
import { Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../img/logo.svg";

const icons = [
  { iconName: <FaFacebook />, link: "#facebook" },
  { iconName: <FaYoutube />, link: "#youtube" },
  { iconName: <FaInstagram />, link: "#instagram" },
];

export default function BannerTop() {
  return (
    <Row className="justify-content-center align-items-center vh-100 banner-top g-0">
      <Col md={1} className="align-self-end pb-5 mb-5">
        {icons.map((icons) => (
          <IconContext.Provider
            value={{
              className: "my-3 col-12 primary-txt",
              size: "2.688rem",
            }}
          >
            <a href={icons.link}>{icons.iconName}</a>
          </IconContext.Provider>
        ))}
      </Col>
      <Col md={6} className="text-center">
        <img src={logo} className="img-fluid" width="50%" height="50%" />
      </Col>
      <Col md={4}>
        <FormLeads />
      </Col>
      <Col md={1}></Col>
    </Row>
  );
}
