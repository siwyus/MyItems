import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ItemTable from "./components/ItemTable";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Container>
      <h1 className="text-center">My Items App</h1>
      <p className="text-center">
        Save your items for not to forget them while moving!
      </p>
      <br />
      <Row>
        <Col>
          <h2 className="text-center"> Add Item </h2>
        </Col>
        <Col>
          <h2 className="text-center"> Items </h2>
          <br />
          <ItemTable />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
