import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(text) {
    setSearchText(text);
  }

  // Filter items based on category and search text
  const itemsToDisplay = items.filter((item) => {
    const matchesCategory = 
      selectedCategory === "All" || item.category === selectedCategory;
    
    const matchesSearch = 
      item.name.toLowerCase().includes(searchText.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange}
        searchText={searchText}
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