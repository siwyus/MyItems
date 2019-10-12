import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ItemAddForm = props => {
  const initialFormState = { id: null, name: "" };

  const [item, setItem] = useState(initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setItem({ ...item, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!item.name) return;

        props.addItem(item);
        setItem(initialFormState);
      }}
    >
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
