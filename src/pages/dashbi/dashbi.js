import React from "react";
import {
  Button,
  Card,
  CardDeck,
  Navbar,
  Container,
  Row,
  Dropdown,
} from "react-bootstrap";

import Logo from "../../assets/endtoend.png";

export default function Dashboard({ history }) {
  function handleSubmit() {
    history.goBack();
  }

  return (
    <>
      <Navbar
        variant="light"
        className="bg-outline-secondary justify-content-between"
      >
        <Navbar.Brand>
          <img alt="" src={Logo} width="90" height="40" />{" "}
        </Navbar.Brand>

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">adm@adm.com</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleSubmit}>Desconectar</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>

      <div style={{ margin: 10 }}>
        <CardDeck>
          <Container fluid className="shadow p-3  bg-white rounded">
            <h1>Selecionar dashboard</h1>
            <Row sm={8}>
              <Card>
                <Card.Body>
                  <Card.Title>Análise de concorrentes por região</Card.Title>
                  <Card.Text>Mills</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-secondary" type="submit">
                    Acessar
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Membership & Vindi</Card.Title>
                  <Card.Text>Palmeiras </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-secondary" type="submit">
                    Acessar
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Site Galo na Veia</Card.Title>
                  <Card.Text>Atlético Mineiro</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-secondary" type="submit">
                    Acessar
                  </Button>
                </Card.Footer>
              </Card>
            </Row>
          </Container>

          <Container fluid className="shadow p-3  bg-white rounded">
            <Row>
              <Card>
                <Card.Body>
                  <Card.Title>B3 - Compras</Card.Title>
                  <Card.Text>B3</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-secondary" type="submit">
                    Acessar
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Bonaparte - Barbearia</Card.Title>
                  <Card.Text>Bonaparte </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-secondary" type="submit">
                    Acessar
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Palmeiras - Temporário</Card.Title>
                  <Card.Text>Quipo</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-secondary" type="submit">
                    Acessar
                  </Button>
                </Card.Footer>
              </Card>
            </Row>
          </Container>

          <Container fluid className="shadow p-3  bg-white rounded">
            <Row>
              <Card>
                <Card.Body>
                  <Card.Title>Gestão Galo na Veia</Card.Title>
                  <Card.Text>Atlético Mineiro</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-secondary" type="submit">
                    Acessar
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Beleza Demo</Card.Title>
                  <Card.Text>Beleza Demo </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-secondary" type="submit">
                    Acessar
                  </Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Demo - Botafogo</Card.Title>
                  <Card.Text>Botafogo</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-secondary" type="submit">
                    Acessar
                  </Button>
                </Card.Footer>
              </Card>
            </Row>
          </Container>
        </CardDeck>
      </div>
    </>
  );
}
