import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Container>
      <h1 className="text-center">My Items App</h1>
      <p className="text-center">
        Save your items for not to forget them while moving!
      </p>
      <Row>
        <Col>
          <h2> Add Item </h2>
        </Col>
        <Col>
          <h2> Items </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
