import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchedItem, setSearchedItem] = useState("")
  const [sortAtoZ, setSortAtoZ] = useState(false)

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

  function handleSortListings(sortList){
    setSortAtoZ(sortList)
    if(sortList){
      const sortedList = listings.sort((a,b)=> a.description.localeCompare(b.description))
      setListings(sortedList)
    } else {
      const unsortedList = listings.sort((a,b)=> a.id - b.id)
      setListings(unsortedList)
    }
  }

  function handleSubmitNewItem(newItem){
    const newList = [
      ...listings,
      newItem
    ]
    setListings(newList)
  }
  

  return (
    <div className="app">
      <Header onSearchSubmit={handleSearchSubmit} onSortListings={handleSortListings} sortAtoZ={sortAtoZ}/>
      <ListingsContainer 
        listings={
          listings.filter(listing=>listing.description.toLowerCase().includes(searchedItem))
        } 
        onDeleteItem={handleDeleteItem} onSubmitNewItem={handleSubmitNewItem}/>
    </div>
  );
}

export default App;
