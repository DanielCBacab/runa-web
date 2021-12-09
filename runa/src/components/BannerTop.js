import React from "react";
import FormLeads from "./FormLeads";
import { Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../img/logo.svg";

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

export default function BannerTop() {
  return (
    <Row className="justify-content-center align-items-center banner-top g-0 py-5">
      <Col md={1} className="align-self-end pb-5 mb-5 d-none d-md-block">
        {icons.map((icons) => (
          <IconContext.Provider
            value={{
              className: "my-3 col-12 primary-txt",
              size: "2.688rem",
            }}
          >
            <a href={icons.link} target="_blank">
              {icons.iconName}
            </a>
          </IconContext.Provider>
        ))}
      </Col>
      <Col md={6} className="text-center my-5 py-5">
        <img src={logo} className="img-fluid" width="40%" height="40%" alt="" />
      </Col>
      <Col xs={12} md={4}>
        <FormLeads />
      </Col>
      <Col md={1}></Col>
    </Row>
  );
}
