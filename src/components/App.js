import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import Header from "./Header";

function App() {
  const [items, setItems] = useState([
    // Initial items array
  ]);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <Header />
      <ItemForm onItemFormSubmit={handleAddItem} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;