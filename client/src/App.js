import React from "react";

import "./App.css";
import ItemState from "./context/items/ItemState";

const App = () => {
  return (
    <ItemState>
      <h1>Hello World</h1>
    </ItemState>
  );
};

export default App;
