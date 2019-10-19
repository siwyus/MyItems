import React from "react";
import ItemForm from "./components/items/ItemForm";
import { Col, Container, Row } from "react-bootstrap";
import PrintComponents from "react-print-components";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemState from "./context/items/ItemState";
import ItemList from "./components/items/ItemList";
import MainNavbar from "./components/layout/MainNavbar";
import PrintItems from "./components/print/PrintItems";

const App = () => {
  return (
    <ItemState>
      <MainNavbar />
      <br />
      <Container>
        <Row>
          <Col md="auto">
            <Row>
              <ItemForm />
            </Row>
            <Row className="print">
              <PrintComponents
                className="print"
                trigger={
                  <button className="btn btn-success btn-lg">
                    Print list of your items!
                  </button>
                }
              >
                <PrintItems />
              </PrintComponents>
            </Row>
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
