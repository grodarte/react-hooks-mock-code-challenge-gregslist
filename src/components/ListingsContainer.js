import React from "react";
import ListingCard from "./ListingCard";
import NewListingForm from "./NewListingForm";

function ListingsContainer({listings, onDeleteItem, onSubmitNewItem}) {
  return (
    <main>
      <NewListingForm onSubmitNewItem={onSubmitNewItem}/>
      <ul className="cards">
        {listings.map(listing=>{
          return <ListingCard key={listing.id} listing={listing} onDeleteItem={onDeleteItem}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
