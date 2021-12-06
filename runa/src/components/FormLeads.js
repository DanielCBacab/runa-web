import React from "react";
import { Form, Button } from "react-bootstrap";

export default function FormLeads() {
  return (
    <Form className="text-center runa-form runa-form2">
      
      <h3 className="primary-txt">¡Regístrate!</h3>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="text"
          id="name"
          placeholder="Nombre completo"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="tel"
          id="phone"
          placeholder="Teléfono"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="email"
          id="email"
          placeholder="Correo electrónico"
        ></Form.Control>
      </Form.Group>
      <Form.Group>  
        <Form.Control
          className="mb-3"
          type="text"
          id="city"
          placeholder="Ciudad"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="mb-3"
          type="email"
          id="email"
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
        Al enviar el fomulario aceptas nuestras Políticas de Privacidad.
      </small>
    </Form>
  );
}
