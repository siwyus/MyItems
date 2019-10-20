import React, { useContext, useEffect } from "react";
import ItemContext from "../../context/items/itemContext";
import { Col, Row, Container } from "react-bootstrap";
import ItemToPrint from "./ItemToPrint";

const PrintItems = () => {
  const itemContext = useContext(ItemContext);
  const { items, getItems, loading } = itemContext;

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  let id = 0;
  return (
    <div>
      {items !== null &&
        !loading &&
        items.map(item => (
          <Container className="list-group-item text-center" key={item._id}>
            <Row>
              <Col xs="1">{(id = id + 1)}.</Col>
              <Col>
                <ItemToPrint key={item._id} item={item} />
              </Col>
            </Row>
          </Container>
        ))}
    </div>
  );
};

export default PrintItems;
