import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(searchText) {
    setSearch(searchText);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }
    
    if (search && !item.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="ShoppingList">
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange} 
        search={search}
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