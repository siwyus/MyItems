import React from "react";
import ItemForm from "./components/items/ItemForm";
import { Col, Container, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import ItemState from "./context/items/ItemState";
import ItemTable from "./components/items/ItemTable";

const App = () => {
  return (
    <ItemState>
      <Container>
        <Row>
          <Col>
            <ItemForm />
          </Col>

          <Col>
            <h2>hello</h2>
            <ItemTable />
          </Col>
        </Row>
      </Container>
    </ItemState>
  );
};

export default App;
