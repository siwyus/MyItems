import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ItemTable from "./components/ItemTable";
import ItemAddForm from "./components/ItemAddForm";
import ItemEditForm from "./components/ItemEditForm";
// updateItem={updateItem};

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

  //Edit staff

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "" };
  const [currentItem, setCurrentItem] = useState(initialFormState);

  const editRow = item => {
    setEditing(true);

    setCurrentItem({ id: item.id, name: item.name });
  };

  // Add Item

  const addItem = item => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  // Delete Item

  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id));
    setEditing(false);
  };

  // Edit Item

  const updateItem = (id, updatedItem) => {
    setEditing(false);

    setItems(items.map(item => (item.id === id ? updatedItem : item)));
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
          {editing ? (
            <div>
              <h2>Edit item</h2>
              <ItemEditForm
                editing={editing}
                setEditing={setEditing}
                currentItem={currentItem}
                updateItem={updateItem}
              />
            </div>
          ) : (
            <div>
              <h2>Add item</h2>
              <ItemAddForm addItem={addItem} />
            </div>
          )}
        </Col>
        <Col>
          <h2 className="text-center"> Items </h2>
          <br />
          <ItemTable items={items} deleteItem={deleteItem} editRow={editRow} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
