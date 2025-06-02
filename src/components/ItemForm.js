import React, { useState } from "react";
import { v4 as uuid } from "uuid";  // Import uuid

function ItemForm({ onItemFormSubmit }) {
  // Add state for form inputs
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault();
    
    // Create new item object
    const newItem = {
      id: uuid(),  // Generate unique ID
      name,
      category,
    };
    
    // Pass new item to parent
    onItemFormSubmit(newItem);
    
    // Reset form
    setName("");
    setCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={name}  // Controlled input
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select 
          name="category"
          value={category}  // Controlled select
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;