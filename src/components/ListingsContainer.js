import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ itemData, onDeleteItem }) {

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {itemData.map(item=><ListingCard key={item.id} item={item} onDeleteItem={onDeleteItem}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
