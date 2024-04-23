import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchedItem, setSearchedItem] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(listingData=>setListings(listingData))
  }, [])

  function handleDeleteItem(deletedItemID){
    const updatedListings = listings.filter(listing=>listing.id !== deletedItemID)
    setListings(updatedListings)
  }

  function handleSearchSubmit(searchValue){
    setSearchedItem(searchValue.toLowerCase())
  }

  return (
    <div className="app">
      <Header onSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer 
        listings={
          listings.filter(listing=>listing.description.toLowerCase().includes(searchedItem))
        } 
        onDeleteItem={handleDeleteItem}/>
    </div>
  );
}

export default App;
