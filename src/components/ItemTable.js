import React from "react";
import { Table } from "react-bootstrap";

const ItemTable = props => {
  return (
    <Table bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.items.length > 0 ? (
          props.items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(item);
                  }}
                  className="btn btn-primary"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteItem(item.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
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
