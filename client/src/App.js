import React from "react";
import ItemForm from "./components/items/ItemForm";
import { Col, Container, Row } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemState from "./context/items/ItemState";
import ItemList from "./components/items/ItemList";
import MainNavbar from "./components/layout/MainNavbar";

const App = () => {
  return (
    <ItemState>
      <MainNavbar />
      <br />
      <Container>
        <Row>
          <Col md="auto">
            <ItemForm />
          </Col>

          <Col>
            <ItemList />
          </Col>
        </Row>
      </Container>
    </ItemState>
  );
};

export default App;
