import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");  // Add search state

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(text) {  // Add search handler
    setSearch(text);
  }

  const itemsToDisplay = items
    .filter((item) => {
      // Add search filter
      if (search && !item.name.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      
      // Existing category filter
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    });

  return (
    <div className="ShoppingList">
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange} 
        search={search}  // Pass search prop
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;