import React, { useState, useEffect } from "react";

const ItemEditForm = props => {
  const [item, setItem] = useState(props.currentItem);

  useEffect(() => {
    setItem(props.currentItem);
  }, [props]);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setItem({ ...item, [name]: value });
  };
  const onSubmit = e => {
    e.preventDefault();

    props.updateItem(item.id, item);
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

      <button>Update item</button>
      <button onClick={() => props.setEditing(false)}>Cancel</button>
    </form>
  );
};

export default ItemEditForm;
