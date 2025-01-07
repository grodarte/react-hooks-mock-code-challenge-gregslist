import React from "react";
import ListingCard from "./ListingCard"

function ListingsContainer({ items, onDeleteItem }) {
  const itemElements = items.map(item=> <ListingCard key={item.id} item={item} onDeleteItem={onDeleteItem}/>)

  return (
    <main>
      <ul className="cards">
        {itemElements}
      </ul>
    </main>
  );
}

export default ListingsContainer;
