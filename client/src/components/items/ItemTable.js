// eslint-disable-next-line
import React, { useContext, useEffect, Fragment } from "react";

import ItemContext from "../../context/items/itemContext";
import { Col, Row, Alert, Spinner } from "react-bootstrap";
import Item from "./Item";

const ItemTable = () => {
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
      {items !== null && !loading ? (
        items.map(item => (
          <Fragment key={item._id}>
            <Row>
              <Col xs="1">{(id = id + 1)}.</Col>
              <Col>
                <Item key={item._id} item={item} />
              </Col>
            </Row>
            {/* {console.log(item._id)} */}
          </Fragment>
        ))
      ) : (
        <div>
          <Spinner animation="border" size="large" variant="secondary" />
        </div>
      )}
    </Fragment>
  );
};

export default ItemTable;
