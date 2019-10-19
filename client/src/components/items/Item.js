import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

import ItemContext from "../../context/items/itemContext";

const Item = ({ item }) => {
  const itemContext = useContext(ItemContext);
  const { deleteItem, setCurrent, clearCurrent } = itemContext;

  const { _id, name } = item;

  const onDelete = () => {
    deleteItem(_id);
    clearCurrent();
  };

  return (
    <Fragment>
      {name && (
        <Row>
          <Col sm="8">{name}</Col>

          <Col sm="4">
            <button
              className="btn btn-dark btn-sm"
              onClick={() => {
                setCurrent(item);
              }}
            >
              Edit
            </button>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>
              Delete
            </button>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired
};

export default Item;
