import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import Axios from "axios";
import { IconContext } from "react-icons";

import { FaRegCheckCircle } from "react-icons/fa";
export default function FormLeads() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url = "https://admin.runaresidencial.com/api/leadapi";
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    clientNotes: "",
    productName: "Runa Residencial",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      phone: data.phone,
      email: data.email,
      city: data.city,
      clientNotes: data.clientNotes,
      productName: "Runa Residencial - Web",
    }).then((res) => {
      console.log(res.data);
      handleShow();
    });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  return (
    <Form
      className="text-center runa-form runa-form2"
      onSubmit={(e) => submit(e)}
    >
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        id="modalThankyou"
      >
        <Modal.Body className="text-center">
          <IconContext.Provider
            value={{
              className: "my-3 col-12 primary-txt",
              size: "4rem",
            }}
          >
            <FaRegCheckCircle />
          </IconContext.Provider>
          <h2 className="primary-txt text-center">¡Felicidades!</h2>
          <p className="text-center">
            Te has registrado con éxito, en breve uno de nuestros asesores te
            guiará en el proceso para adquirir tu lote.
          </p>
          <Button className="secondary-bg btn-lg btn" onClick={handleClose}>
            Cerrar ventana
          </Button>
        </Modal.Body>
      </Modal>

      <h3 className="primary-txt my-4">¡Regístrate!</h3>

      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="name"
          onChange={(e) => handle(e)}
          placeholder="Nombre completo"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="tel"
          id="phone"
          maxlength="10"
          pattern="[0-9]{0,10}"
          title="Número de teléfono a 10 dígitos"
          onChange={(e) => handle(e)}
          placeholder="Teléfono"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="email"
          id="email"
          onChange={(e) => handle(e)}
          placeholder="Correo electrónico"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="city"
          onChange={(e) => handle(e)}
          placeholder="Ciudad"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="clientNotes"
          onChange={(e) => handle(e)}
          placeholder="Mensaje"
          as="textarea"
          rows={3}
        ></Form.Control>
      </Form.Group>
      <Button variant="warning" type="submit" className="btn-lg">
        Enviar formulario
      </Button>
      <br />
      <small className="text-white mt-5">
        Al enviar el fomulario aceptas nuestras{" "}
        <a
          className="primary-txt text-decoration-none"
          href="/politicas-privacidad"
        >
          Políticas de Privacidad.
        </a>
      </small>
    </Form>
  );
}
