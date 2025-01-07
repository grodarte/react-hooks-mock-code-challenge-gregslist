import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [sortLocation, setSortLocation] = useState(false)

  useEffect(()=>{
    fetch(`http://localhost:6001/listings`)
    .then(r=>r.json())
    .then(itemData=>setItems(itemData))
  }, [])

  function handleDeleteItem(deletedItem){
    const newList = items.filter(item=> item.id !== deletedItem.id)
    setItems(newList)
  }

  function handleSearchItems(search){
    setSearchValue(search)
  }

  function handleSortLocation(){
    setSortLocation(sortLocation=>!sortLocation)
  }

  function handleNewItem(newItem){
    setItems([
      ...items,
      newItem
    ])
  }

  const displayItems = !searchValue ? items : items.filter(item=>item.description.toLowerCase().includes(searchValue.toLowerCase()))
  const sortedItems = !sortLocation ? items : items.sort((a,b)=> a.location.localeCompare(b.location))

  return (
    <div className="app">
      <Header onSearchItems={handleSearchItems} isChecked={sortLocation} onSortLocation={handleSortLocation} onNewItem={handleNewItem}/>
      <ListingsContainer items={sortedItems} onDeleteItem={handleDeleteItem}/>
    </div>
  );
}

export default App;
