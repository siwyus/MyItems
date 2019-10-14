import React, { useState, useContext, useEffect } from "react";
import ItemContext from "../../context/items/itemContext";

const ItemForm = () => {
  const itemContext = useContext(ItemContext);
  const { addItem, current, clearCurrent, updateItem, error } = itemContext;

  useEffect(() => {
    if (current !== null) {
      setItem(current);
    } else {
      setItem({
        name: ""
      });
    }
  }, [error, itemContext, current]);

  const [item, setItem] = useState({
    name: ""
  });

  const { name } = item;

  const onChange = e => setItem({ ...item, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addItem(item);
    } else {
      updateItem(item);
    }

    setItem({
      name: ""
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>{!current ? "Add item" : "Edit item"}</h2>
        <input
          className="form-control"
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          required
        />
        <input
          type="submit"
          value={!current ? "Add item" : "Update item"}
          className="btn btn-dark btn-block"
        />
        {current && <button onClick={clearAll}>Clear</button>}
      </form>
    </div>
  );
};

export default ItemForm;
