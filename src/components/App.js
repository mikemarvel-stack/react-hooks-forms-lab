import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import Header from "./Header";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Yogurt", category: "Dairy" },
    { id: 2, name: "Pomegranate", category: "Produce" },
    { id: 3, name: "Lettuce", category: "Produce" },
    { id: 4, name: "String Cheese", category: "Dairy" },
    { id: 5, name: "Cookies", category: "Dessert" },
  ]);

  // Add new item handler
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <Header />
      <ItemForm onItemFormSubmit={handleAddItem} /> {/* Add form */}
      <ShoppingList items={items} />
    </div>
  );
}

export default App;