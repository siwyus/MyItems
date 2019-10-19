// eslint-disable-next-line
import React, { useContext, useEffect, Fragment } from "react";

import ItemContext from "../../context/items/itemContext";
import { Container, Col, Row } from "react-bootstrap";
import Item from "./Item";

const ItemTable = () => {
  const itemContext = useContext(ItemContext);
  const { items, getItems, loading } = itemContext;

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  // const onDelete = () => {
  //   deleteItem(item._id);
  //   clearCurrent();
  // };

  let id = 0;

  //console.log(items);

  //scroll

  return (
    <Fragment>
      <h2 className="text-center text-primary">Myitems</h2>
      <br />
      {items !== null &&
        !loading &&
        items.map(item => (
          <Container key={item._id}>
            <Row>
              <Col xs="1">{(id = id + 1)}</Col>
              <Col>
                <Item key={item._id} item={item} />
              </Col>
            </Row>
          </Container>
        ))}
    </Fragment>
  );
};

export default ItemTable;
