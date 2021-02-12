import React from "react";
import { Button, Form } from "react-bootstrap";

import "./LoginPage.css";
import Sidebar from "../components/sidebar";

export default function LoginPage() {
  return (
    <>
      <Sidebar />
      <div id="page-landing" className="container-fluid">
        <Form>
          <Form.Text className="text-muted">
            <h1>Olá</h1>
            <h4>Acesse aqui seus dashboards!</h4>
          </Form.Text>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Seu Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
      </div>
    </>
  );
}
