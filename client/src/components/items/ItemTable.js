import React, { useContext, useEffect } from "react";
import ItemContext from "../../context/items/itemContext";
import { Table } from "react-bootstrap";

const ItemTable = () => {
  const itemContext = useContext(ItemContext);
  const { items, getItems, loading } = itemContext;

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  let id = 0;
  // console.log(items);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items !== null && !loading ? (
          items.map(item => (
            <tr key={item._id}>
              <td>{(id = id + 1)}</td>
              <td>{item.name}</td>
              <td>
                <button type="button" className="btn btn-primary">
                  Edit
                </button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No items.</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default ItemTable;
