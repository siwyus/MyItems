import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ItemAddForm = props => {
  const initialFormState = { id: null, name: "" };

  const [item, setItem] = useState(initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setItem({ ...item, [name]: value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (!item.name) return;

    props.addItem(item);
    setItem(initialFormState);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={item.name}
        onChange={handleInputChange}
      />

      <button>Add new item</button>
    </form>
  );
};

export default ItemAddForm;
