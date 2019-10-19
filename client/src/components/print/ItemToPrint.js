import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";

const ItemToPrint = ({ item }) => {
  const { name } = item;

  return <Fragment>{name && <Row>{name}</Row>}</Fragment>;
};

ItemToPrint.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemToPrint;
