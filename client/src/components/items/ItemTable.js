import React, { useContext, useEffect } from "react";
import ItemContext from "../../context/items/itemContext";
import { Table } from "react-bootstrap";

const ItemTable = item => {
  const itemContext = useContext(ItemContext);
  const { items, getItems, loading } = itemContext;

  useEffect(() => {
    getItems();
    console.log(itemContext);
    // eslint-disable-next-line
  }, []);
  console.log(items);

  return (
    // <Table striped bordered hover size="sm">
    //   <thead>
    //     <tr>
    //       <th>#</th>
    //       <th>Name</th>
    //       <th>Actions</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {items !== "" ? (
    //       items.map(item => (
    //         <tr key={item._id}>
    //           <td>{}</td>
    //           <td>{item.name}</td>
    //           <td>
    //             <button type="button" className="btn btn-primary">
    //               Edit
    //             </button>
    //             <button className="btn btn-danger">Delete</button>
    //           </td>
    //         </tr>
    //       ))
    //     ) : (
    //       <tr>
    //         <td colSpan={3}>No items.</td>
    //       </tr>
    //     )}
    //   </tbody>
    // </Table>
    <div>
      {items !== null &&
        items.map(item => <div key={item._id}>{item.name}</div>)}
      <h1>itemtable</h1>
    </div>
  );
};

export default ItemTable;
