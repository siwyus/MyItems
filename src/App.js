import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ItemTable from "./components/ItemTable";
import ItemAddForm from "./components/ItemAddForm";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const itemsData = [
    {
      id: "1",
      name: "item1"
    },
    {
      id: "2",
      name: "item1"
    },
    {
      id: "3",
      name: "item1"
    }
  ];

  const [items, setItems] = useState(itemsData);

  // Add Item

  const addItem = item => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  // Delete Item

  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

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
          <ItemAddForm addItem={addItem} deleteItem={deleteItem} />
        </Col>
        <Col>
          <h2 className="text-center"> Items </h2>
          <br />
          <ItemTable items={items} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
