import React from "react";
import { Form, Button } from "react-bootstrap";

export default function FormLeads() {
  return (
    <Form>
      <h3>¡Regístrate para empezar a invertir!</h3>
      <Form.Group>
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          id="name"
          placeholder="Ej. Juan Pérez"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Teléfono a 10 dígitos</Form.Label>
        <Form.Control
          className="mb-3"
          type="tel"
          id="phone"
          placeholder="Ej. 5544778866"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          className="mb-3"
          type="email"
          id="email"
          placeholder="Ej. juanperez@mail.com"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Ciudad</Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          id="city"
          placeholder="Ej. Ciudad de México"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>¿Dudas o comentarios?</Form.Label>
        <Form.Control
          className="mb-3"
          type="email"
          id="email"
          placeholder="Escribe tu mensaje por favor."
          as="textarea"
          rows={3}
        ></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar formulario
      </Button>
      <br />
      <small>
        Al enviar el fomulario aceptas nuestras Políticas de Privacidad.
      </small>
    </Form>
  );
}
