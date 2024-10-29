import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [searchBy, setSearchBy] = useState("")

  const displayItems = items.filter(item=>item.description.toLowerCase().includes(searchBy))

  function handleDeleteItem(deletedItem){
    const updatedItems = items.filter(item=>item.id !== deletedItem.id)
    setItems(updatedItems)
  }

  function handleSearchSubmit(search){
    setSearchBy(search.toLowerCase())
  }

  useEffect(()=>{
    fetch(`http://localhost:6001/listings`)
    .then(r=>r.json())
    .then(itemData=>setItems(itemData))
  }, [])

  return (
    <div className="app">
      <Header onSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer itemData={displayItems} onDeleteItem={handleDeleteItem}/>
    </div>
  );
}

export default App;
