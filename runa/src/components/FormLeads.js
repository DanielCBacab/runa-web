import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";

export default function FormLeads() {
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
          onChange={(e) => handle(e)}
          placeholder="Teléfono"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="email"
          id="email"
          onChange={(e) => handle(e)}
          placeholder="Correo electrónico"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="city"
          onChange={(e) => handle(e)}
          placeholder="Ciudad"
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
