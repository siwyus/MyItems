import React from "react";
import { Table } from "react-bootstrap";

const ItemTable = () => {
  const actions = (
    <td>
      <button type="button" class="btn btn-primary">
        Edit
      </button>
      <button type="button" class="btn btn-danger">
        Delete
      </button>
    </td>
  );
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
        <tr>
          <td>1</td>
          <td>item1</td>
          <td>
            <button type="button" class="btn btn-primary">
              Edit
            </button>
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>item2</td>
          {actions}
        </tr>
        <tr>
          <td>3</td>
          <td>item3</td>
          {actions}
        </tr>
      </tbody>
    </Table>
  );
};

export default ItemTable;
