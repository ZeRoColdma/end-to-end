import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import "./LoginPage.css";
import logoEndToEnd from "../../assets/endtoend.png";

export default function LoginPage({ history }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    if ((login === "adm@adm.com.br") & (password === "123")) {
      history.push("/dashboard");
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <aside className="app-sidebar">
              <img src={logoEndToEnd} alt="Logo End To End" />
              <div>
                <h1>
                  Inteligência para o seu <br />
                  negócio
                </h1>
                <p>
                  Ajudamos você a tomar decisões e para <br />
                  aprimorar a gestão da sua empresa e melhorar seus resultados
                </p>
              </div>
            </aside>
          </div>

          <div id="page-landing" className="col-md-12 col-lg-8 row">
            <div className="container-fluid">
              <Form onSubmit={handleSubmit}>
                <Form.Text className="text-muted">
                  <h1>Olá</h1>
                  <h4>Acesse aqui seus dashboards!</h4>
                </Form.Text>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Seu Email"
                    value={login}
                    onChange={(event) => setLogin(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Entrar
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
