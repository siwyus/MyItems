// eslint-disable-next-line
import React, { useContext, useEffect, Fragment } from "react";

import ItemContext from "../../context/items/itemContext";
import { Col, Row, Alert, Spinner, Container } from "react-bootstrap";
import Item from "./Item";

const ItemList = () => {
  const itemContext = useContext(ItemContext);
  const { items, getItems, loading } = itemContext;

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  let id = 0;

  return (
    <Fragment>
      <h2 className="text-center text-primary">Myitems</h2>
      <br />
      {items !== null && items.length === 0 && !loading && (
        <Alert variant="secondary" className="centered">
          Lack of items.
        </Alert>
      )}
      <div className="scroll">
        {items !== null && !loading ? (
          items.map(item => (
            <Container className="list-group-item" key={item._id}>
              <Row>
                <Col xs="1">{(id = id + 1)}.</Col>
                <Col>
                  <Item key={item._id} item={item} />
                </Col>
              </Row>
              {/* {console.log(item._id)} */}
            </Container>
          ))
        ) : (
          <div>
            <Spinner animation="border" size="large" variant="secondary" />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ItemList;
