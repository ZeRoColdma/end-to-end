import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import "./LoginPage.css";
import Sidebar from "../../components/sidebar";

export default function LoginPage({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  // function handleSubmit() {
  //   if ((login === "adm@adm.com.br") & (password === "123")) {
  //     history.push("/dashboard");
  //   }
  // }

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
            <Form.Control
              type="email"
              placeholder="Seu Email"
              value={email}
              onChange={(event) => onChangeHandler(event)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(event) => onChangeHandler(event)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
      </div>
    </>
  );
}
